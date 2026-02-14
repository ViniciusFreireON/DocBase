import express from 'express';
import cors from 'cors';
import bcrypt from 'bcryptjs';
import { PrismaClient } from '@prisma/client';
import { createToken, authMiddleware } from './auth.js';

const app = express();
const prisma = new PrismaClient();

const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:3000',
  'http://127.0.0.1:5173',
  'http://127.0.0.1:3000',
];
app.use(cors({
  origin: (origin, cb) => {
    if (!origin || allowedOrigins.includes(origin)) {
      cb(null, true);
    } else {
      cb(null, true); // em dev, permite outros
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(express.json({ limit: '10mb' }));

const PORT = process.env.PORT ?? 3001;

// Health check (útil para verificar se a API e o banco estão ok)
app.get('/api/health', async (_req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    res.json({ ok: true, db: 'connected' });
  } catch (err) {
    console.error('Health check falhou:', err);
    res.setHeader('Content-Type', 'application/json');
    res.status(503).json({ ok: false, db: 'error', message: err instanceof Error ? err.message : 'Erro ao conectar no banco' });
  }
});

// Garantir que erros sempre retornem JSON
function sendJsonError(res: express.Response, status: number, message: string) {
  res.setHeader('Content-Type', 'application/json');
  res.status(status).json({ error: message });
}

// Auth (público)
app.post('/api/auth/login', async (req, res) => {
  try {
    const body = req.body ?? {};
    const email = body.email;
    const password = body.password;
    if (!email || !password) {
      return sendJsonError(res, 400, 'E-mail e senha são obrigatórios.');
    }
    const user = await prisma.user.findUnique({
      where: { email: String(email).trim().toLowerCase() },
    });
    if (!user) {
      return sendJsonError(res, 401, 'E-mail ou senha incorretos.');
    }
    const ok = await bcrypt.compare(String(password), user.passwordHash);
    if (!ok) {
      return sendJsonError(res, 401, 'E-mail ou senha incorretos.');
    }
    const token = createToken({ userId: user.id, email: user.email });
    res.json({ token, user: { id: user.id, email: user.email, role: user.role } });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Erro desconhecido';
    console.error('Erro no login:', err);
    sendJsonError(res, 500, process.env.NODE_ENV === 'development' ? message : 'Erro interno. Verifique o banco de dados.');
  }
});

// Auth (protegido) - verificar sessão
app.get('/api/auth/me', authMiddleware, async (req, res) => {
  const { userId } = (req as express.Request & { user: { userId: string } }).user;
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { id: true, email: true, role: true },
  });
  if (!user) return res.status(404).json({ error: 'Usuário não encontrado' });
  res.json(user);
});

// Rotas protegidas - Pastas
app.get('/api/folders', authMiddleware, async (_req, res) => {
  const folders = await prisma.folder.findMany({
    orderBy: { name: 'asc' },
    include: { _count: { select: { notes: true, uploads: true, children: true } } },
  });
  res.json(folders);
});

app.post('/api/folders', authMiddleware, async (req, res) => {
  const { name, parentId } = req.body;
  if (!name || typeof name !== 'string' || !name.trim()) {
    return res.status(400).json({ error: 'Nome da pasta é obrigatório.' });
  }
  const folder = await prisma.folder.create({
    data: {
      name: String(name).trim(),
      parentId: parentId && String(parentId).trim() ? String(parentId).trim() : null,
    },
  });
  res.status(201).json(folder);
});

app.put('/api/folders/:id', authMiddleware, async (req, res) => {
  const { name, parentId } = req.body;
  const folder = await prisma.folder.update({
    where: { id: req.params.id },
    data: {
      ...(name !== undefined && { name: String(name).trim() }),
      ...(parentId !== undefined && { parentId: parentId ? String(parentId).trim() : null }),
    },
  });
  res.json(folder);
});

app.delete('/api/folders/:id', authMiddleware, async (req, res) => {
  await prisma.folder.delete({
    where: { id: req.params.id },
  });
  res.status(204).send();
});

// Rotas protegidas - Notes
app.get('/api/notes', authMiddleware, async (req, res) => {
  const folderId = req.query.folderId as string | undefined;
  const where = folderId === 'root' || folderId === ''
    ? { folderId: null }
    : folderId
      ? { folderId }
      : {};
  const notes = await prisma.note.findMany({
    where,
    orderBy: { updatedAt: 'desc' },
  });
  res.json(notes);
});

app.get('/api/notes/:id', authMiddleware, async (req, res) => {
  const note = await prisma.note.findUnique({
    where: { id: req.params.id },
  });
  if (!note) return res.status(404).json({ error: 'Nota não encontrada' });
  res.json(note);
});

app.post('/api/notes', authMiddleware, async (req, res) => {
  const { title = '', content = '', folderId } = req.body;
  const note = await prisma.note.create({
    data: {
      title: String(title),
      content: String(content),
      folderId: folderId && String(folderId).trim() ? String(folderId).trim() : null,
    },
  });
  res.status(201).json(note);
});

app.put('/api/notes/:id', authMiddleware, async (req, res) => {
  const { title, content, folderId } = req.body;
  const note = await prisma.note.update({
    where: { id: req.params.id },
    data: {
      ...(title !== undefined && { title: String(title) }),
      ...(content !== undefined && { content: String(content) }),
      ...(folderId !== undefined && { folderId: folderId ? String(folderId).trim() : null }),
    },
  });
  res.json(note);
});

app.delete('/api/notes/:id', authMiddleware, async (req, res) => {
  await prisma.note.delete({
    where: { id: req.params.id },
  });
  res.status(204).send();
});

// Rotas protegidas - Uploads
app.get('/api/uploads', authMiddleware, async (req, res) => {
  const folderId = req.query.folderId as string | undefined;
  const where = folderId === 'root' || folderId === ''
    ? { folderId: null }
    : folderId
      ? { folderId }
      : {};
  const uploads = await prisma.upload.findMany({
    where,
    orderBy: { uploadedAt: 'desc' },
  });
  res.json(uploads.map((u) => ({ ...u, size: Number(u.size) })));
});

app.get('/api/uploads/:id', authMiddleware, async (req, res) => {
  const upload = await prisma.upload.findUnique({
    where: { id: req.params.id },
  });
  if (!upload) return res.status(404).json({ error: 'Arquivo não encontrado' });
  res.json({ ...upload, size: Number(upload.size) });
});

app.post('/api/uploads', authMiddleware, async (req, res) => {
  const { name, type, content, size = 0, folderId } = req.body;
  const upload = await prisma.upload.create({
    data: {
      name: String(name),
      type: String(type),
      content: String(content),
      size: BigInt(size),
      folderId: folderId && String(folderId).trim() ? String(folderId).trim() : null,
    },
  });
  res.status(201).json({
    ...upload,
    size: Number(upload.size),
  });
});

app.put('/api/uploads/:id', authMiddleware, async (req, res) => {
  const { folderId } = req.body;
  const upload = await prisma.upload.update({
    where: { id: req.params.id },
    data: {
      ...(folderId !== undefined && { folderId: folderId ? String(folderId).trim() : null }),
    },
  });
  res.json({ ...upload, size: Number(upload.size) });
});

app.delete('/api/uploads/:id', authMiddleware, async (req, res) => {
  await prisma.upload.delete({
    where: { id: req.params.id },
  });
  res.status(204).send();
});

// Rotas protegidas - Document folders e Documents
app.get('/api/document-folders', authMiddleware, async (_req, res) => {
  const folders = await prisma.documentFolder.findMany({
    orderBy: { name: 'asc' },
    include: { _count: { select: { documents: true, children: true } } },
  });
  res.json(folders);
});

app.get('/api/documents', authMiddleware, async (req, res) => {
  const folderId = req.query.folderId as string | undefined;
  const where = folderId === 'root' || folderId === '' || !folderId
    ? {}
    : { folderId };
  const documents = await prisma.document.findMany({
    where,
    orderBy: { title: 'asc' },
  });
  res.json(documents);
});

// Handler global para erros não tratados (ex.: falha de conexão com o banco)
app.use((err: unknown, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  const message = err instanceof Error ? err.message : 'Erro interno do servidor';
  console.error('Erro não tratado:', err);
  res.setHeader('Content-Type', 'application/json');
  res.status(500).json({ error: process.env.NODE_ENV === 'development' ? message : 'Erro interno. Tente novamente.' });
});

app.listen(PORT, () => {
  console.log(`DocBase API rodando em http://localhost:${PORT}`);
});

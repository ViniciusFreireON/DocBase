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

// Auth (público)
app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: 'E-mail e senha são obrigatórios.' });
    }
    const user = await prisma.user.findUnique({
      where: { email: String(email).trim().toLowerCase() },
    });
    if (!user) {
      return res.status(401).json({ error: 'E-mail ou senha incorretos.' });
    }
    const ok = await bcrypt.compare(String(password), user.passwordHash);
    if (!ok) {
      return res.status(401).json({ error: 'E-mail ou senha incorretos.' });
    }
    const token = createToken({ userId: user.id, email: user.email });
    res.json({ token, user: { id: user.id, email: user.email, role: user.role } });
  } catch (err) {
    console.error('Erro no login:', err);
    res.status(500).json({ error: 'Erro interno. Verifique o banco de dados.' });
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

// Rotas protegidas - Notes
app.get('/api/notes', authMiddleware, async (_req, res) => {
  const notes = await prisma.note.findMany({
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
  const { title = '', content = '' } = req.body;
  const note = await prisma.note.create({
    data: { title: String(title), content: String(content) },
  });
  res.status(201).json(note);
});

app.put('/api/notes/:id', authMiddleware, async (req, res) => {
  const { title, content } = req.body;
  const note = await prisma.note.update({
    where: { id: req.params.id },
    data: {
      ...(title !== undefined && { title: String(title) }),
      ...(content !== undefined && { content: String(content) }),
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
app.get('/api/uploads', authMiddleware, async (_req, res) => {
  const uploads = await prisma.upload.findMany({
    orderBy: { uploadedAt: 'desc' },
  });
  res.json(uploads);
});

app.get('/api/uploads/:id', authMiddleware, async (req, res) => {
  const upload = await prisma.upload.findUnique({
    where: { id: req.params.id },
  });
  if (!upload) return res.status(404).json({ error: 'Arquivo não encontrado' });
  res.json(upload);
});

app.post('/api/uploads', authMiddleware, async (req, res) => {
  const { name, type, content, size = 0 } = req.body;
  const upload = await prisma.upload.create({
    data: {
      name: String(name),
      type: String(type),
      content: String(content),
      size: BigInt(size),
    },
  });
  res.status(201).json({
    ...upload,
    size: Number(upload.size),
  });
});

app.delete('/api/uploads/:id', authMiddleware, async (req, res) => {
  await prisma.upload.delete({
    where: { id: req.params.id },
  });
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`DocBase API rodando em http://localhost:${PORT}`);
});

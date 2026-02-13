import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json({ limit: '10mb' }));

const PORT = process.env.PORT ?? 3001;

// Notes
app.get('/api/notes', async (_req, res) => {
  const notes = await prisma.note.findMany({
    orderBy: { updatedAt: 'desc' },
  });
  res.json(notes);
});

app.get('/api/notes/:id', async (req, res) => {
  const note = await prisma.note.findUnique({
    where: { id: req.params.id },
  });
  if (!note) return res.status(404).json({ error: 'Nota não encontrada' });
  res.json(note);
});

app.post('/api/notes', async (req, res) => {
  const { title = '', content = '' } = req.body;
  const note = await prisma.note.create({
    data: { title: String(title), content: String(content) },
  });
  res.status(201).json(note);
});

app.put('/api/notes/:id', async (req, res) => {
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

app.delete('/api/notes/:id', async (req, res) => {
  await prisma.note.delete({
    where: { id: req.params.id },
  });
  res.status(204).send();
});

// Uploads
app.get('/api/uploads', async (_req, res) => {
  const uploads = await prisma.upload.findMany({
    orderBy: { uploadedAt: 'desc' },
  });
  res.json(uploads);
});

app.get('/api/uploads/:id', async (req, res) => {
  const upload = await prisma.upload.findUnique({
    where: { id: req.params.id },
  });
  if (!upload) return res.status(404).json({ error: 'Arquivo não encontrado' });
  res.json(upload);
});

app.post('/api/uploads', async (req, res) => {
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

app.delete('/api/uploads/:id', async (req, res) => {
  await prisma.upload.delete({
    where: { id: req.params.id },
  });
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`DocBase API rodando em http://localhost:${PORT}`);
});

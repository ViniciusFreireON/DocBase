import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { seedDocuments } from './seed-documents';

const prisma = new PrismaClient();

const TYPE_LABELS: Record<string, string> = {
  'html-css': 'Front-end',
  js: 'JavaScript',
};

const CATEGORY_LABELS: Record<string, string> = {
  slide: 'Slides',
  readme: 'README',
  relatorio: 'Relatório de correção',
};

async function main() {
  const adminEmail = 'admin@docbase.local';
  const adminPassword = 'admin123';
  const hash = await bcrypt.hash(adminPassword, 10);

  await prisma.user.upsert({
    where: { email: adminEmail },
    update: {},
    create: {
      email: adminEmail,
      passwordHash: hash,
      role: 'admin',
    },
  });

  console.log('Admin criado: admin@docbase.local / admin123');

  // Document folders: raiz Front-end e JavaScript; dentro de cada um, Slides, README, Relatório
  const existingFolders = await prisma.documentFolder.findMany();
  if (existingFolders.length > 0) {
    console.log('Pastas de documentos já existem, pulando seed de documentos.');
    return;
  }

  const frontEnd = await prisma.documentFolder.create({
    data: { name: TYPE_LABELS['html-css'], parentId: null },
  });
  const js = await prisma.documentFolder.create({
    data: { name: TYPE_LABELS['js'], parentId: null },
  });

  const frontEndSlides = await prisma.documentFolder.create({
    data: { name: CATEGORY_LABELS['slide'], parentId: frontEnd.id },
  });
  const frontEndReadme = await prisma.documentFolder.create({
    data: { name: CATEGORY_LABELS['readme'], parentId: frontEnd.id },
  });
  const frontEndRelatorio = await prisma.documentFolder.create({
    data: { name: CATEGORY_LABELS['relatorio'], parentId: frontEnd.id },
  });
  const jsSlides = await prisma.documentFolder.create({
    data: { name: CATEGORY_LABELS['slide'], parentId: js.id },
  });
  const jsReadme = await prisma.documentFolder.create({
    data: { name: CATEGORY_LABELS['readme'], parentId: js.id },
  });
  const jsRelatorio = await prisma.documentFolder.create({
    data: { name: CATEGORY_LABELS['relatorio'], parentId: js.id },
  });

  const folderByTypeCategory: Record<string, Record<string, string>> = {
    'html-css': { slide: frontEndSlides.id, readme: frontEndReadme.id, relatorio: frontEndRelatorio.id },
    js: { slide: jsSlides.id, readme: jsReadme.id, relatorio: jsRelatorio.id },
  };

  for (const doc of seedDocuments) {
    await prisma.document.create({
      data: {
        title: doc.title,
        desc: doc.desc,
        path: doc.path,
        type: doc.type,
        category: doc.category,
        folderId: folderByTypeCategory[doc.type][doc.category],
      },
    });
  }

  console.log(`${seedDocuments.length} documentos criados.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

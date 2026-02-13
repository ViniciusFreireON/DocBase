# DocBase Backend

API REST com Express e Prisma para o DocBase.

## Pré-requisitos

- Node.js 18+
- PostgreSQL rodando (Docker: `docker compose up -d`)

## Configuração

1. Copie `.env` (já existe com valores padrão) ou crie com:

```
DATABASE_URL="postgresql://docbase:docbase@localhost:15432/docbase"
```

2. Instale dependências e gere o cliente Prisma:

```bash
npm install
npm run db:generate
```

3. Sincronize o schema (se o banco já existir, use `db:push`):

```bash
npm run db:push
```

## Comandos

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia a API em modo desenvolvimento |
| `npm run build` | Compila TypeScript |
| `npm run start` | Inicia a API (após build) |
| `npm run db:generate` | Gera o Prisma Client |
| `npm run db:push` | Sincroniza schema com o banco |
| `npm run db:migrate` | Cria e aplica migrations |
| `npm run db:studio` | Abre o Prisma Studio (interface visual) |

## Endpoints

### Notas
- `GET /api/notes` - Lista todas
- `GET /api/notes/:id` - Busca por ID
- `POST /api/notes` - Cria (body: `{ title, content }`)
- `PUT /api/notes/:id` - Atualiza
- `DELETE /api/notes/:id` - Remove

### Uploads
- `GET /api/uploads` - Lista todos
- `GET /api/uploads/:id` - Busca por ID
- `POST /api/uploads` - Cria (body: `{ name, type, content, size }`)
- `DELETE /api/uploads/:id` - Remove

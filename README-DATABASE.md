# DocBase - Banco de dados

PostgreSQL rodando em Docker para o projeto DocBase.

## Iniciar

```bash
docker compose up -d
```

## Parar

```bash
docker compose down
```

## Conexão

- **Host:** localhost
- **Porta:** 15432 (mapeada da 5432 interna)
- **Usuário:** docbase
- **Senha:** docbase
- **Banco:** docbase

**URL de conexão:**
```
postgresql://docbase:docbase@localhost:15432/docbase
```

## Tabelas

- **notes** – Notas (id, title, content, created_at, updated_at)
- **uploads** – Arquivos enviados (id, name, type, content, size, uploaded_at)

## Se a porta 15432 estiver em uso

Edite `docker-compose.yml` e altere a porta em `ports`, por exemplo:
```yaml
ports:
  - "15532:5432"
```

Atualize também o `.env` ou `DATABASE_URL` com a nova porta.

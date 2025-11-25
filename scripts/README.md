# Scripts de Migração - Strapi 5 para Strapi 4

## Problema

Ao migrar do Strapi 5 para o Strapi 4, alguns índices do banco de dados PostgreSQL podem causar conflitos, resultando no erro:

```
error: create index "articles_entity_fk" on "public"."articles_components" ("entity_id") - relation "articles_entity_fk" already exists
```

## Soluções

### Opção 1: Limpar o banco de dados completamente (RECOMENDADO para desenvolvimento)

**⚠️ ATENÇÃO: Isso apagará TODOS os dados do banco!**

Execute no PostgreSQL:

```bash
psql -U seu_usuario -d seu_banco_de_dados -f scripts/reset-database.sql
```

Ou conecte no banco e execute manualmente:

```sql
DROP SCHEMA public CASCADE;
CREATE SCHEMA public;
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO public;
```

### Opção 2: Remover apenas os índices problemáticos (preserva dados)

Execute no PostgreSQL:

```bash
psql -U seu_usuario -d seu_banco_de_dados -f scripts/fix-indexes.sql
```

Ou conecte no banco e execute manualmente:

```sql
DROP INDEX IF EXISTS articles_entity_fk CASCADE;
DROP INDEX IF EXISTS articles_components_entity_fk CASCADE;
```

## Como executar

1. **Localize as credenciais do banco de dados**
   - Procure por variáveis de ambiente com `DATABASE_*` no seu sistema
   - Ou verifique se existe um arquivo `.env` na raiz do projeto

2. **Conecte ao banco de dados**
   ```bash
   psql -h localhost -U strapi -d strapi
   ```

3. **Execute um dos scripts acima**

4. **Inicie o Strapi novamente**
   ```bash
   yarn develop
   ```

## Alternativa rápida via linha de comando

Se você souber as credenciais do banco, pode executar direto:

```bash
# Para limpar tudo
psql postgresql://usuario:senha@host:5432/banco -c "DROP SCHEMA public CASCADE; CREATE SCHEMA public; GRANT ALL ON SCHEMA public TO postgres; GRANT ALL ON SCHEMA public TO public;"

# Ou apenas remover o índice problemático
psql postgresql://usuario:senha@host:5432/banco -c "DROP INDEX IF EXISTS articles_entity_fk CASCADE;"
```

## Precisa descobrir as credenciais?

Execute este comando para ver as variáveis de ambiente do Strapi:

```bash
env | grep DATABASE
```


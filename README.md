# GAD Strapi

Projeto Strapi com PostgreSQL usando Docker Compose (apenas para o banco de dados).

## 📋 Pré-requisitos

- **Node.js** 18+
- **npm** ou **yarn**
- **Docker** (apenas para PostgreSQL)
- **Docker Compose**

## 🚀 Instalação e Execução

### 1. Clone o repositório
```bash
git clone <url-do-repositorio>
cd empathy-gad-strapi
```

### 2. Configure as variáveis de ambiente
```bash
cp env.example .env
```

Edite o arquivo `.env` com suas configurações:
```env
# Database
DATABASE_CLIENT=postgres
DATABASE_HOST=postgres
DATABASE_PORT=5432
DATABASE_NAME=strapi
DATABASE_USERNAME=strapi
DATABASE_PASSWORD=strapi123

# Strapi Configuration
JWT_SECRET=seu-jwt-secret-aqui
ADMIN_JWT_SECRET=seu-admin-jwt-secret-aqui
APP_KEYS=suas-app-keys-aqui
API_TOKEN_SALT=seu-api-token-salt-aqui
TRANSFER_TOKEN_SALT=seu-transfer-token-salt-aqui

# Server Configuration
HOST=0.0.0.0
PORT=1337
NODE_ENV=development
```

### 3. Instale as dependências
```bash
yarn install
# ou
npm install
```

### 4. Inicie o PostgreSQL com Docker
```bash
docker-compose up -d
```

### 5. Inicie o Strapi
```bash
yarn develop
# ou
npm run develop
```

## 🌐 Acesso

- **Strapi Admin**: http://localhost:1337/admin
- **Strapi API**: http://localhost:1337/api
- **PostgreSQL**: localhost:5432

## 📊 Comandos Úteis

### Docker
```bash
# Parar o PostgreSQL
docker-compose down

# Ver logs do PostgreSQL
docker-compose logs -f

# Reiniciar o PostgreSQL
docker-compose restart
```

### Strapi
```bash
# Modo desenvolvimento (com hot-reload)
yarn develop

# Modo produção
yarn start

# Build do projeto
yarn build

# Console do Strapi
yarn console
```

## 🗂️ Estrutura do Projeto

```
empathy-gad-strapi/
├── config/                 # Configurações do Strapi
│   ├── admin.ts           # Configuração do painel admin
│   ├── database.ts        # Configuração do banco
│   ├── middlewares.ts     # Middlewares
│   ├── plugins.ts         # Plugins
│   └── server.ts          # Configuração do servidor
├── src/                   # Código fonte
│   ├── api/              # APIs e Content Types
│   ├── components/       # Componentes reutilizáveis
│   └── extensions/       # Extensões customizadas
├── public/               # Arquivos públicos
├── docker-compose.yml    # Configuração do PostgreSQL
├── package.json         # Dependências
└── env.example          # Exemplo de variáveis de ambiente
```

## 🗄️ Configuração do Banco de Dados

O PostgreSQL está configurado com:
- **Database**: `strapi`
- **User**: `strapi`
- **Password**: `strapi123`
- **Port**: `5432`

## 🔧 Primeira Execução

Na primeira execução, o Strapi irá:
1. Conectar ao banco PostgreSQL
2. Criar a estrutura do banco de dados
3. Solicitar a criação do usuário administrador
4. Configurar as permissões iniciais

## 🛠️ Desenvolvimento

### Hot Reload
O Strapi em modo desenvolvimento (`yarn develop`) possui hot-reload automático. As mudanças nos arquivos serão refletidas automaticamente.

### Logs
```bash
# Ver logs do Strapi
yarn develop

# Ver logs do PostgreSQL
docker-compose logs -f postgres
```

### Backup do Banco
```bash
# Fazer backup
docker-compose exec postgres pg_dump -U strapi strapi > backup.sql

# Restaurar backup
docker-compose exec -T postgres psql -U strapi strapi < backup.sql
```

## 🚨 Solução de Problemas

### Erro de Conexão com o Banco
```bash
# Verificar se o PostgreSQL está rodando
docker-compose ps

# Reiniciar o PostgreSQL
docker-compose restart postgres
```

### Erro de Dependências
```bash
# Limpar cache e reinstalar
rm -rf node_modules yarn.lock
yarn install
```

### Porta já em uso
```bash
# Verificar processos na porta 1337
lsof -i :1337

# Matar processo se necessário
kill -9 <PID>
```

## 📝 Notas Importantes

- O arquivo `.env` contém informações sensíveis e não deve ser commitado
- O banco de dados PostgreSQL persiste os dados no volume Docker
- Para produção, altere todas as senhas e secrets no arquivo `.env`
- O Strapi está configurado para rodar na porta 1337

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.
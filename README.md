# GAD Strapi CMS

Projeto Strapi CMS com PostgreSQL usando Docker Compose (apenas para o banco de dados).

## 📋 Pré-requisitos

- **Node.js** 18+ (até 22.x.x)
- **npm** ou **yarn**
- **Docker** (apenas para PostgreSQL)
- **Docker Compose**

## 🚀 Instalação e Execução

### 1. Clone o repositório
```bash
git clone <url-do-repositorio>
cd strapi-cms
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

# Seed de dados de exemplo
yarn seed:example
```

## 🗂️ Estrutura do Projeto

```
strapi-cms/
├── config/                 # Configurações do Strapi
│   ├── admin.ts           # Configuração do painel admin
│   ├── api.ts             # Configuração da API REST
│   ├── database.ts        # Configuração do banco
│   ├── middlewares.ts     # Middlewares
│   ├── plugins.ts         # Plugins
│   └── server.ts          # Configuração do servidor
├── src/                   # Código fonte
│   ├── api/              # APIs e Content Types
│   ├── components/       # Componentes reutilizáveis
│   ├── extensions/       # Extensões customizadas
│   ├── plugins/          # Plugins customizados
│   └── utils/            # Utilitários
├── public/               # Arquivos públicos
├── database/             # Dados do banco (SQLite - desenvolvimento)
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

---

# 🎯 Funcionalidades do Strapi

## 📦 Plugins Instalados

### 1. **Plugin i18n (Internacionalização)**
- **Status**: Habilitado
- **Idiomas disponíveis**: Português (pt-BR), Inglês (en), Espanhol (es)
- **Idioma padrão**: Português (pt-BR)
- **Funcionalidade**: Permite criar conteúdo multilíngue em todas as collections

### 2. **Plugin Users & Permissions**
- **Status**: Habilitado (padrão)
- **Funcionalidade**: Sistema de autenticação e autorização de usuários
- Permite gerenciar permissões de acesso à API

### 3. **Plugin CSV Export** (Customizado)
- **Status**: Habilitado
- **Localização**: `./src/plugins/strapi-plugin-csv-export`
- **Funcionalidade**: Exportação de dados para CSV

### 4. **Plugin Menus**
- **Status**: Instalado
- **Funcionalidade**: Gerenciamento de menus do site

## 🌍 Internacionalização (i18n)

Todas as collections principais suportam múltiplos idiomas:
- **pt-BR** (Português - padrão)
- **en** (Inglês)
- **es** (Espanhol)

Os campos localizáveis são marcados com `localized: true` no schema.

## 📄 Content Types (Collections)

O projeto possui **25 Content Types** organizados em:

### Collection Types (Múltiplos itens)
- Articles (Artigos)
- Authors (Autores)
- Case Studies (Estudos de Caso)
- Contact Forms (Formulários de Contato)
- Contact Form Origins Insights
- Contents (Conteúdos)
- Gad Insights
- News (Notícias)
- Oh My GAD
- Pages (Páginas)
- Segment Tags (Tags de Segmento)
- Service Tags (Tags de Serviço)
- Transforming GAD
- Transforming GAD Appointments
- Whistleblower Channel Forms

### Single Types (Item único)
- Footer (Rodapé)
- Global (Configurações Globais)
- Home (Página Inicial)
- Page About (Página Sobre)
- Page Case (Página de Cases)
- Page Contact (Página de Contato)
- Page Content (Página de Conteúdo)
- Page History and Legacy (Página de História e Legado)
- Privacy Policy (Política de Privacidade)
- Whistleblower Channel (Canal de Denúncias)

---

# 📚 Documentação das Collections

## Collection Types

### 1. **Article** (Artigos)
**Tipo**: Collection Type
**Descrição**: Criar conteúdo de artigos dinâmicos com blocos de conteúdo
**Draft & Publish**: ✅ Sim
**i18n**: ✅ Sim

#### Campos:
| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `title` | string | ✅ | Título do artigo |
| `description` | text | ❌ | Descrição do artigo |
| `slug` | uid | ❌ | Slug único (gerado a partir do título) |
| `publishedAt` | datetime | ❌ | Data de publicação |
| `cover` | media (images) | ❌ | Imagem de capa |
| `author` | relation (manyToOne) | ❌ | Relação com Author |
| `featured` | boolean | ❌ | Artigo em destaque (padrão: false) |
| `contentBlocks` | dynamiczone | ❌ | Blocos de conteúdo dinâmicos |
| `seo` | component (shared.seo) | ❌ | Componente de SEO |

**Componentes disponíveis em contentBlocks:**
- `article.hero-section`
- `article.text-block`
- `article.full-width-media`
- `article.two-images`
- `article.text-image`
- `article.video`
- `article.gallery`
- `article.quote`
- `article.grid-image`
- `article.image-grid`
- `article.two-column`
- `article.column-content`
- `article.rich-text`

---

### 2. **Author** (Autores)
**Tipo**: Collection Type
**Descrição**: Create authors for your content
**Draft & Publish**: ✅ Sim
**i18n**: ✅ Sim

#### Campos:
| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `name` | string | ✅ | Nome do autor |
| `slug` | uid | ❌ | Slug único (gerado a partir do nome) |
| `role` | string | ✅ | Cargo/função do autor |
| `avatar` | media (images) | ❌ | Foto do autor |
| `email` | email | ✅ | Email do autor |
| `articles` | relation (oneToMany) | ❌ | Artigos relacionados (inverso) |

---

### 3. **Case Study** (Estudos de Caso)
**Tipo**: Collection Type
**Descrição**: Coleção de estudos de caso com blocos de conteúdo dinâmico
**Draft & Publish**: ✅ Sim
**i18n**: ✅ Sim

#### Campos:
| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `title` | string | ✅ | Título do case |
| `slug` | uid | ❌ | Slug único (gerado a partir do título) |
| `description` | text | ❌ | Descrição do case |
| `thumb` | media (images, videos) | ❌ | Miniatura |
| `imageFeatured` | media (images, videos) | ❌ | Imagem em destaque |
| `type` | enumeration | ❌ | Tipo: "large" ou "slim" |
| `order` | integer | ❌ | Ordem de exibição |
| `featured` | boolean | ❌ | Case em destaque (padrão: false) |
| `segmentTags` | relation (manyToMany) | ❌ | Tags de segmento |
| `serviceTags` | relation (manyToMany) | ❌ | Tags de serviço |
| `contentBlocks` | dynamiczone | ❌ | Blocos de conteúdo dinâmicos |

**Componentes disponíveis em contentBlocks:**
- `case-study.hero-section`
- `case-study.text-block`
- `case-study.full-width-media`
- `case-study.two-images`
- `case-study.text-image`
- `case-study.video`
- `case-study.gallery`
- `case-study.quote`
- `case-study.grid-image`
- `case-study.image-grid`
- `case-study.two-column`
- `case-study.column-content`

---

### 4. **Contact Form** (Formulário de Contato)
**Tipo**: Collection Type
**Descrição**: Formulários de contato submetidos
**Draft & Publish**: ❌ Não
**i18n**: ✅ Sim

#### Campos:
| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `name` | string (max: 255) | ✅ | Nome do contato |
| `company` | string (max: 255) | ❌ | Empresa |
| `position` | string (max: 255) | ❌ | Cargo |
| `email` | email (max: 255) | ✅ | Email |
| `phone` | string (max: 20) | ✅ | Telefone |
| `subject` | enumeration | ✅ | Assunto: "consultoria", "desenvolvimento", "marketing", "outros" |
| `employees` | enumeration | ❌ | Número de funcionários: "range-1-10", "range-11-50", "range-51-200", "range-201-500", "range-500-plus" |
| `message` | text | ❌ | Mensagem |
| `agreeToTerms` | boolean | ✅ | Aceita os termos (padrão: false) |
| `ipAddress` | string (max: 45) | ❌ | Endereço IP |
| `userAgent` | text | ❌ | User Agent do navegador |
| `submittedAt` | datetime | ✅ | Data de submissão |

---

### 5. **Contact Form Origins Insight**
**Tipo**: Collection Type
**Descrição**: Formulários de contato da seção Origins Insight
**Draft & Publish**: ❌ Não
**i18n**: ✅ Sim

#### Campos:
| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `name` | string | ❌ | Nome |
| `email` | email | ❌ | Email |
| `company` | text | ❌ | Empresa |
| `position` | string | ❌ | Cargo |
| `phone` | string | ❌ | Telefone |
| `privacyPolicy` | boolean | ❌ | Aceita política de privacidade |

---

### 6. **Content** (Conteúdos)
**Tipo**: Collection Type
**Descrição**: Conteúdos diversos
**Draft & Publish**: ✅ Sim
**i18n**: ✅ Sim

#### Campos:
| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `title` | string | ❌ | Título |
| `slug` | uid | ❌ | Slug único (gerado a partir do título) |
| `type` | enumeration | ❌ | Tipo: "article", "external", "insight" |
| `excerpt` | text | ❌ | Resumo |
| `body` | richtext | ❌ | Corpo do conteúdo |
| `media` | media | ❌ | Mídia |
| `external_link` | string | ❌ | Link externo |
| `download_pdf` | media | ❌ | PDF para download |
| `chapters` | component (shared.chapter) | ❌ | Capítulos (repetível) |

---

### 7. **Gad Insight**
**Tipo**: Collection Type
**Descrição**: Insights GAD
**Draft & Publish**: ✅ Sim
**i18n**: ✅ Sim

#### Campos:
| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `title` | string | ✅ | Título |
| `subTitle` | string | ✅ | Subtítulo |
| `slug` | uid | ❌ | Slug único (gerado a partir do título) |
| `paperLink` | string | ❌ | Link do paper |
| `cover` | media (images) | ❌ | Imagem de capa |
| `featured` | boolean | ❌ | Em destaque (padrão: false) |
| `review` | component (gad-insights.review) | ❌ | Revisão |
| `contentBlocks` | dynamiczone | ❌ | Blocos de conteúdo dinâmicos |
| `seo` | component (shared.seo) | ❌ | Componente de SEO |

**Componentes disponíveis em contentBlocks:**
- `gad-insights.insights`
- `gad-insights.slider`
- `gad-insights.quote`

---

### 8. **New** (Notícias)
**Tipo**: Collection Type
**Descrição**: Notícias
**Draft & Publish**: ✅ Sim
**i18n**: ✅ Sim

#### Campos:
| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `title` | string | ✅ | Título da notícia |
| `link` | string | ❌ | Link da notícia |
| `cover` | media (images) | ❌ | Imagem de capa |
| `featured` | boolean | ❌ | Notícia em destaque (padrão: false) |

---

### 9. **Oh My GAD**
**Tipo**: Collection Type
**Descrição**: Conteúdos Oh My GAD
**Draft & Publish**: ✅ Sim
**i18n**: ✅ Sim

#### Campos:
| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `title` | string | ✅ | Título |
| `description` | text | ❌ | Descrição |
| `link` | string | ❌ | Link |
| `cover` | media (images) | ❌ | Imagem de capa |
| `featured` | boolean | ❌ | Em destaque (padrão: false) |

---

### 10. **Page** (Páginas)
**Tipo**: Collection Type
**Descrição**: Páginas dinâmicas
**Draft & Publish**: ✅ Sim
**i18n**: ✅ Sim

#### Campos:
| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `title` | string | ❌ | Título da página |
| `slug` | uid | ❌ | Slug único (gerado a partir do título) |
| `content_blocks` | dynamiczone | ❌ | Blocos de conteúdo dinâmicos |

**Componentes disponíveis em content_blocks:**
- `shared.hero-banner`
- `shared.cta-section`
- `shared.case-grid`
- `shared.awards-and-clients`
- `shared.team-section`
- `shared.form-block`
- `shared.video-block`
- `shared.rich-text`
- `shared.quote`
- `shared.media`
- `shared.slider`
- `shared.heading`
- `shared.links`
- `shared.client`
- `shared.award`
- `shared.chapter`
- `shared.list-phone`
- `shared.form-type`
- `shared.seo`
- E todos os componentes de `article.*` e `case-study.*`
- E componentes de `home.*` e `privacy.*`

---

### 11. **Segment Tag** (Tags de Segmento)
**Tipo**: Collection Type
**Descrição**: Tags para segmentação de conteúdo
**Draft & Publish**: ❌ Não
**i18n**: ✅ Sim

#### Campos:
| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `name` | string | ✅ | Nome da tag |
| `slug` | uid | ❌ | Slug único (gerado a partir do nome) |
| `description` | text | ❌ | Descrição da tag |

---

### 12. **Service Tag** (Tags de Serviço)
**Tipo**: Collection Type
**Descrição**: Tags para categorização de serviços
**Draft & Publish**: ❌ Não
**i18n**: ✅ Sim

#### Campos:
| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `name` | string | ✅ | Nome da tag |
| `slug` | uid | ❌ | Slug único (gerado a partir do nome) |
| `description` | text | ❌ | Descrição da tag |
| `case_segment_tags` | relation (oneToMany) | ❌ | Relação com Segment Tags |

---

### 13. **Transforming GAD**
**Tipo**: Collection Type
**Descrição**: Conteúdos Transforming GAD
**Draft & Publish**: ✅ Sim
**i18n**: ✅ Sim

#### Campos:
| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `title` | string | ✅ | Título |
| `subTitle` | string | ❌ | Subtítulo |
| `description` | text | ❌ | Descrição |
| `slug` | uid | ❌ | Slug único (gerado a partir do título) |
| `logo` | media (images, videos) | ❌ | Logo |
| `theme` | media (images, videos) | ❌ | Tema |
| `cover` | media (images) | ❌ | Imagem de capa |
| `author` | relation (manyToOne) | ❌ | Relação com Author |
| `featured` | boolean | ❌ | Em destaque (padrão: false) |
| `transforming_gad_appointments` | relation (oneToMany) | ❌ | Agendamentos relacionados |
| `seo` | component (shared.seo) | ❌ | Componente de SEO |

---

### 14. **Transforming GAD Appointment**
**Tipo**: Collection Type
**Descrição**: Agendamentos Transforming GAD
**Draft & Publish**: ✅ Sim
**i18n**: ✅ Sim

#### Campos:
| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `title` | string | ❌ | Título |
| `appointment` | string | ❌ | Agendamento |
| `date` | datetime | ❌ | Data |
| `jobInterview` | string | ❌ | Entrevista de trabalho |
| `media` | media (images) | ❌ | Mídia |
| `SocialLinks` | component (shared.social-links) | ❌ | Links sociais (repetível) |
| `transforming_gad` | relation (manyToOne) | ❌ | Relação com Transforming GAD |

---

### 15. **Whistleblower Channel Form**
**Tipo**: Collection Type
**Descrição**: Formulários do canal de denúncias
**Draft & Publish**: ❌ Não
**i18n**: ✅ Sim

#### Campos:
| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `description` | text | ❌ | Descrição |
| `attachment` | media (images, files, videos, audios) | ❌ | Anexo |
| `email` | email | ❌ | Email |
| `wantsReturn` | boolean | ❌ | Deseja retorno |

---

## Single Types

### 16. **Footer** (Rodapé)
**Tipo**: Single Type
**Descrição**: Configurações do rodapé do site
**Draft & Publish**: ❌ Não
**i18n**: ✅ Sim

#### Campos:
| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `Links` | component (shared.links) | ❌ | Links (repetível) |
| `description` | text | ❌ | Descrição |
| `email` | string | ❌ | Email |
| `otherChannels` | string | ❌ | Outros canais |

---

### 17. **Global** (Configurações Globais)
**Tipo**: Single Type
**Descrição**: Define global settings
**Draft & Publish**: ❌ Não
**i18n**: ✅ Sim

#### Campos:
| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `siteName` | string | ✅ | Nome do site |
| `favicon` | media (images, files, videos) | ❌ | Favicon |
| `siteDescription` | text | ✅ | Descrição do site |
| `defaultSeo` | component (shared.seo) | ❌ | SEO padrão |

---

### 18. **Home** (Página Inicial)
**Tipo**: Single Type
**Descrição**: Conteúdo da página inicial
**Draft & Publish**: ✅ Sim
**i18n**: ✅ Sim

#### Campos:
| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `SliderHome` | component (home.slider) | ❌ | Slider da home (repetível) |
| `Cases` | component (home.cases) | ❌ | Seção de cases |
| `CallToAction` | component (home.call-to-action) | ❌ | Call to action |

---

### 19. **Page About** (Página Sobre)
**Tipo**: Single Type
**Descrição**: Conteúdo da página sobre
**Draft & Publish**: ✅ Sim
**i18n**: ✅ Sim

#### Campos:
| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `title` | string | ❌ | Título |
| `slug` | uid | ❌ | Slug único (gerado a partir do título) |
| `Heading` | component (shared.heading) | ❌ | Cabeçalho (repetível) |
| `CallToAction` | component (shared.call-to-action) | ❌ | Call to action |
| `Awards` | component (shared.awards) | ❌ | Prêmios |
| `Clients` | component (shared.clients) | ❌ | Clientes |
| `Service` | component (shared.service) | ❌ | Serviços |
| `Approach` | component (shared.approach) | ❌ | Abordagem |

---

### 20. **Page Case** (Página de Cases)
**Tipo**: Single Type
**Descrição**: Conteúdo da página de cases
**Draft & Publish**: ✅ Sim
**i18n**: ✅ Sim

#### Campos:
| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `title` | string | ❌ | Título |
| `slug` | uid | ❌ | Slug único (gerado a partir do título) |
| `SEO` | component (shared.seo) | ❌ | Componente de SEO |
| `Heading` | component (shared.heading) | ❌ | Cabeçalho |

---

### 21. **Page Contact** (Página de Contato)
**Tipo**: Single Type
**Descrição**: Conteúdo da página de contato
**Draft & Publish**: ✅ Sim
**i18n**: ✅ Sim

#### Campos:
| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `title` | string | ❌ | Título |
| `slug` | uid | ❌ | Slug único (gerado a partir do título) |
| `address` | text | ❌ | Endereço |
| `Phones` | component (shared.list-phone) | ❌ | Lista de telefones (repetível) |
| `Links` | component (shared.links) | ❌ | Links (repetível) |
| `SEO` | component (shared.seo) | ❌ | Componente de SEO |

---

### 22. **Page Content** (Página de Conteúdo)
**Tipo**: Single Type
**Descrição**: Página de conteúdo
**Draft & Publish**: ✅ Sim
**i18n**: ✅ Sim

#### Campos:
| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `articles` | relation (oneToMany) | ❌ | Artigos relacionados |
| `oh_my_gads` | relation (oneToMany) | ❌ | Oh My GAD relacionados |
| `news` | relation (oneToMany) | ❌ | Notícias relacionadas |
| `transforming_gads` | relation (oneToMany) | ❌ | Transforming GAD relacionados |
| `gad_insights` | relation (oneToMany) | ❌ | Gad Insights relacionados |

---

### 23. **Page History and Legacy** (Página de História e Legado)
**Tipo**: Single Type
**Descrição**: Conteúdo da página de história e legado
**Draft & Publish**: ✅ Sim
**i18n**: ✅ Sim

#### Campos:
| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `title` | string | ❌ | Título |
| `slug` | uid | ❌ | Slug único (gerado a partir do título) |
| `Heading` | component (shared.heading-signature) | ❌ | Cabeçalho |
| `contentBlocks` | dynamiczone | ❌ | Blocos de conteúdo dinâmicos |

**Componentes disponíveis em contentBlocks:**
- `history-legacy.media-block`
- `history-legacy.about`
- `case-study.grid-image`
- `case-study.full-width-media`
- `article.two-images`
- `article.two-column`
- `article.text-image`
- `history-legacy.about-two-images`
- `case-study.image-grid`
- `case-study.hero-section`
- `case-study.gallery`

---

### 24. **Privacy Policy** (Política de Privacidade)
**Tipo**: Single Type
**Descrição**: Conteúdo dinâmico da página de Política de Privacidade
**Draft & Publish**: ✅ Sim
**i18n**: ✅ Sim

#### Campos:
| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `title` | string | ❌ | Título (padrão: "Política de Privacidade") |
| `slug` | uid | ❌ | Slug único (gerado a partir do título) |
| `sections` | dynamiczone | ❌ | Seções dinâmicas |
| `SEO` | component (shared.seo) | ❌ | Componente de SEO |

**Componentes disponíveis em sections:**
- `privacy.section-text`

---

### 25. **Whistleblower Channel** (Canal de Denúncias)
**Tipo**: Single Type
**Descrição**: Conteúdo da página do canal de denúncias
**Draft & Publish**: ✅ Sim
**i18n**: ✅ Sim

#### Campos:
| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `title` | string | ❌ | Título |
| `slug` | uid | ❌ | Slug único (gerado a partir do título) |
| `Heading` | component (shared.heading) | ❌ | Cabeçalho |
| `description` | richtext | ❌ | Descrição |
| `FormType` | component (shared.form-type) | ❌ | Tipos de formulário (repetível) |
| `SEO` | component (shared.seo) | ❌ | Componente de SEO (repetível) |

---

## 🔗 Relações entre Collections

### Relações Many-to-One (ManyToOne)
- **Article** → **Author** (muitos artigos para um autor)
- **Transforming GAD** → **Author** (muitos transforming GAD para um autor)
- **Transforming GAD Appointment** → **Transforming GAD** (muitos agendamentos para um transforming GAD)

### Relações One-to-Many (OneToMany)
- **Author** → **Article** (um autor para muitos artigos)
- **Transforming GAD** → **Transforming GAD Appointment** (um transforming GAD para muitos agendamentos)
- **Service Tag** → **Segment Tag** (uma tag de serviço para muitas tags de segmento)
- **Page Content** → **Article**, **Oh My GAD**, **New**, **Transforming GAD**, **Gad Insight**

### Relações Many-to-Many (ManyToMany)
- **Case Study** ↔ **Segment Tag** (muitos cases para muitas tags de segmento)
- **Case Study** ↔ **Service Tag** (muitos cases para muitas tags de serviço)

---

## 🧩 Componentes Reutilizáveis

O projeto possui uma extensa biblioteca de componentes reutilizáveis organizados por categoria:

### Componentes Article (`article.*`)
- `hero-section`, `text-block`, `full-width-media`, `two-images`, `text-image`, `video`, `gallery`, `quote`, `grid-image`, `image-grid`, `two-column`, `column-content`, `column-item`, `rich-text`

### Componentes Case Study (`case-study.*`)
- `hero-section`, `text-block`, `full-width-media`, `two-images`, `text-image`, `video`, `gallery`, `quote`, `grid-image`, `image-grid`, `two-column`, `column-content`

### Componentes GAD Insights (`gad-insights.*`)
- `insights`, `slider`, `quote`, `review`, `content-slider`

### Componentes History Legacy (`history-legacy.*`)
- `about`, `about-two-images`, `media-block`

### Componentes Home (`home.*`)
- `slider`, `cases`, `call-to-action`, `sub-title`

### Componentes Privacy (`privacy.*`)
- `section-text`, `section-list`, `list-item`

### Componentes Shared (`shared.*`)
- `seo`, `heading`, `heading-signature`, `links`, `social-links`, `chapter`, `list-phone`, `form-type`, `call-to-action`, `awards`, `clients`, `service`, `approach`, `hero-banner`, `cta-section`, `case-grid`, `awards-and-clients`, `team-section`, `form-block`, `video-block`, `rich-text`, `quote`, `media`, `slider`, `client`, `award`

---

## 🔐 API REST

### Configuração da API
- **Default Limit**: 25 itens por página
- **Max Limit**: 100 itens por página
- **With Count**: Habilitado (retorna contagem total)

### Endpoints Disponíveis

Todas as collections expõem endpoints REST automáticos:

```
GET    /api/{collection-name}           # Listar todos
GET    /api/{collection-name}/:id       # Buscar por ID
POST   /api/{collection-name}           # Criar novo
PUT    /api/{collection-name}/:id       # Atualizar
DELETE /api/{collection-name}/:id       # Deletar
```

**Exemplos:**
- `GET /api/articles` - Listar artigos
- `GET /api/articles/1` - Buscar artigo por ID
- `GET /api/case-studies?populate=*` - Listar cases com relacionamentos
- `GET /api/authors?filters[email][$eq]=author@example.com` - Filtrar autores

### Filtros e População

O Strapi suporta filtros avançados e população de relacionamentos:

```javascript
// Filtrar por campo
GET /api/articles?filters[featured][$eq]=true

// Ordenar
GET /api/articles?sort=publishedAt:desc

// Paginação
GET /api/articles?pagination[page]=1&pagination[pageSize]=10

// Popular relacionamentos
GET /api/articles?populate=author,cover

// Filtrar com operadores
GET /api/articles?filters[title][$contains]=strapi
```

---

## 🌐 Internacionalização (i18n)

### Como usar

Todas as collections principais suportam múltiplos idiomas. Para acessar conteúdo em um idioma específico:

```javascript
// Português (padrão)
GET /api/articles?locale=pt-BR

// Inglês
GET /api/articles?locale=en

// Espanhol
GET /api/articles?locale=es

// Todos os idiomas
GET /api/articles?locale=all
```

### Campos Localizáveis

Campos marcados com `localized: true` no schema podem ter valores diferentes por idioma. Campos de sistema (como `createdAt`, `updatedAt`) não são localizáveis.

---

## 📊 Draft & Publish

Collections com `draftAndPublish: true` permitem:
- Salvar rascunhos sem publicar
- Agendar publicação
- Controlar visibilidade do conteúdo

Para acessar apenas conteúdo publicado:
```javascript
GET /api/articles?publicationState=live
```

Para acessar rascunhos (requer autenticação):
```javascript
GET /api/articles?publicationState=preview
```

---

## 🔒 Permissões e Autenticação

### Roles e Permissions

O plugin Users & Permissions permite configurar:
- **Roles**: Funções de usuário (Admin, Editor, etc.)
- **Permissions**: Permissões por endpoint e ação
- **Policies**: Políticas customizadas de acesso

### Autenticação

```javascript
// Login
POST /api/auth/local
{
  "identifier": "user@example.com",
  "password": "password123"
}

// Registrar
POST /api/auth/local/register
{
  "username": "user",
  "email": "user@example.com",
  "password": "password123"
}
```

---

## 🚀 Deploy

### Build para Produção

```bash
# Build do projeto
yarn build

# Iniciar em produção
yarn start
```

### Variáveis de Ambiente para Produção

Certifique-se de configurar todas as variáveis de ambiente necessárias:
- `NODE_ENV=production`
- Secrets seguros para `JWT_SECRET`, `ADMIN_JWT_SECRET`, `APP_KEYS`
- Configurações de banco de dados de produção
- URLs e domínios corretos

---

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

## 📞 Suporte

Para dúvidas ou problemas:
1. Verifique a [documentação oficial do Strapi](https://docs.strapi.io)
2. Consulte os logs do servidor
3. Abra uma issue no repositório

---

**Última atualização**: 2024

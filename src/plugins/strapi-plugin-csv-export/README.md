# Strapi Plugin CSV Export

Plugin para exportar dados de collections do Strapi em formato CSV.

## Instalação

O plugin já está configurado no projeto. Para ativá-lo:

1. Certifique-se de que o plugin está habilitado em `config/plugins.ts`:

```typescript
'csv-export': {
  enabled: true,
  resolve: './src/plugins/strapi-plugin-csv-export',
},
```

2. Reinicie o servidor Strapi:

```bash
yarn develop
# ou
npm run develop
```

## Uso

Após reiniciar o Strapi, um botão "Exportar CSV" aparecerá automaticamente na página de listagem de todas as collections no Content Manager.

### Como usar:

1. Acesse o Content Manager no painel admin
2. Selecione qualquer collection type
3. Na página de listagem, você verá o botão "Exportar CSV" na área de ações
4. Clique no botão para baixar os dados em formato CSV

## Funcionalidades

- ✅ Exporta todos os registros de uma collection
- ✅ Suporta relacionamentos e campos complexos
- ✅ Formatação adequada para Excel (UTF-8 BOM)
- ✅ Inclui campos de data (createdAt, updatedAt)
- ✅ Botão integrado no Content Manager

## Estrutura do Plugin

```
strapi-plugin-csv-export/
├── admin/              # Frontend (React)
│   └── src/
│       └── index.tsx   # Componente do botão
├── server/             # Backend
│   └── src/
│       ├── controllers/ # Lógica de controle
│       ├── routes/      # Rotas da API
│       └── services/    # Lógica de negócio
└── package.json
```

## API

O plugin expõe uma rota de API:

```
GET /api/csv-export/export/:contentType
```

Onde `:contentType` pode ser:
- Slug: `contact-form`
- UID completo: `api::contact-form.contact-form`

## Desenvolvimento

Para desenvolver o plugin:

1. Faça alterações nos arquivos do plugin
2. Reinicie o servidor Strapi
3. O plugin será recompilado automaticamente

## Licença

MIT


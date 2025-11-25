c# Guia de Internacionalização (i18n) no Strapi 4

## 📋 Plugin Instalado

O plugin `@strapi/plugin-i18n` foi instalado e configurado com sucesso!

## 🌍 Idiomas Configurados

- **Português Brasileiro (pt-BR)** - Idioma padrão
- **Inglês (en)**
- **Espanhol (es)**

## 🚀 Como Usar

### 1. Acessar as Configurações de Idiomas

1. Abra o painel administrativo: http://localhost:1337/admin
2. Vá em **Settings** (Configurações) no menu lateral
3. Clique em **Internationalization** (Internacionalização)
4. Aqui você pode:
   - Adicionar novos idiomas
   - Editar idiomas existentes
   - Definir o idioma padrão
   - Remover idiomas

### 2. Habilitar i18n em Content Types

Para que um Content Type suporte múltiplos idiomas:

1. Vá em **Content-Type Builder**
2. Selecione o Content Type que deseja internacionalizar (ex: Article, Page)
3. Clique em **Edit** (Editar)
4. Na aba **Advanced Settings**
5. Ative a opção **"Enable localization for this Content-Type"**
6. Salve as alterações

### 3. Criar Conteúdo em Múltiplos Idiomas

Depois de habilitar i18n em um Content Type:

1. Vá em **Content Manager**
2. Selecione o Content Type internacionalizado
3. Ao criar/editar uma entrada, você verá um seletor de idioma no topo
4. Crie o conteúdo no idioma padrão (pt-BR)
5. Clique no botão **"Create new locale"** para criar versões em outros idiomas
6. Preencha o conteúdo para cada idioma

### 4. Adicionar Novos Idiomas

Se precisar adicionar mais idiomas além dos configurados:

1. Vá em **Settings** > **Internationalization**
2. Clique em **"Add new locale"**
3. Selecione o idioma desejado
4. Defina se é o idioma padrão (opcional)
5. Salve

**Idiomas populares disponíveis:**
- Francês (fr)
- Alemão (de)
- Italiano (it)
- Japonês (ja)
- Chinês (zh)
- Russo (ru)
- Árabe (ar)
- E muitos outros...

## 📡 Uso na API

### Buscar conteúdo em um idioma específico

```
GET /api/articles?locale=pt-BR
GET /api/articles?locale=en
GET /api/articles?locale=es
```

### Buscar conteúdo em todos os idiomas

```
GET /api/articles?locale=all
```

### Criar conteúdo em um idioma específico

```
POST /api/articles
{
  "data": {
    "title": "Meu artigo",
    "locale": "pt-BR"
  }
}
```

## 🔧 Configuração Avançada

Se precisar modificar os idiomas disponíveis, edite o arquivo:
`config/plugins.ts`

```typescript
export default ({ env }) => ({
  i18n: {
    enabled: true,
    config: {
      defaultLocale: 'pt-BR',
      locales: ['pt-BR', 'en', 'es', 'fr', 'de'], // Adicione mais aqui
    },
  },
});
```

Após modificar, reinicie o Strapi:
```bash
yarn develop
```

## 📚 Documentação Oficial

Para mais informações, consulte a documentação oficial do Strapi:
https://docs.strapi.io/developer-docs/latest/plugins/i18n.html

## ⚠️ Importante

- Apenas os campos do tipo **Relation** e **UID** não podem ser localizados
- Cada idioma terá uma entrada separada no banco de dados
- Você pode ter conteúdo em apenas alguns idiomas (não precisa preencher todos)
- As localizações são vinculadas automaticamente pelo Strapi


#!/bin/bash

echo "🚀 Iniciando o Strapi..."

# Verificar se o node_modules existe
if [ ! -d "node_modules" ]; then
    echo "📦 Instalando dependências..."
    yarn install
fi

# Verificar se o build existe
if [ ! -d "dist" ]; then
    echo "🔨 Fazendo build do Strapi..."
    yarn build
fi

# Iniciar o Strapi
echo "🎯 Iniciando servidor de desenvolvimento..."
yarn dev


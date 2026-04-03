# ⚡ Pokémon API Tester

> Frontend React para testar a API REST do projeto FIAP — megafarma Web Service.

![React](https://img.shields.io/badge/React-18.2-61dafb?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-5.1-646cff?style=flat-square&logo=vite)
![Java](https://img.shields.io/badge/Quarkus-API-4695eb?style=flat-square&logo=quarkus)

---

## 📋 Sobre o Projeto

Interface visual para testar todos os endpoints da API de megafarma publicada no Render. Permite realizar requisições **GET**, **POST**, **PUT** e **DELETE** diretamente pelo browser, com visualização do status HTTP, tempo de resposta e corpo da resposta em JSON formatado.

**API Base URL:** `https://megaapp.onrender.com`

---

## 🚀 Como Rodar

### Pré-requisitos

- [Node.js](https://nodejs.org/) v18 ou superior
- npm v9 ou superior

### Instalação

```bash
# 1. Clone o repositório ou descompacte o projeto
cd teste-megafarma

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev
```

Acesse no browser: **http://localhost:5173**

---

## 🔌 Endpoints Disponíveis

Mapeamento completo dos endpoints da API **MegaFarma**:

---

### 👤 Cliente

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| `GET` | `/cliente` | Lista todos os clientes |
| `GET` | `/cliente/{codigo}` | Busca um cliente pelo código |
| `POST` | `/cliente` | Cadastra um novo cliente |
| `PUT` | `/cliente/{codigo}` | Atualiza um cliente existente |
| `DELETE` | `/cliente/{codigo}` | Remove um cliente |

---

### 💊 Remédio

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| `GET` | `/remedio` | Lista todos os remédios |
| `GET` | `/remedio/{codigo}` | Busca um remédio pelo código |
| `POST` | `/remedio` | Cadastra um novo remédio |
| `PUT` | `/remedio/{codigo}` | Atualiza um remédio existente |
| `DELETE` | `/remedio/{codigo}` | Remove um remédio |

---

### 🛒 Venda

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| `GET` | `/venda` | Lista todas as vendas |
| `GET` | `/venda/{codigo}` | Busca uma venda pelo código |
| `POST` | `/venda` | Cadastra uma nova venda |
| `PUT` | `/venda/{codigo}` | Atualiza uma venda existente |

> ⚠️ `DELETE` não foi implementado em `VendaResource`.

---

### 📦 Item Vendido

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| `GET` | `/itemvendido` | Lista todos os itens vendidos |
| `GET` | `/itemvendido/{codigo}` | Busca um item vendido pelo código |
| `PUT` | `/itemvendido/{codigo}` | Atualiza um item vendido existente |

> ⚠️ `POST` e `DELETE` não foram implementados em `ItemVendidoResource`.

---

## 🛠️ Tecnologias

- **React** — biblioteca de UI
- **Vite** — bundler e servidor de desenvolvimento
- **Fetch API** — requisições HTTP nativas do browser

---
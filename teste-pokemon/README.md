# ⚡ Pokémon API Tester

> Frontend React para testar a API REST do projeto FIAP — Pokémon Web Service.

![React](https://img.shields.io/badge/React-18.2-61dafb?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-5.1-646cff?style=flat-square&logo=vite)
![Java](https://img.shields.io/badge/Quarkus-API-4695eb?style=flat-square&logo=quarkus)

---

## 📋 Sobre o Projeto

Interface visual para testar todos os endpoints da API de Pokémons publicada no Render. Permite realizar requisições **GET**, **POST**, **PUT** e **DELETE** diretamente pelo browser, com visualização do status HTTP, tempo de resposta e corpo da resposta em JSON formatado.

**API Base URL:** `https://pokemon-69v8.onrender.com`

---

## 🚀 Como Rodar

### Pré-requisitos

- [Node.js](https://nodejs.org/) v18 ou superior
- npm v9 ou superior

### Instalação

```bash
# 1. Clone o repositório ou descompacte o projeto
cd teste-pokemon

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev
```

Acesse no browser: **http://localhost:5173**

---

## 🔌 Endpoints Disponíveis

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| `GET` | `/pokemon` | Lista todos os pokémons |
| `GET` | `/pokemon/{codigo}` | Busca um pokémon pelo código |
| `POST` | `/pokemon` | Cadastra um novo pokémon |
| `PUT` | `/pokemon/{codigo}` | Atualiza um pokémon existente |
| `DELETE` | `/pokemon/{codigo}` | Remove um pokémon |

### Exemplo de Body (POST / PUT)

```json
{
  "nome": "Pikachu",
  "altura": 0.4,
  "peso": 6.0,
  "categoria": "Mouse",
  "dataDaCaptura": "2024-01-15"
}
```

---

## 🛠️ Tecnologias

- **React** — biblioteca de UI
- **Vite** — bundler e servidor de desenvolvimento
- **Fetch API** — requisições HTTP nativas do browser

---
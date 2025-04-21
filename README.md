### **Backend – GameShelf API**

`https://gameshelf-back.onrender.com/`

#### 🧾 Descrição
API RESTful para gerenciamento de uma biblioteca pessoal de jogos. Permite cadastrar, listar, editar e excluir jogos com suporte a upload de imagem.

#### Tecnologias
- Node.js
- Express
- MongoDB (via Mongoose)
- Multer (Cloudinary)
- CORS

#### ▶️ Executando localmente

```bash
# Clone o repositório
git clone https://github.com/seu-user/gameshelf-back.git
cd gameshelf-back

# Instale as dependências
npm install

# Crie um .env com as variáveis:
MONGO_URI=<sua-uri-do-mongo>
PORT=5000

# Inicie o servidor
npm run dev
```

#### 🔗 Endpoints principais

- `GET /api/games` – Lista todos os jogos
- `POST /api/games` – Adiciona um jogo (com imagem via multipart/form-data)
- `PUT /api/games/:id` – Atualiza um jogo
- `DELETE /api/games/:id` – Remove um jogo

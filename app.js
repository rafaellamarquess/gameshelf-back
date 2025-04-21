const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const gameRoutes = require('./routes/gameRoutes');

dotenv.config();

const app = express();
app.use(express.json());

const { DBUSER, DBPASS, CLUSTER_URL, DBNAME } = process.env;

const uri = `mongodb+srv://${DBUSER}:${DBPASS}@${CLUSTER_URL}/${DBNAME}?retryWrites=true&w=majority`;

// Conecta no MongoDB Atlas
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('✅ MongoDB conectado com sucesso'))
  .catch(err => console.error('❌ Erro ao conectar no MongoDB:', err));

// Rotas
app.use('/api/games', gameRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`));

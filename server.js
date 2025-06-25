const express = require('express');
const bodyParser = require('body-parser');
const alunoRoutes = require('./routes/alunoRoutes');
const path = require('path');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/criar', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'criar.html'));
});

app.get('/editar', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'editar.html'));
});

app.get('/apagar', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'apagar.html'));
});

app.use('/api/alunos', alunoRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

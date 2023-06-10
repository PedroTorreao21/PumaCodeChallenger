const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.use(express.json());

// Endpoint para pegar a user data pela API do GitHub
app.get('/user/:username', async (req, res) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${req.params.username}`);
    const userData = response.data;
    res.status(200).send(userData);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

let favoritos = [];

// Endpoint para adicionar um usuario para a lista de favoritos
app.post('/favoritos', (req, res) => {
  const { username } = req.body;
  if (!username) {
    return res.status(400).send('É necessario um username');
  }
  if (favoritos.includes(username)) {
    return res.status(400).send('Usuario já está na lista de favoritos');
  }
  favoritos.push(username);
  res.status(200).send('Usuario adicionado a lista de favoritos');
});

// Endpoint para remover um usuario da lista de favoritos
app.delete('/favoritos', (req, res) => {
  const { username } = req.body;
  if (!username) {
    return res.status(400).send('É necessario um username');
  }
  if (!favoritos.includes(username)) {
    return res.status


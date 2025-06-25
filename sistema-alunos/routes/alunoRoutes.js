const express = require('express');
const alunoService = require('../services/alunoService');
const router = express.Router();

router.get('/', (req, res) => {
  const alunos = alunoService.listarAlunos();
  res.json(alunos);
});

router.post('/', (req, res) => {
  const { nome, curso, ira } = req.body;
  const novoAluno = alunoService.criarAluno(nome, curso, ira);
  res.status(201).json(novoAluno);
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { nome, curso, ira } = req.body;
  const alunoEditado = alunoService.editarAluno(parseInt(id), nome, curso, ira);

  if (!alunoEditado) {
    return res.status(404).send('Aluno não encontrado');
  }

  res.json(alunoEditado);
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const resultado = alunoService.apagarAluno(parseInt(id));

  if (!resultado) {
    return res.status(404).send('Aluno não encontrado');
  }

  res.status(204).send();
});

module.exports = router;
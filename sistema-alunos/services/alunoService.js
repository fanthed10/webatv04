const alunos = require('../data/alunoData');

const listarAlunos = () => {
  return alunos;
};

const criarAluno = (nome, curso, ira) => {
  const novoAluno = {
    id: alunos.length + 1,
    nome,
    curso,
    ira
  };
  alunos.push(novoAluno);
  return novoAluno;
};

const editarAluno = (id, nome, curso, ira) => {
  const alunoIndex = alunos.findIndex(aluno => aluno.id === id);
  if (alunoIndex === -1) return null;

  const alunoEditado = { id, nome, curso, ira };
  alunos[alunoIndex] = alunoEditado;
  return alunoEditado;
};

const apagarAluno = (id) => {
  const alunoIndex = alunos.findIndex(aluno => aluno.id === id);
  if (alunoIndex === -1) return null;

  alunos.splice(alunoIndex, 1);
  return true;
};

module.exports = {
  listarAlunos,
  criarAluno,
  editarAluno,
  apagarAluno
};

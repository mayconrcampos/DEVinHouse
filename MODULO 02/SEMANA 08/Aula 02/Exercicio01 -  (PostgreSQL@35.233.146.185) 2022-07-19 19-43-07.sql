CREATE SCHEMA IF NOT EXISTS exercicio01;

CREATE TABLE IF NOT EXISTS exercicio01.aluno (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(128) NOT NULL,
  rua VARCHAR(128) NOT NULL,
  numero INTEGER,
  complem VARCHAR(64),
  bairro VARCHAR(64) NOT NULL,
  cidade VARCHAR(128) NOT NULL,
  uf VARCHAR(2) NOT NULL
);

CREATE TABLE IF NOT EXISTS exercicio01.disciplina (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(128)
);

CREATE TABLE IF NOT EXISTS exercicio01.professor (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(128) NOT NULL,
  cpf VARCHAR(14) NOT NULL,
  salario FLOAT NOT NULL,
  matricula INTEGER NOT NULL,
  titulacao VARCHAR(128)
);



CREATE TABLE IF NOT EXISTS exercicio01.turma (
  id SERIAL PRIMARY KEY,
  horario VARCHAR(12) NOT NULL,
  id_professor INTEGER,
  id_disciplina INTEGER,
  FOREIGN KEY (id_professor) REFERENCES exercicio01.professor (id),
  FOREIGN KEY (id_disciplina) REFERENCES exercicio01.disciplina (id)
);

CREATE TABLE IF NOT EXISTS exercicio01.matricula (
  id SERIAL PRIMARY KEY,
  nota1 FLOAT,
  nota2 FLOAT,
  nota3 FLOAT,
  faltas INTEGER,
  id_aluno INTEGER,
  id_turma INTEGER,
  FOREIGN KEY (id_aluno) REFERENCES exercicio01.aluno (id),
  FOREIGN KEY (id_turma) REFERENCES exercicio01.turma (id)
);
CREATE SCHEMA IF NOT EXISTS colegio;

CREATE TABLE IF NOT EXISTS colegio.aluno (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(128) NOT NULL,
  rua VARCHAR(128) NOT NULL,
  numero INTEGER,
  complem VARCHAR(64),
  bairro VARCHAR(128) NOT NULL,
  cidade VARCHAR(128) NOT NULL,
  cep VARCHAR(9) NOT NULL
);

CREATE TABLE IF NOT EXISTS colegio.titulacao (
  id SERIAL PRIMARY KEY,
  descricao VARCHAR(128) NOT NULL,
  data_emissao DATE NOT NULL
);


CREATE TABLE IF NOT EXISTS colegio.professor (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(128) NOT NULL,
  cpf VARCHAR(14) NOT NULL,
  data_nasc DATE NOT NULL,
  salario FLOAT NOT NULL,
  matricula INTEGER NOT NULL,
  cod_titulacao INTEGER,
  FOREIGN KEY (cod_titulacao) REFERENCES colegio.titulacao (id)
);

CREATE TABLE IF NOT EXISTS colegio.disciplina (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(128) NOT NULL
);

CREATE TABLE IF NOT EXISTS colegio.turma (
  id SERIAL PRIMARY KEY,
  cod_turma INTEGER,
  horario VARCHAR(8) NOT NULL,
  id_professor INTEGER,
  id_disciplina INTEGER,
  FOREIGN KEY (id_professor) REFERENCES colegio.professor (id),
  FOREIGN KEY (id_disciplina) REFERENCES colegio.disciplina (id)
);

CREATE TABLE IF NOT EXISTS colegio.matricula (
  id SERIAL PRIMARY KEY,
  nota1 FLOAT,
  nota2 FLOAT,
  nota3 FLOAT,
  faltas INTEGER,
  id_turma INTEGER,
  FOREIGN KEY (id_turma) REFERENCES colegio.turma (id)
);
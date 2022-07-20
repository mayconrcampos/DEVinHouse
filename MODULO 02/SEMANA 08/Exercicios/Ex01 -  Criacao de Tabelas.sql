CREATE SCHEMA IF NOT EXISTS university;

CREATE TABLE IF NOT EXISTS university.alunos (
	mat_alu INTEGER PRIMARY KEY,
	nome VARCHAR(100) NOT NULL,
	dat_entrada DATE,
	cod_curso INTEGER,
	cotista BOOLEAN
);

CREATE TABLE IF NOT EXISTS university.cursos (
	cod_curso INTEGER PRIMARY KEY,
	nome_curso VARCHAR(128) NOT NULL,
	cod_depto INTEGER
);

CREATE TABLE IF NOT EXISTS university.departamentos (
	cod_depto INTEGER PRIMARY KEY,
	nome_depto VARCHAR(128)
);

CREATE TABLE IF NOT EXISTS matriculas (
	semestre INTEGER PRIMARY KEY,
	mat_alu INTEGER NOT NULL,
	cod_disc INTEGER NOT NULL,
	nota DECIMAL(5,2),
	faltas INTEGER,
	status VARCHAR(1)
);

CREATE TABLE IF NOT EXISTS university.disciplina (
	cod_disc INTEGER PRIMARY KEY,
	nome_disc VARCHAR(128) NOT NULL,
	carga_horaria INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS university.matrizes_cursos (
	cod_curso INTEGER,
	cod_disc INTEGER,
	periodo INTEGER
);
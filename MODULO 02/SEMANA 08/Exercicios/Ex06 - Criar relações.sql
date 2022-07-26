CREATE SCHEMA IF NOT EXISTS university;

CREATE TABLE IF NOT EXISTS university.departamentos (
	id SERIAL PRIMARY KEY,
	nome_depto VARCHAR(128)
);

CREATE TABLE IF NOT EXISTS university.cursos (
	id SERIAL PRIMARY KEY,
	nome_curso VARCHAR(128) NOT NULL,
	cod_depto INTEGER,
	FOREIGN KEY (cod_depto) REFERENCES university.departamentos(id)
);

CREATE TABLE IF NOT EXISTS university.alunos (
	id SERIAL PRIMARY KEY,
	nome VARCHAR(100) NOT NULL,
	dat_entrada DATE,
	cotista BOOLEAN,
	cod_curso INTEGER,
	FOREIGN KEY (cod_curso) REFERENCES university.cursos(id)
);


CREATE TABLE IF NOT EXISTS university.disciplina (
	id SERIAL PRIMARY KEY,
	nome_disc VARCHAR(128) NOT NULL,
	carga_horaria INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS university.matriculas (
	id SERIAL PRIMARY KEY,
	semestre INTEGER NOT NULL,
	mat_alu INTEGER NOT NULL,
	nota DECIMAL(5,2),
	faltas INTEGER,
	status VARCHAR(1),
	cod_disc INTEGER NOT NULL,
	FOREIGN KEY (cod_disc) REFERENCES university.disciplina(id)
);

CREATE TABLE IF NOT EXISTS university.matrizes_cursos (
	cod_curso INTEGER,
	cod_disc INTEGER,
	periodo INTEGER,
	FOREIGN KEY (cod_curso) REFERENCES university.cursos(id),
	FOREIGN KEY (cod_disc) REFERENCES university.disciplina(id)
);
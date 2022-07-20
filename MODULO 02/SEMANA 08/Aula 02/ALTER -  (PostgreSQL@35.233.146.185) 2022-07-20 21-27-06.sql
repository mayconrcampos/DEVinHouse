/*
ALTER STRUCTURE
*/

SELECT * FROM university.disciplina;

INSERT INTO university.disciplina (cod_disc, nome_disc, carga_horaria)
VALUES (1, 'Curso de Javascript', 500);

-- REMOÇÃO DE COLUNA

ALTER TABLE university.alunos
DROP COLUMN uf;

-- ALTERAR CONSTRAINT

ALTER TABLE university.disciplina
ADD CONSTRAINT SERIAL (cod_disc);

-- ADIÇÃO DE COLUNA

ALTER TABLE university.alunos
ADD COLUMN uf VARCHAR(2);

-- ALTERAR TIPO DE DADOS

ALTER TABLE university.alunos
ALTER COLUMN cotista TYPE VARCHAR(4);

-- ALTERAR NOME DA TABLE

ALTER TABLE university.alunos
RENAME TO university.aluninhos;

-- ALTERAR NOME DA COLUNA

ALTER TABLE university.alunos
RENAME COLUMN cotista TO costistsa;
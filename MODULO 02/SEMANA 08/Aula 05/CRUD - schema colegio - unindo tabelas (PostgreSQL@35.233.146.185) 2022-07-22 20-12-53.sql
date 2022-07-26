/*
SCHEMA COLEGIO - CRUD
*/

INSERT INTO colegio.aluno (nome, rua, numero, complem, bairro, cidade, cep)
VALUES
('Maycon R Campos', 'Av Renato Ramos da Silva', 3013, 'AP05', 'Vila Nova', 'Imbituba', '88780-000');

INSERT INTO colegio.disciplina (nome) VALUES
('Matemática'),('Física'),('Química'),('Português'),('Geografia'),('Ciências'),('Filosofia');

INSERT INTO colegio.titulacao (descricao, data_emissao) VALUES
('Ciências da Computação', '2005-10-10'),
('Matemática', '2005-10-10'),
('Astrologia', '2005-10-10'),
('Ciências da Proxenetagem', '2005-10-10');

INSERT INTO colegio.professor (nome, cpf, data_nasc, salario, matricula, cod_titulacao)
VALUES
('Natan Nascimento', '012.345.678-78', '2011-01-10', 8990.90, 123456, 1),
('Tony Ramos', '312.344.578-78', '2011-01-10', 15990.90, 134678, 2),
('Luis Inacio', '012.345.678-78', '2011-01-10', 18990.90, 974631, 3),
('Francisco Tainha', '012.345.678-78', '2011-01-10', 28990.90, 2648721, 4);

-- Apagar um registro
DELETE FROM colegio.professor WHERE id=1;
-- Apagar tabela
DROP TABLE colegio.professor;

INSERT INTO colegio.turma (cod_turma, horario, id_professor, id_disciplina)
VALUES
(123, 'Mat', 5, 1),
(124, 'Ves', 6, 5),
(125, 'Not', 7, 6),
(126, 'Mat', 8, 3);

-- SELECTS
SELECT * FROM colegio.aluno;
SELECT * FROM colegio.disciplina;
SELECT * FROM colegio.titulacao;
SELECT * FROM colegio.professor;
SELECT * FROM colegio.turma;

SELECT turma.cod_turma, turma.horario, prof.nome, titulacao.descricao, disciplina.nome 
FROM colegio.turma 
AS turma
INNER JOIN colegio.professor
AS prof
ON prof.id = turma.id_professor
INNER JOIN colegio.disciplina
AS disciplina
ON turma.id_disciplina = disciplina.id
INNER JOIN colegio.titulacao
AS titulacao
ON prof.cod_titulacao = titulacao.id;
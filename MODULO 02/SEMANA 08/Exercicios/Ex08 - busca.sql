-- Lista total de alunos por curso
SELECT count(id) FROM university.alunos GROUP BY cod_curso;

-- Ordenar cursos por ordem crescente
SELECT * FROM university.cursos ORDER BY nome_curso ASC;

-- Soma de faltas em cada disciplina
SELECT sum(faltas) FROM university.matriculas GROUP BY cod_disc;

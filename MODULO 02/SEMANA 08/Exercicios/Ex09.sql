
-- Listar numero total de reprovações dos alunos cotistas
SELECT * FROM university.alunos
as alunos
INNER JOIN university.matriculas
as matriculas
ON matriculas.mat_alu = alunos.id
WHERE
alunos.cotista=true AND
matriculas.status='R';

-- Listar total de alunos cotistas em disciplinas
SELECT count(*) FROM university.alunos
as alunos
INNER JOIN university.matriculas
as matriculas
ON matriculas.mat_alu = alunos.id
WHERE
alunos.cotista=true;
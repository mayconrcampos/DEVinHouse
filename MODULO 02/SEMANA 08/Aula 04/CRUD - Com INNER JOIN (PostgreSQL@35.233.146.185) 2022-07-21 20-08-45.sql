/*
FAZENDO CRUD NO SCHEMA - CINEMA
*/

-- INSERT
INSERT INTO cinema.ator (nome, nome_artistico)
VALUES 
('Mauro Mauricio', 'Mauro Mauricio de Araraquara'),
('João Abilio Rego', 'João do Caminhão'),
('José filho do Chico', 'Zezé di Camargo e Luciano'),
('Durval Junior', 'Sandy e Junior');

INSERT INTO cinema.categoria (nome)
VALUES
('Ação'),('Comédia'),('Suspense'),('Aventura'),('Terror');

INSERT INTO cinema.filme (nome, id_categoria)
VALUES
('A Volta dos que não foram', 4),
('Poeira em Alto mar', 3),
('Vida ingrata', 2),
('A cabeça giratória', 5),
('Avião em chamas', 1);

INSERT INTO cinema.historico (id_ator, id_filme)
VALUES (1,2),(3,1),(1,3),(4,2),(4,3),(4,4),(3,3),(2,2),(3,2),(4,1),(1,2);

-- SELECT
SELECT * FROM cinema.ator;
SELECT * FROM cinema.categoria;
SELECT * FROM cinema.filme;
SELECT * FROM cinema.historico;

-- INNER JOIN - Filme e Categoria
SELECT fil.id, fil.nome, cat.nome 
FROM cinema.filme 
AS fil
INNER JOIN cinema.categoria 
AS cat
ON fil.id = cat.id;
-- INNER JOIN - Histórico, Filme Ator
SELECT ator.nome, ator.nome_artistico, filme.nome, cat.nome FROM cinema.historico AS historico
INNER JOIN cinema.ator AS ator
ON ator.id = historico.id_ator
INNER JOIN cinema.filme AS filme
ON historico.id_filme = filme.id
INNER JOIN cinema.categoria AS cat
ON cat.id = filme.id_categoria
WHERE cat.nome like 'C%';

-- UPDATE
UPDATE cinema.ator SET
nome='João Abilio', nome_artistico='Abilião'
WHERE id=2;

-- DELETE
DELETE FROM cinema.ator
WHERE id=1;
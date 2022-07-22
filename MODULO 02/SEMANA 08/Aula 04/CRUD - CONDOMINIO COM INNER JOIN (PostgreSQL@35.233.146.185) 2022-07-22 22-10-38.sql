/*
CRUD NO SCHEMA CONDOMINIO
*/

-- INSERT
INSERT INTO condominio.edificio (rua, numero, complem, bairro, cidade, cep, data_construcao, data_ultima_vistoria)
VALUES
(
  'Rua Paula Ramos', 
  316, 
  'Cond. Resid. Luz do Sol', 
  'Capoeiras', 
  'Florianópolis', 
  '88080-400', 
  '2021-12-01', 
  '2022-01-10'
);

INSERT INTO condominio.apartamento (num_apto, area, id_edificio)
VALUES
(101, 89.5, 1),
(102, 89.5, 1),
(103, 89.5, 1),
(104, 89.5, 1),
(201, 89.5, 1),
(202, 89.5, 1),
(203, 89.5, 1),
(204, 89.5, 1),
(301, 89.5, 1),
(302, 89.5, 1),
(303, 89.5, 1),
(304, 89.5, 1),
(401, 89.5, 1),
(402, 89.5, 1),
(403, 89.5, 1),
(404, 89.5, 1);

INSERT INTO condominio.pessoa (cpf, sexo, nome)
VALUES
('033.033.033-33', 'M', 'Maycon R Campos'),
('043.033.033-33', 'F', 'Ariana D Campos'),
('053.033.033-33', 'F', 'Josefina Nunes'),
('063.033.033-33', 'M', 'Saldanha Barbosa'),
('073.033.033-33', 'M', 'Paulo Pafuncio'),
('083.033.033-33', 'M', 'Pedro Borba'),
('093.033.033-33', 'F', 'Feliciana Bundola'),
('013.033.033-33', 'M', 'Paulo Erelto'),
('023.033.033-33', 'M', 'Thomaz T P'),
('031.033.033-33', 'F', 'Paula Tejando'),
('032.033.033-33', 'M', 'Pedro Brioco');

INSERT INTO condominio.proprietario (id_apto, id_pessoa)
VALUES
(1, 1),(2, 2),(3, 3),(4, 4),(5, 5),(6, 6),(7, 7),(8, 8),(9, 9),(10, 10),(11, 11);

-- SELECT
SELECT * FROM condominio.edificio;
SELECT * FROM condominio.apartamento;
SELECT * FROM condominio.pessoa;



SELECT edificio.complem, edificio.cidade, apto.num_apto, apto.area, pessoa.nome, pessoa.cpf, pessoa.sexo FROM condominio.proprietario 
AS proprietario
INNER JOIN condominio.apartamento 
AS apto
ON apto.id = proprietario.id_apto
INNER JOIN condominio.pessoa
AS pessoa
ON pessoa.id = proprietario.id_pessoa
INNER JOIN condominio.edificio
AS edificio
ON apto.id_edificio = edificio.id;
-- UPDATE 
-- SELECT
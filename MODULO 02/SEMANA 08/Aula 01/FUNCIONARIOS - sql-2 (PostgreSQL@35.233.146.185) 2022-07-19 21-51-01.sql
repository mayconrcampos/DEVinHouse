CREATE SCHEMA IF NOT EXISTS meuexemplo;

CREATE TABLE IF NOT EXISTS meuexemplo.funcionarios (
    id serial NOT NULL,
    nome VARCHAR(50),
    cpf varchar(15),
    PRIMARY KEY(id)
);

INSERT INTO meuexemplo.funcionarios (nome, cpf) VALUES ('Briocossauro', '03322211147');
INSERT INTO meuexemplo.funcionarios (nome, cpf) VALUES ('José Brindola', '123456789987');
INSERT INTO meuexemplo.funcionarios (nome, cpf) VALUES ('Fidalgo Antunes', '321654987471');
INSERT INTO meuexemplo.funcionarios (nome, cpf) VALUES ('Saturnino', '98765432174185');
INSERT INTO meuexemplo.funcionarios (nome, cpf) VALUES ('Ana Paula Tejando', '938271456789');
INSERT INTO meuexemplo.funcionarios (nome, cpf) VALUES 
('Pedro Poeira', '938271456789'),
('Tomaz Norrego', '938271456789'),
('Saulo Botelho', '938271456789'),
('Paulo Pindoba', '938271456789'),
('Valmir Pamonha', '938271456789');

select * from meuexemplo.funcionarios;

UPDATE funcionarios SET nome='José Bundão', gerente=321 WHERE id = 1;
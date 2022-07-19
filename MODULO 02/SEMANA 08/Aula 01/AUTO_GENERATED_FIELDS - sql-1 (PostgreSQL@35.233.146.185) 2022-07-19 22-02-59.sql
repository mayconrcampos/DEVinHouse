create schema auto_generated_field;

CREATE TABLE auto_generated_field.pessoa (
  	id serial primary key,
  	nome varchar(128) NOT NULL,
 	sobrenome varchar(128) NOT NULL,
  	nome_completo varchar(256) generated always as (nome || ' ' || sobrenome) stored
);


INSERT INTO auto_generated_field.pessoa (nome, sobrenome) VALUES 
('Maycon', 'Campos'),
('Ariana', 'Campos'),
('Otavio', 'Dionel'),
('Benjamin', 'Campos');


SELECT * FROM auto_generated_field.pessoa;
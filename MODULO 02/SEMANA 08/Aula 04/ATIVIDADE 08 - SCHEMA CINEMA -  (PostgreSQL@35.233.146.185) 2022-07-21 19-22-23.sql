CREATE SCHEMA IF NOT EXISTS cinema;

CREATE TABLE IF NOT EXISTS cinema.categoria (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(128) NOT NULL
);
CREATE TABLE IF NOT EXISTS cinema.filme (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(128) NOT NULL,
  id_categoria INTEGER,
  FOREIGN KEY (id_categoria) REFERENCES cinema.categoria(id)
);

CREATE TABLE IF NOT EXISTS cinema.ator (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(128) NOT NULL,
  nome_artistico VARCHAR(128)
);
CREATE TABLE IF NOT EXISTS cinema.historico (
  id_ator INTEGER,
  id_filme INTEGER,
  FOREIGN KEY (id_ator) REFERENCES cinema.ator(id),
  FOREIGN KEY (id_filme) REFERENCES cinema.filme(id)
);
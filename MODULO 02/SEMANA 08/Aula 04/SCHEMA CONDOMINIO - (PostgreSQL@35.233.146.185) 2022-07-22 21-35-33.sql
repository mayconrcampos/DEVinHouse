/*
SCHEMA CONDOMINIO
*/

CREATE SCHEMA IF NOT EXISTS condominio;

CREATE TABLE IF NOT EXISTS condominio.edificio (
  id SERIAL PRIMARY KEY,
  rua VARCHAR(128) NOT NULL,
  numero INTEGER,
  complem VARCHAR(64),
  bairro VARCHAR(128) NOT NULL,
  cidade VARCHAR(128) NOT NULL,
  CEP VARCHAR(9) NOT NULL,
  data_construcao DATE NOT NULL,
  data_ultima_vistoria DATE
);

CREATE TABLE IF NOT EXISTS condominio.apartamento (
  id SERIAL PRIMARY KEY,
  num_apto INTEGER,
  area FLOAT,
  id_edificio INTEGER,
  FOREIGN KEY (id_edificio) REFERENCES condominio.edificio(id)
);

CREATE TABLE IF NOT EXISTS condominio.pessoa (
  id SERIAL PRIMARY KEY,
  cpf VARCHAR(14) NOT NULL,
  sexo VARCHAR(1) NOT NULL,
  nome VARCHAR(128) NOT NULL
);

CREATE TABLE IF NOT EXISTS condominio.proprietario (
  id_apto INTEGER,
  id_pessoa INTEGER,
  FOREIGN KEY (id_apto) REFERENCES condominio.apartamento(id),
  FOREIGN KEY (id_pessoa) REFERENCES condominio.pessoa(id)
);
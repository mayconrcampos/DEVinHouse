/*
	drop table - remover tabela, database, schema
	*/

-- DELETAR SCHEMA 
DROP SCHEMA university;

-- DELETAR DATABASE
DROP DATABASE db_maycon_r_campos;

-- DELETAR TABELA
DROP TABLE university.alunos CASCADE; -- Dropa a tabela e suas dependencias
DROP TABLE university.alunos RESTRICT; -- Dropa somente a tabela
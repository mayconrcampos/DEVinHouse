-- Ex07 - Inserção de dados

INSERT INTO university.departamentos (nome_depto)
VALUES
('RH'),('Biblioteca'),('T.I'),('Financeiro');

INSERT INTO university.cursos (cod_depto, nome_curso)
VALUES (1, 'Recursos Humanos'),(3, 'Matemática Financeira'),
(2, 'Biblioteconomia');

INSERT INTO university.alunos (cod_curso, cotista, dat_entrada, nome)
VALUES
(1, false, '2022-01-10', 'Zé Botelho'),
(2, false, '2022-01-10', 'Drica Gada'),
(3, false, '2022-01-10', 'João Sarnento'),
(1, true, '2022-01-10', 'Fabio Brotoeja '),
(2, false, '2022-01-10', 'Sileide Funta Silva'),
(3, false, '2022-01-10', 'Alce Barbuda'),
(1, true, '2022-01-10', 'Amado Amoroso'),
(2, false, '2022-01-10', 'Amin Amado'),
(3, false, '2022-01-10', 'Silvério Asteróida'),
(2, false, '2022-01-10', 'Atanásio Bundasseca');

INSERT INTO university.disciplina (carga_horaria, nome_disc)
VALUES
(120, 'Curso de Enxugar Gelo'),
(120, 'Curso de Enxugar Gelo'),
(120, 'Curso de Enxugar Gelo'),
(120, 'Curso de Enxugar Gelo');

ALTER TABLE university.matriculas
ADD FOREIGN KEY (mat_alu) REFERENCES university.alunos(id);

INSERT INTO university.matriculas (cod_disc, faltas, mat_alu, nota, semestre, status)
VALUES
(1, 2, 1, 8.0, 1, 'A'),
(2, 4, 1, 7.0, 1, 'A'),
(3, 12, 1, 6.0, 1, 'R'),
(4, 0, 1, 8.0, 1, 'A'),
(5, 4, 1, 8.0, 1, 'A'),
(6, 5, 1, 9.0, 1, 'A'),
(7, 3, 1, 10.0, 1, 'A'),
(8, 3, 1, 8.5, 1, 'A'),
(9, 7, 1, 7.0, 1, 'A'),
(10, 12, 1, 8.9, 1, 'A');

INSERT INTO university.matrizes_cursos (cod_curso, cod_disc, periodo)
VALUES
(1, 1, 1),
(2, 2, 2),
(3, 3, 3),
(4, 3, 2),
(2, 3, 3),
(2, 2, 1),
(3, 2, 3),
(3, 1, 2),
(1, 1, 3),
(1, 2, 3),
(1, 2, 2),
(1, 3, 1),
(2, 3, 1),
(3, 2, 1),
(2, 2, 2),
(3, 1, 2),
(2, 1, 3),
(4, 3, 1);
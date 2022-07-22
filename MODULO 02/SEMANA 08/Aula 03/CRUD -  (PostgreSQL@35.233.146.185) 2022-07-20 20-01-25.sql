-- INSERT
INSERT INTO gestora_condominio.edificio (endereco, data_construcao, data_ultima_vistoria)
VALUES 
('Rua Paula Ramos', '2022-01-01', '2022-02-01'),
('Rua Nereu Ramos', '2022-01-02', '2022-03-01'),
('Rua Saulo Ramos', '2022-01-03', '2022-04-01'),
('Rua Peneu Ramos', '2022-01-04', '2022-05-01'),
('Rua Bundanau Ramos', '2022-01-05', '2022-06-01'),
('Rua Salcichão Ramos', '2022-01-06', '2022-07-07'),
('Rua Feliciano Ramos', '2022-01-07', '2022-08-08');

-- SELECT
SELECT * FROM gestora_condominio.edificio;

-- UPDATE
UPDATE gestora_condominio.edificio SET
endereco='Rua Silverio Diniz'
WHERE id_edificio=5;

-- DELETE
DELETE FROM gestora_condominio.edificio WHERE id_edificio=3;
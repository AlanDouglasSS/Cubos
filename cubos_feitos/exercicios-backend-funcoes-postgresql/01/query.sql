/*Quantidade de medicamentos na tabela farmacia:*/
SELECT COUNT(*) 
FROM farmacia;

/*Idade do usuário mais novo na tabela usuarios:*/
SELECT MIN(idade) 
FROM usuarios;

/*Idade do usuário mais velho na tabela usuarios:*/
SELECT MAX(idade) 
FROM usuarios;

/*Média de idade entre os usuários com idade maior ou igual a 18 anos na tabela usuarios:*/
SELECT AVG(idade) 
FROM usuarios 
WHERE idade >= 18;

/*Soma total do estoque de medicamentos das categorias blue e black na tabela farmacia:*/
SELECT SUM(estoque) 
FROM farmacia 
WHERE categoria IN ('blue', 'black');

/*Categorias não nulas e a soma do estoque de medicamentos de cada categoria na tabela farmacia:*/
SELECT categoria, 
SUM(estoque) 
FROM farmacia 
WHERE categoria IS NOT NULL 
GROUP BY categoria;

/*Soma do estoque disponível dos medicamentos sem categoria na tabela farmacia:*/
SELECT SUM(estoque) 
FROM farmacia 
WHERE categoria IS NULL;

/*Quantidade de medicamentos sem categoria na tabela farmacia:*/
SELECT COUNT(*) 
FROM farmacia 
WHERE categoria IS NULL;

/*Nome do medicamento e categoria entre parênteses para registros 
com categoria não nula na tabela farmacia:*/
SELECT CONCAT(medicamento, ' (', categoria, ')') 
FROM farmacia 
WHERE categoria IS NOT NULL;

/*Identificador e nome do medicamento separados por hífen e categoria entre 
parênteses para todos os registros na tabela farmacia, tratando a categoria nula:*/
SELECT CONCAT(id, ' - ', medicamento, ' (', COALESCE(categoria, 'sem categoria'), ')') 
FROM farmacia;

/*Nome, idade e data de cadastro no formato AAAA-MM-DD para cadastros 
de 2020 na tabela usuarios:*/
SELECT nome, idade, cadastro AS data_cadastro
FROM usuarios
WHERE DATE_PART('year', cadastro) = 2020;

/*Nome, idade, email e tempo de usuários menores de 18 anos na tabela usuarios:*/
SELECT nome, idade, email, 
age(cast(cadastro as timestamp)) AS tempo_cadastro
FROM usuarios
WHERE idade < 18;

/*Nome, idade, email e tempo de usuários com 60 anos ou mais na tabela usuarios:*/
SELECT nome, idade, email, 
age(NOW(), data_cadastro) AS tempo_cadastro
FROM usuarios
WHERE idade >= 60;

/*Categoria e quantidade de produtos de cada categoria não nula na tabela farmacia:*/
SELECT categoria, 
COUNT(*) 
FROM farmacia 
WHERE categoria IS NOT NULL 
GROUP BY categoria;

/*Idade e quantidade de registros para idades maiores ou iguais a 18 anos na tabela usuarios:*/
SELECT idade, 
COUNT(*) 
FROM usuarios 
WHERE idade >= 18 
GROUP BY idade;

/*Três categorias e a soma do estoque de medicamentos de cada categoria na tabela farmacia:*/
SELECT categoria, 
SUM(estoque) 
FROM farmacia 
GROUP BY categoria 
LIMIT 3;
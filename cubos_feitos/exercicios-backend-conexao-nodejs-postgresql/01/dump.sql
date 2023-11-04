/*NOTA: Beekeeper não permitiu a exportação do banco, dados a baixo*/

/*DADOS PARA CRIAR E ADICIONAR NO BANCO*/

/*Tabela autores*/
CREATE TABLE autores (
    id SERIAL UNIQUE PRIMARY KEY, -- Chave primária auto-incrementada
    nome VARCHAR(255) NOT NULL, -- Nome do autor (obrigatório)
    idade INT -- Idade do autor
);

/*Tabela Livros*/
CREATE TABLE livros (
    id SERIAL UNIQUE PRIMARY KEY, -- Chave primária auto-incrementada
    nome VARCHAR(255) NOT NULL, -- Nome do livro (obrigatório)
    genero VARCHAR(255), -- Gênero do livro
    editora VARCHAR(255), -- Editora do livro
    data_publicacao DATE, -- Data de publicação no formato 'YYYY-MM-DD'
    autor_id INT, -- Identificador do autor responsável pelo livro

    FOREIGN KEY (autor_id) REFERENCES autores(id) -- Chave estrangeira referenciando a tabela "autores"
);

/*LIVROS*/
{
	"nome": "Backend PHP",
	"genero": "Programação",
	"editora": "Cubos Academy",
	"data_publicacao": "2020-10-18"
}
/*AUTOR*/

{
    "nome": "Guido Cerqueira",
    "idade": 32
}
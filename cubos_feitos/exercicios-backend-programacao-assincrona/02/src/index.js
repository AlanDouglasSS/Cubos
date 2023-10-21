// Olá, treinador! Bem-vindo ao código mágico da API Pokémon Divertida! 🌟

const express = require('express'); // Pega a varinha mágica do Express 🪄
const { listarPokemons, detalharPokemon } = require('utils-playground'); // Invoca feitiços para listar e detalhar!

const app = express(); // A nossa poção mágica de servidor! 🧙‍♂️
const PORT = 8000; // O portal secreto onde a magia acontece! 🔮

// Rota para listar os pokémons
app.get('/pokemon', async (req, res) => {
    try {
        const page = req.query.page || 1; // Uma poção que decide a página a ser mostrada 🧪
        const pokemonsData = await listarPokemons(page); // Invoca o feitiço para listar
        const pokemons = pokemonsData.results; // Seleciona os pokémons na receita mágica 📜

        res.json(pokemons); // Entrega os pokémons para o mundo! 🎁
    } catch (error) {
        res.status(500).json({ message: 'Algo deu errado no caldeirão!' }); // Oh não, um feitiço falhou! ☠️
    }
});

// Rota para detalhar um pokémon
app.get('/pokemon/:idOuNome', async (req, res) => {
    try {
        const idOuNome = req.params.idOuNome; // O nome ou número do pokémon é o ingrediente especial 🍄
        const pokemonData = await detalharPokemon(idOuNome); // O grande feitiço de detalhar é lançado!

        const selectedData = { // Montando a poção especial com informações selecionadas
            id: pokemonData.id,
            name: pokemonData.name,
            height: pokemonData.height,
            weight: pokemonData.weight,
            base_experience: pokemonData.base_experience,
            forms: pokemonData.forms,
            abilities: pokemonData.abilities,
            species: pokemonData.species
        };

        res.json(selectedData); // Entrega a poção especial para o treinador! 🧙‍♀️🧪
    } catch (error) {
        res.status(500).json({ message: 'Algo deu errado na transmutação!' }); // Um erro na magia... cuidado! ⚡️
    }
});

app.listen(PORT, () => {
    console.log(`Porta ${PORT} aberta! A magia começa agora! ✨🔮`);
});

import axios from "axios";

async function fetchData(url) {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

async function getAllPokemons(limit) {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=0`;
    return fetchData(url);
}

async function getPokemon(url) {
    return fetchData(url);
}

async function getPokemonById(id) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    return fetchData(url);
}

const request = {
    getAllPokemons,
    getPokemon,
    getPokemonById,
}

export default request;

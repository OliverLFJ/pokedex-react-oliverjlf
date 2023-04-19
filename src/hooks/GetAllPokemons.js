const GetAllPokemons = async (offset = 0, limit = 649) => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
        const data = await response.json();
        return data.results;
    } catch (err) {
        console.log(err.message);
    }
}

export default GetAllPokemons;
const IndividualPokemon = (props) => {
    if (props) {
         fetch(`https://pokeapi.co/api/v2/pokemon/${props}`)
            .then((response) => response.json())
            .then((data) => { return data })
    }
}

export default IndividualPokemon
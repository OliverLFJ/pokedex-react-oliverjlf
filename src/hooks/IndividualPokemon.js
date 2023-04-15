import { useEffect, useState } from 'react'
const IndividualPokemon = (props) => {
    const [pokemon, setPokemon] = useState([])
    const { idPokemon } = props

    useEffect(() => {

        fetch(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`)
            .then((response) => response.json())
            .then((data) => { setPokemon(data) })
            .catch((err) => {
                console.log(err.message);
            });

    }, [])
    return pokemon
}

export default IndividualPokemon
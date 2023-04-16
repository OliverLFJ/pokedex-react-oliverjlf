import { useEffect, useState } from 'react'
const GetAllPokemons = () => {
    var randomColor = ''
    const [dataPokemons, setDataPokemons] = useState([])
    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=649&offset=0")
            .then((response) => response.json())
            .then((dataPokemons) => { setDataPokemons(dataPokemons.results) })
            .catch((err) => {
                console.log(err.message);
            });
    }, [])
    
    for (let index = 0; index < dataPokemons.length; index++) {
        randomColor = Math.floor(Math.random() * 16777215).toString(16);
        var newColor = `#${randomColor}85`
        if (newColor === "#000000") {
            index = index--
        } else {
            dataPokemons[index]["background"] = newColor;
        }

    }
    return dataPokemons
}

export default GetAllPokemons
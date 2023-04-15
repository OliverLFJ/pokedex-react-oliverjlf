import '../styles/Content.css'
import '../styles/Article.css'
import GetAllPokemons from '../hooks/GetAllPokemons'
import Grass from '../assets/images/pokemonWall.svg'
import CirclesPokedexArticle from './style-components/CirclesArticle'
import MoreInfo from './MoreInfo'
import ModalInfoPokemon from './ModalInfoPokemon'
import { useState } from 'react'

const Content = () => {
    const [showInfoPokemon, setShowModalInfo] = useState(false)
    const [idPokemon, setIdPokemon] = useState(1)
    const [color, setBackground] = useState('#00000034')
    const listPokemons = GetAllPokemons()
    const getData = event => {
        setBackground(event.currentTarget.getAttribute("color"))
        setIdPokemon(event.currentTarget.id);
        setShowModalInfo(true)
    };


    return (
        <div className='content'>
            <ModalInfoPokemon onClose={() => setShowModalInfo(false)} showModal={showInfoPokemon} idPokemon={idPokemon} color={color} />
            <div className='overflow-div'>
                <div className='content-article'>
                    {listPokemons.map((pokemon, index) =>
                        <article style={{ backgroundColor: pokemon.background }} key={pokemon.name} className='info-container-pokemon'>
                            <div className='circles-pokedex'>
                                <CirclesPokedexArticle />
                                <h3>{index + 1}</h3>
                            </div>
                            <div className='pokemon-information'>
                                <div className='img-container-pokemon'>
                                    <img className='grass' src={Grass} alt='pokemon img' />
                                    <div className='pokemonImg'>
                                        <img className='pokemon-img' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg`} alt='pokemon img' />
                                    </div>
                                </div>
                                <div className='information-pokemon'>
                                    <h2>{pokemon.name}</h2>
                                    <div onClick={getData} id={index + 1} color={pokemon.background} className='open-modal-information'>
                                        <MoreInfo />
                                    </div>
                                </div>
                            </div>
                        </article>
                    )}
                </div>
            </div>
        </div >
    )
}

export default Content

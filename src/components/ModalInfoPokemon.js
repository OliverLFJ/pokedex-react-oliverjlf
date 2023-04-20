import ShowModalInfo from '../hooks/ShowModalInfo'
import '../styles/ModalInfoPokemon.css'
import Grass from '../assets/images/pokemonWall.svg'
import PokeballImg from '../assets/images/pokeball-pokedex.svg'
import CloseModal from './style-components/CloseModal'
import { useEffect, useState } from 'react'
//import IndividualPokemon from '../hooks/IndividualPokemon'

const ModalInfoPokemon = (props) => {
    ShowModalInfo(props)
    const [data, setData] = useState('');
    useEffect(() => {
        if (props.idPokemon) {
            fetch(`https://pokeapi.co/api/v2/pokemon/${props.idPokemon}`)
                .then((response) => response.json())
                .then((data) => setData(data))
        }
    }, [props.idPokemon]);
    return (
        <div className={`${props.showModal ? 'all-container-modal-info' : 'showInfoModal'}`}>
            {Object.keys(data).length === 0 ? null :
                <div className='modal-pokemon' style={{ backgroundColor: props.color }}>
                    <div className='img-information'>
                        <div className='typeanddamage'>
                            <div className='container-type'>
                                <h2>Type</h2>
                                {data.types.map((type, index) => (
                                    <div key={index} className='pokeball-pleca'>
                                        <img alt='pokeball' src={PokeballImg} />
                                        {type.type.name}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='images'>
                            <div className='absolute-images'>
                                <div className='pokemonImage'><img alt='pokemon' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`} /></div>
                                <div className='grassImage'><img alt='grass' src={Grass} /></div>
                            </div>
                        </div>
                        <div className='nameandnumber'>
                            <p>{data.name} <br /> #{data.id}</p>
                            <div className='container-damage'>
                                <h2>Base EXP</h2>
                                <div className='pokeball-pleca-damage'>
                                    <img alt='pokeball' src={PokeballImg} />
                                    {data.base_experience}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='stats-info'>
                        <div className='all-information'>
                            <div className='about'>
                                <div>
                                    <p>Height:</p><p>{data.height}</p>
                                </div>
                                <div>
                                    <p>Weight:</p><p>{data.weight}</p>
                                </div>
                            </div>
                            <div className='info-stat-pok'>
                                <div className='graphic'>
                                    <p>HP</p><div className='bar-color'><div style={{ width: data.stats[0].base_stat + '%' }} className='hp-bar'><p>{data.stats[0].base_stat}</p></div></div>
                                </div>
                                <div className='graphic'>
                                    <p>Attack</p><div className='bar-color'><div style={{ width: data.stats[1].base_stat + '%' }} className='attack-bar'><p>{data.stats[1].base_stat}</p></div></div>
                                </div>
                                <div className='graphic'>
                                    <p>Special attack</p><div className='bar-color'><div style={{ width: data.stats[3].base_stat + '%' }} className='special-attack-bar'><p>{data.stats[3].base_stat}</p></div></div>
                                </div>
                                <div className='graphic'>
                                    <p>Defense</p><div className='bar-color'><div style={{ width: data.stats[2].base_stat + '%' }} className='defense-bar'><p>{data.stats[2].base_stat}</p></div></div>
                                </div>
                                <div className='graphic'>
                                    <p>Speed</p><div className='bar-color'><div style={{ width: data.stats[5].base_stat + '%' }} className='speed-bar'><p>{data.stats[5].base_stat}</p></div></div>
                                </div>
                                <div className='graphic'>
                                    <p>Special defense</p><div className='bar-color'><div style={{ width: data.stats[4].base_stat + '%' }} className='special-defense-bar'><p>{data.stats[4].base_stat}</p></div></div>
                                </div>
                            </div>
                            <div className='abilities'>

                            </div>
                        </div>
                        <div className='sprites'>
                            <div className='sprites-info-container'>
                                Principal Sprites
                                <div className='sprites-container'>
                                    <div>
                                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`} alt='sprite front' />
                                    </div>
                                    <div>
                                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${data.id}.png`} alt='sprite front' />
                                    </div>
                                    <div>
                                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/${data.id}.png`} alt='sprite front' />
                                    </div>
                                    <div>
                                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${data.id}.png`} alt='sprite front' />
                                    </div>
                                </div>
                            </div>
                            <div className='footer-modal-info'>
                                <div onClick={props.onClose}>
                                    <CloseModal />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            }
        </div >
    )
}

export default ModalInfoPokemon
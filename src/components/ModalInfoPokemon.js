import ShowModalInfo from '../hooks/ShowModalInfo'
import IndividualPokemon from '../hooks/IndividualPokemon'
import '../styles/ModalInfoPokemon.css'
import Grass from '../assets/images/pokemonWall.svg'

const ModalInfoPokemon = (props) => {

    ShowModalInfo(props)
    IndividualPokemon(props)
    var getData = IndividualPokemon(props)

    Object.keys(getData).forEach(key => {
        //console.log(key);
        //  console.log(getData[key]);
    });
    return (
        <div className={`${props.showModal ? 'all-container-modal-info' : 'showInfoModal'}`}>
            <div className='modal-pokemon' style={{ backgroundColor: props.color }}>
                <div className='img-information'>
                    <div className='typeanddamage'>

                        <div className='container-type'>
                            <h2>Type</h2>
                            <div className='pokeball-pleca'>
                                <img alt='pokeball' src='/img/pokeball-pokedex.svg' />
                                Water
                            </div>
                        </div>
                        <div className='container-type'>
                            <div className='pokeball-pleca'>
                                <img alt='pokeball' src='/img/pokeball-pokedex.svg' />
                                Water
                            </div>
                        </div>
                    </div>
                    <div className='images'>
                        <div className='absolute-images'>
                            <div className='pokemonImage'><img alt='pokemon' src='/img/cubone.svg' /></div>
                            <div className='grassImage'><img alt='grass' src={Grass} /></div>
                        </div>
                    </div>
                    <div className='nameandnumber'>
                        <p>Pikachu <br /> #001</p>
                        <div className='container-damage'>
                            <h2>Base EXP</h2>
                            <div className='pokeball-pleca-damage'>
                                <img alt='pokeball' src='/img/pokeball-pokedex.svg' />
                                100atk
                            </div>
                        </div>
                    </div>
                </div>
                <div className='stats-info'>
                    <div className='all-information'>
                        <div className='about'>
                            <div>
                                <p>Height:</p><p>1230</p>
                            </div>
                            <div>
                                <p>Weight:</p><p>129</p>
                            </div>
                        </div>
                        <div className='info-stat-pok'>
                            <div className='graphic'>
                                <p>HP</p><div className='bar-color'><div className='hp-bar'><p>129</p></div></div>
                            </div>
                            <div className='graphic'>
                                <p>Attack</p><div className='bar-color'><div className='attack-bar'><p>129</p></div></div>
                            </div>
                            <div className='graphic'>
                                <p>Special attack</p><div className='bar-color'><div className='special-attack-bar'><p>129</p></div></div>
                            </div>
                            <div className='graphic'>
                                <p>Defense</p><div className='bar-color'><div className='defense-bar'><p>129</p></div></div>
                            </div>
                            <div className='graphic'>
                                <p>Speed</p><div className='bar-color'><div className='speed-bar'><p>129</p></div></div>
                            </div>
                            <div className='graphic'>
                                <p>Special defense</p><div className='bar-color'><div className='special-defense-bar'><p>129</p></div></div>
                            </div>
                        </div>
                        <div className='abilities'>

                        </div>
                    </div>
                    <div className='sprites'>
                        sprites<br />
                    </div>
                    <div className='footer-modal-info'>
                        <button onClick={props.onClose}>Cerrar</button>
                    </div>

                </div>

            </div>
        </div >

    )
}

export default ModalInfoPokemon
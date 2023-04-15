import ShowModalInfo from '../hooks/ShowModalInfo'
import IndividualPokemon from '../hooks/IndividualPokemon'
import '../styles/ModalInfoPokemon.css'

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
                <div className='img-pokemon-info'>
                    <div>
                        focos de pokedex
                    </div>
                    <div>
                        <h2>nombre</h2>
                        <h2>numero</h2>
                    </div>
                    <div>
                        <h2>Type</h2>
                        <div>water</div>
                        <h2>Damage</h2>
                        <div>83838atk</div>
                    </div>
                    <div>
                        <div>pokemon img</div>
                        <div>pasto</div>
                    </div>
                    <div>
                        <div>
                            imagen y pasto
                        </div>
                        <div>
                            informacion
                        </div>
                    </div>
                </div>
                <button onClick={props.onClose}>Cerrar</button>
            </div>
        </div>

    )
}

export default ModalInfoPokemon
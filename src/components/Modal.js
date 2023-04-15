import CirclesPokedex from './style-components/CirclesPokedex'
import PokeballModal from './style-components/PokeballModal'
import ShowModal from '../hooks/ShowModal'
import SoundPokedex from '../assets/sounds/SoundPokedex.mp3'
import '../styles/Modal.css'


const Modal = (props) => {
    ShowModal(props)
    const getProps = props.onClose
    const song = () => {
        const audio = new Audio(SoundPokedex)
        const response = audio.play()
        audio.volume = 0.1
        if (response !== undefined) {
            response.then(_ => {
                // to prevent browser audio error
            }).catch(error => {
                //error
            });
        }
        return getProps
    }

    return (

        <div className={`all-container-modal ${props.showModal ? 'show' : ''}`}>
            <div className="modal-container" onClick={e => e.stopPropagation()}>
                <CirclesPokedex />
                <p className='project-description'>
                    This project was developed to practice ReactJS
                    and front end skills, i used some frameworks for example formik
                    and i used custom hooks too.<br />
                    To create this project i used Poke API and the
                    API to get the pokemon’s strippes
                </p>
                <p className='username-github'>OliverLFJ</p>
                <img className='pokemon-img-modal' alt='cubone' src='/img/cubone.svg' />
                <div className='container-modal-button'>
                    <img alt='button-close' onClick={song()} className='hand-button' src='/img/ketchum-hand.svg' />
                </div>
                <PokeballModal />
            </div>
        </div>
    )
}
export default Modal
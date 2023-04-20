import CirclesPokedex from './style-components/CirclesPokedex'
import PokeballModal from './style-components/PokeballModal'
import ShowModal from '../hooks/ShowModal'
import Cubone from '../assets/images/cubone.svg';
import HandModal from '../assets/images/ketchum-hand.svg';
import '../styles/Modal.css'


const Modal = (props) => {
    ShowModal(props)
    const getProps = props.onClose
    const song = () => {
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
                <img className='pokemon-img-modal' alt='cubone' src={Cubone} />
                <div className='container-modal-button'>
                    <img alt='button-close' onClick={song()} className='hand-button' src={HandModal} />
                </div>
                <PokeballModal />
            </div>
        </div>
    )
}
export default Modal
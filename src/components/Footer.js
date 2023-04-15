import '../styles/Footer.css'
import PokeballFooter from './style-components/PokeballFooter'
const Footer = () => {
    return (
        <div className='footer'>
            <PokeballFooter />
            <div className='footer-container-info'>
                <div className='col1'>
                    <div className='urls-username'>
                        <img className='link-img-discord' src='/img/discord.png' alt='discord logo' />
                        <img className='link-img-github' src='/img/GitHub_Logo_White.png' alt='github logo' />
                    </div>
                </div>
                <div className='col2'>
                    <div className='url-user'>
                        <h3>Jorge Oliver López Fierro</h3>
                        <h3>jorgeoliver.lf@gmail.com</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer

import '../styles/Footer.css'
import PokeballFooter from './style-components/PokeballFooter'
import logoDiscord from '../assets/images/discord.png'
import logoGithub from '../assets/images/GitHub_Logo_White.png'

const Footer = () => {



    const openDiscord = (url) => {
        window.open(url)
    }
    const openGitHub = (url) => {
        window.open(url)
    }
    return (
        <div className='footer'>
            <PokeballFooter />
            <div className='footer-container-info'>
                <div className='col1'>
                    <div className='urls-username'>
                        <img href='www.google.com' onClick={() => openDiscord('https://www.google.com/')} className='link-img-discord' src={logoDiscord} alt='discord logo' />
                        <img onClick={() => openGitHub("https://www.google.com/")} className='link-img-github' src={logoGithub} alt='github logo' />
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

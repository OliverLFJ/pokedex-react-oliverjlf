import '../styles/Header.css';
import '../styles/Pokeball.css';
import Pokeball from './style-components/Pokeball';
import logoProyect from '../assets/images/pokemon-logo.svg'
import pokedexLogo from '../assets/images/pokedex.svg'

const Header = ({ onChildData }) => {
    const handleChange = (event) => {
        const inputValue = event.target.value;
        onChildData(inputValue);
    }
    return (
        <div className='headerLogo'>
            <div className='logo-and-search'>
                <div className='container-img'>
                    <img alt='logo del proyecto' src={logoProyect} />
                </div>
                <div className='form-container'>
                    <form className='form-img-input'>
                        <img className='find-tool-img' src={pokedexLogo} alt='img tool input' />
                        <input className='searchPokemon' onInput={handleChange} name='searchPokemon' placeholder='Find Pokemon by name' />
                    </form>
                </div>
            </div>
            <Pokeball />
        </div>
    );
};

export default Header;

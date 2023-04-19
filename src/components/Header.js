import { useState } from 'react';
import '../styles/Header.css';
import '../styles/Pokeball.css';
import Pokeball from './style-components/Pokeball';

const Header = ({ onChildData }) => {
    const handleChange = (event) => {
        const inputValue = event.target.value;
        onChildData(inputValue);
    }
    return (
        <div className='headerLogo'>
            <div className='logo-and-search'>
                <div className='container-img'>
                    <img alt='logo del proyecto' src='/img/pokemon-logo.svg' />
                </div>
                <div className='form-container'>
                    <form className='form-img-input'>
                        <img className='find-tool-img' src='/img/pokedex.svg' alt='img tool input' />
                        <input className='searchPokemon' onInput={handleChange} name='searchPokemon' placeholder='Find Pokemon by name' />
                    </form>
                </div>
            </div>
            <Pokeball />
        </div>
    );
};

export default Header;

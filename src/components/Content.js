import React, { useEffect, useState } from 'react';
import '../styles/Content.css';
import '../styles/Article.css';
import GetAllPokemons from '../hooks/GetAllPokemons';
import Grass from '../assets/images/pokemonWall.svg';
import Proffesor from '../assets/images/Professor_Oak.png';
import CirclesPokedexArticle from './style-components/CirclesArticle';
import MoreInfo from './MoreInfo';
import ModalInfoPokemon from './ModalInfoPokemon';

const Content = ({ inputValue }) => {
    const [showInfoPokemon, setShowModalInfo] = useState(false);
    const [color, setBackground] = useState('#00000034');
    const [idPoke, setId] = useState('');
    const [listPokemons, setListPokemons] = useState([]);
    const [visiblePokemons, setVisiblePokemons] = useState(20);
    const [filteredPokemons, setFilteredPokemons] = useState([]);

    useEffect(() => {
        const getListPokemons = async () => {
            const data = await GetAllPokemons();
            for (let index = 0; index < data.length; index++) {
                var randomColor = Math.floor(Math.random() * 16777215).toString(16);
                var newColor = `#${randomColor}85`
                if (newColor === "#000000") {
                    index = index--
                } else {
                    data[index]["background"] = newColor;
                    data[index]["id"] = index + 1;
                }
            }
            setListPokemons(data);
        };
        getListPokemons();
    }, []);

    const getData = (event) => {
        setBackground(event.currentTarget.getAttribute('color'));
        setId(event.currentTarget.getAttribute('id'));
        setShowModalInfo(true);
    };

    const handleShowMore = () => {
        setVisiblePokemons(visiblePokemons + 20);
    };
    useEffect(() => {
        setShowModalInfo(false);
        const filterPokemons = () => {
            if (inputValue === '') {
                setFilteredPokemons(listPokemons);
            } else {
                const filtered = listPokemons.filter((pokemon) => pokemon.name.toLowerCase().includes(inputValue.toLowerCase()));
                setFilteredPokemons(filtered);
            }
        };
        filterPokemons();
    }, [inputValue, listPokemons]);
    return (
        <div className='content'>
            <ModalInfoPokemon onClose={() => setShowModalInfo(false)} idPokemon={idPoke} showModal={showInfoPokemon} color={color} />
            <div className='overflow-div'>
                {filteredPokemons.length !== 0 ?
                    <div className='content-article'>
                        {filteredPokemons.slice(0, visiblePokemons).map((pokemon) => (
                            <article style={{ backgroundColor: pokemon.background }} key={pokemon.name} className='info-container-pokemon'>
                                <div className='circles-pokedex'>
                                    <CirclesPokedexArticle />
                                    <h3>{pokemon.id}</h3>
                                </div>
                                <div className='pokemon-information'>
                                    <div className='img-container-pokemon'>
                                        <img className='grass' src={Grass} alt='pokemon img' />
                                        <div className='pokemonImg'>
                                            <img className='pokemon-img' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`} alt='pokemon img' />
                                        </div>
                                    </div>
                                    <div className='information-pokemon'>
                                        <h2>{pokemon.name}</h2>
                                        <div onClick={getData} id={pokemon.id} color={pokemon.background} className='open-modal-information'>
                                            <MoreInfo />
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                    :
                    <div className='no-items'>
                        <div className='spacing-items-ballon'>
                            <div className='img-container-noitems'>
                                <img alt='proffesor Oak' src={Proffesor} />
                            </div>
                            <div className='text-ballon'>
                                <div className='row-text'></div>
                                <div className='text-noitem'>
                                    <div className='text-container-item'><h5>I can't find this pokemon in my database. Try with another one.</h5></div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
            {filteredPokemons.length <= 8 ?
                null
                :
                visiblePokemons < listPokemons.length && (
                    <div onClick={handleShowMore} className='show-more'>
                        <div className='showMoreMid'></div>
                        <div className='showMoreBig'></div>
                    </div>)
            }
        </div>
    );
};

export default Content;

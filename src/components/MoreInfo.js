import pokeBallImg from '../assets/images/pokeball-pokedex.svg';

const MoreInfo = () => {

    return (
        <div className='allInformationContainer'>
            <div className='button-more-info-pokedex'><img alt='pokeball' src={pokeBallImg} /><h5>Information</h5></div>
        </div>

    )
}

export default MoreInfo
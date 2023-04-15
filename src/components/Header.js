import '../styles/Header.css'
import '../styles/Pokeball.css'
import Pokeball from './style-components/Pokeball'
import { Field, Form, Formik } from 'formik'

const Header = () => {
    return (
        <div className='headerLogo'>
            <div className='logo-and-search'>
                <div className='container-img'>
                    <img alt='logo del proyecto' src='/img/pokemon-logo.svg' />
                </div>
                <div className='form-container'>
                    <Formik
                        initialValues={{
                            searchPokemon: ''
                        }}
                    >
                        <Form className='form-img-input'>
                            <img className='find-tool-img' src='/img/pokedex.svg' alt='img tool input' />
                            <Field className='searchPokemon' name="searchPokemon" placeholder='Find Pokemon by name' />
                        </Form>
                    </Formik>
                </div>
            </div>
            <Pokeball />
        </div>

    )
}

export default Header

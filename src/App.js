import { useEffect, useState } from 'react'
import Container from "./components/Container"
import Header from "./components/Header"
import Content from "./components/Content"
import Footer from "./components/Footer"
import Modal from "./components/Modal"
import './styles/App.css'

const App = () => {
  const [showModal, setShowModal] = useState()
  const [findPokemon, setFindPokemon] = useState('');
  useEffect(() => {
    setTimeout(() => setShowModal(true), 300);
  }, [])


  const handleChildData = (data) => {
    setFindPokemon(data);
  }
  return (

    <Container>
      <Modal onClose={() => setShowModal(false)} showModal={showModal} />
      <Header onChildData={handleChildData} />
      <Content inputValue={findPokemon} />
      <Footer />
    </Container>
  )
}

export default App
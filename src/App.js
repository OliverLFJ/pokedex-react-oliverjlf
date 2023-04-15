import { useEffect, useState } from 'react'
import Container from "./components/Container"
import Header from "./components/Header"
import Content from "./components/Content"
import Footer from "./components/Footer"
import Modal from "./components/Modal"
import './styles/App.css'

const App = () => {
  const [showModal, setShowModal] = useState()
  useEffect(() => {
    setTimeout(() => setShowModal(true), 300);
  }, [])

  return (

    <Container>
      <Modal onClose={() => setShowModal(false)} showModal={showModal} />
      <Header />
      <Content  />
      <Footer />
    </Container>
  )
}

export default App
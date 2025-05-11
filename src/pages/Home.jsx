import React from 'react'
import ResponsiveAppBar from '../components/Navbar.jsx'
import '../styles.css'
import Footer from '../components/Footer.jsx'
import { Container } from '@mui/material'
import ImageCarousel from '../components/ImageCarousel.jsx'
import Servicios from '../components/Servicios.jsx'
import Contacto from '../components/Contacto.jsx'
import Comentarios from '../components/Comentarios'




function Home() {
  return (
    <>
    <ResponsiveAppBar />
    <ImageCarousel />
    <Container>
      <Servicios />
      <Comentarios />
      <Contacto />
      <Footer />
    </Container>
    </>
  )
}

export default Home

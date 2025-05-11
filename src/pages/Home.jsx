import React from 'react'
import ResponsiveAppBar from '../components/Navbar.jsx'
import '../styles.css'
import Footer from '../components/Footer.jsx'
import { Container } from '@mui/material'
import ImageCarousel from '../components/ImageCarousel.jsx'
import Servicios from '../components/Servicios.jsx'
import Contacto from '../components/Contacto.jsx'



function Home() {
  return (
    <>
    <ResponsiveAppBar />
    <ImageCarousel />
    <Container>
      <Servicios />
      <Contacto />
      <Footer />
    </Container>
    </>
  )
}

export default Home

import { Box, Fade } from '@mui/material'
import { useEffect, useState } from 'react'
import img1 from '../assets/carousel-1.jpg'
import img2 from '../assets/carousel-2.jpg'
import img3 from '../assets/carousel-3.jpg'
import img4 from '../assets/carousel-4.jpg'

const images = [img1, img2, img3, img4]

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [fadeIn, setFadeIn] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false)
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
        setFadeIn(true)
      }, 500)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Box sx={{ width: '100%', height: '400px', overflow: 'hidden' }}>
    <Fade in={fadeIn} timeout={500}>
      <Box
        component="img"
        src={images[currentIndex]}
        alt={`carousel-${currentIndex}`}
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
        }}
      />
    </Fade>
    <marquee>
      <h1 style={{ color: 'white', fontSize: '30px', textAlign: 'center' }}>
        Bienvenidos a la Municipalidad de Chol-Chol
      </h1>
    </marquee>
  </Box>
  )
}

export default ImageCarousel
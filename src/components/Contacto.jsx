import { useState } from 'react'
import { Box, TextField, Typography, Button, Alert, Grid } from '@mui/material'

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    mensaje: '',
  })

  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validar = () => {
    const nuevosErrores = {}

    if (!formData.nombre.trim()) nuevosErrores.nombre = 'El nombre es requerido'
    if (!formData.correo.trim()) {
      nuevosErrores.correo = 'El correo es requerido'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.correo)) {
      nuevosErrores.correo = 'Correo no válido'
    }

    if (!formData.mensaje.trim()) nuevosErrores.mensaje = 'El mensaje es requerido'

    setErrors(nuevosErrores)
    return Object.keys(nuevosErrores).length === 0
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })

    setSubmitted(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validar()) {
      setSubmitted(true)
      setFormData({ nombre: '', correo: '', mensaje: '' })
      setErrors({})
    }
  }

  const styleInput = {
            '& input:-webkit-autofill': {
            WebkitBoxShadow: '0 0 0 1000px transparent inset',
            WebkitTextFillColor: '#1595a1',
            transition: 'background-color 5000s ease-in-out 0s',
            },
            '& .MuiInputLabel-root': {
            color: '#1595a1',
            },
            '& .MuiInputLabel-root.Mui-focused': {
            color: '#fff',
            },
            '& .MuiOutlinedInput-root': {
              borderRadius: '4px',
              color: '#1595a1',
              '& fieldset': {
                borderColor: '#1595a1',
              },
              '&:hover fieldset': {
                borderColor: '#08d6e9',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#1595a1',
              },
              '& input::placeholder': {
                color: '#1595a1',
                opacity: 1,
              },
            },
            input: {
              color: '#1595a1',
            },
  }

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', py: 6, px: 2 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Contáctanos
      </Typography>

      <form onSubmit={handleSubmit} noValidate>
        <TextField
          fullWidth
          label="Nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          error={!!errors.nombre}
          helperText={errors.nombre}
          margin="normal"
          sx={styleInput}
        />

        <TextField
          fullWidth
          label="Correo electrónico"
          name="correo"
          value={formData.correo}
          onChange={handleChange}
          error={!!errors.correo}
          helperText={errors.correo}
          margin="normal"
          sx={styleInput}
        />

        <TextField
          fullWidth
          label="Mensaje"
          name="mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          error={!!errors.mensaje}
          helperText={errors.mensaje}
          multiline
          rows={4}
          margin="normal"
          sx={styleInput}
        />

        <Box sx={{ textAlign: 'center', mt: 2 }}>
          <Button variant="contained" type="submit">
            Enviar
          </Button>
        </Box>

        {submitted && (
          <Grid container justifyContent="center">
            <Alert severity="success" sx={{ mt: 3, backgroundColor: 'transparent', color: '#fff' }}>
                Mensaje enviado correctamente!
            </Alert>
          </Grid>
        )}
      </form>
    </Box>
  )
}

export default Contacto
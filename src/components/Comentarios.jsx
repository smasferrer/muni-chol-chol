import { useState } from 'react'
import {Box,TextField,Button,Typography,Card,CardContent,IconButton, Modal} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

const estiloModal = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#012d3e ',
  borderRadius: 2,
  boxShadow: 24,
  p: 4
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
    mb: 2,
};

export default function ComentariosConModal() {
  const [nombre, setNombre] = useState('')
  const [comentario, setComentario] = useState('')
  const [listaComentarios, setListaComentarios] = useState([])
  const [open, setOpen] = useState(false)

  const abrirModal = () => setOpen(true)
  const cerrarModal = () => setOpen(false)

  const manejarEnvio = () => {
    if (nombre.trim() === '' || comentario.trim() === '') return

    const nuevoComentario = {
      id: Date.now(),
      nombre,
      texto: comentario
    }

    setListaComentarios([...listaComentarios, nuevoComentario])
    setNombre('')
    setComentario('')
    cerrarModal()
  }

  const eliminarComentario = (id) => {
    setListaComentarios(listaComentarios.filter((c) => c.id !== id))
  }

  return (
    <Box sx={{ mt: 4, textAlign: 'center' }}>
      <Typography variant="h5" gutterBottom>
        Te gustó nuestro sitio web? entonces te invitamos a...
      </Typography>

      <Button variant="contained" onClick={abrirModal} sx={{ mb: 3 }}>
        Agregar comentario
      </Button>

      <Modal open={open} onClose={cerrarModal}>
        <Box sx={estiloModal}>
          <Typography variant="h6" mb={2}>Nuevo comentario</Typography>
          <TextField
            label="Nombre"
            fullWidth
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            sx={styleInput}
            />
          <TextField
            label="Comentario"
            fullWidth
            multiline
            rows={3}
            value={comentario}
            onChange={(e) => setComentario(e.target.value)}
            sx={styleInput}
          />
          <Button variant="contained" onClick={manejarEnvio} fullWidth>
            Enviar comentario
          </Button>
        </Box>
      </Modal>

      {listaComentarios.map((coment) => (
        <Card key={coment.id} sx={{ mb: 2 }}>
          <CardContent sx={{ display: 'flex', justifyContent: 'space-between', backgroundColor: '#1595a1' }}>
            <Box>
              <Typography sx={{fontSize: '18px', fontWeight: 700, textAlign: 'left'}} variant="subtitle1">{coment.nombre}</Typography>
              <Typography sx={{fontStyle: 'italic'}} variant="body2">{coment.texto}</Typography>
            </Box>
            <IconButton onClick={() => eliminarComentario(coment.id)} sx={{ textAlign: 'right'}} >
              <DeleteIcon />
            </IconButton>
          </CardContent>
        </Card>
      ))}
    </Box>
  )
}
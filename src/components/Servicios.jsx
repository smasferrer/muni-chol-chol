import {Typography,Grid,Card,CardContent,CardActions,Button,Box,} from '@mui/material';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import DescriptionIcon from '@mui/icons-material/Description';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import CrueltyFreeIcon from '@mui/icons-material/CrueltyFree';

const servicios = [
    {
        icon: <DescriptionIcon sx={{ fontSize: 90, color: '#1595a1' }} />,
        titulo: 'Permisos de circulación',
        descripcion: 'Gestiona y renueva tu permiso de circulación de forma rápida y segura desde el portal municipal.',
      },
      {
        icon: <SupportAgentIcon sx={{ fontSize: 90, color: '#1595a1' }} />,
        titulo: 'Salud municipal',
        descripcion: 'Accede a información y reservas en los centros de salud familiar (CESFAM) de la comuna.',
      },
      {
        icon: <LocalActivityIcon sx={{ fontSize: 90, color: '#1595a1' }} />,
        titulo: 'Educación comunal',
        descripcion: 'Infórmate sobre matrículas, becas y actividades en los establecimientos educacionales municipales.',
      },
      {
        icon: <CrueltyFreeIcon sx={{ fontSize: 90, color: '#1595a1' }} />,
        titulo: 'Medioambiente y reciclaje',
        descripcion: 'Consulta puntos limpios, campañas de reciclaje y programas de educación ambiental.',
      }
];

const Servicios = () => {
    return (
        <Box sx={{ py: 6, px: 2, width: '100%' }}>
            <Typography
                variant="h4"
                align="center"
                gutterBottom
                sx={{ mb: 6, mt: 4, fontSize: '2.5rem' }}
            >
                Servicios Municipales
            </Typography>

            <Grid container spacing={3} justifyContent="center">
                {servicios.map((servicio, index) => (
                <Grid
                    container 
                    spacing={2}
                    size={{ xs: 12, sm: 6, md: 3 }}
                    sx={{ flexGrow: 1 }}
                    >
                        <Card
                            sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            background: 'transparent',
                            color: '#fff',
                            border: '1px solid #1595a1',
                            p: 2,
                            width: '100%',
                            height: '100%',
                            mx: 'auto',
                            textAlign: 'center',
                            alignItems: 'center',
                            }}
                        >
                            {servicio.icon}
                            <CardContent sx={{ flexGrow: 1 }}>
                            <Typography variant="h6">
                                {servicio.titulo}
                            </Typography>
                            <Typography variant="body2">
                                {servicio.descripcion}
                            </Typography>
                            </CardContent>
                            <CardActions sx={{ justifyContent: 'center' }}>
                            <Button size="large" variant="outlined" sx={{ color: '#1595a1', borderColor: '#1595a1' }}>
                                Ver más
                            </Button>
                            </CardActions>
                        </Card>
                </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Servicios;
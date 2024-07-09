import { AppBar, Button, Container, Grid, IconButton, TextField, Toolbar, Typography } from "@mui/material";
import { Facebook, Twitter, Instagram } from '@mui/icons-material';

export const Footer = () => {
  return (
   <AppBar position="static" color="primary">
      <Toolbar>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" color="inherit">
                Síguenos en redes sociales:
              </Typography>
              <IconButton color="inherit" aria-label="Facebook">
                <Facebook />
              </IconButton>
              <IconButton color="inherit" aria-label="Twitter">
                <Twitter />
              </IconButton>
              <IconButton color="inherit" aria-label="Instagram">
                <Instagram />
              </IconButton>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" color="inherit">
                Sobre nosotros:
              </Typography>
              <Typography variant="body2" color="inherit">
                Aquí puedes escribir una breve descripción sobre tu empresa o proyecto.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" color="inherit">
                Contáctanos:
              </Typography>
              <Typography variant="body2" color="inherit">
                Email: ejemplo@ejemplo.com
              </Typography>
              <Typography variant="body2" color="inherit">
                Teléfono: +123456789
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" color="inherit">
                Suscríbete:
              </Typography>
              <TextField
                variant="outlined"
                placeholder="Tu correo electrónico"
                fullWidth
                InputProps={{
                  endAdornment: (
                    <Button variant="contained" color="success">
                      Suscribirse
                    </Button>
                  ),
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
  )
}

import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import artwork from './artwork.json';
import { useState } from 'react';
import { ColorLens } from '@mui/icons-material';
import { Avatar } from '@mui/material';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © 2022 Nate Howard'}
    </Typography>
  );
}

const theme = createTheme();

export default function Album() {

  const [artworks] = useState(artwork?.art ?? []);
  const [artist, setArtist] = useState('Nate Howard');
  const artSelection = artworks.filter((x) => { return x.artist.includes(artist)});

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar className="bannerImage" position="relative">
        <Toolbar>
          <ColorLens sx={{ mr: 2 }} />
          <Typography variant="h5" color="lavender" noWrap>
            Nate Howard's Art Gallery
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <br></br>

        <audio id="myAudio" autoPlay={true} controls loop>
          <source src="/music/pour_your_heart_out.ogg" type="audio/ogg" />
        </audio>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6
          }}
        >
          <Container maxWidth="sm">
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
                Acrylic pour and paintings by Nate Howard and his daughter, Evie Howard
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button onClick={() => setArtist('Nate Howard')} variant={artist == 'Nate Howard' ? "contained" : "outlined"}>
                <Avatar alt="Remy Sharp" src="/nate.jpeg" /> &nbsp; Nate Howard
              </Button>
              <Button onClick={() => setArtist('Evie Howard')} variant={artist == 'Evie Howard' ? "contained" : "outlined"}>
              <Avatar alt="Remy Sharp" src="/evie.jpeg" /> &nbsp; Evie Howard
              </Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {artSelection.map((art, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '2',
                    }}
                    image={`artwork/${art.img}`}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {art.title}
                    </Typography>
                    <Typography>
                      ©{art.artist} 2022
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 8 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
        "Talent is a pursued interest. Anything that you’re willing to practice, you can do." -Bob Ross
        </Typography>
        <Typography
          variant="caption"
          align="center"
          color="text.secondary"
          component="p"
        >
          ~Nate Howard's Art Gallery~
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
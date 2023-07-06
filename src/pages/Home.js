import * as React from 'react';
import { CardActionArea } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useFetcher, useNavigate } from 'react-router-dom';
import MyCard from '../components/MyCard';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import BuildIcon from '@mui/icons-material/Build';





const defaultTheme = createTheme();


export default function Home() {
    const navigate = useNavigate();

    return (
    
            <main>
                <Container sx={{ py: 5 }} maxWidth="lg">
                    <Grid container spacing={4} justifyContent="center">
                        <Grid item xs={12} sm={4} md={3}>
                            <CardActionArea onClick={() => navigate('/servicos/')}>
                                <Card
                                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                >
                                    {/* <img src={require(path)} /> */}
                                    <CardMedia
                                        component="div"
                                        sx={{
                                            // 16:9

                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <SearchIcon sx={{ fontSize: '10rem' }} />
                                    </CardMedia>
                                    <CardContent sx={{ flexGrow: 1, height: 80 }}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Encontrar Serviço
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </CardActionArea>
                        </Grid>
                        <Grid item xs={12} sm={4} md={3}>
                            <CardActionArea onClick={() => navigate('/cadastrar/')}>
                                <Card
                                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                >
                                    {/* <img src={require(path)} /> */}
                                    <CardMedia
                                        component="div"
                                        sx={{
                                            // 16:9

                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <BuildIcon sx={{ fontSize: '10rem' }} />
                                    </CardMedia>
                                    <CardContent sx={{ flexGrow: 1, height: 80 }}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Oferecer Serviço
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </CardActionArea>
                        </Grid>
                    </Grid>
                </Container>
            </main>
    );
}
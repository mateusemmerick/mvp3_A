import * as React from 'react';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import SellIcon from '@mui/icons-material/Sell';

export default function Home() {
    const navigate = useNavigate();
    return (
        <main>
            <div style={{ margin: '3rem' }}>
            Explore a nossa plataforma online dedicada à busca e comercialização de iPhones usados de qualidade, onde você pode descobrir o dispositivo perfeito e também vender o seu com total praticidade e segurança.
            </div>
            <Container sx={{ py: 5 }} maxWidth="lg">
                <Grid container spacing={4} justifyContent="center">
                    <Grid item xs={12} sm={4} md={3}>
                        <CardActionArea onClick={() => navigate('/produtos/')}>
                            <Card
                                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                            >
                                <CardMedia
                                    component="div"
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <SearchIcon sx={{ fontSize: '10rem' }} />
                                </CardMedia>
                                <CardContent sx={{ flexGrow: 1, height: 80, alignSelf: 'center' }}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Buscar iPhone
                                    </Typography>
                                </CardContent>
                            </Card>
                        </CardActionArea>
                    </Grid>
                    <Grid item xs={12} sm={4} md={3}>
                        <CardActionArea onClick={() => navigate('/vender/')}>
                            <Card
                                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                            >
                                <CardMedia
                                    component="div"
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <SellIcon sx={{ fontSize: '10rem' }} />
                                </CardMedia>
                                <CardContent sx={{ flexGrow: 1, height: 80, alignSelf: 'center' }}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Vender iPhone
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
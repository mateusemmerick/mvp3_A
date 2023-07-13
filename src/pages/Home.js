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
import BuildIcon from '@mui/icons-material/Build';

export default function Home() {
    const navigate = useNavigate();
    return (
        <main>
            <div style={{ margin: '3rem' }}>
                Precisa de ajuda para encontrar um profissional confiável para realizar aquele serviço que tanto precisa? Ou talvez você seja um talento em busca de oportunidades para oferecer suas habilidades? Bem, você está no lugar certo!
                Aqui no Serviços Já, oferecemos uma plataforma fácil e conveniente para conectar pessoas que buscam serviços e profissionais experientes em diversas áreas. Seja você um indivíduo com tarefas domésticas, necessidades de manutenção ou até mesmo alguém em busca de aulas particulares, estamos aqui para ajudar.
                Selecione uma das opções abaixo.
            </div>
            <Container sx={{ py: 5 }} maxWidth="lg">
                <Grid container spacing={4} justifyContent="center">
                    <Grid item xs={12} sm={4} md={3}>
                        <CardActionArea onClick={() => navigate('/servicos/')}>
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
                                <CardMedia
                                    component="div"
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <BuildIcon sx={{ fontSize: '10rem' }} />
                                </CardMedia>
                                <CardContent sx={{ flexGrow: 1, height: 80, alignSelf: 'center' }}>
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
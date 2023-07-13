import * as React from 'react';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import MyCard from '../components/MyCard';
import Search, { search } from '../components/Search';
import Breadcrumbs from '../components/Breadcrumbs';
import axios from 'axios';

export default function MainServicos() {
    const navigate = useNavigate();
    const mySearchParams = ["name", "description"];
    const [services, setServices] = useState([]);
    const [filteredServices, setFilteredServices] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('/mainServices.json'); 
            const data = response.data;
            setServices(data);
            setFilteredServices(data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);

    function handleSearch(query) {
        const filteredItems = search(services, mySearchParams, query);
        setFilteredServices(filteredItems);
    }
    const breadcrumbArray = ["Serviços", 0];
    return (
        <main>
            <Breadcrumbs arr={breadcrumbArray} />
            <Search searchParams={mySearchParams} onSearch={handleSearch} />
            <Container sx={{ py: 8 }} maxWidth="lg">
                <Grid container spacing={4}>
                    {filteredServices.map((service, index) => (
                        <Grid item key={index} xs={12} sm={4} md={3}>
                            <CardActionArea onClick={() => navigate('/servicos/' + service.id)}>
                                <MyCard key={index} item={service} />
                            </CardActionArea>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </main>
    );
}
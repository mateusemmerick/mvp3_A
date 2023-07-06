import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { styled } from '@mui/system';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useParams, useNavigate} from 'react-router-dom';
import { useState } from 'react';
import TextField from '@mui/material/TextField'

import MyCard from '../components/MyCard'
import services from '../data/services.json'
import Breadcrumbs from '../components/Breadcrumbs';


import Search, {search} from '../components/Search';

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();


export default function Servicos() {  
  const params = useParams();
  const navigate = useNavigate();
  const [filteredServices, setFilteredServices] = useState([]);
  const subServices = services.filter(service => service.groupId === params.id * 1);  
  const mySearchParams = ["name", "description"];   
  
  function handleSearch(query){
    const filteredItems = search(subServices, mySearchParams, query);
    setFilteredServices(filteredItems);
  }



// pra breadcrumbs  const mainServiceName = services.find(service => service.groupId === params.id *1).groupName;  
const mainService = services.find(service => service.groupId === params.id *1);  
const breadcrumbArray = ["Serviços", 0, mainService.groupName, mainService.groupId];

  return (
      <main> 
        <Breadcrumbs  arr={breadcrumbArray} />       
        <Search searchParams={mySearchParams} onSearch={handleSearch} />
        <Container sx={{ py: 8 }} maxWidth="lg">
          <Grid container spacing={4}>
            {filteredServices.map((service, index) => (
              <Grid item key={index} xs={12} sm={4} md={3}>
                <CardActionArea onClick={() => navigate('/servicos/' + service.groupId + '/profissionais/' + service.serviceId)}>
                  <MyCard key={index} item={service} />
                </CardActionArea>
              </Grid>
            ))}
          </Grid>
        </Container>        
      </main>
  );
}
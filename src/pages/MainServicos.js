import * as React from 'react';
import {CardActionArea} from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useFetcher, useNavigate } from 'react-router-dom';
import { useState, useEffect} from 'react';
import MyCard from '../components/MyCard';


// verificar se precisa fazer de alguma outra maneira.
import mainServices from '../data/mainServices.json'
/////////////


import Search, {search} from '../components/Search';
import Breadcrumbs from '../components/Breadcrumbs';



const defaultTheme = createTheme();


export default function MainServicos() {   
  const navigate = useNavigate();  
  const mySearchParams = ["name", "description"];
  
  const [filteredServices, setFilteredServices] = useState([]);

  function handleSearch(query){
    const filteredItems = search(mainServices, mySearchParams, query);
    setFilteredServices(filteredItems);
  }
  const breadcrumbArray = ["Serviços", 0];
  return (
            <main>
            <Breadcrumbs  arr={breadcrumbArray} />       
            <Search searchParams={mySearchParams} onSearch={handleSearch} />
                <Container sx={{ py: 8 }} maxWidth="lg">
                    <Grid container spacing={4}>               
                        {filteredServices.map((service, index) => (
                            <Grid item key={index} xs={12} sm={4} md={3}>                                                         
                                <CardActionArea onClick={()=> navigate('/servicos/' + service.id)}>                                                                
                                     <MyCard key={index} item={service} />
                                </CardActionArea>                                           
                            </Grid>                            
                        ))}
                    </Grid>
                </Container>
            </main>       
    );
}
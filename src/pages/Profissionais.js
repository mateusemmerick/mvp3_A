import React from 'react'
import CardProf from '../components/CardProf';

import { useState } from 'react';
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { useParams, useNavigate} from 'react-router-dom';

import professionals from '../data/professionals.json'
import Search, {search} from '../components/Search';


export default function Profissionais() {
  const params = useParams();    
  const [filteredProfessionals, setFilteredProfessionals] = useState([]);
  const professionalsList = professionals.filter(professional => professional.serviceId === params.id2 * 1);
  const mySearchParams = ["name", "local"];  

  function handleSearch(query){
    const filteredItems = search(professionalsList, mySearchParams, query);
    setFilteredProfessionals(filteredItems);
  }
 
  return (
    <main>
      <Search searchParams={mySearchParams} onSearch={handleSearch} />
      <Container sx={{ py: 8 }} maxWidth="lg">
        <Grid container spacing={4}>
          {filteredProfessionals.map((professional, index) => (
            <Grid item key={index} xs={12} sm={4} md={3}>
              <CardProf item={professional}/>              
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
  );
}
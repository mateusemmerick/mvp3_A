import React from 'react'
import CardProf from '../components/CardProf';
import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { useParams } from 'react-router-dom';
import Search, { search } from '../components/Search';
import Breadcrumbs from '../components/Breadcrumbs';
import axios from 'axios';

export default function Profissionais() {
  const params = useParams();
  const [mainService, setMainService] = useState([]);
  const [professionals, setProfessionals] = useState([]);
  const [filteredProfessionals, setFilteredProfessionals] = useState([]);
  const id = params.id2 * 1;

  useEffect(() => {
    const fetchData = async (id) => {
      try {
        const [servicesResponse, professionalsResponse] = await Promise.all([
          axios.get('/services.json'),
          axios.get('/professionals.json')
        ]);        
        const serviceData = servicesResponse.data.filter(service => service.serviceId === id)[0];
        const professionalData = professionalsResponse.data.filter(professional => professional.serviceId === id);      
        setMainService(serviceData);
        setProfessionals(professionalData);
        setFilteredProfessionals(professionalData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData(id);
  }, [id]);
 
  const mySearchParams = ["name", "local"];
  function handleSearch(query) {
    const filteredItems = search(professionals, mySearchParams, query);
    setFilteredProfessionals(filteredItems);
  }  
  const breadcrumbArray = ["Serviços", 0, mainService.groupName, mainService.groupId, mainService.name, mainService.serviceId];
  return (
    <main>
      <Breadcrumbs arr={breadcrumbArray} />
      <Search searchParams={mySearchParams} onSearch={handleSearch} />
      <Container sx={{ py: 8 }} maxWidth="lg">
        <Grid container spacing={4}>
          {filteredProfessionals.map((professional, index) => (
            <Grid item key={index} xs={12} sm={4} md={3}>
              <CardProf item={professional} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
  );
}

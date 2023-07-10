import * as React from 'react';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import MyCard from '../components/MyCard'
import services from '../data/services.json'
import Breadcrumbs from '../components/Breadcrumbs';
import Search, { search } from '../components/Search';
export default function Servicos() {
  const params = useParams();
  const navigate = useNavigate();
  const [filteredServices, setFilteredServices] = useState([]);
  const subServices = services.filter(service => service.groupId === params.id * 1);
  const mySearchParams = ["name", "description"];
  function handleSearch(query) {
    const filteredItems = search(subServices, mySearchParams, query);
    setFilteredServices(filteredItems);
  }
  const mainService = services.find(service => service.groupId === params.id * 1);
  const breadcrumbArray = ["Serviços", 0, mainService.groupName, mainService.groupId];
  return (
    <main>
      <Breadcrumbs arr={breadcrumbArray} />
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
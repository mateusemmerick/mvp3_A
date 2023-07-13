import * as React from 'react';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import MyCard from '../components/MyCard'
import Breadcrumbs from '../components/Breadcrumbs';
import Search, { search } from '../components/Search';
import axios from 'axios';


export default function Servicos() {
  const params = useParams();
  const navigate = useNavigate();
  const [services, setServices] = useState([]);
  const [mainService, setMainServices] = useState([]);
  const [filteredServices, setFilteredServices] = useState([]);
  const id = params.id * 1;

  useEffect(() => {
    const fetchData = async (id) => {
      try {
        const response = await axios.get('/services.json'); 
        const subServices = response.data.filter(service => service.groupId === id)
        if(subServices.length > 0){
        const mainService = subServices.find((service) => service.groupId === id);
        setMainServices(mainService);
        }        
        setServices(subServices);
        setFilteredServices(subServices);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(id);
  }, [id]);

  const mySearchParams = ["name", "description"];
  function handleSearch(query) {
    const filteredItems = search(services, mySearchParams, query);
    setFilteredServices(filteredItems);
  }
  
  const breadcrumbArray = ['Serviços', 0, mainService.groupName, mainService.groupId]
  // const breadcrumbArray = mainService
  //   ? ['Serviços', 0, mainService.groupName, mainService.groupId]
  //   : [];

  return (
    <main>
      {/* {breadcrumbArray.length > 0 && <Breadcrumbs arr={breadcrumbArray} />} */}
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
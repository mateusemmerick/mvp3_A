import * as React from 'react';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import MyProductCard from '../components/MyProductCard'
import axios from 'axios';


export default function Produtos() {
    const url = 'http://localhost:5000/estoque'
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
 
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url);             
                const products = response.data.estoque;
                setProducts(products);
                console.log(products)
            }
            catch (error) {
                console.error('Error fetching data:', error);
            }
        }; 
        fetchData();
    }, [])  

    return (
        <main>    
            <Container sx={{ py: 8 }} maxWidth="lg">
                <Grid container spacing={4}>
                    {products.map((product, index) => (
                        <Grid item key={index} xs={12} sm={4} md={3}>
                            <CardActionArea onClick={() => navigate('/produtos/' + product.id )}>
                                <MyProductCard key={index} item={product} />
                            </CardActionArea>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </main>
    );
}
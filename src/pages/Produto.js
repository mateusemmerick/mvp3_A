import * as React from 'react';
import Container from '@mui/material/Container';
import MyButton from '../components/MyButton.js';
import Loading from '../components/Loading.js';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Typography from '@mui/material/Typography';



export default function Produto() {
    const navigate = useNavigate();
    const params = useParams();
    const id = params.id * 1;
    const url = 'http://localhost:5000/produto';
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    const buttonProps = {
        text: 'Comprar',
        icon: <PriceCheckIcon />,
        iconRotation: 0,
        textBefore: true,
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url + "?id=" + id);
                setProduct(response.data);
            }
            catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData(id);
    }, [id])

    const buy = async () => {
        const url = "http://localhost:5000/produto?id=" + product.id;
        setLoading(true)
        try {
            await axios.delete(url);
            navigate('/')
        }
        catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false)
        }
        const urlVenda = "http://localhost:2000/venda";
        const formData = new FormData();
        const modeloProduto = "iPhone " + product.modelo + " " + product.memoria + " Gb " + product.estado_uso + " " + product.saude + "%";
        formData.append('modelo', modeloProduto);
        formData.append('id_estoque', product.id);
        formData.append('preco', product.preco);
        formData.append('custo_frete', 22.50);
        try {
            await axios.post(urlVenda, formData);
            navigate('/')
        }
        catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false)
        }
        setLoading(false)
        window.alert("Compra efetuada!");
    }

    return (
        <main>
            {loading ? (
                <Loading />
            ) : (
                <Container sx={{ display: 'grid', justifyContent: 'center', alignItems: 'center', marginTop: '2rem' }}>
                    <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
                        iPhone {product.modelo} - R$ {product.preco}
                    </Typography>
                    <Typography variant="body1" color="textSecondary">
                        Memória: {product.memoria} Gb
                    </Typography>
                    <Typography variant="body1" color="textSecondary">
                        Saúde da Bateria: {product.saude} %
                    </Typography>
                    <Typography variant="body1" color="textSecondary">
                        Condição: {product.estado_uso}
                    </Typography>
                    <Typography variant="body1" color="textSecondary">
                        Localização: {product.cidade} - {product.estado}
                    </Typography>
                    {(product.cabo || product.cabo_original || product.carregador || product.carregador_original || product.fone || product.capinha) &&
                        <Typography variant="body1" color="textSecondary">
                            Acessórios:
                        </Typography>
                    }
                    {product.cabo && (
                        <Typography variant="body1" color="textSecondary">
                            Cabo não original
                        </Typography>
                    )}
                    {product.cabo_original && (
                        <Typography variant="body1" color="textSecondary">
                            Cabo não original
                        </Typography>
                    )}
                    {product.carregador && (
                        <Typography variant="body1" color="textSecondary">
                            Carregador não original
                        </Typography>
                    )}
                    {product.carregador_original && (
                        <Typography variant="body1" color="textSecondary">
                            Carregador original
                        </Typography>
                    )}
                    {product.fone && (
                        <Typography variant="body1" color="textSecondary">
                            Com fone
                        </Typography>
                    )}
                    {product.capinha === 1 && (
                        <Typography variant="body1" color="textSecondary">
                            Acompanha 1 capinha
                        </Typography>
                    )}
                    {product.capinha > 1 && (
                        <Typography variant="body1" color="textSecondary">
                            Acompanha {product.capinha} capinhas
                        </Typography>
                    )}
                </Container>
            )}
            {!loading && (
                <Container sx={{ display: 'grid', justifyContent: 'center', alignItems: 'center', marginTop: '2rem' }}>
                    <MyButton type="submit"
                        text={buttonProps.text}
                        icon={buttonProps.icon}
                        iconRotation={buttonProps.iconRotation}
                        textBefore={buttonProps.textBefore}
                        onClick={buy}
                    />
                </Container>
            )}
        </main>
    );
}
import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function MyProductCard({ item }) {

    const { modelo, preco, memoria, saude, estado_uso, cidade, estado, cabo, cabo_original, carregador, carregador_original, fone, capinha } = item;

    return (
        <Card
            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
        >
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
                    iPhone {modelo} - R$ {preco}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    Memória: {memoria} Gb
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    Saúde da Bateria: {saude} %
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    Condição: {estado_uso}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    Localização: {cidade} - {estado}
                </Typography>
                {cabo &&(                    
                <Typography variant="body2" color="textSecondary">
                    Cabo não original
                </Typography>
                )}
                {cabo_original &&(                    
                <Typography variant="body2" color="textSecondary">
                    Cabo não original
                </Typography>
                )}
                {carregador &&(                    
                <Typography variant="body2" color="textSecondary">
                    Carregador não original
                </Typography>
                )}
                {carregador_original &&(                    
                <Typography variant="body2" color="textSecondary">
                    Carregador original
                </Typography>
                )}
                {fone &&(                    
                <Typography variant="body2" color="textSecondary">
                    Com fone
                </Typography>
                )}
                {capinha === 1 && (                    
                <Typography variant="body2" color="textSecondary">
                    Acompanha 1 capinha
                </Typography>
                )}
                {capinha > 1 && (                    
                <Typography variant="body2" color="textSecondary">
                    Acompanha {capinha} capinhas
                </Typography>
                )}
                {/* Add more fields as needed */}
            </CardContent>
        </Card>
    )
}

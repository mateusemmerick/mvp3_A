import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function MyCard({ item }) {
    return (
        <Card
            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
        >
            <CardMedia
                component="div"
                sx={{
                    // 16:9
                    pt: '80.25%',
                }}
                image={item.image}
            />
            <CardContent sx={{ flexGrow: 1, height: 150 }}>
                <Typography gutterBottom variant="h5" component="h2">
                    {item.name}
                </Typography>
                <Typography>
                    {item.description}
                </Typography>
            </CardContent>
        </Card>
    )
}

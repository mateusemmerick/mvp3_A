import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';


export default function CardProf({item}) {
  console.log(item)
  let dollarSigns = '';
  let rating = '';

  if(item.price === 1){
    dollarSigns = "$";
  } else if(item.price === 2){
    dollarSigns = "$$";
  } else if(item.price ===3){
    dollarSigns = "$$$";
  };

  if(item.rating === 1){
    rating = "★☆☆☆☆";
  } else if(item.rating === 2){
    rating = "★★☆☆☆";
  } else if(item.rating === 3){
    rating = "★★★☆☆";
  } else if(item.rating === 4){
    rating = "★★★★☆";
  } else if(item.rating === 5){
    rating = "★★★★★";
  };


  return (
    <Card sx={{ minWidth: 100 }}>
      <CardContent style={{backgroundColor: 'aliceblue'}}>
      <CardHeader
        avatar={
          <Avatar src={item.picture}/>
        }
        action={
          <IconButton aria-label="settings">            
          </IconButton>
        }
        title={item.name}        
      />
        <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
          <LocationOnIcon sx={{fontSize: 'small'}} />  {item.local}
        </Typography>
        <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
        {dollarSigns}
        </Typography>       
        <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
         {rating}
        </Typography>
        <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
         <PhoneIcon sx={{fontSize: 'small'}}/>  {item.phone}
        </Typography>

       

      </CardContent>
    </Card>
  );
}
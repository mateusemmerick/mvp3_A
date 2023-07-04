import React from 'react'
import MyCard from '../components/MyCard'
import Container from '@mui/material/Container';

const sobre ={
  nome:"Serviços Já",
  description: "Nosso objetivo é conectar prestadores de serviços com aqueles que precisam, por meio de uma plataforma simples e intuitiva!",
  image: 'https://source.unsplash.com/random?wallpapers'
}

export default function Sobre() {
  return (
    <Container sx={{ py: 8 }} maxWidth="md">
    <MyCard item={sobre}/>
    </Container>
  )
}



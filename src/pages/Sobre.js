import React from 'react'
import MyCard from '../components/MyCard'
import { Grid, Container } from '@mui/material';
import MyForm from '../components/MyForm';
import SendIconComponent from '@mui/icons-material/Send'

const descricao = "Nosso compromisso é proporcionar uma experiência incomparável para entusiastas da Apple, oferecendo um espaço virtual onde você pode comprar, vender e explorar uma vasta seleção de iPhones usados, todos em um único local confiável."
const sobre = {
  nome: "iPlace",
  description: descricao,
  image: process.env.PUBLIC_URL + '/logo.jpeg'
}
const inputs = [
  { type: 'text', name: 'nome', label: 'Nome' },
  { type: 'text', name: 'mail', label: 'Email' },
  { type: 'text', name: 'phone', label: 'Telefone' },
  { type: 'textarea', name: 'escrevaAqui', label: 'Escreva aqui sua mensagem' },
];

const buttonProps = {
  text: 'Enviar',
  icon: <SendIconComponent />,
  iconRotation: -45,
  textBefore: true,
};

export default function Sobre() {
  return (

    <Container sx={{ marginTop: '2rem' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <MyCard item={sobre} />
        </Grid>
        <Grid item xs={12} sm={8} sx={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><h3>Fale Conosco!</h3></div>
          <MyForm inputs={inputs} buttonProps={buttonProps} />
        </Grid>
      </Grid>
    </Container>
  )
}






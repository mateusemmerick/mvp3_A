import React from 'react'
import MyCard from '../components/MyCard'
import { Grid, Container, Paper } from '@mui/material';
import MyForm from '../components/MyForm';
import SendIconComponent from '@mui/icons-material/Send'

const descricao = "Nosso objetivo é conectar prestadores de serviços com aqueles que precisam, por meio de uma plataforma simples e intuitiva! Estamos aqui para facilitar a busca e contratação de profissionais qualificados, proporcionando uma experiência prática e eficiente para todos os usuários.";
const sobre = {
  nome: "Serviços Já",
  description: descricao,
  image: process.env.PUBLIC_URL + '/_0f0c16b0-b3a9-463c-a57f-2cf71bee3d28.jpeg'
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

      <Container sx={{marginTop: '2rem'}}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>            
              <MyCard item={sobre} />            
          </Grid>
          <Grid item xs={12} sm={8} sx={{marginBottom: '2rem'}}>    
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}><h3>Fale Conosco!</h3></div>                  
            <MyForm inputs={inputs} buttonProps={buttonProps} />            
          </Grid>
        </Grid>   
      </Container>
  )
}






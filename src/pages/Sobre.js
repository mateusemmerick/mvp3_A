import React from 'react'
import MyCard from '../components/MyCard'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Grid, Container, Paper } from '@mui/material';
import MyForm from '../components/MyForm';
import MyButton from '../components/MyButton';
import SendIconComponent from '@mui/icons-material/Send'


const defaultTheme = createTheme();

const sobre = {
  nome: "Serviços Já",
  description: "Nosso objetivo é conectar prestadores de serviços com aqueles que precisam, por meio de uma plataforma simples e intuitiva!",
  image: 'https://source.unsplash.com/random?wallpapers'
}

const inputs = [
    { type: 'text', name: 'nome', label: 'Nome' },
    { type: 'text', name: 'cidade', label: 'Cidade' },    
    { type: 'textarea', name: 'escrevaAqui', label: 'Escreva Aqui' },
  ];

  const SendIcon = <SendIconComponent />;
  const buttonText = 'Send';
  const iconRotation = -45;
  const isTextBefore = true;

export default function Sobre() {
  return (

      <Container sx={{marginTop: '2rem'}}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>            
              <MyCard item={sobre} />            
          </Grid>
          <Grid item xs={12} sm={8} sx={{marginBottom: '2rem'}}>    
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}><h3>Fale Conosco!</h3></div>                  
            <MyForm inputs={inputs} />
            <MyButton icon={SendIcon} text={buttonText} iconRotation={iconRotation} textBefore={isTextBefore}/>
          </Grid>
        </Grid>
      </Container>
  )
}


// definir aqui o que colocar no fale conosco
// alinhar botão do send.



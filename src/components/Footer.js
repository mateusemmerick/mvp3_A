import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const footerStyles = {
  backgroundColor: '#f5f5f5',
  padding: '10px',
  marginTop: 'auto',
};

const contentStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export default function Footer() {
  return (    
    <Box  sx={footerStyles}  component="footer">
      <Typography variant="h6" align="center" gutterBottom>              
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
      >
        Siga nossas redes sociais!
      </Typography>
    <InstagramIcon />
    <FacebookIcon/>
    <TwitterIcon/>
    </Typography>
    </Box>    
  )
}

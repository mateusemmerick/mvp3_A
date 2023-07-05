import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function Footer() {
  return (
    <Box sx={{ bgcolor: '#adadad', p: 1 }} component="footer">
      <Typography variant="h6" align="center" gutterBottom>              
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
      >
        Nos siga nas redes sociais!
      </Typography>
    <InstagramIcon />
    <FacebookIcon/>
    <TwitterIcon/>
    </Typography>
    </Box>
  )
}

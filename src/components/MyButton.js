import React from 'react'
import Button from '@mui/material/Button';

export default function MyButton({text, icon, iconRotation, textBefore}) {
  return (
<Button variant="contained" >
   <div style={{marginRight:'1rem'}}> {textBefore && text}</div>
  <div style={{ transform: `rotate(${iconRotation}deg)`, display: 'inline-block' }}>
    {icon}
  </div>
  <div style={{marginLeft:'1rem'}}> {!textBefore && text}</div>
</Button>
  )
}

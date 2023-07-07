import React from 'react'
import Button from '@mui/material/Button';

export default function MyButton({ text, icon, iconRotation, textBefore }) {
  return (
    <Button type="submit" variant="contained">
      {textBefore && <div style={{ marginRight: '1rem' }}>{text}</div>}
      <div style={{ transform: `rotate(${iconRotation}deg)`, display: 'inline-block' }}>
        {icon}
      </div>
      {!textBefore && <div style={{ marginLeft: '1rem' }}>{text}</div>}
    </Button>
  )
}

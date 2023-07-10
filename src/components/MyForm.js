import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import MyButton from '../components/MyButton';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';

const MyForm = ({ inputs, buttonProps }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(formData));
    navigate('/');
  };

  return (
    <Container maxWidth="sm" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <form onSubmit={handleSubmit}>
        {inputs.map((input) => {
          const { type, name, label, options } = input;
          switch (type) {
            case 'text':
              return (
                <TextField
                  key={name}
                  name={name}
                  label={label}
                  value={formData[name] || ''}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                />
              );
            case 'select':
              return (
                <TextField
                  key={name}
                  name={name}
                  label={label}
                  select
                  value={formData[name] || ''}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                >
                  {options.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              );
            case 'textarea':
              return (
                <TextField
                  key={name}
                  name={name}
                  label={label}
                  multiline
                  rows={4}
                  value={formData[name] || ''}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                />
              );
            default:
              return null;
          }
        })}
        <div style={{ float: 'right' }}>
          <MyButton type="submit"
            text={buttonProps.text}
            icon={buttonProps.icon}
            iconRotation={buttonProps.iconRotation}
            textBefore={buttonProps.textBefore} />
        </div>
      </form>
    </Container>
  );
};
export default MyForm;
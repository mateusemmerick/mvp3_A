import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const MyInput = ({ name, label, type, options, onChange, value }) => {
  const handleChange = (event) => {
    onChange(name, event.target.value);
  };

  if (type === 'select') {
    return (
      <TextField
        name={name}
        label={label}
        select
        value={value !== undefined ? value : ''}
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
  } else {
    return (
      <TextField
        name={name}
        label={label}
        type={type}
        value={value || ''}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
    );
  }
};

export default MyInput;

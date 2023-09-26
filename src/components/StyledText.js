import React from 'react';
import TextField from '@mui/material/TextField';

const StyledText = ({ label, value }) => {
  return (
    <TextField
      label={label}
      value={value || ''}
      fullWidth
      margin="normal"
      InputProps={{
        readOnly: true, // Makes the input field read-only
      }}
    />
  );
};

export default StyledText;

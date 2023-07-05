import React, { useEffect } from 'react'
import TextField from '@mui/material/TextField'
import { useState } from 'react';

export function search(items, searchParams, q) {
  const regex = new RegExp(q.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""), 'i');

  return items.filter((item) => {
    return searchParams.some((newItem) => {
      const value = item[newItem].toString().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      return regex.test(value);
    });
  });
}

export default function Search({ searchParams, onSearch }) {
  const [q, setQ] = useState("");

  function handleSearchInputChange(e) {
    const query = e.target.value;
    setQ(query);
    onSearch(query);
  }

  useEffect(() => {
    onSearch(q);
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '1rem' }}>
      <TextField
        id="outlined-basic"
        label="Buscar"
        variant="outlined"
        style={{ width: '25%' }}
        onChange={handleSearchInputChange}
      />
    </div>
  );
}
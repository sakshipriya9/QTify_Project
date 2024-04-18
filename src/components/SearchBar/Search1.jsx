import { Autocomplete, TextField } from '@mui/material';
import React, { useState } from 'react';
import './SearchBar.css';
import { Search } from '@mui/icons-material';

export default function Search1({ className, data }) {
  const [values, setValues] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setValues(e.target.value);
  };

  const menuList = data ? data.map((option) => ({
    title: option.title,
    image: option.image,
    follows: option.follows,
  })) : [];

  return (
    <form onSubmit={handleSubmit}>
      <div className={className}>
        <Autocomplete
          fullWidth
          freeSolo
          id="free-solo-2-demo"
          disableClearable
          options={menuList}
          getOptionLabel={(option) => option.title}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search a song of your choice"
              placeholder="Search"
              InputProps={{
                ...params.InputProps,
                type: 'search',
              }}
              value={values}
              onChange={handleChange}
            />
          )}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              event.defaultMuiPrevented = true;
            }
          }}
        />
        <button type="submit" className="searchbar-icons">
          <Search />
        </button>
      </div>
    </form>
  );
}

import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const AddSongForm = ({ onSubmit }) => {
  const [song, setSong] = useState({ name: '', artist: '', genre: '' });

  const handleChange = (e) => setSong({ ...song, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(song);
    setSong({ name: '', artist: '', genre: '' });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        maxWidth: '300px',
      }}
    >
      <TextField
        label="Song Name"
        name="name"
        value={song.name}
        onChange={handleChange}
        required
      />
      <TextField
        label="Artist"
        name="artist"
        value={song.artist}
        onChange={handleChange}
        required
      />
      <TextField
        label="Genre"
        name="genre"
        value={song.genre}
        onChange={handleChange}
        required
      />
      <Button type="submit" variant="contained" color="primary">
        Add Song
      </Button>
    </Box>
  );
};

export default AddSongForm;

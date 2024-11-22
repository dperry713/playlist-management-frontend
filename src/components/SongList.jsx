import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

const SongList = ({ songs, onDelete }) => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
    {songs.map((song) => (
      <Card key={song.id} style={{ width: '250px', background: '#34495e', color: '#ecf0f1' }}>
        <CardContent>
          <Typography variant="h6">{song.name}</Typography>
          <Typography variant="body2">Artist: {song.artist}</Typography>
          <Typography variant="body2">Genre: {song.genre}</Typography>
          <Button
            style={{ marginTop: '10px', background: '#e74c3c', color: '#fff' }}
            onClick={() => onDelete(song.id)}
          >
            Delete
          </Button>
        </CardContent>
      </Card>
    ))}
  </div>
);

export default SongList;

import React, { useState, useEffect } from 'react';
import { getSongs, createSong } from './services/api';

function App() {
  const [songs, setSongs] = useState([]);
  const [newSong, setNewSong] = useState({ name: '', artist: '', genre: '' });

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await getSongs();
        setSongs(response.data);
      } catch (error) {
        console.error('Error fetching songs:', error);
      }
    };

    fetchSongs();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createSong(newSong);
      const response = await getSongs();
      setSongs(response.data);
      setNewSong({ name: '', artist: '', genre: '' });
    } catch (error) {
      console.error('Error creating song:', error);
    }
  };

  return (
    <div>
      <h1>Music Library</h1>
      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Song Name"
          value={newSong.name}
          onChange={(e) => setNewSong({...newSong, name: e.target.value})}
        />
        <input
          type="text"
          placeholder="Artist"
          value={newSong.artist}
          onChange={(e) => setNewSong({...newSong, artist: e.target.value})}
        />
        <input
          type="text"
          placeholder="Genre"
          value={newSong.genre}
          onChange={(e) => setNewSong({...newSong, genre: e.target.value})}
        />
        <button type="submit">Add Song</button>
      </form>

      <div>
        {songs.map((song) => (
          <div key={song.id}>
            <p>{song.name} - {song.artist} ({song.genre})</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
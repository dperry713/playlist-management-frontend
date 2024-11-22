import axios from 'axios';

// Use CORS proxy to bypass network restrictions
const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
const FREE_MUSIC_ARCHIVE_API = 'https://freemusicarchive.org/recent.json';

const api = axios.create({
  baseURL: CORS_PROXY + FREE_MUSIC_ARCHIVE_API,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  }
});

export const getSongs = async () => {
  try {
    const response = await api.get('');
    return response.data.aTracks.map(track => ({
      id: track.track_id,
      name: track.track_title,
      artist: track.artist_name,
      genre: track.genre_title,
      url: track.track_url
    }));
  } catch (error) {
    console.error('Detailed Error:', error);
    
    // Fallback data in case of API failure
    return [
      {
        id: 1,
        name: 'Sample Track',
        artist: 'Unknown Artist',
        genre: 'Unknown',
        url: '#'
      }
    ];
  }
};

export const searchSongs = async (query) => {
  try {
    const response = await axios.get(`${CORS_PROXY}https://freemusicarchive.org/search.json?q=${query}`);
    return response.data.aTracks.map(track => ({
      id: track.track_id,
      name: track.track_title,
      artist: track.artist_name,
      genre: track.genre_title,
      url: track.track_url
    }));
  } catch (error) {
    console.error('Search Error:', error);
    return [];
  }
};
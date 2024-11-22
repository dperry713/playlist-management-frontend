import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';


export const getSongs = () => axios.get(`${API_BASE_URL}/songs`);
export const createSong = (data) => axios.post(`${API_BASE_URL}/songs`, data);
export const deleteSong = (id) => axios.delete(`${API_BASE_URL}/songs/${id}`);
export const getPlaylists = () => axios.get(`${API_BASE_URL}/playlists`);
export const createPlaylist = (data) => axios.post(`${API_BASE_URL}/playlists`, data);
export const addSongToPlaylist = (playlist, songId) =>
  axios.post(`${API_BASE_URL}/playlists/${playlist}/add`, { song_id: songId });

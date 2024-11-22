import api from '../api/config.js';

const fetchSongs = async () => {
    try {
      const response = await api.get('/songs');
      return response.data;
    } catch (error) {
      console.error('Error fetching songs:', error);
      if (error.response) {
        // Server responded with error
        throw new Error(`Server error: ${error.response.status}`);
      } else if (error.request) {
        // No response received
        throw new Error('No response from server');
      } else {
        // Request setup error
        throw new Error('Request configuration error');
      }
    }
  };
  
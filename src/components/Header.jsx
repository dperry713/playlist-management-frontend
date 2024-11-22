import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = () => (
  <AppBar position="static" style={{ background: '#2c3e50' }}>
    <Toolbar>
      <Typography variant="h5" style={{ color: '#ecf0f1' }}>
        🎵 Playlist Management System
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Header;

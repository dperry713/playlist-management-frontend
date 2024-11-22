import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const AnimatedHeader = () => {
  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      variants={headerVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 1 }}
    >
      <AppBar position="static" style={{ background: '#2c3e50' }}>
        <Toolbar>
          <Typography variant="h5" style={{ color: '#ecf0f1' }}>
            🎵 Playlist Management System
          </Typography>
        </Toolbar>
      </AppBar>
    </motion.div>
  );
};

export default AnimatedHeader;

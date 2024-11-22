import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, Typography, Button } from '@mui/material';

const AnimatedCard = ({ song, onDelete }) => {
  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
    hover: { scale: 1.05 },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      transition={{ duration: 0.3 }}
    >
      <Card style={{ width: '250px', background: '#34495e', color: '#ecf0f1', margin: '10px' }}>
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
    </motion.div>
  );
};

export default AnimatedCard;

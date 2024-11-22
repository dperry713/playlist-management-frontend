import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';

const Background = () => (
  <Canvas style={{ height: '100vh', width: '100vw', position: 'absolute', zIndex: -1 }}>
    {/* Add stars for a futuristic space-like background */}
    <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
    {/* Controls to allow users to rotate and zoom */}
    <OrbitControls enableZoom={false} />
    {/* Ambient lighting */}
    <ambientLight intensity={0.5} />
    {/* Directional lighting */}
    <directionalLight position={[10, 10, 10]} intensity={1} />
  </Canvas>
);

export default Background;

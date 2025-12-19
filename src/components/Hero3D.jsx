import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { TorusKnot, MeshDistortMaterial, Float } from '@react-three/drei';

const CyberShape = () => {
  const mesh = useRef();

  useFrame((state, delta) => {
    mesh.current.rotation.x += delta;
    mesh.current.rotation.y += delta;
  });

  return (
    <mesh ref={mesh}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#64ffda" wireframe />
    </mesh>
  );
};

const Hero3D = () => {
  return (
    <div style={{ width: '100%', height: '400px' }}>
      <Canvas camera={{ position: [0, 0, 4] }} dpr={[1, 2]}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 5]} intensity={1} />
        <CyberShape />
      </Canvas>
    </div>
  );
};

export default Hero3D;

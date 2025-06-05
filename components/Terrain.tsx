// dreamscape-generator/components/Terrain.tsx
import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

type TerrainProps = {
  config?: {
    width?: number;
    height?: number;
    segments?: number;
    noiseScale?: number;
    elevation?: number;
    color?: string;
  };
};

export default function Terrain({ config }: TerrainProps) {
  const {
    width = 50,
    height = 50,
    segments = 64,
    noiseScale = 0.2,
    elevation = 4,
    color = '#6be2f7',
  } = config || {};

  const meshRef = useRef<THREE.Mesh>(null!);

  useEffect(() => {
    const geometry = meshRef.current.geometry as THREE.PlaneGeometry;
    geometry.rotateX(-Math.PI / 2);

    const vertices = geometry.attributes.position;
    for (let i = 0; i < vertices.count; i++) {
      const x = vertices.getX(i);
      const y = vertices.getY(i);
      const z = vertices.getZ(i);

      const noise = Math.sin(x * noiseScale) * Math.cos(z * noiseScale);
      vertices.setY(i, noise * elevation);
    }
    vertices.needsUpdate = true;
  }, []);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.001; // slow dreamlike spin
    }
  });

  return (
    <mesh ref={meshRef} receiveShadow>
      <planeGeometry args={[width, height, segments, segments]} />
      <meshStandardMaterial color={color} wireframe={false} />
    </mesh>
  );
}

// dreamscape-generator/components/VRScene.tsx
import { VRCanvas, DefaultXRControllers, Hands } from '@react-three/xr';
import { OrbitControls, Stars } from '@react-three/drei';
import { Suspense, ReactNode } from 'react';

type VRSceneProps = {
  children: ReactNode;
  enableVR?: boolean;
};

export default function VRScene({ children, enableVR = false }: VRSceneProps) {
  if (enableVR) {
    return (
      <VRCanvas shadows camera={{ position: [0, 2, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 10, 5]} intensity={1} />
        <Suspense fallback={null}>
          <Stars radius={100} depth={50} count={4000} factor={4} />
          {children}
        </Suspense>
        <DefaultXRControllers />
        <Hands />
      </VRCanvas>
    );
  }

  // Non-VR fallback with OrbitControls
  return (
    <VRCanvas camera={{ position: [0, 3, 10] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 10, 5]} />
      <Suspense fallback={null}>
        <Stars radius={100} depth={50} count={3000} factor={4} />
        <OrbitControls />
        {children}
      </Suspense>
    </VRCanvas>
  );
}

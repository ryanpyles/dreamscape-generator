// dreamscape-generator/components/DreamSceneBuilder.tsx
import { useEffect, useState } from 'react';
import * as THREE from 'three';
import Terrain from './Terrain';
import ShaderFX from './ShaderFX';
import AudioManager from './AudioManager';

type DreamSceneBuilderProps = {
  sceneData: string;
};

type SceneJSON = {
  mood?: string;
  terrain?: any;
  fx?: {
    bloom?: boolean;
    glitch?: boolean;
    chromatic?: boolean;
    noise?: boolean;
  };
  objects?: {
    type: string;
    position: [number, number, number];
    size: [number, number, number];
    color: string;
  }[];
};

export default function DreamSceneBuilder({ sceneData }: DreamSceneBuilderProps) {
  const [scene, setScene] = useState<SceneJSON | null>(null);

  useEffect(() => {
    try {
      const parsed = JSON.parse(sceneData);
      setScene(parsed);
    } catch (err) {
      console.error('Failed to parse scene data:', err);
    }
  }, [sceneData]);

  if (!scene) return null;

  return (
    <>
      <AudioManager mood={scene.mood} />
      <ShaderFX
        enableBloom={scene.fx?.bloom}
        enableGlitch={scene.fx?.glitch}
        enableChromatic={scene.fx?.chromatic}
        enableNoise={scene.fx?.noise}
      />
      <Terrain config={scene.terrain} />

      {(scene.objects || []).map((obj, idx) => {
        return (
          <mesh key={idx} position={obj.position}>
            <boxGeometry args={obj.size} />
            <meshStandardMaterial color={obj.color} />
          </mesh>
        );
      })}
    </>
  );
}

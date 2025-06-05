// dreamscape-generator/components/ShaderFX.tsx
import React from 'react';
import {
  EffectComposer,
  Bloom,
  ChromaticAberration,
  Noise,
  Glitch,
  BlendFunction,      
  GlitchMode          
} from '@react-three/postprocessing';
import { Vector2 } from 'three';


type ShaderFXProps = {
  enableBloom?: boolean;
  enableChromatic?: boolean;
  enableGlitch?: boolean;
  enableNoise?: boolean;
};

export default function ShaderFX(props: ShaderFXProps): JSX.Element {
  const {
    enableBloom = true,
    enableChromatic = true,
    enableGlitch = false,
    enableNoise = true,
  } = props;

  return (
    <EffectComposer>
      {enableBloom && <Bloom intensity={0.8} luminanceThreshold={0.2} />}
      {enableChromatic && (
        <ChromaticAberration
          offset={new Vector2(0.001, 0.002)}
          blendFunction={BlendFunction.NORMAL}
        />
      )}
      {enableGlitch && (
        <Glitch
          delay={new Vector2(1.5, 3.5)}
          duration={new Vector2(0.6, 1.0)}
          strength={new Vector2(0.2, 0.6)}
          mode={GlitchMode.SPORADIC}
        />
      )}
      {enableNoise && <Noise opacity={0.05} />}
    </EffectComposer>
  );
}

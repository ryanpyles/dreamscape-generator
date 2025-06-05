// dreamscape-generator/pages/index.tsx
import { useState } from 'react';
import dynamic from 'next/dynamic';
import VRScene from '../components/VRScene';
import DreamSceneBuilder from '../components/DreamSceneBuilder';
import { v4 as uuidv4 } from 'uuid';

const Home = () => {
  const [prompt, setPrompt] = useState('');
  const [scene, setScene] = useState('');
  const [loading, setLoading] = useState(false);
  const [vrMode, setVrMode] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    const res = await fetch('/api/generate-scene', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt }),
    });

    const data = await res.json();
    if (data.scene) {
      setScene(data.scene);
      saveDream(prompt, data.scene);
    }
    setLoading(false);
  };

  const saveDream = (prompt: string, scene: string) => {
    const id = uuidv4();
    const dream = {
      id,
      prompt,
      scene,
      timestamp: new Date().toISOString(),
    };
    const existing = localStorage.getItem('dreamGallery');
    const gallery = existing ? JSON.parse(existing) : [];
    gallery.push(dream);
    localStorage.setItem('dreamGallery', JSON.stringify(gallery));
  };

  return (
    <div>
      <h1>🌌 Dreamscape Generator</h1>
      <textarea
        placeholder="Describe your dream..."
        rows={4}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        style={{ width: '100%', marginBottom: '1rem' }}
      />
      <div style={{ display: 'flex', gap: '1rem' }}>
        <button onClick={handleGenerate} disabled={loading}>
          {loading ? 'Generating...' : 'Generate Dream'}
        </button>
        <button onClick={() => setVrMode(!vrMode)}>
          {vrMode ? 'Disable VR' : 'Enable VR'}
        </button>
        <a href="/gallery">
          <button>🖼️ Gallery</button>
        </a>
      </div>

      {scene && (
        <div style={{ height: '80vh', marginTop: '2rem' }}>
          <VRScene enableVR={vrMode}>
            <DreamSceneBuilder sceneData={scene} />
          </VRScene>
        </div>
      )}
    </div>
  );
};

export default Home;

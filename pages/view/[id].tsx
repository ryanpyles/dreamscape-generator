// dreamscape-generator/pages/view/[id].tsx
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import VRScene from '../../components/VRScene';
import DreamSceneBuilder from '../../components/DreamSceneBuilder';

type SavedDream = {
  id: string;
  prompt: string;
  scene: string;
  timestamp: string;
};

export default function ViewDream() {
  const router = useRouter();
  const { id } = router.query;
  const [dream, setDream] = useState<SavedDream | null>(null);

  useEffect(() => {
    if (!id) return;
    const stored = localStorage.getItem('dreamGallery');
    if (stored) {
      const dreams: SavedDream[] = JSON.parse(stored);
      const found = dreams.find((d) => d.id === id);
      if (found) setDream(found);
    }
  }, [id]);

  if (!dream) return <div>🌀 Loading dream...</div>;

  return (
    <div>
      <h2>Dream: {dream.prompt}</h2>
      <p><em>{new Date(dream.timestamp).toLocaleString()}</em></p>
      <VRScene enableVR={false}>
        <DreamSceneBuilder sceneData={dream.scene} />
      </VRScene>
    </div>
  );
}

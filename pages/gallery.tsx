// dreamscape-generator/pages/gallery.tsx
import { useEffect, useState } from 'react';
import Link from 'next/link';

type SavedDream = {
  id: string;
  prompt: string;
  scene: string;
  timestamp: string;
};

export default function Gallery() {
  const [dreams, setDreams] = useState<SavedDream[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('dreamGallery');
    if (stored) {
      setDreams(JSON.parse(stored));
    }
  }, []);

  return (
    <div>
      <h1>🖼️ Dream Gallery</h1>
      <Link href="/">← Back to Generator</Link>
      <ul>
        {dreams.map((dream) => (
          <li key={dream.id} style={{ marginBottom: '2rem' }}>
            <strong>{dream.prompt}</strong>
            <p>{new Date(dream.timestamp).toLocaleString()}</p>
            <Link href={`/view/${dream.id}`}>
              <button>🔮 View</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

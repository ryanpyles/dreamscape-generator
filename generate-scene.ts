// dreamscape-generator/pages/api/generate-scene.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();

  const { prompt } = req.body;
  if (!prompt) return res.status(400).json({ error: 'Missing prompt' });

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: 'Describe a surreal 3D dream world as a structured scene in JSON. Include terrain, objects, lighting, colors, and mood.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
    });

    const sceneDescription = completion.choices[0].message?.content;
    res.status(200).json({ scene: sceneDescription });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'OpenAI request failed' });
  }
}

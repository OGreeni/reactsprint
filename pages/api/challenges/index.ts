import { NextApiRequest, NextApiResponse } from 'next';

import db from '@utils/db';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') res.status(404);

  try {
    const entries = await db.collection('challenges').orderBy('created').get();
    const entriesData = entries.docs.map((entry) => entry.data());

    res.status(200).json({ entries: entriesData });
  } catch (error) {
    res.status(400).json({ error });
  }
}

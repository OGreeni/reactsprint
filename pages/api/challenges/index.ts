import { NextApiRequest, NextApiResponse } from 'next';

import { getAuth } from '@clerk/nextjs/server';
import db from '@utils/db';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { userId } = getAuth(req);
  if (!userId) {
    res.status(401).json({ status: 'unauthorized' });
  }

  try {
    const entries = await db.collection('challenges').orderBy('created').get();
    const entriesData = entries.docs.map((entry) => entry.data());

    res.status(200).json({ entries: entriesData });
  } catch (error) {
    res.status(400).json({ error });
  }
}

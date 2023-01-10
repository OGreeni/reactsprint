import { NextApiRequest, NextApiResponse } from 'next';

import db from '@utils/db';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  try {
    const entry = await db
      .collection('challenges')
      .doc(id as string)
      .get();

    res.status(200).json({ likes: entry.data()!.likes });
  } catch (error) {
    res.status(400).json({ error });
  }
}

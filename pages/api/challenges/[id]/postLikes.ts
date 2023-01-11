import { NextApiRequest, NextApiResponse } from 'next';

import { getAuth } from '@clerk/nextjs/server';
import db from '@utils/db';
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { userId } = getAuth(req);
  if (!userId) {
    return res.status(401).json({ status: 'unauthorized' });
  }
  const { id } = req.query;

  try {
    const userRef = db.collection('users').doc(userId);
    const userSnapshot = await userRef.get();
    const userData = userSnapshot.data();

    const updatedUserProps = {
      [id as string]: {
        isLiked: !userData?.[id as string]?.isLiked,
      },
    };
    const userDocUpdate = userRef.update(updatedUserProps);

    const challengeRef = db.collection('challenges').doc(id as string);
    const challengeSnapshot = await challengeRef.get();
    const challengeData = challengeSnapshot.data();

    const challengeDocUpdate = challengeRef.update({
      likes:
        challengeData?.likes + (userData?.[id as string]?.isLiked ? -1 : 1),
    });

    const [user, challenge] = await Promise.all([
      userDocUpdate,
      challengeDocUpdate,
    ]);

    return res.status(200).json({ message: 'success' });
  } catch (error) {
    return res.status(400).json({ error });
  }
}

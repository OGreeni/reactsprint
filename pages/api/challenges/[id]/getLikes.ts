import { NextApiRequest, NextApiResponse } from 'next';

import { getAuth } from '@clerk/nextjs/server';
import db from '@utils/db';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { userId } = getAuth(req);
  const { id } = req.query;

  try {
    const getChallenge = db
      .collection('challenges')
      .doc(id as string)
      .get();

    if (userId) {
      const getUser = db
        .collection('users')
        .doc(userId as string)
        .get();

      const [challenge, user] = await Promise.all([getChallenge, getUser]);
      if (!user.exists) {
        const initialUserData: Record<string, any> = {};
        initialUserData['userId'] = userId;
        initialUserData[id as string] = { isLiked: false };

        db.collection('users').doc(userId).set(initialUserData);
        return res.status(200).json({
          likes: challenge.data()!.likes,
          userData: { isLiked: false },
        });
      }
      // TODO: update user like status
      return res.status(200).json({
        likes: challenge.data()!.likes,
        userData: {
          isLiked: user.data()![id as string].isLiked,
        },
      });
    }

    const challenge = await db
      .collection('challenges')
      .doc(id as string)
      .get();

    return res
      .status(200)
      .json({ likes: challenge.data()!.likes, userData: { isLiked: false } });
  } catch (error) {
    return res.status(400).json({ error });
  }
}

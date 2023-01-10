import { NextApiRequest, NextApiResponse } from 'next';

import db from '@utils/db';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') res.status(404);

  const { id } = req.query;

  try {
    const docRef = db.collection('challenges').doc(id as string);

    db.runTransaction((transaction) => {
      return transaction
        .get(docRef)
        .then((doc) => {
          if (req.body.increment) {
            transaction.update(docRef, { likes: doc.data()!.likes + 1 });
          } else if (!req.body.increment) {
            transaction.update(docRef, { likes: doc.data()!.likes - 1 });
          } else {
            res.status(400).json({ error: 'bad request' });
          }

          res.status(200).json({
            message: 'success',
          });
        })
        .catch((error) => res.status(400).json({ error }));
    });
  } catch (error) {
    res.status(400).json({ error });
  }
}

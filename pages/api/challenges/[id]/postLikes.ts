// import { NextApiRequest, NextApiResponse } from 'next';

// import { getAuth } from '@clerk/nextjs/server';
// import db from '@utils/db';

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   const { userId } = getAuth(req);
//   if (!userId) {
//     res.status(401).json({ status: 'unauthorized' });
//   }

//   const { id } = req.query;

//   try {
//     const challengeDocRef = db.collection('challenges').doc(id as string);

//     db.runTransaction(async (transaction) => {
//       try {
//         const doc = await transaction.get(challengeDocRef);
//         if (req.body.increment) {
//           transaction.update(challengeDocRef, { likes: doc.data()!.likes + 1 });
//           const updatedProps: Record<string, any> = {};
//           updatedProps[id as string] = {
//             isLiked: true,
//           };

//           await db
//             .collection('users')
//             .doc(userId as string)
//             .update(updatedProps);
//         } else {
//           transaction.update(challengeDocRef, { likes: doc.data()!.likes - 1 });
//           const updatedProps: Record<string, any> = {};
//           updatedProps[id as string] = {
//             isLiked: false,
//           };

//           await db
//             .collection('users')
//             .doc(userId as string)
//             .update(updatedProps);
//         }

//         // REFACTOR THIS ENTIRE HANDLER...

//         const user = await db
//           .collection('users')
//           .doc(userId as string)
//           .get();
//         res.status(200).json({ isLiked: user.data()![id as string].isLiked });
//       } catch (error) {
//         return res.status(400).json({ error });
//       }
//     });
//   } catch (error) {
//     res.status(400).json({ error });
//   }
// }

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
    const userRef = db.collection('users').doc(userId as string);
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

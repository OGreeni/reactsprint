// TODO: fix
import type { NextApiRequest, NextApiResponse } from 'next';
import formidable from 'formidable';
import { z, ZodError } from 'zod';

import { getAuth } from '@clerk/nextjs/server';
import db from '@utils/db';

const formSchema = z.object({
  title: z.string().max(75),
  description: z.string().max(350),
  'javascript-starter': z.string().url(),
  'javascript-solution': z.string().url(),
  'typescript-starter': z.string().url(),
  'typescript-solution': z.string().url(),
  difficulty: z.union([
    z.literal('easy'),
    z.literal('medium'),
    z.literal('hard'),
  ]),
});

type FormSchema = z.infer<typeof formSchema>;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { userId } = getAuth(req);
  if (!userId) {
    return res.status(401).json({ status: 'unauthorized' });
  }

  try {
    const form = formidable();
    const data = await new Promise<{ fields: formidable.Fields }>(
      (resolve, reject) => {
        form.parse(req, (error, fields) => {
          if (error) reject(error);
          resolve({ fields });
        });
      }
    );

    formSchema.parse(data.fields);

    const userRef = db.collection('users').doc(userId);
    if (!(await userRef.get()).exists) {
      await db.collection('users').doc(userId).set({
        userId,
      });
    }

    await db.collection('queue').add({
      userId,
      ...data.fields,
    });

    res.status(200).json({ message: 'success' });
  } catch (error) {
    if (error instanceof ZodError) {
      console.error('Schema validation error', error.flatten);
      res.status(400);
    } else {
      if (error instanceof Error) {
        console.error(error.stack);
      } else {
        console.error(error);
      }
      res.status(400);
    }
  }
}

// import { NextApiRequest, NextApiResponse } from 'next';

// import { getAuth } from '@clerk/nextjs/server';
// import db from '@utils/db';
// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   const { userId } = getAuth(req);
//   if (!userId) {
//     return res.status(401).json({ status: 'unauthorized' });
//   }
//   const { id } = req.query;

//   try {
//     const userRef = db.collection('users').doc(userId as string);
//     const userSnapshot = await userRef.get();
//     const userData = userSnapshot.data();

//     const updatedUserProps = {
//       [id as string]: {
//         isLiked: !userData?.[id as string]?.isLiked,
//       },
//     };
//     const userDocUpdate = userRef.update(updatedUserProps);

//     const challengeRef = db.collection('challenges').doc(id as string);
//     const challengeSnapshot = await challengeRef.get();
//     const challengeData = challengeSnapshot.data();

//     const challengeDocUpdate = challengeRef.update({
//       likes:
//         challengeData?.likes + (userData?.[id as string]?.isLiked ? -1 : 1),
//     });

//     const [user, challenge] = await Promise.all([
//       userDocUpdate,
//       challengeDocUpdate,
//     ]);

//     return res.status(200).json({ message: 'success' });
//   } catch (error) {
//     return res.status(400).json({ error });
//   }
// }

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

//   try {
//     const entries = await db.collection('challenges').orderBy('created').get();
//     const entriesData = entries.docs.map((entry) => entry.data());

//     res.status(200).json({ entries: entriesData });
//   } catch (error) {
//     res.status(400).json({ error });
//   }
// }

import { NextApiRequest, NextApiResponse } from 'next';

import db from '@utils/db';
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const challengesRef = await db
      .collection('challenges')
      .orderBy('created')
      .get();
    const challenges = challengesRef.docs.map((challenge) => ({
      id: challenge.id,
      ...challenge.data(),
    }));

    return res.status(200).json({ challenges });
  } catch (error) {
    return res.status(400).json({ error });
  }
}

// import React from 'react';
// import Link from 'next/link';

// import ChallengeCard from '@components/challenge-card';
// import db from '@utils/db';

// export interface ChallengeDocument {
//   created: string;
//   index: number;
//   title: string;
//   description: string;
//   javascript: {
//     starter: string;
//     solution: string;
//   };
//   typescript: {
//     starter: string;
//     solution: string;
//   };
//   difficulty: 'easy' | 'medium' | 'hard';
//   slug: string;
//   likes: number;
// }

// export default async function MappedChallenges() {
//   const entries = await db.collection('challenges').orderBy('created').get();
//   const entriesData = entries.docs.map((entry) => ({
//     id: entry.id,
//     ...(entry.data() as ChallengeDocument),
//   }));

//   return entriesData.map((entry) => (
//     <Link href={`/challenge-board/${entry.slug}`} key={entry.id}>
//       <ChallengeCard
//         index={entry.index + 1}
//         key={entry.id}
//         difficulty={entry.difficulty}
//         title={entry.title}
//         description={entry.description}
//       />
//     </Link>
//   ));
// }

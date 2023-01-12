import { NextApiRequest, NextApiResponse } from 'next';
import { z, ZodError } from 'zod';

import { getAuth } from '@clerk/nextjs/server';
import db from '@utils/db';

const formSchema = z.object({
  title: z.string().min(2).max(75),
  description: z.string().min(2).max(350),
  javascript: z.object({
    starter: z.string().url(),
    solution: z.string().url(),
  }),
  typescript: z.object({
    starter: z.string().url(),
    solution: z.string().url(),
  }),
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
    formSchema.parse(req.body);

    await db.collection('queue').add({
      userId,
      ...req.body,
    });
    res.status(200).json({ message: 'success' });
  } catch (error) {
    if (error instanceof ZodError) {
      res.status(400).send({
        error: 'schema validation error',
      });
    } else {
      res.status(400).json({ error: 'unknown error' });
    }
  }
}

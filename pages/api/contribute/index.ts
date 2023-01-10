// TODO: fix
import type { NextApiRequest, NextApiResponse } from 'next';
import { profile } from 'console';
import formidable from 'formidable';
import { z, ZodError } from 'zod';

import db from '@utils/db';

type Data = {
  name: string;
};

const formSchema = z.object({
  title: z.string(),
  description: z.string(),
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
  res: NextApiResponse<Data>
) {
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

    formSchema.parse(req.body);

    const { title } = data.fields;

    const { id } = await db.collection('challenges').add({
      title,
      added: new Date().toISOString(),
    });
    res.status(200).json({ name: '123' });
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

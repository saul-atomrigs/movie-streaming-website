import bcrypt from 'bcrypt';
import { NextApiRequest, NextApiResponse } from 'next';
import prismadb from '@/lib/prismadb';

export default async function HANDLER(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  try {
    const { email, name, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await prismadb.user.findUnique({
      where: {
        email,
      },
    });
    if (existingUser) {
      return res.status(422).json({ error: 'User already exists' });
    }

    const user = await prismadb.user.create({
      data: {
        email,
        name,
        hashedPassword,
        image: '',
        emailVerified: false,
      },
    });

    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
    return res.status(400).end();
  }
}

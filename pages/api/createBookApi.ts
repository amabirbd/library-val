import { NextApiRequest, NextApiResponse } from "next";

import prisma from "../../lib/prisma";

export default async (req: NextApiRequest, res: NextApiResponse) => {

  if (req.method !== 'POST') {
    return res.status(405).json({messsage: "method not allowed"})
  }

  const book = JSON.parse(req.body);

  const createdBook = await prisma.book.create({
    data: book
  })

  res.json(createdBook)
}

import { NextApiRequest, NextApiResponse } from "next";

import prisma from "../../lib/prisma";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({messsage: "method not allowed"})
  }

  const bookData = JSON.parse(req.body);



  const updatedBook = await prisma.book.update({
    where: {
      id: bookData.bookId
    },
    data: {
      seriesId: bookData.seriesId
    }
  })

  res.json(updatedBook)
}

import { NextApiRequest, NextApiResponse } from "next";

import prisma from "../../lib/prisma";

export default async (req: NextApiRequest, res: NextApiResponse) => {

  if (req.method !== 'POST') {
    return res.status(405).json({messsage: "method not allowed"})
  }

  const {name, author, isbn, imageLink, description} = JSON.parse(req.body);

  


  const createdBook = await prisma.series.createMany({
    data: {
        name: name,
        author: author,
        isbn: isbn,
        imageLink: imageLink,
        description: description
    }
  })

  res.json(createdBook)
}

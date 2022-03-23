import { NextApiRequest, NextApiResponse } from "next";

import prisma from "../../lib/prisma";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'DELETE') {
    return res.status(405).json({messsage: "method not allowed"})
  }

  const seriesId = JSON.parse(req.body);
  const deletedSeries = await prisma.series.delete({
    where: {
      id: parseInt(seriesId)
    },
  })

  res.json(deletedSeries)
}

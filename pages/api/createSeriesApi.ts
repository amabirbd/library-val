import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";

// const prisma = new PrismaClient()

export default async (req: NextApiRequest, res: NextApiResponse) => {

  if (req.method !== 'POST') {
    return res.status(405).json({message: "method not allowed"})
  }

  const {seriesTitle} = JSON.parse(req.body);

  const createdSeries = await prisma.series.create({
    data: {
      title: seriesTitle
    }
  })

  res.json(createdSeries)

}

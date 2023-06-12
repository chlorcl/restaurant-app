import { PrismaClient, Menu } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  menus?: Menu[];
  message?: string;
}

type RequestData = {}

export default async function menus(req: NextApiRequest, res: NextApiResponse<ResponseData>): Promise<any> {
  const id = req.query.id as string;

  if (req.method !== 'GET') {
    res.status(405).send({message: 'Method not allowed'});
    return;
  }

  if (!id) {
    res.status(400).send({message: 'Bad request'});
    return;
  }

  const prisma = new PrismaClient();
  const menus = await prisma.menu.findMany({
    where: {
      restaurantId: parseInt(id)
    }
  });

  res.status(200).json({menus});
}
import { NextApiRequest, NextApiResponse } from "next";
import { Product, PrismaClient } from "@prisma/client";

type ResponseData = {
  products?: Product[];
  message?: string;
}

type RequestData = {
  categoryId?: number;
}

export default async function menus(req: NextApiRequest, res: NextApiResponse<ResponseData>): Promise<any> {
  const requestData: RequestData = req.body;

  if (req.method !== 'POST') {
    res.status(405).send({message: 'Method not allowed'});
    return;
  }

  const prisma = new PrismaClient();

  if (!requestData.categoryId) {
    const products = await prisma.product.findMany();
    res.status(200).json({products});
  } else {
    const products = await prisma.product.findMany({
      where: {
        categoryId: requestData.categoryId
      }
    });
    res.status(200).json({products});
  }

}
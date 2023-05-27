import {NextApiRequest, NextApiResponse} from "next";
import { PrismaClient } from '@prisma/client'
import { hash } from 'bcryptjs'
import { Secret, sign } from "jsonwebtoken";

type ResponseData = {
  token?: string;
  message?: string;
}

type RequestData = {
  email: string;
  password: string;
}

export default async function login(req: NextApiRequest, res: NextApiResponse<ResponseData>): Promise<any> {
  const requestData: RequestData = req.body;

  const prisma = new PrismaClient();
  const user = await prisma.user.findUnique({
    where: {
      email: requestData.email
    }
  });

  if (!user) {
    res.status(400).send({message: 'Podany użytkownik nie istnieje'});
    return;
  }

  const passwordMatch = await hash(requestData.password, 10) === user.password;

  if (!passwordMatch) {
    res.status(400).send({message: 'Podane hasło jest nieprawidłowe'});
    return;
  }

  const token = sign({userId: user.id}, process.env.JWT_SECRET as Secret, {
    expiresIn: '1d'
  });

  res.status(200).json({token});

}

import {NextApiRequest, NextApiResponse} from "next";
import { PrismaClient } from '@prisma/client'
import { hash } from 'bcryptjs'

type ResponseData = {
    userId?: string;
    message?: string;
}

type RequestData = {
    name: string;
    password: string;
    email: string;
}

export default async function register(req: NextApiRequest, res: NextApiResponse<ResponseData>): Promise<any> {
    const requestData: RequestData = req.body;

    const prisma = new PrismaClient();
    const hashedPassword = await hash(requestData.password, 10);

    const userExists = await prisma.user.findUnique({
        where: {
            email: requestData.email
        }
    });

    if (userExists) {
        res.status(400).send({message: 'Użytkownik o podanym adresie email już istnieje'});
        return;
    }

    const user = await prisma.user.create({
        data: {
            name: requestData.name,
            password: hashedPassword,
            email: requestData.email
        }
    });

    res.status(200).json({userId: user.id.toString()});
}
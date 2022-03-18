import { PrismaClient } from "@prisma/client";
import { links } from "../data/links";

const prisma = new PrismaClient();

async function main() {
    await prisma.user.create({
        data: {
            email: 'testemail@gmail.com',
            role: 'ADMIN'
        },
    });

    await prisma.link.createMany({
        data: links
    })
    
}

main()
    .catch((e) => {
        console.log(e);
        process.exit();
    })
    .finally(async () => {
        await prisma.$disconnect();
    })
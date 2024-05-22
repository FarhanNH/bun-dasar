import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const contact = await prisma.contact.create({
    data: {
        name: "Farhan",
        email: "test@example.com",
        phone: "081234567890"
    }
});

console.log(contact);
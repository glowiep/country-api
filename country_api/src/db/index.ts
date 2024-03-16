// Connect to the database via PrismaClient
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default prisma;
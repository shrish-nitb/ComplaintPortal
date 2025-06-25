// lib/prisma.js
// prisma singleton
import { PrismaClient } from '../generated/prisma/client.js';

const prisma = new PrismaClient();
export default prisma;

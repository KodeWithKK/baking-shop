import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined; //NOSONAR
}

export const db = globalThis.prisma || new PrismaClient();

if (process.env.APP_ENV !== "production") globalThis.prisma = db;

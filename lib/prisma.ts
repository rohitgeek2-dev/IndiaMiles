import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "@prisma/client";

const databaseUrl = process.env.DATABASE_URL;
const placeholderDatabaseUrl =
  "mysql://johndoe:randompassword@localhost:3306/mydb";

if (!databaseUrl) {
  throw new Error("DATABASE_URL is required to initialize Prisma.");
}

export const isDatabaseConfigured = databaseUrl !== placeholderDatabaseUrl;

const adapter = new PrismaMariaDb(databaseUrl);

const globalForPrisma = globalThis as unknown as {
  prisma?: PrismaClient;
};

export const prisma = globalForPrisma.prisma ?? new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

import { PrismaClient } from '@prisma/client';

declare global {
  var _db: PrismaClient | undefined;
}

if (!global._db) {
  global._db = new PrismaClient();
}

const db: PrismaClient = global._db;

export default db;
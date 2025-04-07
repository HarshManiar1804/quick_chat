import { PrismaClient } from "@prisma/client";
import e from "express";

const prisma = new PrismaClient({
  log: ["error", "query"],
});

export default prisma;

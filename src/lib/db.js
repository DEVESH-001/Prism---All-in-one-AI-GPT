import { PrismaClient } from "../generated/prisma/client";
import { PrismaNeon } from "@prisma/adapter-neon";
import dotenv from "dotenv";

dotenv.config();
const connectionString = `${process.env.DATABASE_URL}`;

const adapter = new PrismaNeon({ connectionString });
const db = new PrismaClient({ adapter });
export default db;

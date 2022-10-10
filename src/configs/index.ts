import dotenv from "dotenv";

dotenv.config();

export default {
  port: process.env.port,
  MONGO_URL: process.env.MONGO_URL as string,
};

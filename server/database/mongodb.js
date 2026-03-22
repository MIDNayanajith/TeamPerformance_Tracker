import mongoose from "mongoose";
import { DB_URI } from "../config/env.js";

if (!DB_URI) {
  throw new Error("Not degine the URI");
}

const ConnectToDatabase = async () => {
  try {
    await mongoose.connect(DB_URI);
    console.log(`connected to database successfully`);
  } catch (error) {
    console.error("Error connecting to the database", error);
    process.exit(1);
  }
};

export default ConnectToDatabase;

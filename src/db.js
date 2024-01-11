import mongoose from "mongoose";
import { MONGODB_URI } from "./config.js";

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("La base de datos está conectada");
  } catch (error) {
    console.error(error);
  }
};

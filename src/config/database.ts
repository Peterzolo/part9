import mongoose from "mongoose";

export const databaseConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log("Database connected");
  } catch (error) {
    console.log("Could not connect to database");
  }
};

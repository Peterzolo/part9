import { dataDiagnose } from "./data/diagnosis";
import DiagnosisModel from "./model/Diagnosis";
import mongoose from "mongoose";

const seedData = async () => {
  try {
    // Clear existing data (optional)
    await DiagnosisModel.deleteMany({});

    // Insert the data
    await DiagnosisModel.insertMany(dataDiagnose);

    console.log("Data seeding complete");
  } catch (error) {
    console.error("Error seeding data:", error);
  } finally {
    // Close the database connection
    mongoose.disconnect();
  }
};

seedData();

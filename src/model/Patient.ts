import mongoose, { Schema, Document } from "mongoose";
import { IPatient } from "../interface/patient.interface";

const PatientSchema: Schema<IPatient> = new Schema<IPatient>({
  name: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ["Male", "Female", "Other"],
    required: true,
  },
  healthRating: {
    type: String,
    required: true,
  },
});

const PatientModel = mongoose.model<IPatient>("Patient", PatientSchema);

export default PatientModel;

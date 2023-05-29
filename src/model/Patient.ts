import mongoose, { Schema } from "mongoose";
import { ICreatePatient } from "../interface/patient.interface";

const PatientSchema: Schema<ICreatePatient> = new Schema<ICreatePatient>(
  {
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
      enum: ["male", "female", "Other"],
      required: true,
    },
    healthRating: {
      type: String,
    },
    dateOfBirth: {
      type: String,
      required: true,
    },
    ssn: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      transform: function (_doc, ret) {
        delete ret.ssn;
        return ret;
      },
    },
  }
);

const PatientModel = mongoose.model<ICreatePatient>("Patient", PatientSchema);

export default PatientModel;

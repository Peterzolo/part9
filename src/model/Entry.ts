import mongoose, { Schema, Document } from "mongoose";
import { OccupationalHealthcareEntry } from "../interface/patient.interface";

interface EntryModel extends OccupationalHealthcareEntry, Document {}

const EntrySchema: Schema<EntryModel> = new Schema<EntryModel>(
  {
    date: {
      type: String,
      required: true,
    },
    patientId: {
      type: Schema.Types.ObjectId,
      ref: "Patient",
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    specialist: {
      type: String,
      required: true,
    },
    diagnoseCodes: {
      type: [String],
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    discharge: {
      date: {
        type: String,
      },
      criteria: {
        type: String,
      },
    },
  },
  { timestamps: true }
);

const EntryModel = mongoose.model<EntryModel>("Entry", EntrySchema);

export default EntryModel;

import mongoose, { Schema } from "mongoose";
import { Entry } from "../interface/patient.interface";

const EntrySchema: Schema<Entry> = new Schema<Entry>(
  {
    description: {
      type: String,
      required: true,
    },
    creationDate: {
      type: String,
      required: true,
    },
    specialist: {
      type: String,
      required: true,
    },

    code: {
      type: String,
      required: true,
    },
  }
  //   {
  //     toJSON: {
  //       transform: function (_doc, ret) {
  //         delete ret.ssn;
  //         return ret;
  //       },
  //     },
  //   }
);

const EntryModel = mongoose.model<Entry>("Entry", EntrySchema);

export default EntryModel;

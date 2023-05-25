import mongoose, { Schema, Document } from "mongoose";
import { IDiagnosis } from "../interface/patient.interface";

const DiagnisisSchema: Schema<IDiagnosis> = new Schema<IDiagnosis>({
  code: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  latin: {
    String,
  },
});

const DiagnosisModel = mongoose.model<IDiagnosis>("Diagnosis", DiagnisisSchema);

export default DiagnosisModel;

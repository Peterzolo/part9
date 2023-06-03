import mongoose, { Schema } from "mongoose";
import { IDiagnosis } from "../interface/patient.interface";

const DiagnosisSchema: Schema<IDiagnosis> = new Schema<IDiagnosis>({
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

const DiagnosisModel = mongoose.model<IDiagnosis>("Diagnosis", DiagnosisSchema);

export default DiagnosisModel;

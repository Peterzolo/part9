import { Schema } from "mongoose";

export interface IDiagnosis {
  code: string;
  name: string;
  latin?: string;
}

export enum Gender {
  Male = "male",
  Female = "female",
  Other = "other",
}

export enum HealthCheckRating {
  Healthy = 0,
  LowRisk = 1,
  HighRisk = 2,
  CriticalRisk = 3,
}

export interface OccupationalHealthcareEntry {
  date: string;
  type: string;
  specialist: string;
  diagnoseCodes: string[];
  description: string;
  discharge?: {
    date: string;
    criteria: string;
  };
  patientId: Schema.Types.ObjectId;
}

export interface ICreatePatient {
  name: string;
  occupation: string;
  gender: Gender;
  healthRating?: string;
  dateOfBirth: string;
  ssn: string;
  entries?: OccupationalHealthcareEntry[];
}

export interface IPatient extends ICreatePatient {
  id: string;
}

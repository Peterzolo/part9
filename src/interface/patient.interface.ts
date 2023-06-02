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
  "Healthy" = 0,
  "LowRisk" = 1,
  "HighRisk" = 2,
  "CriticalRisk" = 3,
}

export interface OccupationalHealthcareEntry {
  data: string;
  type: string;
  specialist: string;
  diagnoseCodes: string[];
  description: string;
  discharge: {
    data: string;
    criteria: string;
  };
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

interface HospitalEntry extends OccupationalHealthcareEntry {}

export interface IPatient extends ICreatePatient {
  id: string;
}

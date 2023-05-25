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

export interface ICreatePatient {
  name: string;
  occupation: string;
  gender: Gender;
  healthRating: String;
  dateOfBirth: string;
  ssn: number;
}
export interface IPatient {
  id: string;
  name: string;
  occupation: string;
  gender: Gender;
  healthRating: String;
  dateOfBirth: string;
  ssn: number;
}

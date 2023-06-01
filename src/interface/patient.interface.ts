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

export interface Entry {
  description: string;
  creationDate: string;
  specialist: string;
  code: string;
}

export interface ICreatePatient {
  name: string;
  occupation: string;
  gender: Gender;
  healthRating?: string;
  dateOfBirth: string;
  ssn: string;
  entries?: Entry[];
}

export interface IPatient extends ICreatePatient {
  id: string;
}

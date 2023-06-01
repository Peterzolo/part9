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

interface Entry {
  description: string;
  creationDate: string;
  specialist: string;
  code: string;
}
export interface ICreatePatient {
  name: string;
  occupation: string;
  gender: Gender;
  healthRating?: String;
  dateOfBirth: string;
  ssn: string;
  entries?: Entry[];
}

export interface IPatient {
  id: string;
  name: string;
  occupation: string;
  gender: Gender;
  healthRating: String;
  dateOfBirth: string;
  ssn: string;
  entries?: Entry[];
}

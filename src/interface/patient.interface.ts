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
}
export interface IPatient {
  id: string;
  name: string;
  ssn: string;
  occupation: string;
  gender: Gender;
  dateOfBirth: string;
  healthRating: String;
  entries: Entry[];
}

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

export interface IPatient {
  id: string;
  name: string;
  occupation: string;
  gender: Gender;
  healthRating: String;
}

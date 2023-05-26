export interface IBodyMass {
  height: number;
  weight: number;
}

export interface IDailyExercise {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

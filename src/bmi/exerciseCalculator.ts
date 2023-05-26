interface IDailyExercise {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

const calculateExercises = (
  exerciseHours: number[],
  target: number
): IDailyExercise => {
  const periodLength = exerciseHours.length;
  const trainingDays = exerciseHours.filter((hours) => hours > 0).length;
  const totalHours = exerciseHours.reduce((sum, hours) => sum + hours, 0);
  const average = totalHours / periodLength;
  const success = average >= target;

  let rating = 1;
  let ratingDescription = "Below target";

  if (success) {
    rating = 3;
    ratingDescription = "Target achieved!";
  } else if (average >= target * 0.8) {
    rating = 2;
    ratingDescription = "Close to target";
  }

  return {
    periodLength,
    trainingDays,
    success,
    rating,
    ratingDescription,
    target,
    average,
  };
};

// Example usage
const exerciseHours = [3, 0, 2, 4.5, 0, 3, 1];
const targetHours = 2.5;
const result = calculateExercises(exerciseHours, targetHours);
console.log(result);

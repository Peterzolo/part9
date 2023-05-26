function calculateBmi(height: number, weight: number) {
  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);
  let message;
  if (bmi < 18.5) {
    message = "Underweight";
  } else if (bmi >= 18.5 && bmi < 25) {
    message = "Normal weight";
  } else if (bmi >= 25 && bmi < 30) {
    message = "Overweight";
  } else {
    message = "Obese";
  }

  return message;
}

var height = 175;
var weight = 68;

var bmiMessage = calculateBmi(height, weight);
console.log("BMI: " + bmiMessage);

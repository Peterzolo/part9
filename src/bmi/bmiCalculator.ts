interface IBodyMass {
  height: number;
  weight: number;
}

function calculateBmi(bodyMass: IBodyMass): string {
  const heightInMeters = bodyMass.height / 100;
  const bmi = bodyMass.weight / (heightInMeters * heightInMeters);

  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi < 25) {
    return "Healthy weight";
  } else if (bmi < 30) {
    return "Overweight";
  } else {
    return "Obese";
  }
}

const bodyMass: IBodyMass = {
  height: 175,
  weight: 68,
};

const bmiMessage = calculateBmi(bodyMass);
console.log("BMI:", bmiMessage);

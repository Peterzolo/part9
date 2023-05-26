import { Request, Response } from "express";
import { calculateBmi } from "../utils/helpers";
import { IBodyMass } from "../interface";

export const getBMI = (req: Request, res: Response) => {
  const height = Number(req.query.height);
  const weight = Number(req.query.weight);

  if (isNaN(height) || isNaN(weight)) {
    return res.status(400).json({ error: "Invalid height or weight values" });
  }

  const bodyMass: IBodyMass = {
    height: height,
    weight: weight,
  };

  const bmiMessage = calculateBmi(bodyMass);

  return res
    .status(200)
    .json({
      weight: bodyMass.weight,
      height: bodyMass.height,
      bmi: bmiMessage,
    });
};

import { Request, Response } from "express";
import { calculateExercises } from "../utils/helpers";
import { IDailyExercise } from "../interface";
import Exercise from "../model/Exercise";

export const addExercise = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const { exerciseHours, targetHours } = body;

    if (!exerciseHours || !targetHours) {
      return res
        .status(400)
        .json({ error: "Missing exerciseHours or targetHours" });
    }

    const dailyExercise: IDailyExercise = calculateExercises(
      exerciseHours,
      targetHours
    );

    const newExercise = new Exercise(dailyExercise);
    await newExercise.save();

    return res.status(200).json(newExercise);
  } catch (error) {
    return res
      .status(500)
      .json({ error: "An error occurred while adding the exercise" });
  }
};

import mongoose, { Schema } from "mongoose";
import { IDailyExercise } from "../interface";

const ExerciseSchema: Schema<IDailyExercise> = new Schema<IDailyExercise>({
  periodLength: {
    type: Number,
  },
  trainingDays: {
    type: Number,
  },
  success: {
    type: Boolean,
  },
  rating: {
    type: Number,
  },
  ratingDescription: {
    type: String,
  },
  target: {
    type: Number,
    required: true,
  },
  average: {
    type: Number,
  },
});

const Exercise = mongoose.model<IDailyExercise>("Exercise", ExerciseSchema);

export default Exercise;

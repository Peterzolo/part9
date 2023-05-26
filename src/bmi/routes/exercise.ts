import express from "express";
import { addExercise } from "../controller/exercise";

const exerciseRouter = express.Router();

exerciseRouter.route("/exercise/add").post(addExercise);

export default exerciseRouter;

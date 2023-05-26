import express from "express";
import { getBMI } from "../controller/bmiCalculator";

const bmiRouter = express.Router();

bmiRouter.route("/bmi").get(getBMI);

export default bmiRouter;

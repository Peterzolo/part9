import express from "express";
import { getDiagnosis } from "../controller/diagnosis";

const diagnosisRouter = express.Router();

diagnosisRouter.route("/diagnosis").get(getDiagnosis);

export default diagnosisRouter;

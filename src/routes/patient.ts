import express from "express";
import { getPatients } from "../controller/patient";

const patientRouter = express.Router();

patientRouter.route("/").get(getPatients);

export default patientRouter;

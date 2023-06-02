import express from "express";
import {
  addEntryToPatient,
  addPatient,
  getPatient,
  getPatients,
} from "../controller/patient";

const patientRouter = express.Router();

patientRouter.route("/patients").get(getPatients);
patientRouter.route("/patients/:id").get(getPatient);
patientRouter.route("/patients/add").post(addPatient);
patientRouter.route("/patients/edit").put(addEntryToPatient);

export default patientRouter;

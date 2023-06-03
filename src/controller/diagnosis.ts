import { Response, Request } from "express";
import { dataDiagnose } from "../data/diagnosis";
import { IDiagnosis } from "../interface/patient.interface";

export const getDiagnosis = async (
  _req: Request,
  res: Response
): Promise<void> => {
  try {
    const patients: IDiagnosis[] = dataDiagnose;

    if (!patients.length) {
      res.status(400).json("No patient found");
    } else {
      res.json(patients);
      console.log("DATA", patients);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

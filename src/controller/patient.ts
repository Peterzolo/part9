import { Request, Response } from "express";
import PatientModel from "../model/Patient";
import { IPatient } from "../interface/patient.interface";

export const getPatients = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const patients: IPatient[] = await PatientModel.find();
    res.json(patients);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

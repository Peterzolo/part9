import { Request, Response } from "express";
import PatientModel from "../model/Patient";
import { ICreatePatient, IPatient } from "../interface/patient.interface";

export const getPatients = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const patients: IPatient[] = await PatientModel.find();
    if (!patients.length) {
      res.status(400).json("No patient found");
    }
    res.json(patients);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getPatient = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = req.params.id;
    const patient = await PatientModel.findById(id);

    if (!patient) {
      res.status(400).json("Could not find the patient");
    }
    res.json(patient);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const addPatient = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, occupation, gender, healthRating, dateOfBirth, ssn } =
      req.body;

    const newPatient: ICreatePatient = {
      name,
      occupation,
      gender,
      healthRating,
      dateOfBirth,
      ssn,
    };

    console.log("GOT HERE", newPatient);
    const createdPatient: ICreatePatient = await PatientModel.create(
      newPatient
    );

    res.status(201).json(createdPatient);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

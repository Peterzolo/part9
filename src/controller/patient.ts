import { Request, Response } from "express";
import PatientModel from "../model/Patient";
import {
  ICreatePatient,
  IPatient,
  OccupationalHealthcareEntry,
} from "../interface/patient.interface";
import EntryModel from "../model/Entry";

export const getPatients = async (
  _req: Request,
  res: Response
): Promise<void> => {
  try {
    const patients: IPatient[] = await PatientModel.find().populate("entries");
    if (!patients.length) {
      res.status(400).json("No patient found");
    } else {
      res.json(patients);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getPatient = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = req.params.id;
    const patient = await PatientModel.findById(id).populate("entries");

    if (!patient) {
      res.status(400).json("Could not find the patient");
    } else {
      res.json(patient);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const addPatient = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, occupation, gender, dateOfBirth, ssn } = req.body;

    const newPatient: ICreatePatient = {
      name,
      occupation,
      gender,
      dateOfBirth,
      ssn,
    };

    const createdPatient: ICreatePatient = await PatientModel.create(
      newPatient
    );

    res.status(201).json(createdPatient);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const addEntryToPatient = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const entryData: OccupationalHealthcareEntry = req.body;
    const { id } = req.params;

    const patient = await PatientModel.findById(id);

    if (!patient) {
      res.status(404).json({ error: "Patient not found" });
      return;
    }

    const newEntry = await EntryModel.create(entryData);

    if (!patient.entries) {
      patient.entries = [];
    }

    patient.entries.push(newEntry._id);
    await patient.save();

    res.status(201).json(newEntry);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

import { Request, Response } from "express";
import { OccupationalHealthcareEntry } from "../interface/patient.interface";
import EntryModel from "../model/Entry";

export const addEntry = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      type,
      patientId,
      specialist,
      diagnoseCodes,
      description,
      discharge,
    } = req.body;

    const newEntry: OccupationalHealthcareEntry = {
      date: new Date().toString(),
      type,
      patientId,
      specialist,
      diagnoseCodes,
      description,
      discharge,
    };

    const createdEntry: OccupationalHealthcareEntry = await EntryModel.create(
      newEntry
    );

    console.log("GOT HERE", createdEntry);
    res.status(201).json(createdEntry);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const getEntries = async (
  _req: Request,
  res: Response
): Promise<void> => {
  try {
    const entries: OccupationalHealthcareEntry[] = await EntryModel.find();
    if (!entries.length) {
      res.status(400).json("No entry found");
    } else {
      res.json(entries);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getEntry = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = req.params.id;
    const entry = await EntryModel.findById(id);

    if (!entry) {
      res.status(400).json("Could not find the entry");
    } else {
      res.json(entry);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

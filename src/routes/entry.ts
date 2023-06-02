import express from "express";
import { addEntry, getEntries, getEntry } from "../controller/entries";

const entryRouter = express.Router();

entryRouter.route("/entries/add").post(addEntry);
entryRouter.route("/entries/").get(getEntries);
entryRouter.route("/entries/:id").get(getEntry);

export default entryRouter;

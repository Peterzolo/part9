import express from "express";
import { addEntry } from "../controller/entries";

const entryRouter = express.Router();

entryRouter.route("/entries/add").post(addEntry);

export default entryRouter;

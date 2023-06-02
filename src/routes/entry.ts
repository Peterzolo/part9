import express from "express";
import { addEntry } from "../controller/entries";

const entryRouter = express.Router();

entryRouter.route("/entries/add").post(addEntry);
entryRouter.route("/entries/").get(addEntry);
entryRouter.route("/entries/:id").get(addEntry);

export default entryRouter;

import express from "express";
import cors from "cors";
import patientRouter from "./routes/patient";
import dotenv from "dotenv";
import { databaseConnection } from "./config/database";
import bmiRouter from "./bmi/routes/bmiRoute";
import exerciseRouter from "./bmi/routes/exercise";
import entryRouter from "./routes/entry";

dotenv.config();

const app = express();

databaseConnection();

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
app.use(cors());
app.use(express.json());

const PORT = 5000;

app.get("/api/ping", (_req, res) => {
  console.log("someone pinged here");
  res.send("pong");
});

app.use("/api", patientRouter);
app.use("/api", bmiRouter);
app.use("/api", exerciseRouter);
app.use("/api", entryRouter);

app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});

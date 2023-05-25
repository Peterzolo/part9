import express from "express";
import cors from "cors";
import patientRouter from "./routes/patient";
import dotenv from "dotenv";
import { databaseConnection } from "./config/database";

dotenv.config();

const app = express();

databaseConnection();

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
app.use(cors());
app.use(express.json());

const PORT = 5000;

app.get("/ping", (_req, res) => {
  console.log("someone pinged here");
  res.send("pong");
});

app.use("/api", patientRouter);

app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});

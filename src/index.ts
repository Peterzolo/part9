import express from "express";
import { CurrentUserRouter } from "./routes/currentUser";

const app = express();

app.use(CurrentUserRouter);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});

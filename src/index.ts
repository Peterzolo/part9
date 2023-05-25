import express from "express";

const app = express();

const PORT = 5000;

app.get("/ping", (_req, res) => {
  console.log("someone pinged here");
  res.send("pong");
});

app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});

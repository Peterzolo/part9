import express from "express";

const router = express.Router();

router.get("/api/users/current-user", (req, res) => {
  res.send("Hello router");
});

export { router as CurrentUserRouter };

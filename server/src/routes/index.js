import { Router } from "express";
import { prisma } from "../db.js";
import { HTTP_MESSAGES } from "../utils/httpMessages.js";

const router = Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

export default router;
import express from "express";
import { createLead, getLeads } from "../controllers/leadController";
import { protect, admin } from "../middleware/authMiddleware";

const router = express.Router();

router.post("/", createLead);
router.get("/", protect, admin, getLeads);

export default router;

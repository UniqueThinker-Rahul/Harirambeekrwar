import express from "express";
import { createBooking, getBookings } from "../controllers/bookingController";
import { protect, admin, optionalProtect } from "../middleware/authMiddleware";

const router = express.Router();

router.post("/", optionalProtect, createBooking); // public, but can contain logged in info via middleware if we use protect optionally but here we can just parse token manually if provided
// Wait, we need an optional protect middleware for bookings, or just check headers.
router.get("/", protect, admin, getBookings);

export default router;

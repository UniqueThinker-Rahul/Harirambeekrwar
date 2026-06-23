import express from "express";
import { addOrderItems, getOrderById, updateOrderToPaid, getMyOrders, getOrders } from "../controllers/orderController";
import { protect, admin, optionalProtect } from "../middleware/authMiddleware";

const router = express.Router();

router.post("/", optionalProtect, addOrderItems);
router.get("/mine", protect, getMyOrders);
router.get("/:id", optionalProtect, getOrderById);
router.put("/:id/pay", optionalProtect, updateOrderToPaid);
router.get("/", protect, admin, getOrders);

export default router;

import express from "express";
import productRoutes from "./productRoutes";
import authRoutes from "./authRoutes";
import bookingRoutes from "./bookingRoutes";
import orderRoutes from "./orderRoutes";
import leadRoutes from "./leadRoutes";

const router = express.Router();

router.use("/products", productRoutes);
router.use("/users", authRoutes);
router.use("/bookings", bookingRoutes);
router.use("/orders", orderRoutes);
router.use("/leads", leadRoutes);

// Mock payment API since we don't have razorpay creds
router.post("/payment/create-order", (req, res) => {
    // normally use razorpay sdk here
    res.json({
        id: "order_" + Math.random().toString(36).substring(7),
        amount: req.body.amount,
        currency: "INR"
    });
});

export default router;

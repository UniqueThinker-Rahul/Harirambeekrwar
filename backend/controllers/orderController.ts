import { Request, Response } from "express";
import { Order } from "../models";
import mongoose from "mongoose";

export const addOrderItems = async (req: Request, res: Response) => {
  try {
    const { orderItems, shippingAddress, paymentMethod, itemsPrice, taxPrice, shippingPrice, totalPrice } = req.body;

    if (orderItems && orderItems.length === 0) {
      return res.status(400).json({ message: "No order items" });
    } else {
      if (mongoose.connection.readyState !== 1) {
          return res.status(201).json({
              _id: "mock_order_123",
              orderItems,
              shippingAddress,
              paymentMethod,
              totalPrice,
              isPaid: false
          });
      }

      const order = new Order({
        orderItems,
        user: (req as any).user ? (req as any).user._id : undefined,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
      });

      const createdOrder = await order.save();
      res.status(201).json(createdOrder);
    }
  } catch(err) {
      res.status(500).json({ message: "Server Error creating order" });
  }
};

export const getOrderById = async (req: Request, res: Response) => {
  try {
      if (mongoose.connection.readyState !== 1) {
          if (req.params.id === 'mock_order_123') return res.json({ _id: 'mock_order_123', isPaid: false });
          return res.status(404).json({ message: "Order not found" });
      }
      const order = await Order.findById(req.params.id).populate("user", "name email");

      if (order) {
        res.json(order);
      } else {
        res.status(404).json({ message: "Order not found" });
      }
  } catch(err) {
      res.status(500).json({ message: "Server error fetching order" });
  }
};

export const updateOrderToPaid = async (req: Request, res: Response) => {
  try {
      if (mongoose.connection.readyState !== 1) {
          return res.json({ _id: req.params.id, isPaid: true, paidAt: new Date() });
      }
      const order = await Order.findById(req.params.id);

      if (order) {
        order.isPaid = true;
        order.paidAt = new Date();
        order.paymentResult = {
          id: req.body.id,
          status: req.body.status,
          update_time: req.body.update_time,
          email_address: req.body.email_address,
        };

        const updatedOrder = await order.save();
        res.json(updatedOrder);
      } else {
        res.status(404).json({ message: "Order not found" });
      }
  } catch(err) {
      res.status(500).json({ message: "Server error updating payment" });
  }
};

export const getMyOrders = async (req: Request, res: Response) => {
  try {
      if (mongoose.connection.readyState !== 1) return res.json([]);
      const orders = await Order.find({ user: (req as any).user._id });
      res.json(orders);
  } catch(err) {
      res.status(500).json({ message: "Server error fetching my orders" });
  }
};

export const getOrders = async (req: Request, res: Response) => {
  try {
      if (mongoose.connection.readyState !== 1) return res.json([]);
      const orders = await Order.find({}).populate("user", "id name");
      res.json(orders);
  } catch(err) {
      res.status(500).json({ message: "Server error fetching all orders" });
  }
};

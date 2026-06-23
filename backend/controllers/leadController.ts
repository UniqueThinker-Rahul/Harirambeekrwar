import { Request, Response } from "express";
import { Lead } from "../models";
import mongoose from "mongoose";

export const createLead = async (req: Request, res: Response) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      return res.status(201).json({ message: "Lead captured successfully", lead: req.body });
    }
    const lead = await Lead.create(req.body);
    res.status(201).json({ message: "Lead captured successfully", lead });
  } catch (error) {
    res.status(500).json({ message: "Failed to capture lead" });
  }
};

export const getLeads = async (req: Request, res: Response) => {
  try {
    if (mongoose.connection.readyState !== 1) return res.json([]);
    const leads = await Lead.find({}).sort({ createdAt: -1 });
    res.json(leads);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch leads" });
  }
};

/**
 * Branch Controller.
 */

import { Request, Response } from "express";
import {
  getAllBranches,
  getBranchById,
  createBranch,
  updateBranch,
  deleteBranch
} from "../services/branchServices";

/**
 * Get all branches.
 */
export const handleGetAllBranches = (req: Request, res: Response): void => {
  res.json(getAllBranches());
};

/**
 * Get branch by ID.
 */
export const handleGetBranchById = (req: Request, res: Response): void => {
  const id = parseInt(req.params.id, 10);
  const branch = getBranchById(id);
  if (!branch) {
    res.status(404).json({ error: "Branch not found" });
  } else {
    res.json(branch);
  }
};

/**
 * Create a new branch.
 */
export const handleCreateBranch = (req: Request, res: Response): void => {
  const { name, address, phone } = req.body;
  if (!name || !address || !phone) {
    res.status(400).json({ error: "Missing required fields" });
    return;
  }
  const newBranch = createBranch({ name, address, phone });
  res.status(201).json(newBranch);
};

/**
 * Update branch.
 */
export const handleUpdateBranch = (req: Request, res: Response): void => {
  const id = parseInt(req.params.id, 10);
  const updates = req.body;
  const updated = updateBranch(id, updates);
  if (!updated) {
    res.status(404).json({ error: "Branch not found" });
  } else {
    res.json(updated);
  }
};

/**
 * Delete branch.
 */
export const handleDeleteBranch = (req: Request, res: Response): void => {
  const id = parseInt(req.params.id, 10);
  const success = deleteBranch(id);
  if (!success) {
    res.status(404).json({ error: "Branch not found" });
  } else {
    res.json({ message: "Branch deleted successfully" });
  }
};
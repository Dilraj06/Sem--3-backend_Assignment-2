/**
 * Employee Controller.
 * Handles request/response for employee endpoints.
 */

import { Request, Response } from "express";
import {
  getAllEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee
} from "../services/employeeServices";

/**
 * Get all employees.
 */
export const handleGetAllEmployees = (req: Request, res: Response): void => {
  res.json(getAllEmployees());
};

/**
 * Get employee by ID.
 */
export const handleGetEmployeeById = (req: Request, res: Response): void => {
  const id = parseInt(req.params.id, 10);
  const employee = getEmployeeById(id);
  if (!employee) {
    res.status(404).json({ error: "Employee not found" });
  } else {
    res.json(employee);
  }
};

/**
 * Create employee.
 */
export const handleCreateEmployee = (req: Request, res: Response): void => {
  const { name, position, department, email, phone, branchId } = req.body;
  if (!name || !position || !department || !email || !phone || !branchId) {
    res.status(400).json({ error: "Missing required fields" });
    return;
  }
  const newEmployee = createEmployee({ name, position, department, email, phone, branchId });
  res.status(201).json(newEmployee);
};

/**
 * Update employee.
 */
export const handleUpdateEmployee = (req: Request, res: Response): void => {
  const id = parseInt(req.params.id, 10);
  const updates = req.body;
  const updated = updateEmployee(id, updates);
  if (!updated) {
    res.status(404).json({ error: "Employee not found" });
  } else {
    res.json(updated);
  }
};

/**
 * Delete employee.
 */
export const handleDeleteEmployee = (req: Request, res: Response): void => {
  const id = parseInt(req.params.id, 10);
  const success = deleteEmployee(id);
  if (!success) {
    res.status(404).json({ error: "Employee not found" });
  } else {
    res.json({ message: "Employee deleted successfully" });
  }
};
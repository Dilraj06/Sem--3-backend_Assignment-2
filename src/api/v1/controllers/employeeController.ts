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
  deleteEmployee,
  getEmployeesByBranch,
  getEmployeesByDepartment
} from "../services/employeeServices";

/**
 * Get all employees.
 * @route GET /employees
 */
export const handleGetAllEmployees = (req: Request, res: Response): void => {
  res.json(getAllEmployees());
};

/**
 * Get employee by ID.
 * @route GET /employees/:id
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
 *  @route POST /employees
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
 * @route PUT /employees/:id
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

/**
 * Get employees by branch ID.
 * @route GET /employees/branch/:id
 */
export const handleGetEmployeesByBranch = (req: Request, res: Response): void => {
  const branchId = parseInt(req.params.id, 10);
  if (isNaN(branchId)) {
    res.status(400).json({ error: "Invalid branch ID" });
    return;
  }
  const results = getEmployeesByBranch(branchId);
  res.json(results);
};

/**
 * Get employees by department.
 * @route GET /employees/department/:department
 */
export const handleGetEmployeesByDepartment = (req: Request, res: Response): void => {
  const department = req.params.department;
  if (!department) {
    res.status(400).json({ error: "Missing department parameter" });
    return;
  }
  const results = getEmployeesByDepartment(department);
  res.json(results);
};
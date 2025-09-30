/**
 * Employee Routes.
 */

import { Router } from "express";
import {
  handleGetAllEmployees,
  handleGetEmployeeById,
  handleCreateEmployee,
  handleUpdateEmployee,
  handleDeleteEmployee
} from "../controllers/employeeController";

const router = Router();

router.get("/", handleGetAllEmployees);
router.get("/:id", handleGetEmployeeById);
router.post("/", handleCreateEmployee);
router.put("/:id", handleUpdateEmployee);
router.delete("/:id", handleDeleteEmployee);

export default router;
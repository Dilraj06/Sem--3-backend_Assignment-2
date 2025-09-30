/**
 * Employee Routes.
 */

import { Router } from "express";
import {
  handleGetAllEmployees,
  handleGetEmployeeById,
  handleCreateEmployee,
  handleUpdateEmployee,
  handleDeleteEmployee,
  handleGetEmployeesByBranch,
  handleGetEmployeesByDepartment
} from "../controllers/employeeController";

const router = Router();


// Additional logical routes must come before :id route
router.get("/branch/:id", handleGetEmployeesByBranch);
router.get("/department/:department", handleGetEmployeesByDepartment);

router.get("/", handleGetAllEmployees);
router.get("/:id", handleGetEmployeeById);
router.post("/", handleCreateEmployee);
router.put("/:id", handleUpdateEmployee);
router.delete("/:id", handleDeleteEmployee);

export default router;
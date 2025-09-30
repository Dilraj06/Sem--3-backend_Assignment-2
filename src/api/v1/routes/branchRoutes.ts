/**
 * Branch Routes
 */

import { Router } from "express";
import {
  handleGetAllBranches,
  handleGetBranchById,
  handleCreateBranch,
  handleUpdateBranch,
  handleDeleteBranch
} from "../controllers/branchController";

const router = Router();

router.get("/", handleGetAllBranches);
router.get("/:id", handleGetBranchById);
router.post("/", handleCreateBranch);
router.put("/:id", handleUpdateBranch);
router.delete("/:id", handleDeleteBranch);

export default router;
/**
 * Branch Service for CRUD operations.
 */

import { branches, Branch } from "../../../data/branches";

let branchData: Branch[] = branches;

/**
 * Get all branches.
 */
export const getAllBranches = (): Branch[] => {
  return branchData;
};

/**
 * Get branch by ID.
 */
export const getBranchById = (id: number): Branch | undefined => {
  return branchData.find(branch => branch.id === id);
};

/**
 * Create a new branch.
 */
export const createBranch = (branch: Omit<Branch, "id">): Branch => {
  const newBranch: Branch = {
    id: branchData.length > 0 ? branchData[branchData.length - 1].id + 1 : 1,
    ...branch
  };
  branchData.push(newBranch);
  return newBranch;
};

/**
 * Update existing branch.
 */
export const updateBranch = (id: number, updates: Partial<Branch>): Branch | null => {
  const index = branchData.findIndex(branch => branch.id === id);
  if (index === -1) return null;
  branchData[index] = { ...branchData[index], ...updates, id };
  return branchData[index];
};

/**
 * Delete branch.
 */
export const deleteBranch = (id: number): boolean => {
  const index = branchData.findIndex(branch => branch.id === id);
  if (index === -1) return false;
  branchData.splice(index, 1);
  return true;
};
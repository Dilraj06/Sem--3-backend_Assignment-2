import {
  handleGetAllBranches,
  handleGetBranchById,
  handleCreateBranch,
  handleUpdateBranch,
  handleDeleteBranch
} from "../src/api/v1/controllers/branchController";

import { Request, Response } from "express";

// Mock Response object
const mockResponse = () => {
  const res: Partial<Response> = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res as Response;
};

describe("Branch Controller", () => {
  it("handleGetAllBranches should return list of branches", () => {
    const req = {} as Request;
    const res = mockResponse();
    handleGetAllBranches(req, res);
    expect(res.json).toHaveBeenCalled();
  });

  it("handleGetBranchById should return 404 if not found", () => {
    const req = { params: { id: "9999" } } as unknown as Request;
    const res = mockResponse();
    handleGetBranchById(req, res);
    expect(res.status).toHaveBeenCalledWith(404);
  });

  it("handleCreateBranch should return 400 for missing fields", () => {
    const req = { body: { name: "Test Only" } } as Request;
    const res = mockResponse();
    handleCreateBranch(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
  });

  it("handleUpdateBranch should return 404 if branch not found", () => {
    const req = { params: { id: "9999" }, body: { address: "Nowhere" } } as unknown as Request;
    const res = mockResponse();
    handleUpdateBranch(req, res);
    expect(res.status).toHaveBeenCalledWith(404);
  });

  it("handleDeleteBranch should return 404 if branch not found", () => {
    const req = { params: { id: "9999" } } as unknown as Request;
    const res = mockResponse();
    handleDeleteBranch(req, res);
    expect(res.status).toHaveBeenCalledWith(404);
  });
});
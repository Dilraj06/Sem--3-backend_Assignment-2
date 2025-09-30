import {
  handleGetAllEmployees,
  handleGetEmployeeById,
  handleCreateEmployee,
  handleUpdateEmployee,
  handleDeleteEmployee,
  handleGetEmployeesByBranch,
  handleGetEmployeesByDepartment
} from "../src/api/v1/controllers/employeeController";
import { Request, Response } from "express";

const mockResponse = () => {
  const res: Partial<Response> = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res as Response;
};

describe("Employee Controller", () => {
  // GET ALL
  it("should return all employees", () => {
    const req = {} as Request;
    const res = mockResponse();
    handleGetAllEmployees(req, res);
    expect(res.json).toHaveBeenCalled();
  });

  // GET BY ID 
  it("should return an employee by ID", () => {
    const req = { params: { id: "1" } } as unknown as Request;
    const res = mockResponse();
    handleGetEmployeeById(req, res);
    expect(res.json).toHaveBeenCalled();
  });

  it("should return 404 for non-existing employee ID", () => {
    const req = { params: { id: "9999" } } as unknown as Request;
    const res = mockResponse();
    handleGetEmployeeById(req, res);
    expect(res.status).toHaveBeenCalledWith(404);
  });

  // CREATE 
  it("should create a new employee", () => {
    const req = {
      body: {
        name: "Test Employee",
        position: "Tester",
        department: "QA",
        email: "test@pixell-river.com",
        phone: "111-222-3333",
        branchId: 1
      }
    } as Request;
    const res = mockResponse();
    handleCreateEmployee(req, res);
    expect(res.status).toHaveBeenCalledWith(201);
  });

  it("should return 400 when creating with missing fields", () => {
    const req = { body: { name: "Incomplete Employee" } } as Request;
    const res = mockResponse();
    handleCreateEmployee(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
  });

  // UPDATE
  it("should update an employee", () => {
    const req = { params: { id: "1" }, body: { position: "Updated" } } as unknown as Request;
    const res = mockResponse();
    handleUpdateEmployee(req, res);
    expect(res.json).toHaveBeenCalled();
  });

  it("should return 404 when updating non-existing employee", () => {
    const req = { params: { id: "9999" }, body: { position: "X" } } as unknown as Request;
    const res = mockResponse();
    handleUpdateEmployee(req, res);
    expect(res.status).toHaveBeenCalledWith(404);
  });

  // DELETE 
  it("should delete an employee", () => {
    const req = { params: { id: "1" } } as unknown as Request;
    const res = mockResponse();
    handleDeleteEmployee(req, res);
    expect(res.json).toHaveBeenCalledWith({ message: "Employee deleted successfully" });
  });

  it("should return 404 when deleting non-existing employee", () => {
    const req = { params: { id: "9999" } } as unknown as Request;
    const res = mockResponse();
    handleDeleteEmployee(req, res);
    expect(res.status).toHaveBeenCalledWith(404);
  });

  // BY BRANCH 
  it("should return employees for a valid branch ID", () => {
    const req = { params: { id: "1" } } as unknown as Request;
    const res = mockResponse();
    handleGetEmployeesByBranch(req, res);
    expect(res.json).toHaveBeenCalled();
  });

  it("should return 400 for invalid branch ID", () => {
    const req = { params: { id: "abc" } } as unknown as Request;
    const res = mockResponse();
    handleGetEmployeesByBranch(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
  });

  // BY DEPARTMENT 
  it("should return employees for a valid department", () => {
    const req = { params: { department: "IT" } } as unknown as Request;
    const res = mockResponse();
    handleGetEmployeesByDepartment(req, res);
    expect(res.json).toHaveBeenCalled();
  });

  it("should return 400 for missing department", () => {
    const req = { params: { department: "" } } as unknown as Request;
    const res = mockResponse();
    handleGetEmployeesByDepartment(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
  });
});
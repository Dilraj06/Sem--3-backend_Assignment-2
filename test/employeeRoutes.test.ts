import request from "supertest";
import app from "../src/app";

describe("Employee API Endpoints", () => {
  it("should create a new employee", async () => {
    const response = await request(app)
      .post("/api/v1/employees")
      .send({
        name: "Test User",
        position: "Tester",
        department: "QA",
        email: "test.user@pixell-river.com",
        phone: "123-456-7890",
        branchId: 1
      });
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
  });

  it("should fail to create employee with missing fields", async () => {
    const response = await request(app).post("/api/v1/employees").send({
      name: "Test User"
    });
    expect(response.status).toBe(400);
  });

  it("should get all employees", async () => {
    const response = await request(app).get("/api/v1/employees");
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it("should get employee by ID", async () => {
    const response = await request(app).get("/api/v1/employees/1");
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("id", 1);
  });

  it("should return 404 for non-existing employee", async () => {
    const response = await request(app).get("/api/v1/employees/999");
    expect(response.status).toBe(404);
  });

  it("should update an employee", async () => {
    const response = await request(app).put("/api/v1/employees/1").send({
      position: "Updated Manager"
    });
    expect(response.status).toBe(200);
    expect(response.body.position).toBe("Updated Manager");
  });

  it("should delete an employee", async () => {
    const response = await request(app).delete("/api/v1/employees/1");
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("message", "Employee deleted successfully");
  });
});
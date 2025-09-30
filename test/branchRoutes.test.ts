import request from "supertest";
import app from "../src/app";

describe("Branch API Endpoints", () => {
  it("should create a new branch", async () => {
    const response = await request(app)
      .post("/api/v1/branches")
      .send({
        name: "Test Branch",
        address: "123 Test Street",
        phone: "111-222-3333"
      });
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
  });

  it("should fail to create branch with missing fields", async () => {
    const response = await request(app).post("/api/v1/branches").send({
      name: "Incomplete Branch"
    });
    expect(response.status).toBe(400);
  });

  it("should get all branches", async () => {
    const response = await request(app).get("/api/v1/branches");
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it("should get branch by ID", async () => {
    const response = await request(app).get("/api/v1/branches/1");
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("id", 1);
  });

  it("should return 404 for non-existing branch", async () => {
    const response = await request(app).get("/api/v1/branches/999");
    expect(response.status).toBe(404);
  });

  it("should update a branch", async () => {
    const response = await request(app).put("/api/v1/branches/1").send({
      address: "Updated Address"
    });
    expect(response.status).toBe(200);
    expect(response.body.address).toBe("Updated Address");
  });

  it("should delete a branch", async () => {
    const response = await request(app).delete("/api/v1/branches/1");
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("message", "Branch deleted successfully");
  });
});
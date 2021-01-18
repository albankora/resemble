const request = require("supertest");
const app = require("../../server");

describe("Test the root path", () => {
  test("It should response with hello world", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(500);
    expect(response.body.status.code).toBe(500);
    expect(response.body.status.message).toBe("Invalid type for Request URI!!!");
  });
});

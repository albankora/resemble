const request = require("supertest");
const app = require("../../server");

describe("Test the root path", () => {
  test("It should response with hello world", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe("hello world");
  });
});

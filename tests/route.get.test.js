const request = require("supertest");
const { connect, disconnect, cleanData } = require("../helper/mongodb.helper.js")
const app = require("../server.js")


describe("GET /api/users", () => {

    beforeAll(connect)
    // beforeEach(cleanData)
    afterAll(disconnect)

    test("should return a description to a single user", async () => {
      const response = await request(app).get("/api/users/63f3c7f30bcc72e8219f964f");///api/users/:id
      expect(response.statusCode).toBe(200);
      expect(response.body.singleUser.description).toBe('qualquer coisa');
      
    });


});
  

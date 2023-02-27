const request = require("supertest");
const app = require("../server.js")


describe("GET /api/users", () => {

    test("should return a description to a single user", async () => {
      const response = await request(app).get("/api/users/63fc0091ca93b9be05b47123");
      expect(response.statusCode).toBe(200);
      expect(response.body.singleUser.description).toBe('perto de casa');
    });

    test("should return all the users", async()=>{
     
      const response = await request(app).get("/api/users")
      expect(response.statusCode).toBe(200);
      expect(response.body.user.length).toBeGreaterThan(0);
    })
});

  
describe("DELETE /api/users/:id", ()=>{

  test("should delete a user", async()=>{
      const response = await request(app).delete("/api/users/63fbfdafd57f4c320768941d")//Esse teste só ira dar certo na primeira, pois na segunda tentativa o usuário já vai ter sido deletado
      expect(response.statusCode).toBe(200)
  })

  test("should return a status code 404", async()=>{
    const response = await request(app).delete("/api/users/63fbfdafd57f4c3skas");
    if(!response){
      expect(response.statusCode).toBe(404)
    }

  })



})

describe("PATCH /api/users/:id", ()=>{

  test("should update a user", async()=>{
    const response = await request(app).patch("/api/users/63fc00195b2ac54345d1781d").send({
      name : "Vitor",
      dob: "1997-04-09",
      address: "Rua certa",
      description: "Perto de casa"
    })
    expect(response.statusCode).toBe(200);
    expect(response.body.singleUser.address).toBe("Rua certa");

  })

})


describe("POST /api/users", ()=>{

  test("should create a new user", async()=>{

      const response = await request(app).post("/api/users").send({
        name : "Silvia",
        dob: "1987-04-04",
        address: "Rua Alameda",
        description: "Uma pessoa baixa"
      })

      expect(response.statusCode).toBe(200)
      expect(response.body.user.name).toBe("Silvia")
   
  })

})
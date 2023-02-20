const request = require("supertest");
const app = require("../app.js")


describe("POST /api/users", ()=>{

    describe("given a name, date of your brithday, address and description", ()=>{

        test("should respond with a 200 status code", async ()=>{
            const response = await request(app).post("/api/users").send({
                name: "name",
                dob : "2000-06-22",
                address : "address",
                description: "a good person"
            })

            expect(response.statusCode).toBe(200)
        })

        test("should specify json in the content type header", async()=>{
            const response = await request(app).post("/api/users").send({
                name: "name",
                dob : "2000-06-22",
                address : "address",
                description: "a good person"
            })
            expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
        })

        // test("response has userID", async()=>{
        //     const response = await request(app).post("/api/users").send({
        //         name: "name",
        //         dob : "2000-06-22",
        //         address : "address",
        //         description: "a good person"
        //     })

        //     expect(response.body.id).toBeDefined()
        // })

    })

    describe("When the name, dob, address, description is missing", ()=>{

        test("should respond with a status code 400", async()=>{

            const bodyData = [ 
                {name: "name"},
                {address : "address"},
                {dob: "2000-06-22"},
                {description: "a good person"},
                {},
            ]
            
            for(const body of bodyData){
                const response = await request(app).post("/api/users").send(body)
                expect(response.statusCode).toBe(400)
            }
        })
    })
})

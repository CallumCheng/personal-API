const request = require("supertest") //allows us to make test requests
const app = require("../app");

describe("API", () => {
    let api;

    beforeAll(() => {
        api = app.listen(3030);
    })

    afterAll((done) => {        //done ensures it will finish, not neccessary but better to have
        api.close(done)
    })

    it("Responds to a GET request at / with a 200 status", (done) => {
        request(api).get("/").expect(200, done);
    })

    it("Responds to a GET request at /people with a 200 status", (done) => {
        request(api).get("/people").expect(200, done);
    })

    it("Responds to a GET request at /people with a JSON object", (done) => {
        request(api).get("/people").expect('Content-Type', /json/, done)
    })
})

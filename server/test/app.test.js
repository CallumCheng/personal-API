const request = require("supertest") //allows us to make test requests

const app = require("../app");

describe("API", () => {
    let api;

    beforeAll(() => {
        api = app.listen(3030);
    })

    afterAll(() => {
        api.close()
    })

    it("Responds to a GET request at / with a 200 status", () => {
        request(api).get("/").expect(200);
    })
})

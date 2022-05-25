const express = require("express");

const app = express();

app.use(express.json());

app.get("/courses", (request, response) => {
    const query = request.query;
    console.log(query);
    return response.json(["Curso", "Curso55", "Curso3"]);

})

app.post("/courses", (request, response) => {
    const body = request.body;
    console.log(body);
    return response.json(["Curso1", "Curso2", "Curso3", "Curso4"]);

})

app.put("/courses/:id", (request, response) => {
    const { id } = request.params;
    console.log(id);
    return response.json(["Curso1", "Curso2", "Curso10"]);

});

app.patch("/courses/:id", (request, response) => {
    return response.json(["Curso1", "Curso22", "Curso3"]);

});

app.delete("/courses/:id", (request, response) => {
    return response.json(["Curso1", "Curso22", "Curso3"]);

});

app.listen(3333);
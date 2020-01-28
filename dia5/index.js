const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const PORT = 3000;

app.use(bodyParser.json());

const home = `${__dirname}/views/index.html`;

// Endpoint
app.get('/', (request, response) => {
    response.status(200).sendFile(home);
});

app.get('/name', (request, response) => {
    const name = {
        name: "Gerardo",
        age: 24
    }
    response.status(200).send(name);
});

app.post('/suma', (request, response) => {
    const { num1, num2 } = request.body;
    const result = num1 + num2;
    response.status(200).send(result);
});

app.listen(PORT, () => {
    console.log('Servidor arriba en el puerto ' + PORT);
});

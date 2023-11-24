function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Error: Division entre 0');
  }
  return a / b;
}

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  	res.json({ message: 'Hola, mundoaaaaaaaaaaa!' });
});

app.get('/ping', (req, res) => {
  res.send('pong');
});

let server;

function startServer(port) {
  server = app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
  });

  return server;
}

function closeServer(callback) {
  if (server) {
    server.close(callback);
  } else {
    console.warn(
      'El servidor no se ha iniciado correctamente o ya se ha cerrado.',
    );
    callback();
  }
}

module.exports = { sum, multiply, divide, app, startServer, closeServer };

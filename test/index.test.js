const {
  sum,
  multiply,
  divide,

  startServer,
  closeServer,
} = require('../src/index.js');
const request = require('supertest');

let server;

beforeAll(() => {
  server = startServer(3000);
});

afterAll((done) => {
  closeServer(done);
});

describe('Funciones matematicas', () => {
  it('Devuelve la suma de dos numeros', () => {
    expect(sum(2, 3)).toBe(5);
  });

  it('Devuelve el producto de dos numeros', () => {
    expect(multiply(2, 3)).toBe(6);
  });

  it('Devuelve la division de dos numeros', () => {
    expect(divide(6, 2)).toBe(3);
  });

  it('Espera un error al dividir entre cero', () => {
    expect(() => divide(6, 0)).toThrow('Error: Division entre 0');
  });
});

describe('Rutas de la aplicación', () => {
  test('GET /ping debería devolver "pong"', async () => {
    const response = await request(server).get('/ping');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('pong!');
  });
  test('GET / debería devolver "Hola, mundo!"', async () => {
    const response = await request(server).get('/');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Hola, Mundo!');
  });
  // Agrega más pruebas según sea necesario
});

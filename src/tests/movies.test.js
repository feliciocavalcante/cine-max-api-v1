const request = require('supertest');
const app = require('../app'); // ajuste o caminho conforme seu projeto

describe("Bateria de teste para a API de filmes", () => {
  test("Deve buscar os filmes e retornar status 200 e um array", async () => {
    const response = await request(app).get("/movies"); // rota correta da API

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});

const request = require('supertest');
const app = require('./index');

describe('API Endpoints', () => {
  test('GET / should return API information', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('message');
  });

  test('GET /health should return health status', async () => {
    const response = await request(app).get('/health');
    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe('healthy');
  });

  test('GET /metrics should return metrics data', async () => {
    const response = await request(app).get('/metrics');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('deployments');
    expect(response.body).toHaveProperty('pullRequests');
  });
});

import request from 'supertest';
import { app } from '../app';

describe('Health Check Route', () => {
  test('GET /health は 200 と "OK" を返す', async () => {
    const response = await request(app).get('/health');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ status: 'OK'});
  })
})

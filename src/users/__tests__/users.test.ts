// src/users/__tests__/users.test.ts
import request from 'supertest';
import app from '../../index';

describe('Users API', () => {
    it('should return a list of users', async () => {
        const response = await request(app).get('/users');
        expect(response.status).toBe(200);
        expect(response.body).toHaveLength(3); // Assuming the example data has three users
    });
});

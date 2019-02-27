const request = require('supertest');

const app = require('../../src/app');
const { User } = require('../../src/app/models');
const truncate = require('../utils/truncate');

describe('Authentication', () => {
    beforeEach( async () => await truncate() )

    it('should authenticate with valid credentials', async () => {
        const user = await User.create({
            name: 'Teste',
            email: 'teste@teste.com',
            password: '123456'
        })

        const response = await request(app)
            .post('/sessions')
            .send({
                email: user.email,
                password: "123456"
            });
        
        expect(response.status).toBe(200);
    });    

    it('should not authenticate with valid credentials', async () => {
        const response = await request(app)
            .post('/sessions')
            .send({
                email: 'teste@teste.com',
                password: `${Date.now}`
            });
        
        expect(response.status).toBe(401);
    });

    it('should return jwt token when authenticated', async () => {
        const user = await User.create({
            name: 'Teste',
            email: 'teste@teste.com',
            password: '123456'
        })

        const response = await request(app)
            .post('/sessions')
            .send({
                email: user.email,
                password: "123456"
            });
        
        expect(response.body).toHaveProperty('token');
    });
});
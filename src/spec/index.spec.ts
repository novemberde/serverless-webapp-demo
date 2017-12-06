import App from '../App';
import * as request from 'supertest';
import * as express from 'express';

const app: express.Application = new App().app;

describe('GET /test', () => {
    it('should return 200 status code', (done) => {
        request(app)
        .get('/test')
        .expect(200)
        .end((err, res) => {
            if (err) throw err;

            console.log(res.text);
            done();
        });
    });
});
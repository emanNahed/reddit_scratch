const request = require('supertest');

const app = require('../server/app');
const dbBuild = require('../server/database/config/build');
const  connection  = require('../server/database/config/connection');


describe('1. test register route', ()=>{
    beforeEach(() => dbBuild());
    test('2. get /register', (done) => {
        request(app)
        .get('/register')
        .expect(200)
        .expect('content-type', /html/)
        .end((err, res) => {
            if(err) return done(err);
            done();
        })
    });
    test('3. post /register with valid data', (done) => {
        request(app)
        .post('/register')
        .send({username: 'wamda', email: 'wamda1096@gmail.com', password: 'eFou#1235'})
        .expect(302)
        .end((err, res) =>{
            if(err) return done(err);
            done();
        })
        
    });
});


afterAll(() => connection.end());

var expect = require('chai').expect;
const supertest = require('supertest');
const app = require('../../app');
const user = require('../../models/user');

// This section of simulate a test when your application IS RUNNING, we are testing by DECLARING ROUTES, and see if it returns the correct data
describe('integration test', function() {
    describe('get login in form', function(){
        context('check request login form', function(){
            it('request login form', function(done){
                supertest(app)
                    .get('/users/login')
                    .send({})
                    .end(function(err, res) {
                        expect(res.statusCode).to.equal(200);
                        done();
                    })
            })
        })
    });
    describe('login functionality success', function(){
        context('check correct respond when enter correct login details', function(){
            it('provide correct login details', async function(){
                this.timeout(10000)
                let testingUser = {email:'juitengc@student.unimelb.edu.au', password:'a'};
                const res = await supertest(app)
                    .post('/users/login')
                    .send(testingUser);
                expect(res.statusCode).to.equal(302);
                expect(res.text).to.equal('Found. Redirecting to /users/dashboard');
            })
        })
    });
    describe('login functionality fail', function(){
        context('check correct respond when enter wrong login details', function(){
            it('provide wrong login details', async function(){
                this.timeout(10000)
                let testingUser = {email:'juitengc@student.unimelb.edu.au', password:'b'};
                const res = await supertest(app)
                    .post('/users/login')
                    .send(testingUser);
                expect(res.statusCode).to.equal(302);
                expect(res.text).to.equal('Found. Redirecting to /users/login');
            });
            it('provide unverified email address', async function(){
                this.timeout(10000)
                let testingUser = {email:'111@student.unimelb.edu.au', password:'111'};
                const res = await supertest(app)
                    .post('/users/login')
                    .send(testingUser);
                expect(res.statusCode).to.equal(302);
                expect(res.text).to.equal('Found. Redirecting to /users/login');
            });
            it('provide no email', async function(){
                this.timeout(10000)
                let testingUser = {email:'', password:'a'};
                const res = await supertest(app)
                    .post('/users/login')
                    .send(testingUser);
                expect(res.statusCode).to.equal(302);
                expect(res.text).to.equal('Found. Redirecting to /users/login');
            });
            it('provide no password', async function(){
                this.timeout(10000)
                let testingUser = {email:'111@student.unimelb.edu.au', password:''};
                const res = await supertest(app)
                    .post('/users/login')
                    .send(testingUser);
                expect(res.statusCode).to.equal(302);
                expect(res.text).to.equal('Found. Redirecting to /users/login');
            });
            it('provide no details (no email and password)', async function(){
                this.timeout(10000)
                let testingUser = {email:'', password:''};
                const res = await supertest(app)
                    .post('/users/login')
                    .send(testingUser);
                expect(res.statusCode).to.equal(302);
                expect(res.text).to.equal('Found. Redirecting to /users/login');
            });
        })
    })
})
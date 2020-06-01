'use strict';
// const serverMod = require('../lib/server');
// const server = serverMod.server;
const {server} = require('../lib/server');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('web server for products', () => {

  it('should respond with 500', ()=> {   
    return mockRequest.get('/bad')
      .then(results=> {
        expect(results.status).toBe(500);
      }).catch(console.error);
  });

  it('should respond 404 of an invalid route',() => {
    return mockRequest
      .get('/invalidroute')
      .then(results => {
        expect(results.status).toBe(404);
      }).catch(console.log);
  });

  it('should respond properly /products', ()=> {
    return mockRequest
      .get('/products')
      .then(results => {
        expect(results.status).toBe(200);
      });
  });

  it('should respond properly /products/id', ()=> {
    return mockRequest
      .get('/products/1')
      .then(results => {
        expect(results.status).toBe(200);
      });
  });

  it('should post data', ()=> {
    return mockRequest
      .post('/products')
      .send({
        'category': 'family',
        'name': 'abdallah',
        'display_name': '****',
        'description': 'Best one in the neighbourhood'})
      .then(results => {
        expect(results.status).toBe(200);
      });
  });

  it('should update data', ()=> {
    return mockRequest
      .put('/products/1')
      .send({
        'category': 'family',
        'name': 'abdallah',
        'display_name': '****',
        'description': 'Best one in the neighbourhood'})
      .then(results => {
        expect(results.status).toBe(200);
      });
  });

  it('should delete data', ()=> {
    return mockRequest
      .delete('/products/1')
      .send({
        'category': 'family',
        'name': 'abdallah',
        'display_name': '****',
        'description': 'Best one in the neighbourhood'})
      .then(results => {
        expect(results.status).toBe(200);
      });
  });

});

describe('web server for categories', () => {
 
  it('should respond properly /categories', ()=> {
    return mockRequest
      .get('/categories')
      .then(results => {
        expect(results.status).toBe(200);
      });
  });
  
  it('should respond properly /categories/id', ()=> {
    return mockRequest
      .get('/categories/1')
      .then(results => {
        expect(results.status).toBe(200);
      });
  });
  
  it('should post data', ()=> {
    return mockRequest
      .post('/categories')
      .send({
        'category': 'family',
        'name': 'abdallah',
        'display_name': '****',
        'description': 'Best one in the neighbourhood'})
      .then(results => {
        expect(results.status).toBe(200);
      });
  });
  
  it('should update data', ()=> {
    return mockRequest
      .put('/categories/1')
      .send({
        'category': 'family',
        'name': 'abdallah',
        'display_name': '****',
        'description': 'Best one in the neighbourhood'})
      .then(results => {
        expect(results.status).toBe(200);
      });
  });
  
  it('should delete data', ()=> {
    return mockRequest
      .delete('/categories/1')
      .send({
        'category': 'family',
        'name': 'abdallah',
        'display_name': '****',
        'description': 'Best one in the neighbourhood'})
      .then(results => {
        expect(results.status).toBe(200);
      });
  });
  
});
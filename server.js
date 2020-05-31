'use-strict';

const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running');
});

const path = require('path');
const router1 = jsonServer.router(path.join(__dirname, 'db.json'));
let result=router1.db.__wrapped__;
// console.log(result);
// function count(){

// } 
var opjCategories = {Categories:{
  'count':`${result.categories.length}`,
  'result':`${result.categories}`,
}};
var opjProducts = {Products:{
  'count':`${result.products.length}`,
  'result':`${result.products}`,
}};
console.log(opjCategories);
console.log(opjProducts);
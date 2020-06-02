'use strict';

const Model = require('../model');
const schema = require('./products-schema');

class Products extends Model {
  constructor() {
    super(schema);
  }
}

module.exports = new Products();

// require it, then make instance new Products();
// beside not doing new, use the methods directly + Singlton 
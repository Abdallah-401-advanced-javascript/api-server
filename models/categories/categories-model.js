'use strict';

const Model = require('../model');
const schema = require('./categories-schema');

class Categories extends Model {
  constructor() {
    super(schema);
  }
}

module.exports = new Categories();

// require it, then make instance new Categories();
// beside not doing new, use the methods directly + Singlton 
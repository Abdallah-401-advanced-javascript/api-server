'use strict';

const express = require('express');
const router = express.Router();

// require products model  , use it in my router fnts.
const products = require('../models/products/products-model');

router.get('/products', readProducts);
router.get('/products/:_id', readProducts);
router.post('/products', createProducts);
router.delete('/products/:_id', deleteProducts);
router.put('/products/:_id', updateProducts);

function readProducts(req, res, next) {
  // CRUD operation
  products.read(req.params._id)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(next);
}

function createProducts(req,res, next ) {
  console.log('I am inisde createProducts route !@@@@@@@@');
  // CRUD operation
  products.create(req.body)
    .then(data => {
      res.status(201).json(data); // {_id: monogid, }
    }).catch(next);
}

function deleteProducts(req,res, next) {
  // CRUD operation
  console.log('----->>>> testing delete route ',req.params._id);
  products.delete(req.params._id)
    .then(data => {
      res.status(200).json(data);
    }).catch(next);
}

function updateProducts(req,res, next) {
  // CRUD operation
  console.log('----->>>> testing update route ',req.params._id,req.body);
  products.update(req.params._id,req.body)
    .then(data => {
      res.status(200).json(data);
    }).catch(next);
}

module.exports = router;
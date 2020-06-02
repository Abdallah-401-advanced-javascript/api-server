'use strict';

const express = require('express');
const router = express.Router();

// require categories model  , use it in my router fnts.
const categories = require('../models/categories/categories-model');

router.get('/categories', readCategories);
router.get('/categories/:_id', readCategories);
router.post('/categories', createCategories);
router.delete('/categories/:_id', deleteCategories);
router.put('/categories/:_id', updateCategories);

function readCategories(req, res, next) {
  // CRUD operation
  categories.read(req.params._id)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(next);
}

function createCategories(req,res, next ) {
  // CRUD operation
  categories.create(req.body)
    .then(data => {
      res.status(201).json(data); // {_id: monogid, }
    }).catch(next);
}

function deleteCategories(req,res, next) {
  // CRUD operation
  console.log('----->>>> testing delete route ',req.params._id);
  categories.delete(req.params._id)
    .then(data => {
      res.status(200).json(data);
    }).catch(next);
}

function updateCategories(req,res, next) {
  // CRUD operation
  console.log('----->>>> testing update route ',req.params._id,req.body);
  categories.update(req.params._id,req.body)
    .then(data => {
      res.status(200).json(data);
    }).catch(next);
}

module.exports = router;
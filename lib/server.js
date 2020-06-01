'use strict';

const express = require('express');
const logRequest = require('../middleware/logger.js');
const timestamp = require('../middleware/timestamp.js');
const err500 = require('../middleware/500.js');
const err404 = require('../middleware/404.js');


const app = express();

// Global MiddleWare 
app.use(express.json());

//Global Middleware Logger
app.use(timestamp);
app.use(logRequest);

// ############################# DB ###################################
let db={
  'categories': [
    {
      'id': 1,      
      'name': 'anas',
      'display_name': '4',
      'description': '4rd best one in the neighbourhood',
    },
    {
      'id': 2,
      'name': 'abdallah',
      'display_name': 'dedo',
      'description': 'Sec best one in the neighbourhood',
    },
    {
      'id': 3,
      'name': 'ahmad',
      'display_name': 'hmoodah',
      'description': '3rd best one in the neighbourhood',
    },
    {
      'id': 4,      
      'name': 'anas',
      'display_name': '2',
      'description': '4rd best one in the neighbourhood',
    },
  ],
  'products': [
    {
      'id': 1,
      'category': 'family',
      'name': 'ali',
      'display_name': 'aloosh',
      'description': 'Best one in the neighbourhood',
    },
    {
      'id': 2,
      'category': 'family',
      'name': 'abdallah',
      'display_name': '****',
      'description': 'Sec best one in the neighbourhood',
    },
  ],
};

// ############################# ROUTS ###################################
// Post ================================>
app.post('/products', (req, res) => {
  // console.log('req.body: ', req.body);
  let name = req.body.name;
  let category = req.body.category;
  let display_name = req.body.display_name;
  let description = req.body.description;
  let record ={
    'category': category,
    'name': name,
    'display_name': display_name,
    'description': description,
  };
  record.id = db.products.length + 1;
  db.products.push(record);
  // console.log(db.products);
  console.log(record);
  res.json(record);
});

app.post('/categories', (req, res) => {
  // console.log('req.body: ', req.body);
  let name = req.body.name;
  let display_name = req.body.display_name;
  let description = req.body.description;
  let record ={
    'name': name,
    'display_name': display_name,
    'description': description,
  };
  record.id = db.categories.length + 1;
  db.categories.push(record);
  // console.log(db.categories);
  console.log(record);
  res.json(record);
});

// get ================================>
app.get('/products', (req, res) => {
  console.log('hello',db.products);
  res.status(200).json(db.products);
});
app.get('/categories', (req, res) => {
  console.log('hello',db.categories);
  res.status(200).json(db.categories);
});

// get :id ================================>
app.get('/products/:id', (req, res) => {
  let id = req.params.id;
  let products = db.products.filter((ele)=>{
    return ele.id==id; 
  });
  console.log(products);
  res.status(200).json({products});
});
app.get('/categories/:id', (req, res) => {
  let id = req.params.id;
  let categories = db.categories.filter((ele)=>{
    return ele.id==id; 
  });
  console.log(categories);
  res.status(200).json({categories});
});

// put :id ================================>
app.put('/products/:id', (req, res) => {
  let id = req.params.id;
  let name = req.body.name;
  let category = req.body.category;
  let display_name = req.body.display_name;
  let description = req.body.description;
  let record ={
    'category': category,
    'name': name,
    'display_name': display_name,
    'description': description,
  };
  record.id = id;
  db.products.splice(id-1, 1);
  db.products.push(record);
  console.log(db.products);
  res.status(200).json(db.products);
});

app.put('/categories/:id', (req, res) => {
  let id = req.params.id;
  let name = req.body.name;
  let display_name = req.body.display_name;
  let description = req.body.description;
  let record ={
    'name': name,
    'display_name': display_name,
    'description': description,
  };
  record.id = id;
  db.categories.splice(id-1, 1);
  db.categories.push(record);
  console.log(db.categories);
  res.status(200).json(db.categories);
});

// delete :id ================================>
app.delete('/products/:id', (req, res) => {
  let id = req.params.id;
  db.products.splice(id-1, 1);
  console.log(db.products);
  res.status(200).json(db.products);
});
app.delete('/categories/:id', (req, res) => {
  let id = req.params.id;
  db.categories.splice(id-1, 1);
  console.log(db.categories);
  res.status(200).json(db.categories);
});

app.use('*',err404); // 404
app.use(err500); //500
 
module.exports = {
  server: app,
  start: (port) => {
    const PORT = port || process.env.PORT || 3000;
    app.listen(PORT, () => { console.log(`Listening on port ${PORT}`); });
  },
};

// Old way =============>
// function listen(){
//   const PORT = process.env.PORT || 3000;
//   app.listen(PORT, () => { console.log(`Listening on port ${PORT}`); });
// }
// module.exports = {
//   server: app,
//   start: listen, 
// };
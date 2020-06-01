'use strict';

module.exports = (req, res, next) => {
  req.requestTime=new Date();
  // let requestTime=new Date();
  // console.log(requestTime);
  next();
};
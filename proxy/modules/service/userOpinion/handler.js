'use strict';

var common = require('../../common.js');

var handler = module.exports = {};

handler.onGet = function(req, res) {
  common.jsonRes(req, res, '/all');
};

handler.onPost = function(req, res, data) {
  console.info(data);
  res.writeHeader(200, {'Content-Type': 'text/plain'});
  res.end('');
};

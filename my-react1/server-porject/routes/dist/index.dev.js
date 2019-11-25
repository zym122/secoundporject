"use strict";

var express = require('express');

var router = express.Router();

var _require = require('../db/db'),
    find = _require.find;
/* GET home page. */


router.get('/userxx', function _callee(req, res, next) {
  var data;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          res.append('Access-Control-Allow-Origin', '*');
          _context.next = 3;
          return regeneratorRuntime.awrap(find('userxx'));

        case 3:
          data = _context.sent;
          res.json(data);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
}); // router.get('/restaurants', async function (req, res, next) {
//   res.append('Access-Control-Allow-Origin','*');
//   let data = await find('restaurants');
//   res.json(data);
// });

module.exports = router;
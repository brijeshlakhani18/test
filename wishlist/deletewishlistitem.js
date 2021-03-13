var express = require('express');
var router = express.Router();
var connection = require('../connect');
const SendData = require('../SendData');

router.get('/', async (req, res) =>{
  var id = req.query.id;
        var deleteq = `DELETE FROM wishlist WHERE id=${id}`;
      return connection.query(deleteq,  (error, results, fields) =>{
          if (error) throw error;
          SendData(res,{success: true ,data: results})
        })
  })
  
module.exports = router;
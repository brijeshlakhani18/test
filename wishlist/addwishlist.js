var express = require('express');
var router = express.Router();
var multer = require('multer');
var bodyParser = require('body-parser');
var connection = require('../connect');
const SendData = require('../SendData');
var jsonParser = bodyParser.json();

var middleware = jsonParser;
router.post('/', middleware, async (req, res) => {
    var p_id = req.body.p_id;
    var customer_id = req.body.customer_id;
    var insert = `INSERT INTO wishlist(p_id,customer_id) 
                  VALUES ('${p_id}','${customer_id}')`;
      return connection.query(insert,  (error, results, fields) =>{
          if (error) throw error;
          var returndata = {
              id: results.insertId,
              customer_id: customer_id
          }
          SendData(res,{success: true, msg: 'product add To wishlist succesfully' ,data: returndata})
        })
})

module.exports = router;
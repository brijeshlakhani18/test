var express = require('express')
var router = express.Router()
var bodyParser = require('body-parser')
var connection = require('../connect');
const SendData = require('../SendData');
var jsonParser = bodyParser.json()
router.post('/', jsonParser ,function (req, res) {
     var socialid = req.body.socialid,
     loginWith = req.body.loginWith;
       var select =  `SELECT * FROM signup WHERE socialid='${socialid}'`;
    connection.query(select, function (error, results, fields) {
      if (error) throw error;
      if(results.length > 0)
      {  
        results[0].password = null;
        SendData(res,{success: true, msg: 'login successfully', data: results})
      }
      else
      {
        SendData(res,{success: false, msg: 'login success with '+loginWith})
      }
    });
  })
  
module.exports = router;
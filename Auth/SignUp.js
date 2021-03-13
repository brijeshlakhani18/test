var express = require('express')
var router = express.Router()
var bodyParser = require('body-parser')
var connection = require('../connect');
const SendData = require('../SendData');
var jsonParser = bodyParser.json()
router.post('/', jsonParser ,function (req, res) {
   var fname = req.body.fname ,
       lname = req.body.lname ,
       email = req.body.email,
       password = req.body.password,
       loginWith = req.body.loginWith,
       socialid = req.body.socialid;
        var select = `SELECT * FROM signup WHERE email='${email}'`;
        var msg = 'email address already register';
    connection.query(select, function (error, results, fields) {
      if (error) throw error;
      if(results.length > 0)
      {  
        SendData(res,{success: false, msg: msg})
      }
      else
      {
        var insert = `INSERT INTO signup(fname,lastname,email,password,socialid,loginWith) 
                     VALUES ('${fname}','${lname}','${email}','${password}','${socialid}', '${loginWith}')`;
        connection.query(insert, function (insert_error, insert_results, insert_fields) {
          if (insert_error) throw insert_error;
          SendData(res,{success: true,msg:'registration succesfully'})
        })
      }
    });
  })
  
module.exports = router;
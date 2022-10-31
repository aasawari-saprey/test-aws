const express=require ('express');
const router=express.Router();
const bodyParser=require('body-parser')
const db=require('./db');

router.use(bodyParser.json({urlencoded:true}));

router.get('/:email', function(req, res, next) {
    const email = req.params.email;
    var sql = `SELECT * FROM user WHERE email=?`;
    db.query(sql,[email],function(err, row, fields) {
      if(err) {
        console.log(err)
      }
      else
      res.json(row);  
    })
  });  

  module.exports=router;

const express=require ('express');
const router=express.Router();
const bodyParser=require('body-parser')
const db=require('./db');

router.use(bodyParser.json({urlencoded:true}));

router.post("/",function(req,res,next){
    const {category,department, division, email, endDateFinal, location, priority, projectName, reason, startDateFinal, status, type}=req.body;
    var sql="INSERT INTO project(category,department, division, idUser, enddate, loaction, priority, projectName, reason, startdate, status,  type) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)";
    db.query(sql,[category,department, division, email, endDateFinal, location, priority, projectName, reason, startDateFinal,status, type],function(err,result){
        if (err){
            throw err;
        }
        else{
            res.json({"Status" : "Sucess"});
        }
    }   


    )
})

router.get('/:email', function(req, res, next) {
    const email = req.params.email;
    var sql = `SELECT * FROM project WHERE idUser=?`;
    db.query(sql,[email],function(err, row, fields) {
      if(err) {
        console.log(err)
      }
      else
      res.json(row);  
    })
  }); 

  router.get('/:email/running', function(req, res, next) {
    const email = req.params.email;
    const status="Running";
    var sql = 'SELECT count(*) AS namesCount FROM project WHERE status=? AND idUser=?';
    db.query(sql,[status, email],function(err, row,) {
      if(err) {
        console.log(err)
      }
      else
      res.json(row);
    })
}); 

router.get('/:email/cancelled', function(req, res, next) {
  const email = req.params.email;
  const status="Cancelled";
  var sql = 'SELECT count(*) AS namesCount FROM project WHERE status=? AND idUser=?';
  db.query(sql,[status, email],function(err, row, fields, count) {
    if(err) {
      console.log(err)
    }
    else
    res.json(row);
  })
}); 

router.get('/:email/registered', function(req, res, next) {
  const email = req.params.email;
  var sql = 'SELECT count(*) AS namesCount FROM project WHERE idUser=?';
  db.query(sql,[email],function(err, row, fields, count) {
    if(err) {
      console.log(err)
    }
    else
    res.json(row);
  })
}); 

router.get('/:email/closed', function(req, res, next) {
  const email = req.params.email;
  const status="Closed";
  var sql = 'SELECT count(*) AS namesCount FROM project WHERE status=? AND idUser=?';
  db.query(sql,[status, email],function(err, row, fields, count) {
    if(err) {
      console.log(err)
    }
    else
    res.json(row);
  })
}); 
  
  
  router.put("/",function(req,res,next){
    const {Status, idProject, idUser}=req.body;
    var sql="Update project set status=? where idUser=? AND idProject=?";
    db.query(sql,[Status, idUser, idProject],function(err,result){
        if (err){
            throw err;
        }
        else{
            res.json(result);
        }
    }   


    )
})

module.exports=router;

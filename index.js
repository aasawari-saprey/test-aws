const express = require ('express');

const app = express();

port = 3000;

const db = require ('./db');

const userRoute = require('./user');
const projectRoute= require ('./project');

app.listen(port,function(){
    console.log("Running Sucessfully");
})

app.use("*", (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Content-Disposition", "application/binary");
    res.header("X-Frame-Options", "sameorigin");
    if (req.method == "OPTIONS") {
      res.send(200);
    } else {
      next();
    }
  });

  app.use('/user', userRoute);
  app.use('/project', projectRoute);

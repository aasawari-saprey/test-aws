const mysql = require('mysql');



const con = mysql.createConnection({
    host: "database-1.cpor9i1muo4l.ap-south-1.rds.amazonaws.com",
    user: "admin",
    password: "Aasawari23",
    database: "database1",
})

con.connect(function(err) {
    if (err)
        console.log(err);
    else
        console.log("connected");
})

module.exports = con;
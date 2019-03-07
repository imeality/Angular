var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "cms_proj"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO comments (commentpostid, commentuserid, commentdate, commentcontent) VALUES ('2', '5', '2014-12-23 02:56:55', 'qwertyuiopaslazwsxedc')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Again Record Inserted");
  });
});
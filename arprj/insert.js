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
  var sql = "INSERT INTO registration (mrsmr, username, firstname, lastname, email, number, password, gender, birthdate, image, address) VALUES ('Mr', 'Benqq', 'Angular', 'Nodejs', 'ngnod@gmail.com', '7458932516', '123asdf' ,'Male', '2011-05-25', 'image.jpg', 'USK')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});
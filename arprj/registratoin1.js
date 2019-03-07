const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
 
// connection configurations
const mc = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cms_proj'
});
 
// connect to database
mc.connect();

 
// All Registration Show  
app.get('/api/registration', function (req, res) {
    mc.query('SELECT * FROM registration', function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'Show All Registrations.' });
    });
});
 
// Show Only Those Registration Search By Mrsmr 
app.get('/api/registration/search/:keyword', function (req, res) {
    let keyword = req.params.keyword;
    mc.query("SELECT * FROM registration WHERE mrsmr LIKE ? ", ['%' + keyword + '%'], function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'Registration Tables.' });
    });
});
 
// Show Only Those Registration Search By Id
app.get('/api/registration/:id', function (req, res) {
 
    let regid = req.params.regid;
 
    mc.query('SELECT * FROM registration where regid', regid, function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results[2], message: 'Todos list.' });
    });
 
});
// Update Registration by Id
app.updateById = function(regid, registration, result){
    sql.query("UPDATE registration SET mrsmr = ? WHERE regid = ?", [registration.registration, regid], function (err, res) {
            if(err) {
                console.log("error: ", err);
                  result(null, err);
               }
             else{   
               result(null, res);
                  }
              }); 
  };
 // Delete registration which selected by Id
app.delete('/api/dlt/registration/:id', function (req, res) {
    console.log(req.body);
    connection.query('DELETE FROM registration WHERE `id`=?', [req.body.regid], function (error, results, fields) {
       if (error) throw error;
       res.end('Record has been deleted!');
     });
 });

// Error If URL Is Blank
app.all("*", function (req, res, next) {
    return res.send('page  found');
    next();
});
 
// port must be set On --port 1200 
app.listen(1200, function () {
    console.log('Node app is running on port 1200');
});
 

module.exports = app;
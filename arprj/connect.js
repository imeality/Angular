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
 
// default route
app.get('/', function (req, res) {
    return res.send({ error: true, message: 'hello' })
});
 
// Retrieve all todos 
app.get('/user', function (req, res) {
    mc.query('SELECT * FROM registration', function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'Todos list.' });
    });
});
 
// Search for todos with ‘bug’ in their name
app.get('/user/search/:keyword', function (req, res) {
    let keyword = req.params.keyword;
    mc.query("SELECT * FROM registration WHERE mrsmr LIKE ? ", ['%' + keyword + '%'], function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'Todos search list.' });
    });
});
 
// Retrieve todo with id 
app.get('/user/:id', function (req, res) {
 
    let regid = req.params.regid;
 
    mc.query('SELECT * FROM registration where regid', regid, function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results[2], message: 'Todos list.' });
    });
 
});
 

 
// all other requests redirect to 404
app.all("*", function (req, res, next) {
    return res.send('page  found');
    next();
});
 
// port must be set to 8080 because incoming http requests are routed from port 80 to port 8080
app.listen(1200, function () {
    console.log('Node app is running on port 4200');
});
 
// allows "grunt dev" to create a development server with livereload
module.exports = app;
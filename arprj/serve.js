const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');

// connection configurations
const su = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cms_proj'
});
 
// connect to database
su.connect();
 
// default route
// Retrieve all registration 

app.get('/user/search/:keyword', function (req, res) {
    let keyword = req.param.keyword;

    su.query("SELECT * FROM registration WHERE  regid LIKE ?" , ['%' + keyword + '%'], function (err, results, fields) {
        if (err) throw err;
        console.log(results);
        return res.send('search data :' + results[1]);
    });
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
 
 /*
// default route No Path Decide     
app.get('/', function (req, res) {
    return res.send('hello')
});
 */

// port must be set to 8080 because incoming http requests are routed from port 80 to port 8080
app.listen(5000, function () {
    console.log('Node app is running on port 5000');
});



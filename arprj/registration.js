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
// Get All Data Collect From Database 
app.get('/', function (req, res) {   
    su.query('SELECT * FROM registration', function (err, results, fields) {
        if (err) throw err;
        console.log(results);
        return res.send( 'User-Detail :' + results[1].regid + results[1].mrsmr + results[1].username + results[1].firstname + results[1].lastname + results[1].email + results[1].number + results[1].password + results[1].gender + results[1].birthdate + results[1].image + results[1].address);
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



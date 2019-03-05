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
app.post('/user', function (req, res) {
 
    let tsk = req.body.tsk;
 
    if (!tsk) {
        return res.status(400).send({ error:true, message: 'Please provide tsk' });
    }
 
    mc.query("INSERT INTO registration SET ? ", {username: username}, function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'New tsk has been created successfully.' });
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
app.listen(3000, function () {
    console.log('Node app is running on port 3000');
});



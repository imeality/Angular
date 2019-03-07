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
 

 
// Show All Sub-admin Api Created
app.get('/api/subadmin', function (req, res) {
    mc.query('SELECT * FROM subadmin', function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'Somthing went wrong --Invalid--.' });
    });
});
 
// Show Subadmin Only Search by Name 
app.get('/api/subadmin/search/:keyword', function (req, res) {
    let keyword = req.params.keyword;
    mc.query("SELECT * FROM subadmin WHERE subname LIKE ? ", ['%' + keyword + '%'], function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'Something went wrong' });
    });
});
 
// Show subadmin Only Search By Id
app.get('/api/subadmin/sear/:id', function (req, res) {
 
    let subadminid = req.params.subadminid;
 
    mc.query('SELECT * FROM subadmin where subadminid', subadminid, function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results[1], message: 'Somthing went wrong.' });
    });
 
});
// Create Subadmin 
app.post('/api/subadmin/', function(req, res){
    const subadmin = {
        subadminid: subadmin.length + 1,
        subname: request.body.subname,
        subrole: request.body.subrole,
        subemail: request.body.subemail,
        subpassword: request.body.subpassword,
        subcategory: request.body.subcategory
    }

    subadmins.push(subadmin);
    Response.json(subadmin);
});

// Create Delete Api Of Subadmin
//rest api to delete record from mysql database
app.delete('/api/dlt/subadmin/:id', function (req, res) {
    console.log(req.body);
    connection.query('DELETE FROM `subadmin` WHERE `id`=?', [req.body.id], function (error, results, fields) {
       if (error) throw error;
       res.end('Record has been deleted!');
     });
 });
 
// Error if url is blank
app.all("*", function (req, res, next) {
    return res.send('page  found', 'Must Search --/api/post');
    next();
});
 
// port must be set to 8080 because incoming http requests are routed from port 80 to port 8080
app.listen(1400, function () {
    console.log('Node app is running on port 1400');
});
 
// allows "grunt dev" to create a development server with livereload
module.exports = app;
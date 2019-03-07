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
 

 
// Show All Coments Api Created
app.get('/api/comment', function (req, res) {
    mc.query('SELECT * FROM comments', function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'Somthing went wrong --Invalid--.' });
    });
});
 
// Show Comment Only Search by content 
app.get('/api/commentpostid/search/:keyword', function (req, res) {
    let keyword = req.params.keyword;
    mc.query("SELECT * FROM comment WHERE commentcontent LIKE ? ", ['%' + keyword + '%'], function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'Something went wrong' });
    });
});
 
// Show Commnets Only Search By Id
app.get('/api/comment/sear/:id', function (req, res) {
 
    let commentpostid = req.params.commentpostid;
 
    mc.query('SELECT * FROM comments where commentpostid', commentpostid, function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results[1], message: 'Somthing went wrong.' });
    });
 
});
 

 
// Error if url is blank
app.all("*", function (req, res, next) {
    return res.send('page  found', 'Must Search --/api/post');
    next();
});
 
// port must be set to 8080 because incoming http requests are routed from port 80 to port 8080
app.listen(1300, function () {
    console.log('Node app is running on port 1300');
});
 
// allows "grunt dev" to create a development server with livereload
module.exports = app;
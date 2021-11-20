var express = require('express');
const path = require('path')
var app = express();

app.use(express.static('public'));
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')))

/*LINKS DE PAGINAS*/
app.get('/', function (req, res) {
    res.sendFile(__dirname + "/public/" + "index.html");
 })
 app.get('/cv', function (req, res) {
    res.sendFile(__dirname + "/public/html/" + "listuser.html");
 })

 /*INICIAR SERVIDOR*/
 var server = app.listen(80, function () {
    var host = server.address().address
    var port = server.address().port
    
    console.log("Example app listening at http://%s:%s", host, port)
 })
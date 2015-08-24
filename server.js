var express= require('express');
var bodyParser= require('body-parser');
var app= express();

app.listen(3000, function  () {
	console.log(" server on")
});

app.use(express.static());
app.set(' view engine', 'ejs');
app.set('views' , __dirname +'/views' )

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res){

//res.sendfile( __dirname + '/index.html');

res.render(index);

});
var express= require('express');
var bodyParser= require('body-parser');
var request= require('request');
var app= express();

app.listen(3000, function  () {
	console.log(" server on")
});

app.use(express.static('public'));

app.set('view engine','ejs');
app.set('views' , __dirname +'/views' )

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res){

res.render('index');

});

var dictUrl = "https://letsventure.0x10.info/api/dictionary.php?type=json&query=d";

app.get('/search',function  (req,res) {
	
	console.log(req.body);
	 request.get( dictUrl , function (error, response, body) {
 		 if (!error && response.statusCode == 200) {
  					 // console.log(response);

  					// for(x in body)
  					// {
  					// 	console.log(x[0].word);
  					// }
  					var data= JSON.parse(body);
  					console.log(data[3].word);
 				 }
		})
	 res.render('index');

});



var express= require('express');
var bodyParser= require('body-parser');
var request= require('request');
var mongodb = require('mongodb');
var module = require('module');
var url = require('url');
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

res.render('index' , { words : " "});

});



app.get('/search',function  (req,res) {
	
	console.log(req.url, req.params , req.query.word[0]);
	var queryWord = req.query.word;
	var letter= req.query.word[0];
	var dictUrl = "https://letsventure.0x10.info/api/dictionary.php?type=json&query="+letter;  // in query put    the request query

    
	 request.get( dictUrl , function (error, response, body) {
 		 if (!error && response.statusCode == 200) {
  					  //console.log(body);

  					// for(x in body)
  					// {
  					// 	console.log(x[0].word);
  					// }
  				
  				var data= JSON.parse(body);

  				console.log(data[0].word);  // checking if we are getting data

  				var flag=0;
  				for(x in  data)
  				{
            
            var a= data[x].word.toLowerCase();
            console.log( a + " word " + queryWord) ;
  					if(a==queryWord)
  					{ 

              console.log( data[x].word , data[x].audio_url + " word here ") ;
  					 	res.render('index', { words : data[x].word , description : data[x].description , audio : data[x].audio_url  });
  					 	flag=1;
  					} 
  				}

  				if(flag=0)
  				{
            console.log( " here ") ;
  					res.render('index', { words : ''});
  				}

 			 }
		})
	 
	// console.log("reaching here data is  " ,data)

});


app.post('/bookmark' , function  (req , res) {
   console.log(" reachin in bookmarks" , req.body);  
   console.log( " bookmark body  ");

   var MongoClient = mongodb.MongoClient;
   var url = 'mongodb://127.0.0.1:27017/dictionary';

   
     MongoClient.connect(url, function(err, db) {
       
       if(err)
       {
        console.log("error");
       }

       console.log(" connected to the db");

       var collection = db.collection('bookmark');

       collection.insert({ 'word ': req.body.word  , 'desc' : req.body.description });
       console.log("data is inserted");
   })
   
     res.send("hello");

});



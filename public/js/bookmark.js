$(document).ready(function  () {

    $("#book").click(function(e){
    	e.preventDefault();

    	var value = $("#searchResult").text();
    	var valueDes = $("#searchDes").text();

    	console.log(" testing ")
    	console.log (value  ," checking ");
    	
    	$.post("/bookmark", { word : value , description : valueDes } , 
    		function  (data , status ) {
    			   

    			   console.log(data + " res");

    			   var str= " ";

    			   for(x in data)
    			   {
    			   	   str += data[x].word;
    			   	   str+= "<br>";
    			   }

    			   $("#bookItems").html(str);
    		});
   	});		 

});
$(document).ready(function  () {

    $("#find").click(function(e){
    	e.preventDefault();

    	var value = $("#searchResult");
    	var valueDes = $("#searchDes");

    	$.post("/bookmark", { word : value , description : valueDes } , 
    		function  (data , status ) {
    			
    		});
   	});		 

});
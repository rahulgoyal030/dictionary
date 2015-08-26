$(document).ready(function  () {

      $("#playAudio").click( function(){
            
            $(".audioDemo").trigger('load');
            $(".audioDemo").trigger('play');

      })

});
$(document).ready(function(){

	$(function() {
  		$("div").click(function(evt) {
      			$(this).html("pageX: " + evt.pageX + ", pageY: " + evt.pageY + ", tipo: " + evt.type + ", target: " + evt.target);
 		 });
	});

});

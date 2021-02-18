function collision(jqDiv1, jqDiv2) {
      var x1 = jqDiv1.offset().left;
      var y1 = jqDiv1.offset().top;
      var h1 = jqDiv1.outerHeight(true);
      var w1 = jqDiv1.outerWidth(true);
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = jqDiv2.offset().left;
      var y2 = jqDiv2.offset().top;
      var h2 = jqDiv2.outerHeight(true);
      var w2 = jqDiv2.outerWidth(true);
      var b2 = y2 + h2;
      var r2 = x2 + w2;
        
      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
      return true;
}

$(document).ready(function(){
      $('#arriba').click(function(){
          $('#capa').animate({top: "-=200px"},5000,"swing");
      });

      $('#abajo').click(function(){
          $('#capa').animate({top: "+=200px"},5000,"swing");
      });

      $('#izquierda').click(function(){
          $('#capa').animate({left: "+=-200px"},5000,"swing");
      });

      $('#derecha').click(function(){
          $('#capa').animate({left: "+=200px"},5000,"swing");
      });

      $(document).keydown(function(tecla){

          if (tecla.keyCode == 40) {
              $('#capa').animate({top: "+=10px"},10);
          }else if(tecla.keyCode == 38) {
              $('#capa').animate({top: "-=10px"},10);
          }else if(tecla.keyCode == 37){
              $('#capa').animate({left: "+=-10px"},10);
          }
          else if(tecla.keyCode == 39){
              $('#capa').animate({left: "+=10px"},10);
          }
      });

      $("#stop").click(function(){
        // Para animacion actual y se queda donde esta
        $("#capa").stop(false,false);
      });

      $("#vaciar").click(function(){
        // Para animacion actual, se va al valor final CSS 
        // y se eliminan de la cola el resto de animaciones
        $("#capa").stop(true,true);
      });
});

setInterval(detectarColision,5);


function detectarColision(){

  var bColision = collision($('#capa'),$('#pared'));

  if( bColision > 0){
    $("#capa").stop(false,false);   
    $('#capa').animate({left: "+=-3px"},1);     
  }
}
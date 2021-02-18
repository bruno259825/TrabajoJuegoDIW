let bSalidaPuerta = false;

$(document).keydown(function(tecla) {

    let bAbajo = (tecla.keyCode == 40 || tecla.keyCode == 83);

    if (bSalidaPuerta || bAbajo) {
        if (bAbajo) {
            $('#capa').css("background-image", "url('img/personajes/abajo.png')");
            $('#capa').animate({ top: "+=10px" }, 3);
            iSalirPuerta = -1;
        } else if (tecla.keyCode == 38 || tecla.keyCode == 87) {
            $('#capa').css("background-image", "url('img/personajes/arriba.png')");
            $('#capa').animate({ top: "-=10px" }, 3);
        } else if (tecla.keyCode == 37 || tecla.keyCode == 65) {
            $('#capa').css("background-image", "url('img/personajes/izquierda.png')");
            $('#capa').animate({ left: "-=10px" }, 3);
        } else if (tecla.keyCode == 39 || tecla.keyCode == 68) {
            $('#capa').css("background-image", "url('img/personajes/derecha.png')");
            $('#capa').animate({ left: "+=10px" }, 3);
        }

        bSalidaPuerta = true;
    }

});

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

function detectarColision() {
    if (collision($('#capa'), $('#paredIzq'))) {

        $("#capa").stop(false, false);
        $('#capa').animate({ left: "+=3px" }, 1);

    } else if (collision($('#capa'), $('#paredDer'))) {

        $("#capa").stop(false, false);
        $('#capa').animate({ left: "-=3px" }, 1);

    } else if (collision($('#capa'), $('#paredArri'))) {
        $("#capa").stop(false, false);
        $('#capa').animate({ top: "+=3px" }, 1);
    } else if (collision($('#capa'), $('#paredAba'))) {
        $("#capa").stop(false, false);
        $('#capa').animate({ top: "-=3px" }, 1);
    } else if (collision($('#capa'), $('#relleno1'))) {
        $("#capa").stop(false, false);
        $('#capa').animate({ top: "-=3px" }, 1);
    }

}

setInterval(detectarColision, 5);
let personaje = $("#capa");
let llave = $("#llave");
let bLlaveObtenida = false;

const UP = 1,
    DOWN = 0,
    LEFT = 3,
    RIGHT = 4;

let direccionPersonaje = UP;
let obstaculos = $(".relleno,#paredArri,#paredAba,#paredDer,#paredIzq,#llave,#puertaFin");

$(document).keydown(function(tecla) {

    if (tecla.keyCode == 40 || tecla.keyCode == 83) {
        personaje.css("background-image", "url('img/personajes/abajo.png')");
        personaje.animate({ top: "+=10px" }, 3);
        iSalirPuerta = -1;
        direccionPersonaje = DOWN;
    } else if (tecla.keyCode == 38 || tecla.keyCode == 87) {
        personaje.css("background-image", "url('img/personajes/arriba.png')");
        personaje.animate({ top: "-=10px" }, 3);
        direccionPersonaje = UP;
    } else if (tecla.keyCode == 37 || tecla.keyCode == 65) {
        personaje.css("background-image", "url('img/personajes/izquierda.png')");
        personaje.animate({ left: "-=10px" }, 3);
        direccionPersonaje = LEFT;
    } else if (tecla.keyCode == 39 || tecla.keyCode == 68) {
        personaje.css("background-image", "url('img/personajes/derecha.png')");
        personaje.animate({ left: "+=10px" }, 3);
        direccionPersonaje = RIGHT;
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

function detectarColision(jqDiv1, jqDivObstaculos) {
    jqDivObstaculos.each(function() {

        if (collision(personaje, $(this))) {
            if ($(this).attr("id") == "llave") {
                bLlaveObtenida = true;
                llave.hide();
            } else if (bLlaveObtenida && $(this).attr("id") == "puertaFin") {
                alert("ganaste");
            } else {
                oDirMov = {};
                switch (direccionPersonaje) {
                    case UP:
                        oDirMov.top = "+=3px";
                        break;
                    case DOWN:
                        oDirMov.top = "-=3px";
                        break;
                    case LEFT:
                        oDirMov.left = "+=3px";
                        break;
                    case RIGHT:
                        oDirMov.left = "-=3px";
                        break;
                }
                personaje.stop(false, false);
                personaje.animate(oDirMov, 1);
                return false; //salir del for
            }

        }

    });
}

setInterval(function() {
    detectarColision(personaje, obstaculos);
}, 5);
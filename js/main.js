var indice;
var intentos = 0;
var puntos = 0; 

var imagenes = [
  "Ana.jpg", "Analy.jpg", "Areli.jpg", "Beatriz.jpg", "Cecilia.jpg", "Claudia.jpg", "Daniela.jpg", "Elisa.jpg", "Evelyn.jpg", "Gabriela.jpg", "Grissel.jpg",
  "Guadalupe.jpg", "Johana.jpg", "Joyce.jpg", "Ofelia.jpg", "Patricia.jpg", "Sharon.jpg", "Heredia.jpg", "Karen.jpg", "Monica.jpg",  "Karla.jpg", "Leslie.jpg", 
  "Mishel.jpg", "Milca.jpg", "Tayde.jpg", "Naibit.jpg", "Nayeli.jpg", "Nelly.jpg", "Reyna.jpg", "Adriana.jpg", "Ruth-Lopez.jpg","Ruth-Vega.jpg","Sandra-Bollo.jpg",
  "Sandra-Diaz.jpg", "Vianey.jpg", "Zazil.jpg"];

var nombres = [ "Anita", "Analy", "Areli", "Bet","Cecy", "Claudia", "Daniela", "Elisa", "Eve", "Gaby", "Griss", "Lupita", "Joy", "Joyce", "Ofe", "Paty", "Sharon", 
"Heredia", "Karen", "Moni", "Karla", "Leslie","Mishel", "Milca", "Tayde", "Naibit", "Nayeli", "Nelly", "Reyna", "Adri", "Dj Ruth", "Ruth", "Sandia", "San", "Vian", "Zaz"];

 function enteroRandomEnRango(min, max) {
  var numero = Math.random() * (max - min) + min;
  var entero = Math.floor(numero);
  return entero;
 };


//BOTON DE ¡EMPEZAR!
function empiezaJuego() {
  if (confirm("¡BIENVENIDO A SMASH FACES!\nEl juego va a empezar") == true) {
    //EMPEZAR A MOSTRAR LAS FOTOS
    desplegarNuevaJugada();
  } else {
      alert("Lástima tu te lo pierdes");
  }
};
//Mostrar imágenes de acuerdo al indice que esta en random
function desplegarNuevaJugada() {
   //tamaño del arreglo
  var tamano = nombres.length;
  //Generamos numero al azar
  indice = enteroRandomEnRango(0,tamano);
  var mostrarImagen =  'fotos/' + imagenes[indice];
  console.log(mostrarImagen);
  $("#foto").attr("src", mostrarImagen);
  $("#input").val(""); //Para que input se muestre limpio
};

function actualizarPuntos () {
  $("#score").text(" " + puntos);
};
function actualizarPuntosDesdeCero() {
  puntos = 0;
  $("#score").text(puntos);
};

$(document).ready(function(){
  $('#empieza').click(function(){
    empiezaJuego();
    $('#comprueba').click(function(){
      
      var textoUsuario = $('#input').val();
       var mostrarNombres =  nombres[indice];
       console.log(mostrarNombres);
       console.log(textoUsuario);
        if (textoUsuario == mostrarNombres){
          //No volver a repetir los nombres que ya salieron
          nombres.splice(indice, 1);
          imagenes.splice(indice, 1);

          puntos = puntos + 5; //Le agrega 5 puntos
          actualizarPuntos();
          alert("¡Excelente!\nSiguiente foto");
          intentos = 0;
          desplegarNuevaJugada();
          } else if (intentos == 5) {
            alert("No tienes más intentos");
            alert("¡PERDISTE!\nFIN DEL JUEGO");
            empiezaJuego();
            actualizarPuntosDesdeCero();
          } else {
            alert("¡Oops! Parece que no es ella");
            puntos--; //Le quita un punto
            intentos++;
            actualizarPuntos();
        }
    });
  });
});
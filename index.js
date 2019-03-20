//jshint esversion:6

//Inicializar express - servidor de páginas
const express = require ("express");
const app = express ();

//Inicializar body-parser para formularios
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true}));

//Ruta de los estilos
// app.use(express.static(__dirname + "/"));
app.use (express.static( "public"));

//Sección con las rutas
app.get ("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

//Seccion del POST (Recogida y proceso de los datos del formulario)
app.post("/", function(req, res) {
  //Recojo valores que envían desde el formulario
  console.log(req.body);
  var sexo = req.body.sexo ;
  var apellidoPaterno = req.body.apelPadre;
  var apellidoMaterno = req.body.apelMadre;

  //Declaro los arrays de nombres
  var nombresNene = ["Daniel", "Javier", "Pablo", "Mario", "Martín", "Julio", "Miguel"];
  var nombresNena = ["Eva", "Ana", "Alba", "Lucía", "Elena", "Teresa", "Raquel"];

  //Posición dentro del array de nombres. GEnerar nº aleatorio entre 0 y la longitud del array -1
  var posicionNene = Math.round (Math.random()*(nombresNene.length-1));
  var posicionNena = Math.round (Math.random()*(nombresNena.length-1));

  //Comprobamos si es niño o niñs y responder con un nombre
  //Para que reconozca las tildes y los caracteres especiales como la ñ.
  res.writeHead(200, {"Content-Type": "text/html; charset=UTF-8"});
  res.write("<h1>Enhorabuena!</h1>");
  if (sexo ==="1") {
    //Es NIÑO. la posición aleatorio entre 0 y la longitud del array -1
    res.write("<h2> Puedes llamarle " +nombresNene[posicionNene]+" "+apellidoPaterno+ " " +apellidoMaterno+ "</h2>");
  }
  if (sexo === "2") {
    //Es NIÑA. la posición aleatorio entre 0 y la longitud del array -1
    res.write("<h2> Puedes llamarle " +nombresNena[posicionNena]+" "+apellidoPaterno+ " " +apellidoMaterno+ "</h2>");
  }
  res.send();
});

//Arrancar el servidor y que se quede escuchando
app.listen(3000, function () {
console.log ("El servidor está listo y escuchando en el puerto 3000.");
});

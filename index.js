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
// app.post("/", function(req, res) {
//
//   res.send("El resultado de la suma es");
// });

//Arrancar el servidor y que se quede escuchando
app.listen(3000, function () {
console.log ("El servidor está listo y escuchando en el puerto 3000.");
});

var nombresNenes = ["Daniel", "Javier", "Pablo", "Mario", "Martín", "Julio"];
var nombreNenas = ["Eva", "Ana", "Alba", "Lucía", "Elena", "Teresa"];

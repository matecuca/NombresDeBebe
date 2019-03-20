//Cuando haya un cambio en la lista arrancar la función
$(".sexo").on ("change", function(){
  var opcion = $(this).val();

  switch (opcion) {
    case "0": {
      $(".foto").attr("src", "imagenes/0_bebe.jpg");
      break;
    }
    case "1": {
      $(".foto").attr("src", "imagenes/1_nene.jpg");
      break;
    }
    case "2": {
      $(".foto").attr("src", "imagenes/2_nena.jpg");
      break;
    }
  }
});

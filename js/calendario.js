function actualizarFecha(mes, dia) {
  if (mes == 2) {
    var mestexto = "ene";
  }

  if (mes == 3) {
    var mestexto = "feb";
  }

  if (mes == 4) {
    var mestexto = "mar";
  }

  if (mes == 5) {
    var mestexto = "abr";
  }

  if (mes == 6) {
    var mestexto = "may";
  }

  if (mes == 7) {
    var mestexto = "jun";
  }

  if (mes == 8) {
    var mestexto = "jul";
  }

  if (mes == 7) {
    var mestexto = "ago";
  }

  if (mes == 8) {
    var mestexto = "sep";
  }

  if (mes == 9) {
    var mestexto = "oct";
  }

  if (mes == 10) {
    var mestexto = "nov";
  }

  if (mes == 11) {
    var mestexto = "dic";
  }

  document.getElementById("mes").src =
    "img/habitacion/calendario/mes/" + mestexto + ".png";
  document.getElementById("dia").src =
    "img/habitacion/calendario/dia/" + dia + ".png";
}

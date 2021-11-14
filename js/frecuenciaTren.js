function frecuenciaTren(minutos, segundos) {
  if (
    (minutos == 2 && segundos == 10) ||
    (minutos == 16 && segundos == 10) ||
    (minutos == 31 && segundos == 10) ||
    (minutos == 46 && segundos == 10)
  ) {
    document.getElementById("tren").src = "img/calle/tren.gif";

    document.getElementById("snackbar").innerHTML = "Pasa el tren";
    MostrarSuceso();
  }
}

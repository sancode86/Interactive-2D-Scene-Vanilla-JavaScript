function actualizarRelojtick(segundos) {
  if (segundos % 2 == 0) {
    document.getElementById("relojtick").src =
      "img/habitacion/reloj/relojtickOFF.png";
  } else {
    document.getElementById("relojtick").src =
      "img/habitacion/reloj/relojtickON.png";
  }
}

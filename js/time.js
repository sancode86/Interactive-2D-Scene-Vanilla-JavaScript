var time0;
function initTime() {
  time0 = new Date();
  window.setInterval("updateTime()", 1000);
}
function updateTime() {
  var timeNow = new Date();
  var horas = timeNow.getHours();
  var minutos = timeNow.getMinutes();
  var segundos = timeNow.getSeconds();
  var mes = timeNow.getMonth();
  var dia = timeNow.getDate();

  var mostrarmes = mes + 1;

  //Mostrar hora actual
  document.getElementById("MostrarTiempo").firstChild.data =
    horas +
    ":" +
    minutos +
    ":" +
    segundos +
    " Dia " +
    dia +
    " Mes " +
    mostrarmes;

  //Cambiar el color de la ventana
  document.getElementById("base").style.backgroundColor = "#000" + segundos;

  actualizarReloj(horas, minutos);
  actualizarFecha(mes, dia);

  //Reloj TICK
  actualizarRelojtick(segundos);

  //Paso del Tren/Frecuencia
  frecuenciaTren(minutos, segundos);

  //Llamar a funciones segun la hora y mandar variables
  if (horas == 0) {
    hora0(minutos, segundos);
  }
  if (horas == 1) {
    hora1(minutos, segundos);
  }
  if (horas == 2) {
    hora2(minutos, segundos);
  }
  if (horas == 3) {
    hora3(minutos, segundos);
  }
  if (horas == 4) {
    hora4(minutos, segundos);
  }
  if (horas == 5) {
    hora5(minutos, segundos);
  }
  if (horas == 6) {
    hora6(minutos, segundos);
  }
  if (horas == 7) {
    hora7(minutos, segundos);
  }
  if (horas == 8) {
    hora8(minutos, segundos);
  }
  if (horas == 9) {
    hora9(minutos, segundos);
  }
  if (horas == 10) {
    hora10(minutos, segundos);
  }
  if (horas == 11) {
    hora11(minutos, segundos);
  }
  if (horas == 12) {
    hora12(minutos, segundos);
  }
  if (horas == 13) {
    hora13(minutos, segundos);
  }
  if (horas == 14) {
    hora14(minutos, segundos);
  }
  if (horas == 15) {
    hora15(minutos, segundos);
  }
  if (horas == 16) {
    hora16(minutos, segundos);
  }
  if (horas == 17) {
    hora17(minutos, segundos);
  }
  if (horas == 18) {
    hora18(minutos, segundos);
  }
  if (horas == 19) {
    hora19(minutos, segundos);
  }
  if (horas == 20) {
    hora20(minutos, segundos);
  }
  if (horas == 21) {
    hora21(minutos, segundos);
  }
  if (horas == 22) {
    hora22(minutos, segundos);
  }
  if (horas == 23) {
    hora23(minutos, segundos);
  }
}

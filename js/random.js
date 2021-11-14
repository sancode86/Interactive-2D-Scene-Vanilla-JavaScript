function getRndInteger(min, max) {
  var numero = Math.floor(Math.random() * (max - min)) + min;

  if (numero < 5) {
    return numero + " menor a 5!";
  }

  if (numero > 5) {
    return numero + " mayor a 5!";
  }

  if ((numero = 5)) {
    return numero + " igual a 5!";
  }
}

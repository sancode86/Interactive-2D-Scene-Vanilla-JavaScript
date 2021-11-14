var modalsecreto = document.getElementById("secreto");

var btn = document.getElementById("abrirmodalsecreto");

var spansecreto = document.getElementsByClassName("close2")[0];

btn.onclick = function () {
  modalsecreto.style.display = "block";
};

spansecreto.onclick = function () {
  modalsecreto.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modalsecreto.style.display = "none";
  }
};

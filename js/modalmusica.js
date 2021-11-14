var modalmusica = document.getElementById("modalmusica");

var btn = document.getElementById("abrirmusicplayer");

var spanmusica = document.getElementsByClassName("close3")[0];

btn.onclick = function () {
  modalmusica.style.display = "block";
};

spanmusica.onclick = function () {
  modalmusica.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modalmusica) {
    modalmusica.style.display = "none";
  }
};

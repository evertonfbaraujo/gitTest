/* alerta quadro */
var quadro = document.querySelector(".quadro");
var heightalerta = parseInt(document.querySelector(".alerta").offsetHeight / 2);
var widthtalerta = parseInt(document.querySelector(".alerta").offsetWidth / 2);
var hAltQuadro = parseInt(quadro.scrollHeight / 2);
var wAltQuadro = parseInt(quadro.clientWidth / 2);
quadro.style.top = heightalerta - hAltQuadro + "px";
quadro.style.left = widthtalerta - wAltQuadro + "px";

var modal = document.querySelector(".alerta");
var closeBtn = document.querySelector(".close");

closeBtn.onclick = () => {
  modal.style.display = "none2";
};

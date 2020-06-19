var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var randomBtn = document.querySelector(".random");
var body = document.getElementById("gradient");
function setGradient() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  css.textContent = body.style.background + ";";
}

function setRandomGradient() {
  var color1 =
    Math.floor(Math.random() * 256) +
    ", " +
    Math.floor(Math.random() * 256) +
    ", " +
    Math.floor(Math.random() * 256);

  var color2 =
    Math.floor(Math.random() * 256) +
    ", " +
    Math.floor(Math.random() * 256) +
    ", " +
    Math.floor(Math.random() * 256);
  body.style.background =
    "linear-gradient(to right, rgb(" + color1 + "), rgb(" + color2 + "))";
  css.textContent = body.style.background + ";";
  console.log(
    "linear-gradient(to right, rgb(" + color1 + "), rgb(" + color2 + "))"
  );
}

setGradient();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomBtn.addEventListener("click", setRandomGradient);

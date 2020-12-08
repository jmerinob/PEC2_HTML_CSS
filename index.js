function ini() {
  const input = document.querySelector("input");
  input.addEventListener("click", changeColor);
}

ini();

function changeColor(e) {
  const input = document.querySelector("input");
  if (input.style.backgroundColor !== "rgb(24, 98, 128)") {
    input.style.backgroundColor = "rgb(24, 98, 128)";
    input.value = "INICIAR SESIÓN";
  } else {
    input.style.backgroundColor = "rgb(116, 116, 116)";
    input.value = "FIN SESIÓN";
  }
}

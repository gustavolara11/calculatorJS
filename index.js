var resultado = "";

function visor(num) {
  resultado = resultado + num;
  document.getElementById("resultado").value = resultado;
}
function ac() {
  resultado = "";
  document.getElementById("resultado").value = resultado;
}
function delet() {
  resultado = resultado.substring(0, resultado.length - 1);
  document.getElementById("resultado").value = resultado;
}
function calcula() {
  let resultado1 = eval(resultado);
  document.getElementById("resultado").value = resultado1;
}
function percent() {
  let operatorP = "+";
  let operatorM = "-";
  let percents1 = resultado.split(operatorP, 2);
  let percents2 = resultado.split(operatorM, 2);

  if (resultado.includes("+")) {
    let calcPercent =
      Number(percents1[0]) + Number((percents1[0] * percents1[1]) / 100);
    document.getElementById("resultado").value = calcPercent;
  }
  if (resultado.includes("-")) {
    let calcPercent =
      Number(percents2[0]) - Number((percents2[0] * percents2[1]) / 100);
    document.getElementById("resultado").value = calcPercent;
  }
}

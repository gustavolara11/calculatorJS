var resultado = "";

function visor(num) {
  resultado = resultado + num;
  document.getElementById("resultado").value = resultado;
}
function visor1(num) {
  if (!resultado.includes(".")) {
    resultado = resultado + num;
    document.getElementById("resultado").value = resultado;
  }
  if (resultado.includes("+")) {
    let opP = "+";
    let dot1 = resultado.split(opP, 2);

    if (resultado.includes("+")) {
      if (!dot1[1].includes(".")) {
        resultado = resultado + num;
        document.getElementById("resultado").value = resultado;
      }
    }
  }
  if (resultado.includes("-")) {
    let opS = "-";
    let dot2 = resultado.split(opS, 2);

    if (resultado.includes("-")) {
      if (!dot2[1].includes(".")) {
        resultado = resultado + num;
        document.getElementById("resultado").value = resultado;
      }
    }
  }
  if (resultado.includes("/")) {
    let opD = "/";
    let dot3 = resultado.split(opD, 2);

    if (resultado.includes("/")) {
      if (!dot3[1].includes(".")) {
        resultado = resultado + num;
        document.getElementById("resultado").value = resultado;
      }
    }
  }
  if (resultado.includes("*")) {
    let opM = "*";
    let dot4 = resultado.split(opM, 2);

    if (resultado.includes("*")) {
      if (!dot4[1].includes(".")) {
        resultado = resultado + num;
        document.getElementById("resultado").value = resultado;
      }
    }
  }
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

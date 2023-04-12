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

function visorP(num) {
  if (!resultado.includes("+")) {
    resultado = resultado + num;
    document.getElementById("resultado").value = resultado;
  }
  return;
}
function visorS(num) {
  if (!resultado.includes("-")) {
    resultado = resultado + num;
    document.getElementById("resultado").value = resultado;
  }
  return;
}
function visorM(num) {
  if (!resultado.includes("*")) {
    resultado = resultado + num;
    document.getElementById("resultado").value = resultado;
  }
  return;
}
function visorD(num) {
  if (!resultado.includes("/")) {
    resultado = resultado + num;
    document.getElementById("resultado").value = resultado;
  }
  return;
}

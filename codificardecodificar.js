var selecao = document.getElementById("selecao");
var tipoCifra = selecao.value;

selecao.onchange = function () {
    tipoCifra = selecao.value
}

function codificar() {
    var codificado = document.getElementById("codificado").checked;
    
    
    if (codificado === true) {
        var texto = document.getElementById("texto").value;
      

        if (tipoCifra === "cifracezar") {
            var numIncremento = parseInt(document.getElementById("incremento").value);
            document.getElementById("cifrado").innerText = codificarNew(texto, numIncremento);
        } else {
            var base = btoa(texto)
            document.getElementById("cifrado").innerText =base
        }
    } 

}

function codificarNew(texto, numIncremento) {
    var textoArray = [];
    var incrementoArray = [];
    var textoCodificado = "";
  
    for (let i = 0; i < texto.length; i++) {
        textoArray.push(texto.charCodeAt(i));
    }

    for (j = 0; j < textoArray.length; j++) {
        if (textoArray[j] >= 65 && textoArray[j] <= 90) {
            incrementoArray.push((((textoArray[j] - 65 + numIncremento) % 26) + 65));
        } else if (textoArray[j] >= 97 && textoArray[j] <= 122) {
            incrementoArray.push((((textoArray[j] - 97 + numIncremento) % 26) + 97));
        } else {
            incrementoArray.push(textoArray[j]);
        }
    }

    for (g = 0; g < incrementoArray.length; g++) {
        textoCodificado += String.fromCharCode(incrementoArray[g]);

    }
    return textoCodificado;
}

function decodificar() {
    var decodificado = document.getElementById("decodificado").checked;
    
    
    if (decodificado === true) {
        var texto = document.getElementById("texto").value;
        console.log(texto)

        if (tipoCifra === "cifracezar") {
            var numIncremento = parseInt(document.getElementById("incremento").value);
            document.getElementById("cifrado").innerText = decodificarNew(texto, numIncremento);
        } else {
            var base = atob(texto)
            document.getElementById("cifrado").innerText =base
        } 
    } 

}

function decodificarNew(texto, numIncremento) {
    var textoArray = [];
    var incrementoArray = [];
    var textoCodificado = "";

    for (let i = 0; i < texto.length; i++) {
        textoArray.push(texto.charCodeAt(i));
    }

    for (j = 0; j < textoArray.length; j++) {
        if (textoArray[j] >= 65 && textoArray[j] <= 90) {
            incrementoArray.push((((textoArray[j] - 90 - numIncremento) % 26) + 90));
        } else if (textoArray[j] >= 97 &&textoArray[j] <= 122) {
            incrementoArray.push((((textoArray[j] - 122 - numIncremento) % 26) + 122));
        } else {
            incrementoArray.push(textoArray[j]);
        }
    }
    for (g = 0; g < incrementoArray.length; g++) {
        textoCodificado += String.fromCharCode(incrementoArray[g]);

    }
    return textoCodificado;
}

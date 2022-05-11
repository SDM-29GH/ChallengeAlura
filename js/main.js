
/*
a -> ai | e -> enter | i -> imes | o -> ober | u -> ufat
*/


function encriptar(){
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    // i es para afectar mayusculas y minusculas
    // g es para afectar toda la linea de codigo u oracion
    // m es para afectar multiples lineas o parrafo
    var txtCifrado = texto.replace(/e/igm,"enter");
    var txtCifrado = txtCifrado.replace(/o/igm,"ober");
    var txtCifrado = txtCifrado.replace(/i/igm,"imes");
    var txtCifrado = txtCifrado.replace(/a/igm,"ai");
    var txtCifrado = txtCifrado.replace(/u/igm,"ufat");

    document.getElementById("imgDer").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").innerHTML = txtCifrado;
    document.getElementById("texto2").style.display = "none";
    document.getElementById("texto3").innerHTML = txtCifrado;

    document.getElementById("texto3").style.display = "show";
    document.getElementById("texto3").style.display = "inherit";

    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";

}

function desencriptar(){
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    // i es para afectar mayusculas y minusculas
    // g es para afectar toda la linea de codigo u oracion
    // m es para afectar multiples lineas o parrafo
    var txtCifrado = texto.replace(/enter/igm,"e");
    var txtCifrado = txtCifrado.replace(/ober/igm,"o");
    var txtCifrado = txtCifrado.replace(/imes/igm,"i");
    var txtCifrado = txtCifrado.replace(/ai/igm,"a");
    var txtCifrado = txtCifrado.replace(/ufat/igm,"u");

    document.getElementById("imgDer").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").innerHTML = txtCifrado;
    document.getElementById("texto2").style.display = "none";
    document.getElementById("texto3").innerHTML = txtCifrado;
    
    document.getElementById("texto3").style.display = "show";
    document.getElementById("texto3").style.display = "inherit";

    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}

function copiar(){
    var contenido = document.querySelector("#texto2");
    contenido.select();
    document.execCommand("copiar");
    alert("¡Se efectuó la copia!");
}
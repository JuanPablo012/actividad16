document.getElementById("enviar").disabled = true;
function validardatos() {
    var fecha = document.getElementById("fecha").value;
    var arrayDeCadenas = fecha.split("-");
    var hoy = new Date();
    var añocumple = arrayDeCadenas[0];
    var mescumple = arrayDeCadenas[1];
    var diacumple = arrayDeCadenas[2];
    var edad = hoy.getFullYear() - añocumple;
    var m = hoy.getMonth() - mescumple;
    if (m < 0 || (m == 0 && hoy.getDate() < diacumple)) {
        edad--;
    }
    if (edad >= 18) {
        document.getElementById('enviar').disabled = false;
    } else {
        document.getElementById('enviar').disabled = true;
    }


    var nombre=document.getElementById("usuario").value;
}
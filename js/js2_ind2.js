var nombrep = "";
var fecha = "";

function traerdatos() {
    var variables = location.search.substring(1, location.search.lenght);
    arrVariableActual = variables.split("&");//AQUI SE RECIBE LAS VARIABLES

    newvariable = arrVariableActual[0].split("+");//AQUI SE SEPARA EL NOMBRE

    var newvariable2 = arrVariableActual[1].split("=");//AQUI SE SEPARA LA FECHA DEL =

    nombrevariable = newvariable[0].split("="); //AQUI SE SEPARA EL NOMBRE DEL =
    var fechain = newvariable2[1];//SE GUARDA LA VARIABLE FECHA
    nombre = nombrevariable[1] + " " + newvariable[1]//SE GUARDA LA VARIABLE NOMBRE

    nombrep = nombre;
    fecha = fechain;

    var meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
    var f = new Date();

    var mensaje1 = "Bienvenido " + nombrep;
    var mensaje2 = "La Fecha de hoy es " + f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear();

    document.getElementById("m1").innerHTML = mensaje1;
    document.getElementById("m2").innerHTML = mensaje2;

    if (nombrep == "Usuario 1") {
        $('<br><img src="../imagenes/usuario1.jpg" width="500px"/>').appendTo('#imagen');
    } else if (nombrep == "Usuario 2") {
        $('<br><img src="../imagenes/usuario2.jpg" width="500px"/>').appendTo('#imagen');
    }
}

var numeroest = 0, nedad = 0, not1 = 0, not2 = 0, not3 = 0;

function numest1() {
    var min = 1, max = 10;

    var estudiante = Math.round(Math.random() * (max - min) + min);
    numeroest = estudiante;
    document.getElementById("nest").value = estudiante;
}

function gedad() {
    var min = 18, max = 35;

    var edad = Math.round(Math.random() * (max - min) + min);
    nedad = edad;
    document.getElementById("edad").value = edad;
}

function gn1() {
    var min = 0.0, max = 5.0;

    var n1 = Math.round(Math.random() * (max - min) + min) + Math.random();

    if (n1 > 5) {
        n1 = n1 - Math.round(Math.random() * (max - min) + min) + Math.random();
    }
    not1 = n1;
    document.getElementById("n1").value = n1;
}

function gn2() {
    var min = 0.0, max = 5.0;

    var n2 = Math.round(Math.random() * (max - min) + min) + Math.random();
    if (n2 > 5) {
        n2 = n2 - Math.round(Math.random() * (max - min) + min) + Math.random();
    }
    not2 = n2;
    document.getElementById("n2").value = n2;
}

function gn3() {
    var min = 0.0, max = 5.0;

    var n3 = Math.round(Math.random() * (max - min) + min) + Math.random();
    if (n3 > 5) {
        n3 = n3 - Math.round(Math.random() * (max - min) + min) + Math.random();
    }
    not3 = n3;
    document.getElementById("n3").value = n3;
}
var promediomayor = 0;
var nummayor = "";
var promediomenor = 5;
var nummenor = "";

function agregar() {
    var nombre = document.getElementById("nest").value;
    var prom = (not1 + not2 + not3) / 3;
    if (prom > promediomayor) {
        promediomayor=prom;
        nummayor=nombre;
        document.getElementById("nommayor").value = promediomayor;
        document.getElementById("mayor").value = nummayor;
    } else if(prom<promediomenor){
        promediomenor=prom;
        nummenor=nombre;
        document.getElementById("nommenor").value = nummenor;
        document.getElementById("menor").value = promediomenor;
    }

    var crearfila = "<tr><td>" + "Estudiante #" + numeroest + "</td><td>" + nedad + " años" + "</td><td>" + not1 + "</td><td>" + not2 + "</td><td>" + not3 + "</td><td>" + prom + "</td></tr>";
    var btn = document.createElement("TR");
    btn.innerHTML = crearfila;
    document.getElementById("datos").appendChild(btn);
}



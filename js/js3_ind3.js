function traerdatos() {
    var variables = location.search.substring(1, location.search.lenght);
    arrVariableActual = variables.split("&");//AQUI SE RECIBE LAS VARIABLES



    var vectnmayor = arrVariableActual[0].split("=");
    var nombredelmayor = vectnmayor[1];//ESTE ES

    var vectpromayor = arrVariableActual[1].split("=");
    var promediomayor = vectpromayor[1];//ESTE ES

    var vectnmenor = arrVariableActual[2].split("=");
    var nombredelmenor = vectnmenor[1];

    var vectpromenor = arrVariableActual[3].split("=");
    var promediomenor = vectpromenor[1];


    var crearfila = "<tr><td>" + "Estudiante " + nombredelmayor + "</td><td>" + promediomayor + "</td></tr>";
    var btn = document.createElement("TR");
    btn.innerHTML = crearfila;
    document.getElementById("promedio").appendChild(btn);
    btn.style.backgroundColor = "#00FF35"

    var crearfila1 = "<tr><td>" + "Estudiante " + promediomenor + "</td><td>" + nombredelmenor + "</td></tr>";
    var btn1 = document.createElement("TR");
    btn1.innerHTML = crearfila1;
    document.getElementById("promedio").appendChild(btn1);
    btn1.style.backgroundColor = "#FF0000";



}

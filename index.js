var estudiantes = [
    
    {
    apellidop: "Hernandez",
    apellidom: "Bernal",
    nombre: "Karla Rubi",
    edad: 23,
    fechanacimiento: {
    año: 1998,
    mes: "Diciembre",
    dia: 9
     },
    carrera: "IRYC"
    },

    {
    apellidop: "Cruz",
    apellidom: "Rodriguez",
    nombre: "Brandon",
    edad: 23,
    fechanacimiento: {
    año: 1998,
    mes: "Mayo",
    dia: 5
     },
     carrera: "IRYC"
    },

]
var table = document.getElementsByTagName("table")[0];
for (var i = 0; i < estudiantes.length; i++) {
    var templ = document.getElementById ('tbodyestudiantes').content.cloneNode(true);
    var celnumero = templ.querySelector("span[name='tbodynumero']");
    var celnombre = templ.querySelector("span[name='tbodynombre']");
    var celedad = templ.querySelector("span[name='tbodyedad']");
    var celcarrera = templ.querySelector("span[name='tbodycarrera']");

    celnumero.innerText = i + 1
    celnombre.innerText = estudiantes[i].apellidop + " " + estudiantes[i].apellidom + " " + estudiantes[i].nombre;
    celedad.innerText = estudiantes[i].edad;
    celcarrera.innerText = estudiantes[i].carrera

    table.append(templ);
}
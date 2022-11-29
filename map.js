const origin = [4.62027, -74.103551];
const PATH = "http://localhost:8081/";
var map = L.map("map").setView(origin, 13);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

var initmsg = "<H2>Da clic a un marcador del mapa</H2>";
var cr13cl41Marker = L.marker([4.628984, -74.066974]).addTo(map);
var cl34cr28Marker = L.marker([4.624194, -74.076283]).addTo(map);
var cr80dg43Marker = L.marker([4.621037, -74.16603]).addTo(map);
var tiempo = [];
var cruceEscogido = 0;
var historicoCruces = {};

var popup = L.popup();

function onMapClick(e) {
  /*popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);*/
  //document.getElementById('informacion').innerHTML="<h2>"+e.latlng+"</h2>";

  var aux = e.latlng.toString();
  tiempo = [];
  historicoCruces = {};
  switch (aux) {
    case "LatLng(4.628984, -74.066974)":
      console.log("Cruce: Cra 13 con Cll 41 ");
      cruceEscogido = 1;
      document.getElementById("diagrama_semaforico").src = "resources\\cr13cl41.bmp";
      document.getElementById("nombre_cruce").innerHTML = "Cruce: Cra. 13 - Cll. 41"
      break;
    case "LatLng(4.624194, -74.076283)":
      console.log("Cruce: Cll 34 con Cra 28");
      document.getElementById("diagrama_semaforico").src = "resources\\cl34cr28.bmp";
      document.getElementById("nombre_cruce").innerHTML = "Cruce: Cll. 34 - Cra. 28"
      cruceEscogido = 2;
      break;
    case "LatLng(4.621037, -74.16603)":
      console.log("Cruce: Cra 80 con Dg 43 Sur ");
      document.getElementById("diagrama_semaforico").src = "resources\\cl80dg43.bmp";
      document.getElementById("nombre_cruce").innerHTML = "Cruce: Cll. 80 - Dg. 43 Sur"

      cruceEscogido = 3;
      break;
  }

  document.getElementById("map").style.height = "800px"
  document.getElementById("map").style.width = "100%"

  // Cargar información del cruce
  map.setView(e.latlng, 19);
  document.getElementById("panel_derecho").style.display = "block";
  document.getElementById("gant").style.visibility = "visible";
}

cr13cl41Marker.on("click", onMapClick);
cr80dg43Marker.on("click", onMapClick);
cl34cr28Marker.on("click", onMapClick);

function onClickBackButton(e) {
  map.setView(origin, 13);
  cruceEscogido = 0;
  //document.getElementById('informacion').innerHTML = initmsg;
  document.getElementById("panel_derecho").style.display = "none";
  document.getElementById("gant").style.visibility = "hidden";
  document.getElementById("map").style.height = "1000px"
  document.getElementById("map").style.width = "140%"
}

google.charts.load("current", { packages: ["timeline"] });

function drawChart(datos) {
  var container = document.getElementById("timeline");
  var chart = new google.visualization.Timeline(container);
  var dataTable = new google.visualization.DataTable();

  dataTable.addColumn({ type: "string", id: "Señal" });
  dataTable.addColumn({ type: "string", id: "Bar label" });
  dataTable.addColumn({ type: "string", id: "style", role: "style" });
  dataTable.addColumn({ type: "date", id: "Start" });
  dataTable.addColumn({ type: "date", id: "End" });
  datos.forEach(estado => {
    dataTable.addRows([[estado.nombre, '', estado.color, estado.inicio, estado.fin]]);
  });
  // dataTable.addRows([
  //   [
  //     "Señal 2",
  //     "",
  //     "#ed7161",
  //     new Date(0, 0, 0, 0, 0, 0, 0),
  //     new Date(0, 0, 0, 0, 0, 49, 0),
  //   ], //rojo
  //   [
  //     "Señal 4",
  //     "",
  //     "#88c057",
  //     new Date(0, 0, 0, 0, 0, 0, 0),
  //     new Date(0, 0, 0, 0, 0, 35, 0),
  //   ], //verde
  //   [
  //     "Señal 4",
  //     "",
  //     "#fdca66",
  //     new Date(0, 0, 0, 0, 0, 35, 0),
  //     new Date(0, 0, 0, 0, 0, 38, 0),
  //   ], //amarillo
  //   [
  //     "Señal 4",
  //     "",
  //     "#ed7161",
  //     new Date(0, 0, 0, 0, 0, 38, 0),
  //     new Date(0, 0, 0, 0, 0, 49, 0),
  //   ],
  //   [
  //     "Señal 91",
  //     "",
  //     "#ed7161",
  //     new Date(0, 0, 0, 0, 0, 0, 0),
  //     new Date(0, 0, 0, 0, 0, 39, 0),
  //   ],
  //   [
  //     "Señal 91",
  //     "",
  //     "#f59e63",
  //     new Date(0, 0, 0, 0, 0, 39, 0),
  //     new Date(0, 0, 0, 0, 0, 41, 0),
  //   ], //rojo-amarillo
  //   [
  //     "Señal 91",
  //     "",
  //     "#88c057",
  //     new Date(0, 0, 0, 0, 0, 41, 0),
  //     new Date(0, 0, 0, 0, 0, 47, 0),
  //   ],
  //   [
  //     "Señal 91",
  //     "",
  //     "#fdca66",
  //     new Date(0, 0, 0, 0, 0, 47, 0),
  //     new Date(0, 0, 0, 0, 0, 49, 0),
  //   ],
  //   [
  //     "Señal 22",
  //     "",
  //     "#88c057",
  //     new Date(0, 0, 0, 0, 0, 0, 0),
  //     new Date(0, 0, 0, 0, 0, 28, 0),
  //   ],
  //   [
  //     "Señal 22",
  //     "",
  //     "#50782d",
  //     new Date(0, 0, 0, 0, 0, 28, 0),
  //     new Date(0, 0, 0, 0, 0, 31, 0),
  //   ], //verde intermitente
  //   [
  //     "Señal 22",
  //     "",
  //     "#ed7161",
  //     new Date(0, 0, 0, 0, 0, 31, 0),
  //     new Date(0, 0, 0, 0, 0, 49, 0),
  //   ],
  // ]);

  var options = {
    tooltip: { trigger: "none" },
    timeline: { groupByRowLabel: true }
  };
  chart.draw(dataTable, options);
}

function getData() {
  if (cruceEscogido != 0) {
    $.ajax({
      url: PATH + "gpr-semaforico?id=" + (cruceEscogido - 1),
      // cache: false,
      success: function (json) {
        // $("#reloj").html(json['tiempoActual']);

        if (json != "") {
          var estodo = JSON.parse(json);
          countVehicular = 0;
          countPeatonal = 0;
          if (!tiempo.includes(estodo.tiempo)) {


            tiempo.push(estodo.tiempo);
            for (let index = 0; index < estodo["color"].length; index++) {
              var color = "";
              var tipoSemaforo = estodo["configuracion"][index]

              switch (estodo["color"][index]) {
                case "verde":
                  color = "#88c057";
                  if (tipoSemaforo == "vehicular") {
                    countVehicular += 1;
                    document.getElementById("semaforo_" + countVehicular).src = "resources\\verde.png";
                  } else {
                    countPeatonal += 1;
                    document.getElementById("semaforo_pea_" + countPeatonal).src = "resources\\verde_peatonal.png";
                  }
                  break;
                case "amarillo":
                  color = "#fdca66";
                  countVehicular += 1;
                  document.getElementById("semaforo_" + countVehicular).src = "resources\\amarillo.png";
                  break;
                case "rojo":
                  color = "#ed7161";
                  if (tipoSemaforo == "vehicular") {
                    countVehicular += 1;
                    document.getElementById("semaforo_" + countVehicular).src = "resources\\rojo.png";
                  } else {
                    countPeatonal += 1;
                    document.getElementById("semaforo_pea_" + countPeatonal).src = "resources\\rojo_peatonal.png";
                  }
                  break;
                case "verde-intermitente":
                  color = "#50782d";
                  if (tipoSemaforo == "vehicular") {
                    countVehicular += 1;
                    document.getElementById("semaforo_" + countVehicular).src = "resources\\intermitencia_verde.gif";
                  } else {
                    countPeatonal += 1;
                    document.getElementById("semaforo_pea_" + countPeatonal).src = "resources\\intermitencia_verde_peatonal.gif";
                  }
                  break;
                case "amarillo-intermitente":
                  color = "#FCB322";
                  countVehicular += 1;
                  document.getElementById("semaforo_" + countVehicular).src = "resources\\intermitencia_amarillo.gif";
                  break;
                case "rojo-intermitente":
                  color = "#E94A35";
                  if (tipoSemaforo == "vehicular") {
                    countVehicular += 1;
                    document.getElementById("semaforo_" + countVehicular).src = "resources\\intermitencia_rojo.gif";
                  } else {
                    countPeatonal += 1;
                    document.getElementById("semaforo_pea_" + countPeatonal).src = "resources\\intermitencia_rojo_peatonal.gif";
                  }
                  break;
                case "rojo-amarillo":
                  color = "#f59e63";
                  countVehicular += 1;
                  document.getElementById("semaforo_" + countVehicular).src = "resources\\rojo_amarillo.png";
                  break;
                default:
                  color = "#ffffff";
                  countVehicular += 1;
                  document.getElementById("semaforo_" + countVehicular).src = "resources\\apagado.png";
                  break;
              }

              if (color != "#ffffff") {
                // "label": "",
                const estado = {
                  "nombre": "Señal " + (index + 1),
                  "color": color,
                  "inicio": new Date(0, 0, 0, 0, 0, parseInt(estodo["tiempo"]) - 1, 0),
                  "fin": new Date(0, 0, 0, 0, 0, parseInt(estodo["tiempo"]), 0)
                };

                // debugger
                if (historicoCruces[cruceEscogido.toString()] == undefined) {
                  historicoCruces[cruceEscogido.toString()] = [estado];
                } else {
                  var size = historicoCruces[cruceEscogido.toString()].length - 1;
                  if (historicoCruces[cruceEscogido.toString()][size].inicio != estado.inicio) {
                    historicoCruces[cruceEscogido.toString()].push(estado);
                  }
                };
              }
            }
            google.charts.setOnLoadCallback(drawChart(historicoCruces[cruceEscogido.toString()]));
            while (countPeatonal < 2) {
              countPeatonal += 1;
              document.getElementById("semaforo_pea_" + countPeatonal).src = "resources\\apagado_peatonal.png";
            }

            while (countVehicular < 8) {
              countVehicular += 1;
              document.getElementById("semaforo_" + countVehicular).src = "resources\\apagado.png";
            }
          }
        }
      },
    });
  }
}

setInterval(getData, 1000);
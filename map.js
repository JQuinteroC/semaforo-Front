const origin = [4.62027, -74.103551];
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

var cruceEscogido = 0;

var popup = L.popup();

function onMapClick(e) {
  /*popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);*/
  //document.getElementById('informacion').innerHTML="<h2>"+e.latlng+"</h2>";

  var aux = e.latlng.toString();

  switch (aux) {
    case "LatLng(4.628984, -74.066974)":
      console.log("Cruce: Cra 13 con Cll 41 ");
      cruceEscogido = 1;
      document.getElementById("diagrama_semaforico").src= "resources\\cr13cl41.bmp";
      document.getElementById("nombre_cruce").innerHTML = "Cruce: Cra. 13 - Cll. 41"
      break;
    case "LatLng(4.624194, -74.076283)":
      console.log("Cruce: Cll 34 con Cra 28");
      document.getElementById("diagrama_semaforico").src= "resources\\cl34cr28.bmp";
      document.getElementById("nombre_cruce").innerHTML = "Cruce: Cll. 34 - Cra. 28"
      cruceEscogido = 2;
      break;
    case "LatLng(4.621037, -74.16603)":
      console.log("Cruce: Cra 80 con Dg 43 Sur ");
      document.getElementById("diagrama_semaforico").src= "resources\\cl80dg43.bmp";
      document.getElementById("nombre_cruce").innerHTML = "Cruce: Cll. 80 - Dg. 43 Sur"
            
      cruceEscogido = 3;
      break;
  }

  document.getElementById("map").style.height = "700px"
  document.getElementById("map").style.width = "100%"

  // Cargar información del cruce


  //console.log(e.latlng.toString());
  map.setView(e.latlng, 19);
  document.getElementById("panel_derecho").style.display = "block";
  document.getElementById("gant").style.visibility = "visible";
}

cr13cl41Marker.on("click", onMapClick);
cr80dg43Marker.on("click", onMapClick);
cl34cr28Marker.on("click", onMapClick);

function onClickBackButton(e) {
  map.setView(origin, 13);
  //document.getElementById('informacion').innerHTML = initmsg;
  document.getElementById("panel_derecho").style.display = "none";
  document.getElementById("gant").style.visibility = "hidden";
  document.getElementById("map").style.height = "1000px"
  document.getElementById("map").style.width = "140%"
}

google.charts.load("current", { packages: ["timeline"] });
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var container = document.getElementById("timeline");
  var chart = new google.visualization.Timeline(container);
  var dataTable = new google.visualization.DataTable();

  dataTable.addColumn({ type: "string", id: "President" });
  dataTable.addColumn({ type: "string", id: "dummy bar label" });
  dataTable.addColumn({ type: "string", id: "style", role: "style" });
  dataTable.addColumn({ type: "date", id: "Start" });
  dataTable.addColumn({ type: "date", id: "End" });
  dataTable.addRows([
    [
      "Señal 2",
      "",
      "#ed7161",
      new Date(0, 0, 0, 0, 0, 0, 0),
      new Date(0, 0, 0, 0, 0, 49, 0),
    ], //rojo
    [
      "Señal 4",
      "",
      "#88c057",
      new Date(0, 0, 0, 0, 0, 0, 0),
      new Date(0, 0, 0, 0, 0, 35, 0),
    ], //verde
    [
      "Señal 4",
      "",
      "#fdca66",
      new Date(0, 0, 0, 0, 0, 35, 0),
      new Date(0, 0, 0, 0, 0, 38, 0),
    ], //amarillo
    [
      "Señal 4",
      "",
      "#ed7161",
      new Date(0, 0, 0, 0, 0, 38, 0),
      new Date(0, 0, 0, 0, 0, 49, 0),
    ],
    [
      "Señal 91",
      "",
      "#ed7161",
      new Date(0, 0, 0, 0, 0, 0, 0),
      new Date(0, 0, 0, 0, 0, 39, 0),
    ],
    [
      "Señal 91",
      "",
      "#f59e63",
      new Date(0, 0, 0, 0, 0, 39, 0),
      new Date(0, 0, 0, 0, 0, 41, 0),
    ], //rojo-amarillo
    [
      "Señal 91",
      "",
      "#88c057",
      new Date(0, 0, 0, 0, 0, 41, 0),
      new Date(0, 0, 0, 0, 0, 47, 0),
    ],
    [
      "Señal 91",
      "",
      "#fdca66",
      new Date(0, 0, 0, 0, 0, 47, 0),
      new Date(0, 0, 0, 0, 0, 49, 0),
    ],
    [
      "Señal 22",
      "",
      "#88c057",
      new Date(0, 0, 0, 0, 0, 0, 0),
      new Date(0, 0, 0, 0, 0, 28, 0),
    ],
    [
      "Señal 22",
      "",
      "#50782d",
      new Date(0, 0, 0, 0, 0, 28, 0),
      new Date(0, 0, 0, 0, 0, 31, 0),
    ], //verde intermitente
    [
      "Señal 22",
      "",
      "#ed7161",
      new Date(0, 0, 0, 0, 0, 31, 0),
      new Date(0, 0, 0, 0, 0, 49, 0),
    ],
  ]);

  var options = {
    tooltip: { trigger: "none" },
  };

  chart.draw(dataTable, options);
}

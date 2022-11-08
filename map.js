const origin = [4.62027, -74.103551];
var map = L.map('map').setView(origin, 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var initmsg = "<H2>Da clic a un marcador del mapa</H2>"
var cr13cl41Marker = L.marker([4.628984, -74.066974]).addTo(map);
var cr80dg43Marker = L.marker([4.624194, -74.076283]).addTo(map);
var cl34cr28Marker = L.marker([4.621037, -74.166030]).addTo(map);

var popup = L.popup();

function onMapClick(e) {

    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
    //document.getElementById('informacion').innerHTML="<h2>"+e.latlng+"</h2>";

    console.log(e)
    map.setView(e.latlng, 19);
    document.getElementById("desc").style.display = "block";
}

cr13cl41Marker.on('click', onMapClick);
cr80dg43Marker.on('click', onMapClick);
cl34cr28Marker.on('click', onMapClick);

function onClickBackButton(e) {
    map.setView(origin, 13);
    document.getElementById('informacion').innerHTML = initmsg;
    document.getElementById("desc").style.display = "none";
}

google.charts.load('current', { 'packages': ['timeline'] });
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
    var container = document.getElementById('timeline');
    var chart = new google.visualization.Timeline(container);
    var dataTable = new google.visualization.DataTable();

    dataTable.addColumn({ type: 'string', id: 'President' });
    dataTable.addColumn({ type: 'string', id: 'dummy bar label' });
    dataTable.addColumn({ type: 'string', id: 'style', role: 'style' });
    dataTable.addColumn({ type: 'date', id: 'Start' });
    dataTable.addColumn({ type: 'date', id: 'End' });
    dataTable.addRows([
        ['Señal 2', '', '#ed7161', new Date(0, 0, 0, 0, 0, 0, 0), new Date(0, 0, 0, 0, 0, 49, 0)], //rojo
        ['Señal 4', '', '#88c057', new Date(0, 0, 0, 0, 0, 0, 0), new Date(0, 0, 0, 0, 0, 35, 0)], //verde
        ['Señal 4', '', '#fdca66', new Date(0, 0, 0, 0, 0, 35, 0), new Date(0, 0, 0, 0, 0, 38, 0)], //amarillo
        ['Señal 4', '', '#ed7161', new Date(0, 0, 0, 0, 0, 38, 0), new Date(0, 0, 0, 0, 0, 49, 0)],
        ['Señal 91', '', '#ed7161', new Date(0, 0, 0, 0, 0, 0, 0), new Date(0, 0, 0, 0, 0, 39, 0)],
        ['Señal 91', '', '#f59e63', new Date(0, 0, 0, 0, 0, 39, 0), new Date(0, 0, 0, 0, 0, 41, 0)], //rojo-amarillo
        ['Señal 91', '', '#88c057', new Date(0, 0, 0, 0, 0, 41, 0), new Date(0, 0, 0, 0, 0, 47, 0)],
        ['Señal 91', '', '#fdca66', new Date(0, 0, 0, 0, 0, 47, 0), new Date(0, 0, 0, 0, 0, 49, 0)],
        ['Señal 22', '', '#88c057', new Date(0, 0, 0, 0, 0, 0, 0), new Date(0, 0, 0, 0, 0, 28, 0)],
        ['Señal 22', '', '#50782d', new Date(0, 0, 0, 0, 0, 28, 0), new Date(0, 0, 0, 0, 0, 31, 0)], //verde intermitente
        ['Señal 22', '', '#ed7161', new Date(0, 0, 0, 0, 0, 31, 0), new Date(0, 0, 0, 0, 0, 49, 0)],
    ]);

    var options = {
        tooltip: { trigger: 'none' },
    }

    chart.draw(dataTable, options);
}
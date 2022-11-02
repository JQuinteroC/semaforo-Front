var map = L.map('map').setView([4.704230, -74.040566], 12);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


var marker = L.marker([4.603754, -74.079684]).addTo(map);




var marker2 = L.marker([4.624194, -74.076283]).addTo(map);
var marker3 = L.marker([4.621037, -74.166030]).addTo(map);

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);

    console.log(e)
}

marker.on('click', onMapClick);
marker2.on('click', onMapClick);
marker3.on('click', onMapClick);

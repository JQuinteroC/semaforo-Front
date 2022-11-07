const origin = [4.62027, -74.103551];
var map = L.map('map').setView(origin, 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


var cr13cl41Marker = L.marker([4.628984, -74.066974]).addTo(map);
var cr80dg43Marker = L.marker([4.624194, -74.076283]).addTo(map);
var cl34cr28Marker = L.marker([4.621037, -74.166030]).addTo(map);

var popup = L.popup();

function onMapClick(e) {
    

    map.setView(e.latlng, 19);
    document.getElementById("desc").style.display = "block";
}

cr13cl41Marker.on('click', onMapClick);
cr80dg43Marker.on('click', onMapClick);
cl34cr28Marker.on('click', onMapClick);

function onClickBackButton(e) {
    map.setView(origin, 13);
    document.getElementById("desc").style.display = "none";
}
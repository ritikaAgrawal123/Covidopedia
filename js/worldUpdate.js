$(document).ready(function(){
    var url="https://api.covid19api.com/summary";
    $.getJSON(url,function(data){
        console.log(data)
        var confirmed=data.Global.TotalConfirmed;
        var recovered=data.Global.TotalRecovered;
        var deaths=data.Global.TotalDeaths;
        $("#confirmed").append(confirmed);
        $("#recovered").append(recovered);
        $("#deaths").append(deaths);
        console.log(confirmed)
        var wtable=document.getElementById("wtable");

        for(var i=1;i<=(data.Countries.length);i++){
            var x=wtable.insertRow();
            x.insertCell(0);

            wtable.rows[i].cells[0].innerHTML=data['Countries'][i-1]['Country'];

            x.insertCell(1);

            wtable.rows[i].cells[1].innerHTML=data['Countries'][i-1]['TotalConfirmed'];

            x.insertCell(2);

            wtable.rows[i].cells[2].innerHTML=data['Countries'][i-1]['TotalRecovered'];

            x.insertCell(3);

            wtable.rows[i].cells[3].innerHTML=data['Countries'][i-1]['TotalDeaths'];

            x.insertCell(4);

            wtable.rows[i].cells[4].innerHTML=data['Countries'][i-1]['NewConfirmed'];

            x.insertCell(5);

            wtable.rows[i].cells[5].innerHTML=data['Countries'][i-1]['NewRecovered'];

            x.insertCell(6);

            wtable.rows[i].cells[6].innerHTML=data['Countries'][i-1]['NewDeaths'];
        }

    })
    $("#myInput").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#wtable tr").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
      });
      
      var url="https://www.trackcorona.live/api/countries";
      $.getJSON(url,function(data){
	mapboxgl.accessToken = 'pk.eyJ1Ijoicml0aWthYWdyYXdhbCIsImEiOiJja2k0NHJjNG0zN3hxMnJwNWV6Z2p0enllIn0.hdc-awexjutrb6c0Ej1xtg';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/dark-v10',
center: [0,20],
zoom: 1
});
 
map.on('load', function () {
map.loadImage(
  'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png',
// Add an image to use as a custom marker
function (error, image) {
if (error) throw error;
map.addImage('custom-marker', image);
 
var features=[];

for(var i=0;i<data.data.length;i++){
    var info=data.data[i];
    var s="<strong>" + info.location + "</strong><br>Confirmed - " + info.confirmed +
                "<br>Recovered - " + info.recovered + "<br>Dead - " + info.dead 
    var dic={
    'type': 'Feature',
    'properties': {
        'description': s
    },
    'geometry': {
        'type': 'Point',
        'coordinates': [info.longitude, info.latitude]
}
}
    features.push(dic)
}

map.addSource('places', {
'type': 'geojson',
'data': {
'type': 'FeatureCollection',
'features': features
}
});
 
// Add a layer showing the places.
map.addLayer({
'id': 'places',
'type': 'symbol',
'source': 'places',
'layout': {
'icon-image': 'custom-marker',
'icon-allow-overlap': true,
"icon-size":0.09
}
});
}
);
 
// Create a popup, but don't add it to the map yet.
var popup = new mapboxgl.Popup({
closeButton: false,
closeOnClick: false
});
 
map.on('mouseenter', 'places', function (e) {
// Change the cursor style as a UI indicator.
map.getCanvas().style.cursor = 'pointer';
 
var coordinates = e.features[0].geometry.coordinates.slice();
var description = e.features[0].properties.description;
 
// Ensure that if the map is zoomed out such that multiple
// copies of the feature are visible, the popup appears
// over the copy being pointed to.
while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
}
 
// Populate the popup and set its coordinates
// based on the feature found.
popup.setLngLat(coordinates).setHTML(description).addTo(map);
});
 
map.on('mouseleave', 'places', function () {
map.getCanvas().style.cursor = '';
popup.remove();
});
});
      });
          
  
})
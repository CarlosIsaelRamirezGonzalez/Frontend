const argCoords = {lat: 20.6763989, lng: -103.3479102}
const mapDiv = document.getElementById("map");
const input = document.getElementById("place_input")
let map;
let marker;
let autoComplete;

function initMap(){
    
    map = new google.maps.Map(mapDiv, {
        center: argCoords,
        zoom: 8,
    });
    
    marker = new google.maps.Marker({
        map: map,
    });

    map.addListener('click', function(event) {
        
        const newLocation = event.latLng;
        marker.setPosition(newLocation)


        const geoCoder = new google.maps.Geocoder();
        geoCoder.geocode({ location: newLocation }, function(results, status) {
            if (status == "OK") {
                if (results[0]) {
                    const newAddress = results[0].formatted_address;
                    input.value = newAddress
                }
            }
        });

    });

    initAutoComplete();
}

function initAutoComplete() {

    autoComplete = new google.maps.places.Autocomplete(input);

    autoComplete.addListener("place_changed", function() {
        const place = autoComplete.getPlace();
        map.setCenter(place.geometry.location);
        marker.setPosition(place.geometry.location)
    }); // Elemento que se activa cuando cambiamos de lugar
}
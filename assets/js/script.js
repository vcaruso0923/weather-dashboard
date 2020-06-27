var cityName = "San Francisco, CA"

var mapquestUrl = "http://www.mapquestapi.com/geocoding/v1/address?key=CGM5S6mK5h8rGeCXOD165GEL39leUoI7&location=" + cityName

var getLatLng = function () {
    fetch(mapquestUrl)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    var lat = data.results[0].locations[0].latLng.lat;
                    var lng = data.results[0].locations[0].latLng.lng;
                    latLng = "lat=" + lat + "&lon=" + lng + ""
                    getWeather(latLng);
                })
            } else {
                alert("Error: " + response.statusText);
            }
        })
        .catch(function (error) {
            alert("Unable to connect to MapQuest!")
        })
}

var getWeather = function () {

    var weatherURL = "https://api.openweathermap.org/data/2.5/onecall?" + latLng + "&exclude=hourly,minutely&appid=7402dbd1ea9b7f290130809de84fd4b5"
    
    fetch(weatherURL)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    console.log(data);
                })
            } else {
                alert("Error: " + response.statusText);
            }
        })
        .catch(function (error) {
            alert("Unable to connect to Open Weather!")
        });

}

getLatLng();
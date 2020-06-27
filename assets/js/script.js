var currentWeather

var currentWeatherHandler = function () {
    //append them children
}

var getLatLng = function () {
    var mapquestUrl = "http://www.mapquestapi.com/geocoding/v1/address?key=CGM5S6mK5h8rGeCXOD165GEL39leUoI7&location=" + cityName
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

    var weatherURL = "https://api.openweathermap.org/data/2.5/onecall?" + latLng + "&exclude=hourly,minutely&appid=7402dbd1ea9b7f290130809de84fd4b5&units=imperial"
    
    fetch(weatherURL)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    //clear all divs
                    console.log(data)
                    var cityName = cityName
                    var currentDate = moment.unix(data.current.dt).format("l")
                    var currentClouds = parseInt(data.current.clouds)
                    var currentTemp = Math.floor(data.current.temp)
                    var currentHum = data.current.humidity
                    var currentWind = data.current.wind_speed
                    var currentUV = data.current.uvi
                    
                    
                    $("#futureDateOne").text(moment.unix(data.daily[0].dt).format("l"));
                    var futureCloudsOne = parseInt(data.daily[0].clouds)
                    if (futureCloudsOne > 70) {
                        // $("#futureIconOne") cloudy icon 
                    } else if (69 > futureCloudsOne > 25) {
                        // $("#futureIconOne") partly cloudy icon
                    } else {
                        // $("#futureIconOne") Sunny Icon
                    }
                    $("#futureTempOne").text("Temp: " + Math.floor((data.daily[0].temp.max + data.daily[0].temp.min) / 2));
                    $("#futureHumOne").text("Hum: " + data.daily[0].humidity)
                    
                        $("#futureDateTwo").text(moment.unix(data.daily[1].dt).format("l"));
                        var futureCloudsTwo = parseInt(data.daily[1].clouds)
                        if (futureCloudsTwo > 70) {
                            // $("#futureIconTwo") cloudy icon 
                        } else if (69 > futureCloudsTwo > 25) {
                            // $("#futureIconTwo") partly cloudy icon
                        } else {
                            // $("#futureIconTwo") Sunny Icon
                        }
                        $("#futureTempTwo").text("Temp: " + Math.floor((data.daily[1].temp.max + data.daily[1].temp.min) / 2));
                        $("#futureHumTwo").text("Hum: " + data.daily[1].humidity)
                    
                    $("#futureDateThree").text(moment.unix(data.daily[2].dt).format("l"));
                    var futureCloudsThree = parseInt(data.daily[2].clouds)
                    if (futureCloudsThree > 70) {
                        // $("#futureIconThree") cloudy icon 
                    } else if (69 > futureCloudsThree > 25) {
                        // $("#futureIconThree") partly cloudy icon
                    } else {
                        // $("#futureIconThree") Sunny Icon
                    }
                    $("#futureTempThree").text("Temp: " + Math.floor((data.daily[2].temp.max + data.daily[2].temp.min) / 2));
                    $("#futureHumThree").text("Hum: " + data.daily[2].humidity)
                    
                        $("#futureDateFour").text(moment.unix(data.daily[3].dt).format("l"));
                        var futureCloudsFour = parseInt(data.daily[3].clouds)
                        if (futureCloudsFour > 70) {
                            // $("#futureIconFour") cloudy icon 
                        } else if (69 > futureCloudsFour > 25) {
                            // $("#futureIconFour") partly cloudy icon
                        } else {
                            // $("#futureIconFour") Sunny Icon
                        }
                        $("#futureTempFour").text("Temp: " + Math.floor((data.daily[3].temp.max + data.daily[3].temp.min) / 2));
                        $("#futureHumFour").text("Hum: " + data.daily[3].humidity)
                    
                    $("#futureDateFive").text(moment.unix(data.daily[4].dt).format("l"));
                    var futureCloudsFive = parseInt(data.daily[4].clouds)
                    if (futureCloudsFive > 70) {
                        // $("#futureIconFive") cloudy icon 
                    } else if (69 > futureCloudsFive > 25) {
                        // $("#futureIconFive") partly cloudy icon
                    } else {
                        // $("#futureIconFive") Sunny Icon
                    }
                    $("#futureTempFive").text("Temp: " + Math.floor((data.daily[4].temp.max + data.daily[4].temp.min) / 2));
                    $("#futureHumFive").text("Hum: " + data.daily[4].humidity)
                })
            } else {
                alert("Error: " + response.statusText);
            }
        })
        .catch(function (error) {
            alert("Unable to connect to Open Weather!")
        });

}

//Get City name from form
$("#cityInputForm").submit(function () {
    event.preventDefault();
    cityName = $("#cityInput").val().trim();
    console.log(cityName);
    //display main content
    getLatLng();
})

//Get city name from history

//Hide main content on load
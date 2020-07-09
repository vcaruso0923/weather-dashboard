var hideContent = function () {
    $(".right-side").hide();
}
hideContent();

var getLatLng = function () {
    var mapquestUrl = "https://www.mapquestapi.com/geocoding/v1/address?key=3TkMIOb1tYx0hKhAxGTho9sPNftrC59B&location=" + cityName
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
            alert("Unable to connect to MapQuest! Probably too many requests this month...")
        })

}

//put data on the page
var getWeather = function () {

    var weatherURL = "https://api.openweathermap.org/data/2.5/onecall?" + latLng + "&exclude=hourly,minutely&appid=7402dbd1ea9b7f290130809de84fd4b5&units=imperial"

    fetch(weatherURL)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    //clear all divs?
                    //show page
                    $("#cityName").text(cityName + " - " + moment.unix(data.current.dt).format("MMM Do YYYY"))
                    var currentClouds = parseInt(data.current.clouds)
                    if (data.current.weather[0].main === "Rain") {
                        $("#currentIcon").attr("src", "./assets/icons/rainy.svg")
                    } else if (currentClouds > 70) {
                        $("#currentIcon").attr("src", "./assets/icons/cloudy.svg")
                    } else if (69 > currentClouds > 20) {
                        $("#currentIcon").attr("src", "./assets/icons/partly-cloudy.svg")
                    } else {
                        $("#currentIcon").attr("src", "./assets/icons/sunny.svg")
                    }
                    $("#currentTemp").text("Temp: " + Math.floor(data.current.temp));
                    $("#currentHum").text("Humidity: " + data.current.humidity)
                    $("#currentWind").text("Wind Speed: " + data.current.wind_speed)
                    $("#currentUV").text("UV Index: " + data.current.uvi)
                    var uvNumber = parseInt(data.current.uvi)
                    if (uvNumber > 5.00) {
                        $("#currentUV").attr("class", "high-uv")
                    } else if (3.00 > uvNumber) {
                        $("#currentUV").attr("class", "low-uv")
                    } else {
                        $("#currentUV").attr("class", "moderate-uv")
                    }

                    $("#futureDateOne").text(moment.unix(data.daily[0].dt).format("MMM Do"));
                    var futureCloudsOne = parseInt(data.daily[0].clouds)
                    if (data.daily[0].weather[0].main === "Rain") {
                        $("#futureIconOne").attr("src", "./assets/icons/rainy.svg")
                    } else if (futureCloudsOne > 70) {
                        $("#futureIconOne").attr("src", "./assets/icons/cloudy.svg")
                    } else if (69 > futureCloudsOne > 25) {
                        $("#futureIconOne").attr("src", "./assets/icons/partly-cloudy.svg")
                    } else {
                        $("#futureIconOne").attr("src", "./assets/icons/sunny.svg")
                    }
                    $("#futureTempOne").text("Temp: " + Math.floor((data.daily[0].temp.max + data.daily[0].temp.min) / 2));
                    $("#futureHumOne").text("Hum: " + data.daily[0].humidity)

                    $("#futureDateTwo").text(moment.unix(data.daily[1].dt).format("MMM Do"));
                    var futureCloudsTwo = parseInt(data.daily[1].clouds)
                    if (data.daily[1].weather[0].main === "Rain") {
                        $("#futureIconTwo").attr("src", "./assets/icons/rainy.svg")
                    } else if (futureCloudsTwo > 70) {
                        $("#futureIconTwo").attr("src", "./assets/icons/cloudy.svg")
                    } else if (69 > futureCloudsTwo > 25) {
                        $("#futureIconTwo").attr("src", "./assets/icons/partly-cloudy.svg")
                    } else {
                        $("#futureIconTwo").attr("src", "./assets/icons/sunny.svg")
                    }
                    $("#futureTempTwo").text("Temp: " + Math.floor((data.daily[1].temp.max + data.daily[1].temp.min) / 2));
                    $("#futureHumTwo").text("Hum: " + data.daily[1].humidity)

                    $("#futureDateThree").text(moment.unix(data.daily[2].dt).format("MMM Do"));
                    var futureCloudsThree = parseInt(data.daily[2].clouds)
                    if (data.daily[2].weather[0].main === "Rain") {
                        $("#futureIconThree").attr("src", "./assets/icons/rainy.svg")
                    } else if (futureCloudsThree > 70) {
                        $("#futureIconThree").attr("src", "./assets/icons/cloudy.svg")
                    } else if (69 > futureCloudsThree > 25) {
                        $("#futureIconThree").attr("src", "./assets/icons/partly-cloudy.svg")
                    } else {
                        $("#futureIconThree").attr("src", "./assets/icons/sunny.svg")
                    }
                    $("#futureTempThree").text("Temp: " + Math.floor((data.daily[2].temp.max + data.daily[2].temp.min) / 2));
                    $("#futureHumThree").text("Hum: " + data.daily[2].humidity)

                    $("#futureDateFour").text(moment.unix(data.daily[3].dt).format("MMM Do"));
                    var futureCloudsFour = parseInt(data.daily[3].clouds)
                    if (data.daily[3].weather[0].main === "Rain") {
                        $("#futureIconFour").attr("src", "./assets/icons/rainy.svg")
                    } else if (futureCloudsFour > 70) {
                        $("#futureIconFour").attr("src", "./assets/icons/cloudy.svg")
                    } else if (69 > futureCloudsFour > 25) {
                        $("#futureIconFour").attr("src", "./assets/icons/partly-cloudy.svg")
                    } else {
                        $("#futureIconFour").attr("src", "./assets/icons/sunny.svg")
                    }
                    $("#futureTempFour").text("Temp: " + Math.floor((data.daily[3].temp.max + data.daily[3].temp.min) / 2));
                    $("#futureHumFour").text("Hum: " + data.daily[3].humidity)

                    $("#futureDateFive").text(moment.unix(data.daily[4].dt).format("MMM Do"));
                    var futureCloudsFive = parseInt(data.daily[4].clouds)
                    if (data.daily[4].weather[0].main === "Rain") {
                        $("#futureIconFive").attr("src", "./assets/icons/rainy.svg")
                    } else if (futureCloudsFive > 70) {
                        $("#futureIconFive").attr("src", "./assets/icons/cloudy.svg")
                    } else if (69 > futureCloudsFive > 25) {
                        $("#futureIconFive").attr("src", "./assets/icons/partly-cloudy.svg")
                    } else {
                        $("#futureIconFive").attr("src", "./assets/icons/sunny.svg")
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

//Get City name from input
$("#cityInputForm").submit(function () {
    event.preventDefault();
    cityName = $("#cityInput").val().trim();

    //add entered city to list
    $(".list-group").append('<li class="list-group-item">' + cityName + '</li>')

    var listContents = [];
    $("ul").each(function(){
       listContents.push(this.innerHTML);
    })
    localStorage.setItem('todoList', JSON.stringify(listContents));

    getLatLng();
    showContent();
})

//Get city name from history
$("#list-group-container ul").click(function (event) {
    event.preventDefault();
    cityName = $(event.target).text();
    getLatLng();
    showContent();
});

//show Content on render
var showContent = function () {
    $(".right-side").show();
};

function loadStorage() {
    if (localStorage.getItem('todoList')){
        var listContents = JSON.parse(localStorage.getItem('todoList'));
        $("ul").each(function(i){
          this.innerHTML = listContents [i];
        })
    }
}
loadStorage();
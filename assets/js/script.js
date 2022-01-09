
// global variables
var apiKey = "2206f031debcc1c8875b407672a8becc";
const date = new Date();

$(document).ready(function () {
    // search button
    $("#search-btn").on("click", function () {
        var city = $("#search-value").val();
        // getCoord(city);
        getWeather(city);
    });

    function getWeather(city) {
        $.ajax({
            type: "GET",
            url: "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=imperial",
            success: function (data) {
                console.log(data);
                var title = $("<h3>").text(data.name + " (" + new Date().toLocaleDateString() + ")");
                $("#today-header").append(title);
                var temp = $("<p>").text("Temp: " + data.main.temp + " deg F");
                var wind = $("<p>").text("Wind: " + data.wind.speed + " MPH");
                var humidity = $("<p>").text("Humidity: " + data.main.humidity + "%");
                // var uvi = $("<p>").text("UVI Index: "+ data.main.uvi)
                $("#today-content").append(temp, wind, humidity);
                var lat = data.coord.lat;
                var lon = data.coord.lon;
                weatherForecast(lat, lon);
            },
            error: function (error) {
                console.log(error);
            }
        })
    };


    // I definitely should have made this a for loop.... but it's already done. I'm not going back now.
    function weatherForecast(lat, lon) {
        $.ajax({
            type: "GET",
            url: "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey + "&units=imperial",
            success: function (data) {
                console.log(data);
                // Day 1
                var date1 = $("<h3>").text(new Date(Date.now() + (3600 * 1000 * 24)).toLocaleDateString());
                $(".day1header").append(date1);
                var temp1 = $("<p>").text("Temp: " + data.daily[1].temp.day + " deg F");
                var wind1 = $("<p>").text("Wind: " + data.daily[1].wind_speed + " MPH");
                var humidity1 = $("<p>").text("Humidity: " + data.daily[1].humidity + "%");
                var icon1 = $("<img>").attr("src", "https://openweathermap.org/img/w/" + data.daily[1].weather[0].icon +".png");
                $(".day1content").append(icon1,temp1, wind1, humidity1);
                // Day 2
                var date2 = $("<h3>").text(new Date(Date.now() + (3600 * 1000 * 48)).toLocaleDateString());
                $(".day2header").append(date2);
                var temp2 = $("<p>").text("Temp: " + data.daily[2].temp.day + " deg F");
                var wind2 = $("<p>").text("Wind: " + data.daily[2].wind_speed + " MPH");
                var humidity2 = $("<p>").text("Humidity: " + data.daily[2].humidity + "%");
                var icon2 = $("<img>").attr("src", "https://openweathermap.org/img/w/" + data.daily[2].weather[0].icon +".png");
                $(".day2content").append(icon2,temp2, wind2, humidity2);
                // Day 3
                var date3 = $("<h3>").text(new Date(Date.now() + (3600 * 1000 * 72)).toLocaleDateString());
                $(".day3header").append(date3);
                var temp3 = $("<p>").text("Temp: " + data.daily[3].temp.day + " deg F");
                var wind3 = $("<p>").text("Wind: " + data.daily[3].wind_speed + " MPH");
                var humidity3 = $("<p>").text("Humidity: " + data.daily[3].humidity + "%");
                var icon3 = $("<img>").attr("src", "https://openweathermap.org/img/w/" + data.daily[3].weather[0].icon +".png");
                $(".day3content").append(icon3,temp3, wind3, humidity3);
                // Day 4
                var date4 = $("<h3>").text(new Date(Date.now() + (3600 * 1000 * 96)).toLocaleDateString());
                $(".day4header").append(date4);
                var temp4 = $("<p>").text("Temp: " + data.daily[4].temp.day + " deg F");
                var wind4 = $("<p>").text("Wind: " + data.daily[4].wind_speed + " MPH");
                var humidity4 = $("<p>").text("Humidity: " + data.daily[4].humidity + "%");
                var icon4 = $("<img>").attr("src", "https://openweathermap.org/img/w/" + data.daily[4].weather[0].icon +".png");
                $(".day4content").append(icon4,temp4, wind4, humidity4);
                // Day 5
                var date5 = $("<h3>").text(new Date(Date.now() + (3600 * 1000 * 130)).toLocaleDateString());
                $(".day5header").append(date5);
                var temp5 = $("<p>").text("Temp: " + data.daily[5].temp.day + " deg F");
                var wind5 = $("<p>").text("Wind: " + data.daily[5].wind_speed + " MPH");
                var humidity5 = $("<p>").text("Humidity: " + data.daily[5].humidity + "%");
                var icon5 = $("<img>").attr("src", "https://openweathermap.org/img/w/" + data.daily[5].weather[0].icon +".png");
                $(".day5content").append(icon5,temp5, wind5, humidity5);
                // UV Index
                if (data.daily[0].uvi <= 2) {
                    var uvi = $("<p>").addClass("favorable").text("UV Index: " + data.daily[0].uvi)
                    $("#today-content").append(uvi)
                }
                if (data.daily[0].uvi <= 5 && data.daily[0].uvi>2) {
                    var uvi = $("<p>").addClass("moderate").text("UV Index: " + data.daily[0].uvi);
                    $("#today-content").append(uvi);
                }
                else {
                    var uvi = $("<p>").addClass("severe").text("UV Index: " + data.daily[0].uvi);
                    $("#today-content").append(uvi);
                }
                // Icon for todday's weather
                var iconContainer = $("<div>").addClass();
                var icon = $("<img>").attr("src", "https://openweathermap.org/img/w/" + data.daily[0].weather[0].icon +".png");
                $("#today-header").append(iconContainer);
                iconContainer.append(icon);

            },
            error: function (error) {
                console.log(error);
            }
        })
    }

});

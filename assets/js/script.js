
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
                var date1 = $("<h3>").text(new Date(Date.now() + (3600*1000*24)).toLocaleDateString());
                $(".day1header").append(date1);
                var temp1 = $("<p>").text("Temp: " + data.daily[1].temp.day +" deg F");
                var wind1 = $("<p>").text("Wind: " + data.daily[1].wind_speed +" MPH");
                var humidity1 = $("<p>").text("Humidity: " + data.daily[1].humidity+ "%");
                $(".day1content").append(temp1,wind1,humidity1);
                var date2 = $("<h3>").text(new Date(Date.now() + (3600*1000*48)).toLocaleDateString());
                $(".day2header").append(date2);
                var temp2 = $("<p>").text("Temp: " + data.daily[2].temp.day +" deg F");
                var wind2 = $("<p>").text("Wind: " + data.daily[2].wind_speed +" MPH");
                var humidity2 = $("<p>").text("Humidity: " + data.daily[2].humidity+ "%");
                $(".day2content").append(temp2,wind2,humidity2);
                var date3 = $("<h3>").text(new Date(Date.now() + (3600*1000*72)).toLocaleDateString());
                $(".day3header").append(date3);
                var temp3 = $("<p>").text("Temp: " + data.daily[3].temp.day +" deg F");
                var wind3 = $("<p>").text("Wind: " + data.daily[3].wind_speed +" MPH");
                var humidity3 = $("<p>").text("Humidity: " + data.daily[3].humidity+ "%");
                $(".day3content").append(temp3,wind3,humidity3);
                var date4 = $("<h3>").text(new Date(Date.now() + (3600*1000*96)).toLocaleDateString());
                $(".day4header").append(date4);
                var temp4 = $("<p>").text("Temp: " + data.daily[4].temp.day +" deg F");
                var wind4 = $("<p>").text("Wind: " + data.daily[4].wind_speed +" MPH");
                var humidity4 = $("<p>").text("Humidity: " + data.daily[4].humidity+ "%");
                $(".day4content").append(temp4,wind4,humidity4);
                var date5 = $("<h3>").text(new Date(Date.now() + (3600*1000*130)).toLocaleDateString());
                $(".day5header").append(date5);
                var temp5 = $("<p>").text("Temp: " + data.daily[5].temp.day +" deg F");
                var wind5 = $("<p>").text("Wind: " + data.daily[5].wind_speed +" MPH");
                var humidity5 = $("<p>").text("Humidity: " + data.daily[5].humidity+ "%");
                $(".day5content").append(temp5,wind5,humidity5);
            },
            error: function (error) {
                console.log(error);
            }
        })
    }

});

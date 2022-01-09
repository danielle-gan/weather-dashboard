
// global variables
var apiKey = "2206f031debcc1c8875b407672a8becc";

$(document).ready(function () {
    // search button
    $("#search-btn").on("click", function () {
        var city = $("#search-value").val();
        weatherFunction(city);
    });
    function weatherFunction(city) {
        $.ajax({
            url: "api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=imperial",
            type: "GET",
            success: function (response) {
                console.log(response);
            },
            error: function (error) {
                console.log(error);
            }
        })
    };
});



$(".input-group-text").on("click", getOneDay) 


  function getOneDay (params) {
    $(".jumbotron").html("");  
    var newH1 = $("<h1>");
    newH1.attr("id", "current-city")
    $(".jumbotron").append(newH1);
   
    var city = $("#city-input").val();
    localStorage.setItem("city", city);
    var searched = $("<div>").text(city);
    searched.addClass("input-group-text", "list-group-item");
    searched.attr("id", `${$(this).val()}`);
    searched.val(city);
    localStorage.getItem(city);
    $(".col-md-3").append(searched);
    
  
    var apiKey = "1e371b6b2c7be9361517f7c932a1a6c8";
    var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;


  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response){
    $("#current-city").text(city);
    var date = $("<h3>").text(moment().format("MM/DD/YY"));
    $(".jumbotron").append(date);
    var icon = $("<img>").attr("src", "https://openweathermap.org/img/w/" + response.weather[0].icon + ".png");  // https://openweathermap.org/img/w/04n.png
    $("#current-city").append(icon);
    var temp = $("<p>").text("Current temperature: " + (response.main.temp).toFixed(1) + "°F");
    $(".jumbotron").append(temp);
    var feel = $("<p>").text("Feels like: " + (response.main.feels_like).toFixed(1) + "°F");
    $(".jumbotron").append(feel);
    var humid = $("<p>").text("Humidity: " + response.main.humidity + "%");
    $(".jumbotron").append(humid);
    var windSpd = $("<p>").text("Wind Speed: " + (response.wind.speed).toFixed(0) + " MPH");
    $(".jumbotron").append(windSpd);
      
    var lat = response.coord.lat;
    var long = response.coord.lon;
    
    var uvQuery = `https://api.openweathermap.org/data/2.5/uvi?appid=${apiKey}&lat=${lat}&lon=${long}`;
    $.ajax({
      url: uvQuery,
      method: "GET"
    }).then(function(uvResponse) {
      var UV = (uvResponse.value).toFixed(0);
      var uvIndex = $("<p>").text("UV Index: " + UV);

        if ((UV == 0) || (UV == 1) || (UV == 2)) {
          uvIndex.addClass("green");
        }
        else if ((UV == 3) || (UV == 4) || (UV == 5)) {
          uvIndex.addClass("yellow");
        }
        else if ((UV == 6) || (UV == 7)) {
          uvIndex.addClass("orange");
        }
        else if ((UV == 8) || (UV == 9) || (UV == 10)) {
          uvIndex.addClass("red");
        }
        else if (UV >= 11) {
          uvIndex.addClass("purple");
        }
     $(".jumbotron").append(uvIndex); 
    })
     var fiveDayForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=imperial`;
    

    $.ajax({
      url: fiveDayForecast,
      method: "GET"
    }).then(function(forecast){

      $("#1").empty();
      var date1 = $("<p>").text(moment(forecast.list[5].dt_txt).format("MM/DD/YY"));
      var fTemp1 = $("<p>").text("High: " + (forecast.list[5].main.temp).toFixed(1) + "°F");
      var fHumid1 = $("<p>").text("Humidity: " + forecast.list[5].main.humidity + "%");
      var icon1 = $("<img>").attr("src", "https://openweathermap.org/img/w/" + forecast.list[5].weather[0].icon + ".png");
      $("#1").append(date1);
      $("#1").append(fTemp1);
      $("#1").append(icon1);
      $("#1").append(fHumid1);

      $("#2").empty();
      var date2 = $("<p>").text(moment(forecast.list[13].dt_txt).format("MM/DD/YY"));
      var fTemp2 = $("<p>").text("High: " + (forecast.list[13].main.temp).toFixed(1) + "°F");
      var fHumid2 = $("<p>").text("Humidity: " + forecast.list[13].main.humidity + "%");
      var icon2 = $("<img>").attr("src", "https://openweathermap.org/img/w/" + forecast.list[13].weather[0].icon + ".png");
      $("#2").append(date2);
      $("#2").append(fTemp2);
      $("#2").append(icon2);
      $("#2").append(fHumid2);

      $("#3").empty();
      var date3 = $("<p>").text(moment(forecast.list[21].dt_txt).format("MM/DD/YY"));
      var fTemp3 = $("<p>").text("High: " + (forecast.list[21].main.temp).toFixed(1) + "°F");
      var fHumid3 = $("<p>").text("Humidity: " + forecast.list[21].main.humidity + "%");
      var icon3 = $("<img>").attr("src", "https://openweathermap.org/img/w/" + forecast.list[21].weather[0].icon + ".png");
      $("#3").append(date3);
      $("#3").append(fTemp3);
      $("#3").append(icon3);
      $("#3").append(fHumid3);

      $("#4").empty();
      var date4 = $("<p>").text(moment(forecast.list[29].dt_txt).format("MM/DD/YY"));
      var fTemp4 = $("<p>").text("High: " + (forecast.list[29].main.temp).toFixed(1) + "°F");
      var fHumid4 = $("<p>").text("Humidity: " + forecast.list[29].main.humidity + "%");
      var icon4 = $("<img>").attr("src", "https://openweathermap.org/img/w/" + forecast.list[29].weather[0].icon + ".png");
      $("#4").append(date4);
      $("#4").append(fTemp4);
      $("#4").append(icon4);
      $("#4").append(fHumid4);

      $("#5").empty();
      var date5 = $("<p>").text(moment(forecast.list[37].dt_txt).format("MM/DD/YY"));
      var fTemp5 = $("<p>").text("High: " + (forecast.list[37].main.temp).toFixed(1) + "°F");
      var fHumid5 = $("<p>").text("Humidity: " + forecast.list[37].main.humidity + "%");
      var icon5 = $("<img>").attr("src", "https://openweathermap.org/img/w/" + forecast.list[37].weather[0].icon + ".png");
      $("#5").append(date5);
      $("#5").append(fTemp5);
      $("#5").append(icon5);
      $("#5").append(fHumid5);
    }
    )
  }); 
  }

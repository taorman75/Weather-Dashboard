// `https://api.openweathermap.org/data/2.5/weather?q=${userLocation}&appid=${APIKey}&units=imperial` -- link to open weather API/
$("#date").text(moment().format("MM / DD / YY"));

$(".input-group-text").on("click", getOneDay) 

    // event.preventDefault();

    
    
  

  function getOneDay (params) {
   // Here we grab the text from the input box
    var city = $("#city-input").val();

    // Here we construct our URL
    var apiKey = "1e371b6b2c7be9361517f7c932a1a6c8";
    var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;


  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response){
    console.log(response);
    $("#current-city").text(city);
    var icon = $("img").text(response.weather.icon);
    $("#current-city").append(response.weather.icon);
    var temp = $("<p>").text(response.main.temp);
    $(".jumbotron").append("Current temperature: ", temp, "°F");
    console.log(temp);
    var humid = $("<p>").text(response.main.humidity);
    $(".jumbotron").append("Humidity: ", humid, "%");
    console.log(humid);
    var windSpd = $("<p>").text(response.wind.speed);
    $(".jumbotron").append("Wind Speed: ", windSpd);
    console.log(windSpd);
      
    var lat = response.coord.lat;
    console.log(lat);
    var long = response.coord.lon;
    console.log(long);
    
    var uvQuery = `http://api.openweathermap.org/data/2.5/uvi?appid=${apiKey}&lat=${lat}&lon=${long}`;
    console.log(uvQuery);
    $.ajax({
      url: uvQuery,
      method: "GET"
    }).then(function(uvResponse) {
      console.log(uvResponse.value);
     $(".jumbotron").append("UV Index: ", uvResponse.value); 
    })
     var fiveDayForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=imperial`;
    console.log(fiveDayForecast);  

    $.ajax({
      url: fiveDayForecast,
      method: "GET"
    }).then(function(forecast){
      console.log(forecast);
      var fTemp1 = $("<p>").text(forecast.list[5].main.temp);
      var fHumid1 = $("<p>").text(forecast.list[5].main.humidity);
      $("#1").append(fTemp1);
      $("#1").append(fHumid1);

      var fTemp2 = $("<p>").text(forecast.list[13].main.temp);
      console.log(fTemp2);
      var fHumid2 = $("<p>").text(forecast.list[13].main.humidity);
      $("#2").append(fTemp2);
      $("#2").append(fHumid2);

      var fTemp3 = $("<p>").text(forecast.list[21].main.temp);
      var fHumid3 = $("<p>").text(forecast.list[21].main.humidity);
      $("#3").append(fTemp3);
      $("#3").append(fHumid3);

      var fTemp4 = $("<p>").text(forecast.list[29].main.temp);
      var fHumid4 = $("<p>").text(forecast.list[29].main.humidity);
      $("#4").append(fTemp4);
      $("#4").append(fHumid4);

      var fTemp5 = $("<p>").text(forecast.list[37].main.temp);
      var fHumid5 = $("<p>").text(forecast.list[37].main.humidity);
      $("#5").append(fTemp5);
      $("#5").append(fHumid5);
    }
    )
   
    // $("#date").text(moment().format("MM / DD / YY"));
    
  
  });
   
  }

  // function getFiveDay (params) {
   
  // }

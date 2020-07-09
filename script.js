// `https://api.openweathermap.org/data/2.5/weather?q=${userLocation}&appid=${APIKey}&units=imperial` -- link to open weather API/
// $("#date").text(moment().format("MM / DD / YY"));

$(".input-group-text").on("click", getOneDay) 

    // event.preventDefault();

   
    
  

  function getOneDay (params) {
   // Here we grab the text from the input box
    $(".jumbotron").html("");  
    var newH1 = $("<h1>");
    newH1.attr("id", "current-city")
    $(".jumbotron").append(newH1);
    // $(".card").html("");
    var city = $("#city-input").val();
    var searched = $("<button>").text(city);
    searched.addClass("btn-block");
    searched.attr('id', 'historyS')
    searched.val(city)
    $(".col-md-3").append(searched);
   /* $('#historyS').click(function () {
      alert('1')
    })*/
    
      $(".btn-block").click(function(){    // <<<< Unclear
        //alert('1')
        
        var city = $(this).val()
        console.log(city);
               
       // getOneDay();
      }) 
    // Here we construct our URL
    var apiKey = "1e371b6b2c7be9361517f7c932a1a6c8";
    var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;


  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response){
    console.log(response);
    $("#current-city").text(city);
    var date = $("<h3>").text(moment().format("MM/DD/YY"));
    $(".jumbotron").append(date);
    var icon = $("<img>").attr("src", "https://openweathermap.org/img/w/" + response.weather[0].icon + ".png");  // https://openweathermap.org/img/w/04n.png
    $("#current-city").append(icon);
    var temp = $("<p>").text("Current temperature: " + response.main.temp + "°F");
    $(".jumbotron").append(temp);
    var humid = $("<p>").text("Humidity: " + response.main.humidity + "%");
    $(".jumbotron").append(humid);
    var windSpd = $("<p>").text("Wind Speed: " + response.wind.speed);
    $(".jumbotron").append(windSpd);
      
    var lat = response.coord.lat;
    var long = response.coord.lon;
    
    var uvQuery = `http://api.openweathermap.org/data/2.5/uvi?appid=${apiKey}&lat=${lat}&lon=${long}`;
    console.log(uvQuery);
    $.ajax({
      url: uvQuery,
      method: "GET"
    }).then(function(uvResponse) {
      console.log(uvResponse.value);
      var uvIndex = ("<p>").text("UV Index: " + uvResponse.value)
     $(".jumbotron").append(uvIndex); 
    })
     var fiveDayForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=imperial`;
    console.log(fiveDayForecast);  

    $.ajax({
      url: fiveDayForecast,
      method: "GET"
    }).then(function(forecast){
      console.log(forecast);
      var fTemp1 = $("<p>").text("High: " + forecast.list[5].main.temp + "°F");
      var fHumid1 = $("<p>").text("Humidity: " + forecast.list[5].main.humidity + "%");
      var icon1 = $("<img>").attr("src", "https://openweathermap.org/img/w/" + forecast.list[5].weather[0].icon + ".png");
      $("#1").append(fTemp1);
      $("#1").append(icon1);
      $("#1").append(fHumid1);

      var fTemp2 = $("<p>").text("High: " + forecast.list[13].main.temp + "°F");
      console.log(fTemp2);
      var fHumid2 = $("<p>").text("Humidity: " + forecast.list[13].main.humidity + "%");
      var icon2 = $("<img>").attr("src", "https://openweathermap.org/img/w/" + forecast.list[13].weather[0].icon + ".png");
      $("#2").append(fTemp2);
      $("#2").append(icon2);
      $("#2").append(fHumid2);

      var fTemp3 = $("<p>").text("High: " + forecast.list[21].main.temp + "°F");
      var fHumid3 = $("<p>").text("Humidity: " + forecast.list[21].main.humidity + "%");
      var icon3 = $("<img>").attr("src", "https://openweathermap.org/img/w/" + forecast.list[21].weather[0].icon + ".png");
      $("#3").append(fTemp3);
      $("#3").append(icon3);
      $("#3").append(fHumid3);

      var fTemp4 = $("<p>").text("High: " + forecast.list[29].main.temp + "°F");
      var fHumid4 = $("<p>").text("Humidity: " + forecast.list[29].main.humidity + "%");
      var icon4 = $("<img>").attr("src", "https://openweathermap.org/img/w/" + forecast.list[29].weather[0].icon + ".png");
      $("#4").append(fTemp4);
      $("#4").append(icon4);
      $("#4").append(fHumid4);

      var fTemp5 = $("<p>").text("High: " + forecast.list[37].main.temp + "°F");
      var fHumid5 = $("<p>").text("Humidity: " + forecast.list[37].main.humidity + "%");
      var icon5 = $("<img>").attr("src", "https://openweathermap.org/img/w/" + forecast.list[37].weather[0].icon + ".png");
      $("#5").append(fTemp5);
      $("#5").append(icon5);
      $("#5").append(fHumid5);
    }
    )
   
    // $("#date").text(moment().format("MM / DD / YY"));
    
  
  });
   
  }

  // function getFiveDay (params) {
   
  // }

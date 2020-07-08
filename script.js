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
    
   // var uvIndex = $("<p>").text()  see https://openweathermap.org/api/uvi
    
  
  });
   
  }

  function getFiveDay (params) {
      
  }

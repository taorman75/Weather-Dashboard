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
    var temp = $("<p>").text(response.main.temp);
    console.log(temp);
    var humid = $("<p>").text(response.main.humidity);
    console.log(humid);
    var windSpd = $("<p>").text(response.wind[0]);
    console.log(windSpd);
      
    var lat = response.coord[1];
    console.log(lat);
    var long = response.coord[0];
    console.log(long);
    
    var uvQuery = `http://api.openweathermap.org/data/2.5/uvi?appid=${apiKey}&lat=${lat}&lon=${long}`;
    console.log(uvQuery);
    
   // var uvIndex = $("<p>").text()  see https://openweathermap.org/api/uvi
    
  
  });
   
  }

  function getFiveDay (params) {
      
  }

// `https://api.openweathermap.org/data/2.5/weather?q=${userLocation}&appid=${APIKey}&units=imperial` -- link to open weather API/


$("#search-button").on("click", function(event) {

    event.preventDefault();

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
  
  });

    
  });
// $("search-button").on("click", function() {
//     $.ajax ({
//         url: getURL,
//         method: "GET"
//     }).then(function(response){
//         console.log(response);
        
//     }
//     ) 
//  console.log(city);
// console.log(getURL);   
// })

// function get1day() {
    
// }

// $("#search-button").on("click", get1day)

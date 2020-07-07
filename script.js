// `https://api.openweathermap.org/data/2.5/weather?q=${userLocation}&appid=${APIKey}&units=imperial` -- link to open weather API/

var apiKey = "436bc66d9934aa2b0814e3e5a007aaf5";
"api.openweathermap.org/data/2.5/weather?q=" + "&appid=" + apiKey;

$("#date").text()



function get1day() {
    $.ajax ({
        url: 'http://api.openweathermap.org/data/2.5/weather?q=denver&appid=436bc66d9934aa2b0814e3e5a007aaf5',
        method: "GET"
    }).then(function(response){
        console.log(response);
        
    }
    ) 
}

$("#search-button").on("click", get1day)

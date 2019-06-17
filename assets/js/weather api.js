// var ur = api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}

$(document).on("click", "#button", function(event){
    event.preventDefault()
    var zipcode = $("#zip").val().trim();
    console.log(zipcode);
    
    var APIKey = "4d8eea24676cdb56eeb05f625f0c9958";
    
    // Here we are building the URL we need to query the database
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?zip=" +
        zipcode+ ",us&units=imperial&appid=" + APIKey;
    
    // Here we run our AJAX call to the OpenWeatherMap API
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        // We store all of the retrieved data inside of an object called "response"
        .then(function(response) {
    
        // Log the queryURL
        console.log(queryURL);
    
        // Log the resulting object
        console.log(response);
        }) 
    })
          
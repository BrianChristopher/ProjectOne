var queryURL = "https://cors-anywhere.herokuapp.com/http://api.eventful.com/json/events/search?...&location=32817&app_key=DnChmPW9wRV8NBcd"
console.log(queryURL)
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){
    let results =  JSON.parse(response)
     console.log("results: " + results.events.event[0].olson_path)

    // forwards all the information to info function
    info(results)
}) 
    //function where we will go through our info object and gather the resources to load to the DOM
function info(results){
    var dat
    console.log("is working")
    console.log(results.events.event.length)
        for(var i = 0; i < results.events.event.length; i++){
            
            console.log(i)
            // creates HTML li element
            li = $("<li>")
            // creates HTML div with class collapsible header
            divH = $("<div class='collapsible-header'>")
            // creates HTML h5 tag
            h5 = $("<h5>")
            // creates HTML span tag
            spanH = $("<span>")
            // appends object.title[i] to h5
            h5.append(results.events.event[i].title)
            // appends object.date[i] to spanH
            dat = results.events.event[i].start_time
            spanH.append(moment(dat).format("MMM Do YY"))
            // appends object.spanH[i] to divH
            divH.append(h5,spanH)
            // appends divB
            divB = $("<div class='collapsible-body'>")
            // creates span
            spanB = $("<span>")
            // appends obj.venue obj.address obj.url
            spanB.append(results.events.event[i].venue_name, "<br>", results.events.event[i].venue_address, "<br>", results.events.event[i].url)
            // appends spanB to divB
            divB.append(spanB)  
            // appends divH and divB
            li.append(divH,divB)
            $("<ul class='collapsible popout'>").append(li)
        }

        
        }
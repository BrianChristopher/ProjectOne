function ajx(zipcode) {
    var queryURL = "https://cors.io/?http://api.eventful.com/json/events/search?...&location=" + zipcode + "&app_key=DnChmPW9wRV8NBcd"
    $.ajax({
        url: queryURL,
        method: "GET",
        // "Access-Control-Request-Headers": "https://crossorigin.me/"
    }).then(function (response) {
        let results = JSON.parse(response)
        // forwards all the information to info function
        info(results)
    })
    
}
    //function where we will go through our info object and gather the resources to load to the DOM
    function info(results) {
        var dat
        for (var i = 0; i < results.events.event.length; i++) {
            // creates HTML li element
            li = $("<li>")
            // creates HTML div with class collapsible header
            divH = $("<div class='collapsible-header'>")
            // creates HTML h5 tag
            h5 = $("<h5>")
            // creates HTML span tag
            spanH = $("<span>")
            spanH.addClass("Alter")
            // spanH2 =$("<span>")
            // appends object.title[i] to h5
            h5.append(results.events.event[i].title)
            // appends object.date[i] to spanH
            dat = results.events.event[i].start_time
            spanH.append(moment(dat).format("MMM Do YY"))
            // appends weather var to spanH2
            // spanH2.append(temp,humidty,"<br>",desc)
            // appends to span H
            // spanH.append(spanH2)
            // appends object.spanH[i] to divH
            divH.append(h5, spanH)
            // appends divB
            divB = $("<div class='collapsible-body'>")
            // creates span
            spanB = $("<span>")
            // appends obj.venue obj.address obj.url
            spanB.append(results.events.event[i].venue_name, "<br>", results.events.event[i].venue_address, "<br>", "<br>",
                results.events.event[i].description, "<br>", "<br>", "<a target='_blank' href=" + results.events.event[i].url + ">" + results.events.event[i].url + "</a>")
            // appends spanB to divB
            divB.append(spanB)
            // appends divH and divB
            li.append(divH, divB)
            $(".collapsible").append(li)
        }
        $('.collapsible').collapsible();
    }



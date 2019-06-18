$(document).ready(function() {
    $(function() {
    $("#dialog").dialog({
    autoOpen: false
    });
    $(document).on("click", "#boredButton", function() {
    $("#dialog").dialog("open");
    });
    });
    // Validating Form Fields.....
    $("#button").click(function(e) {
        e.preventDefault();
    //remember to keep varibale zipcode  
    var zipcode = $("#zipcode").val();
    console.log(zipcode);
   
    });
    });
    
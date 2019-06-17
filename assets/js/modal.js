// //Make sure to add these links on the index.html so it can run jquery and modal
// <link href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.9.2/themes/ui-darkness/jquery-ui.css" rel="stylesheet">
// <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
// <script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.9.2/jquery-ui.min.js"></script>
// <script src="./modal.js" type="text/javascript"></script>

//this is the html part of modal
/* <div class="main">
            <div id="dialog" title="Add Your Zipcode">
                <form action="" method="post">
                    <input id="zipcode" name="name" type="number">
                    <input id="button" type="submit" value="Submit">
                </form>
            </div>
            this input is the bored button, so it can be replace it
            <input id="submit" type="button" value="bored">
    </div> */

//this is the css part of modal
/*  @import "http://fonts.googleapis.com/css?family=Droid+Serif";
    Above line is used for online google font 
    input[type=text] {
    margin-top:5px;
    margin-bottom:20px;
    width:96%;
    border-radius:5px;
    border:0;
    padding:5px 0
    }
    input[type=submit] {
    width:30%;
    border:1px solid #59b4d4;
    background:#0078a3;
    color:#eee;
    padding:3px 0;
    border-radius:5px;
    margin-left:22%;
    margin-top: 5%;
    cursor:pointer
    }
    input[type=submit]:hover {
    border:1px solid #666;
    background:#555;
    color:#fff
    }*/

    //This is the modal js code
    $(document).ready(function() {
        $(function() {
        $("#dialog").dialog({
        autoOpen: false
        });
        $("#submit").on("click", function() {
        $("#dialog").dialog("open");
        });
        });
        // Validating Form Fields.....
        $("#button").click(function(e) {
            e.preventDefault();
        //remember to keep varibale zipcode  
        var zipcode = $("#zipcode").val();
        console.log(zipcode);
    
        if (zipcode === "") {
        alert("Please add your zipcode.");
        }
        
        });
        });
        

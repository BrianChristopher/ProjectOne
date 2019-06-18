

var buildLoading = function(){
    //This line clears out the button.
    $("#build").val("");

    //This line builds the advertisement.
    $("#build").html( 
`<h3>Your results are loading...</h3><div class="progress"><div class="indeterminate"></div></div><p>Watch this ad while you wait so that we get paid.</p><img class="card-image" src="https://media1.giphy.com/media/l0HlOrRj8sqK1xiJa/giphy.gif?cid=25f59b1a5d091b716e4979787702fcac&rid=giphy.gif"></div>`)};

buildLoading();
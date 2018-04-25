jQuery.getJSON("http://www.omdbapi.com/?s=Sherlock&apikey=f171b7fb&plot=long", 
function(json) {
    console.log(json)
});


function parser() {
    var obj = jQuery.parse('{"title":}');
}
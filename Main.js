jQuery.getJSON("https://ghibliapi.herokuapp.com/films", function(json) {
    alert(json[0]);
});
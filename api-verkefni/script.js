function geoFindMe() {
  var output = $("#out");

  if (!navigator.geolocation){
    out.append("Error geolocation not supported");
    return;
  }

  function success(position) {
    var latitude  = position.coords.latitude;
    var longitude = position.coords.longitude;

    output.append('<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>');

    var img = new Image();
    img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=12&size=300x300&sensor=false";

    output.append(img);
  }

  function error() {
    output.append("Could not get position, please allow geolocation");
  }


  navigator.geolocation.getCurrentPosition(success, error);
}

$(".findme").click(function(){
  geoFindMe();
});

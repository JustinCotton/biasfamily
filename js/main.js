/*function initMap() {
  var mapDiv = document.getElementById('map');
  var map = new google.maps.Map(mapDiv, {
    center: {lat: 333.760618889424066, lng: -84.39505980380203},
    zoom: 16
  });
    var marker = new google.maps.Marker({
    position: {lat: 33.760618889424066, lng: -84.39505980380203},
    map: map,
    title: 'Bias Family Reunion'
  });
}*/

$('a').hover(
  function() {
    $('#attractions').text($(this).find('img').attr('alt'));
  }, 
  function() {
    $('attractions').text('Click on the below logos to learn about Atlanta\'s attractions!');
  }
);
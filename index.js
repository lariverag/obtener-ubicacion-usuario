function showUserCurrentPosition(map, marker) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        const coords = {
          lat: latitude,
          lng: longitude,
        };

        console.log(coords);
        map.setCenter(coords);
        map.setZoom(8);
        marker.setPosition(coords);
      },
      () => {
        alert("Geolocation is not supported by your browser.");
      }
    );
  } else {
    alert("Tu Navegador no dispone de geolocalizacion");
  }
}

function initMap() {
  const argCoords = { lat: -33.61, lng: -63.61 };

  const map = new google.maps.Map(mapDiv, {
    center: argCoords,
    zoom: 6,
  });
  const marker = new google.maps.Marker({
    position: argCoords,
    map,
  });

  button.addEventListener("click", () => {
    showUserCurrentPosition(map, marker);
  });
}

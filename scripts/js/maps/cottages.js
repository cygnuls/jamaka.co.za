// Initialize the map
function initMap() {
  const map = new google.maps.Map(document.getElementById("map-cottages"), {
    center: { lat: -32.340865, lng: 19.029189 },
    zoom: 16,
    minZoom: 10,
    mapTypeId: google.maps.MapTypeId.SATELLITE,
    panControl: true,
    zoomControl: true,
    scaleControl: true,
    streetViewControl: false,
    backgroundColor: "#F8F2EE",

    MapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
      position: google.maps.ControlPosition.RIGHT_TOP,
    },

    panControlOptions: {
      position: google.maps.ControlPosition.LEFT_TOP,
    },

    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.LARGE,
      position: google.maps.ControlPosition.LEFT_TOP,
    },
  });

  // Create custom marker icon
  const customIcon = {
    path: google.maps.SymbolPath.CIRCLE,
    fillColor: "white",
    fillOpacity: 0.3,
    scale: 11,
    strokeColor: "white",
    strokeWeight: 2,
  };

  // Define cottages
  const cottages = [
    {
      position: { lat: -32.337384, lng: 19.02465 },
      title: "Cottage 1",
      id: "1",
    },
    {
      position: { lat: -32.338051, lng: 19.023931 },
      title: "Cottage 2",
      id: "2",
    },
    {
      position: { lat: -32.338019, lng: 19.02325 },
      title: "Cottage 3",
      id: "3",
    },
    {
      position: { lat: -32.336632, lng: 19.020627 },
      title: "Cottage 4",
      id: "4",
    },
    {
      position: { lat: -32.344981, lng: 19.030894 },
      title: "Cottage 5",
      id: "5",
    },
    {
      position: { lat: -32.341201, lng: 19.029741 },
      title: "Cottage 6",
      id: "6",
    },
    {
      position: { lat: -32.340485, lng: 19.03002 },
      title: "Cottage 7",
      id: "7",
    },
    {
      position: { lat: -32.341722, lng: 19.029719 },
      title: "Cottage 8",
      id: "8",
    },
    {
      position: { lat: -32.340439, lng: 19.028915 },
      title: "Cottage 9",
      id: "9",
    },
    {
      position: { lat: -32.337419, lng: 19.022247 },
      title: "Cottage 10",
      id: "10",
    },
    {
      position: { lat: -32.337365, lng: 19.021477 },
      title: "Cottage 11",
      id: "11",
    },
    {
      position: { lat: -32.337792, lng: 19.021494 },
      title: "Cottage 12",
      id: "12",
    },
    {
      position: { lat: -32.341279, lng: 19.021646 },
      title: "Cottage 15",
      id: "15",
    },
    {
      position: { lat: -32.337762, lng: 19.020322 },
      title: "Log Cabin 1",
      id: "L1",
    },
  ];

  // Create markers for each cottage
  cottages.forEach((cottage) => {
    const marker = new google.maps.Marker({
      position: cottage.position,
      map: map,
      icon: { customIcon, labelOrigin: new google.maps.Point(0, -15) },
      label: {
        text: cottage.id,
        color: "white",
        fontSize: "14px",
        fontWeight: "bold",
      },
      title: cottage.title,
    });

    // Create info window content
    const content = `
    <div id="info-window" style="
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        font-family: Arial, sans-serif;
        font-size: 14px;
        max-width: 100px;
        text-align: center;
        margin: 0;
        padding: 0;
    ">
        <h1 style="
            width: 100%;
            font-family: Arial, sans-serif;
            font-size: 15px;
            text-transform: capitalize;
            letter-spacing: normal;
            font-weight: bold;
            margin: -3px 0 8px 0;
            padding: 0 0 5px 0;
            border-bottom: 1px solid #ccc;
        ">
            ${cottage.title}
        </h1>
        <a href="/stay/cottages/${cottage.id}" style="
            color: #0066cc;
            width: 100%;
            text-decoration: none;
            font-size: 12px;
            margin: 0 0 15px;
            padding: 0;
        ">
            View Details
        </a>
    </div>
`;

    // Create info window
    const infoWindow = new google.maps.InfoWindow({ content });

    // Add click event listener to open info window
    marker.addListener("click", () => {
      infoWindow.open(map, marker);
    });
  });
}

// Call initMap when the page loads
google.maps.event.addDomListener(window, "load", initMap);

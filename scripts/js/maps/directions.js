jQuery(function() {
    
    // declare variables
    var map,
        directionsDisplay,
        directionsService = new google.maps.DirectionsService(),
        domContainer = document.getElementById('map-directions'),
        CenterOfMap  = new google.maps.LatLng(-32.341164, 19.028404),
        mapOptions = {
        
        center: CenterOfMap,
        zoom: 8,
        minZoom: 6,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        panControl: true,
        zoomControl: true,
        scaleControl: true,
        streetViewControl: true,
        backgroundColor: '#F8F2EE',
        
        MapTypeControlOptions: {
            
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
            position: google.maps.ControlPosition.RIGHT_TOP
            
        },
        
        panControlOptions: {
            
            position: google.maps.ControlPosition.LEFT_CENTER
            
        },
        
        zoomControlOptions: {
            
            style: google.maps.ZoomControlStyle.LARGE,
            position: google.maps.ControlPosition.LEFT_CENTER
            
        },
        
        streetViewControlOptions: {
            
            position: google.maps.ControlPosition.LEFT_CENTER
            
        }
        
    };
    
    // custom controls
    
    // HomeControl adds a control to the map that returns the user to Jamaka.
    
    function HomeControl(controlDiv, map) {
    
        // CSS styles for the DIV containing the control
        // Padding to 5px will offset the control from the edge of the map
        
        controlDiv.style.padding = '8px';
        
        // Set CSS for the control border
        var controlUI = document.createElement('div');
        controlUI.style.backgroundColor = 'rgba(112, 101, 75, 0.6)';
        controlUI.style.cursor = 'pointer';
        controlUI.style.textAlign = 'center';
        controlUI.style.borderRadius = '4px';
        controlUI.title = 'Keer terug na Jamaka';
        controlDiv.appendChild(controlUI);
        
        // Set CSS for the control interior
        var controlText = document.createElement('div');
        controlText.style.fontFamily = "'Oxygen', 'FreeSans', 'Nimbus Sans L', 'Liberation Sans', 'Helvetica Neue LT Std', 'Helvetica', 'Arial', sans-serif";
        controlText.style.fontSize = '12px';
        controlText.style.color = 'white';
        controlText.style.textShadow = '0 0 3px #493F28';
        controlText.style.letterSpacing = '1px';
        controlText.style.paddingTop = '5px';
        controlText.style.paddingBottom = '7px';
        controlText.style.paddingLeft = '8px';
        controlText.style.paddingRight = '8px';
        controlText.innerHTML = '<strong>Go to Jamaka</strong>';
        controlUI.appendChild(controlText);
        
        // Click event listeners - set the map to Jamaka
        google.maps.event.addDomListener(controlUI, 'click', function() {
            
            map.setCenter(CenterOfMap)
            map.setZoom(16)
          
        });
    
    };
    
    // collect options for renderer and store in variable
    var rendererOptions = {
        draggable: true
    };
    
    // initialize directions renderer and store in variable
    directionsDisplay = new google.maps.DirectionsRenderer(rendererOptions);        
    
    // Create map through constructor
    map = new google.maps.Map(domContainer, mapOptions);
    
    // options for directions
    directionsDisplay.setMap(map);
    directionsDisplay.setPanel(document.getElementById('text-directions'));
    
    // select and position control box for directions
    var control = document.getElementById('control-directions');
    control.style.display = 'block';
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(control);
    
    // calculate route
    function calcRoute() {
        
        var start = document.getElementById('from').value,
            end = document.getElementById('to').value,
            request = {
                
                origin: start,
                destination: end,
                travelMode: google.maps.TravelMode.DRIVING
            
            };
        
        directionsService.route(request, function(response, status) {
            
            if (status == google.maps.DirectionsStatus.OK) {
            
                directionsDisplay.setDirections(response);
          
            }
        
        });
    };
    
    // detect location changes and activate route calculation
    $('#from, #to').change(function() {
    
        calcRoute();
         
    });
    
    // create DIV to hold the control
    var homeControlDiv = document.createElement('div');
    // call the HomeControl() constructor passing in the DIV
    var homeControl = new HomeControl(homeControlDiv, map);
    
    homeControlDiv.index = 1;
    map.controls[google.maps.ControlPosition.BOTTOM_CENTER].push(homeControlDiv);
    
    // markers
    
    var jamakaMarker = new google.maps.Marker({
        
        position: CenterOfMap,
        map: map,
        title: 'Jamaka Organic Farm & Resort',
        animation: google.maps.Animation.BOUNCE
        
    });
    
    // marker animation configurations
    
    setTimeout(function() {
        
        jamakaMarker.setAnimation(null)
        
    }, 4000);
    
    // information window
    
    InfoWindowOptions = {
        
        position: CenterOfMap,
        
        content: '<div id="info-window" style="text-align: center; overflow: hidden;">'+
            
            '<h1 style="font-family: sans-serif; font-size: 1.1em; text-transform: none; padding-bottom: 7px; border-bottom: 1px dotted #ccc; letter-spacing: -1px; color: #666;">Jamaka Organic Farm &amp; Resort</h1>'+
            
            '<p style="font-family: sans-serif; font-size: 1em; color: #666; padding-top: 3px;"><span style="font-weight: bold;">S</span> 32°20\'28.19\" <span style="font-weight: bold;">E</span> 19°1\'42.254\"</p>'+
            
        '</div>'
        
    };
    
    var infowindow = new google.maps.InfoWindow(InfoWindowOptions);
    
    google.maps.event.addListener(jamakaMarker, 'click', function() {
        
        infowindow.open(map, jamakaMarker);
        
    });

});
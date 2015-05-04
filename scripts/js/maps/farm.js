jQuery(function() {

    // declare variables
    var map,
        domContainer = document.getElementById('map-farm'),
        CenterOfMap  = new google.maps.LatLng(-32.340865, 19.029189),
        mapOptions = {
        
        center: CenterOfMap,
        zoom: 17,
        minZoom: 10,
        mapTypeId: google.maps.MapTypeId.HYBRID,
        panControl: true,
        zoomControl: true,
        scaleControl: true,
        streetViewControl: false,
        backgroundColor: '#F8F2EE',
        
        MapTypeControlOptions: {
            
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
            position: google.maps.ControlPosition.RIGHT_TOP
            
        },
        
        panControlOptions: {
            
            position: google.maps.ControlPosition.LEFT_TOP
            
        },
        
        zoomControlOptions: {
            
            style: google.maps.ZoomControlStyle.LARGE,
            position: google.maps.ControlPosition.LEFT_TOP
            
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
            map.setZoom(17)
          
        });
    
    };
    
    // Create map through constructor
    map = new google.maps.Map(domContainer, mapOptions);
    
    // create DIV to hold the control
    var homeControlDiv = document.createElement('div');
    // call the HomeControl() constructor passing in the DIV
    var homeControl = new HomeControl(homeControlDiv, map);
    
    homeControlDiv.index = 1;
    map.controls[google.maps.ControlPosition.BOTTOM_CENTER].push(homeControlDiv);
    
    // markers
    // dynamic styled markers
    
    // color classes
    var citrusStyle   = new StyledIcon(StyledIconTypes.CLASS,{color:"#FF8000"}),
        mangoStyle    = new StyledIcon(StyledIconTypes.CLASS,{color:"#CE433B"}),
        rooibosStyle  = new StyledIcon(StyledIconTypes.CLASS,{color:"#F4A460"}),
        nurseryStyle  = new StyledIcon(StyledIconTypes.CLASS,{color:"#548B54"}),
        campsiteStyle = new StyledIcon(StyledIconTypes.CLASS,{color:"#AB82FF"}),
        waterStyle    = new StyledIcon(StyledIconTypes.CLASS,{color:"#6CA6CD"});
    
    // -------------------------------------------------------------------------- office
    
    var officeMarker = new StyledMarker({
        
        styleIcon: new StyledIcon(StyledIconTypes.BUBBLE, {
            
            color: "f8f2ee",
            fore:  "222",
            text:  "Office"
            
        }),
        
        position: CenterOfMap,
        title: 'Office - Jamaka Organic Farm & Resort',
        map: map
        
    });
    
    // -------------------------------------------------------------------------- citrus
    
    var citrus_1 = new StyledMarker({
        
        styleIcon: new StyledIcon(StyledIconTypes.MARKER, {
            
            text:"C"
            
        }, citrusStyle),
    
        position: new google.maps.LatLng(-32.341627,19.027213),
        map: map,
        title: 'Citrus orchard (1)'
        
    });
    
    var citrus_2 = new StyledMarker({
        
        styleIcon: new StyledIcon(StyledIconTypes.MARKER, {
            
            text:"C"
            
        }, citrusStyle),
    
        position: new google.maps.LatLng(-32.343286,19.027707),
        map: map,
        title: 'Citrus orchard (2)'
        
    });
    
    var citrus_3 = new StyledMarker({
        
        styleIcon: new StyledIcon(StyledIconTypes.MARKER, {
            
            text:"C"
            
        }, citrusStyle),
    
        position: new google.maps.LatLng(-32.333432,19.024413),
        map: map,
        title: 'Citrus orchard (3)'
        
    });
    
    var citrus_4 = new StyledMarker({
        
        styleIcon: new StyledIcon(StyledIconTypes.MARKER, {
            
            text:"C"
            
        }, citrusStyle),
    
        position: new google.maps.LatLng(-32.34218,19.02952),
        map: map,
        title: 'Citrus orchard (4)'
        
    });
    
    var citrus_5 = new StyledMarker({
        
        styleIcon: new StyledIcon(StyledIconTypes.MARKER, {
            
            text:"C"
            
        }, citrusStyle),
    
        position: new google.maps.LatLng(-32.344056,19.029027),
        map: map,
        title: 'Citrus orchard (5)'
        
    });
    
    var citrus_6 = new StyledMarker({
        
        styleIcon: new StyledIcon(StyledIconTypes.MARKER, {
            
            text:"C"
            
        }, citrusStyle),
    
        position: new google.maps.LatLng(-32.333428,19.022456),
        map: map,
        title: 'Citrus orchard (6)'
        
    });
    
    var citrus_7 = new StyledMarker({
        
        styleIcon: new StyledIcon(StyledIconTypes.MARKER, {
            
            text:"C"
            
        }, citrusStyle),
    
        position: new google.maps.LatLng(-32.339419,19.023862),
        map: map,
        title: 'Citrus orchard (7)'
        
    });
    
    var citrus_7 = new StyledMarker({
        
        styleIcon: new StyledIcon(StyledIconTypes.MARKER, {
            
            text:"C"
            
        }, citrusStyle),
    
        position: new google.maps.LatLng(-32.338617,19.023223),
        map: map,
        title: 'Citrus orchard (8)'
        
    });
    
    // -------------------------------------------------------------------------- mangoes
    
    var mango_1 = new StyledMarker({
        
        styleIcon: new StyledIcon(StyledIconTypes.MARKER, {
            
            text:"M"
            
        }, mangoStyle),
    
        position: new google.maps.LatLng(-32.344128,19.03128),
        map: map,
        title: 'Mango orchard (1)'
        
    });
    
    var mango_2 = new StyledMarker({
        
        styleIcon: new StyledIcon(StyledIconTypes.MARKER, {
            
            text:"M"
            
        }, mangoStyle),
    
        position: new google.maps.LatLng(-32.34479,19.029981),
        map: map,
        title: 'Mango orchard (2)'
        
    });
    
    var mango_3 = new StyledMarker({
        
        styleIcon: new StyledIcon(StyledIconTypes.MARKER, {
            
            text:"M"
            
        }, mangoStyle),
    
        position: new google.maps.LatLng(-32.338518,19.024574),
        map: map,
        title: 'Mango orchard (3)'
        
    });
    
    var mango_5 = new StyledMarker({
        
        styleIcon: new StyledIcon(StyledIconTypes.MARKER, {
            
            text:"M"
            
        }, mangoStyle),
    
        position: new google.maps.LatLng(-32.338989,19.021999),
        map: map,
        title: 'Mango orchard (5)'
        
    });
    
    var mango_6 = new StyledMarker({
        
        styleIcon: new StyledIcon(StyledIconTypes.MARKER, {
            
            text:"M"
            
        }, mangoStyle),
    
        position: new google.maps.LatLng(-32.337838,19.024445),
        map: map,
        title: 'Mango orchard (6)'
        
    });
    
    var mango_8 = new StyledMarker({
        
        styleIcon: new StyledIcon(StyledIconTypes.MARKER, {
            
            text:"M"
            
        }, mangoStyle),
    
        position: new google.maps.LatLng(-32.336727,19.024291),
        map: map,
        title: 'Mango orchard (8)'
        
    });
    
    var mango_9 = new StyledMarker({
        
        styleIcon: new StyledIcon(StyledIconTypes.MARKER, {
            
            text:"M"
            
        }, mangoStyle),
    
        position: new google.maps.LatLng(-32.335263,19.02398),
        map: map,
        title: 'Mango orchard (9)'
        
    });
    
    // -------------------------------------------------------------------------- rooibos
    
    var rooibos_1 = new StyledMarker({
        
        styleIcon: new StyledIcon(StyledIconTypes.MARKER, {
            
            text:"R"
            
        }, rooibosStyle),
    
        position: new google.maps.LatLng(-32.338373,19.017085),
        map: map,
        title: 'Rooibos (Aspalathus linearis)'
        
    });
    
    var rooibos_2 = new StyledMarker({
        
        styleIcon: new StyledIcon(StyledIconTypes.MARKER, {
            
            text:"R"
            
        }, rooibosStyle),
    
        position: new google.maps.LatLng(-32.344917,19.022353),
        map: map,
        title: 'Rooibos (Aspalathus linearis)'
        
    });
    
    var rooibos_3 = new StyledMarker({
        
        styleIcon: new StyledIcon(StyledIconTypes.MARKER, {
            
            text:"R"
            
        }, rooibosStyle),
    
        position: new google.maps.LatLng(-32.342035,19.017343),
        map: map,
        title: 'Rooibos (Aspalathus linearis)'
        
    });
    
    // -------------------------------------------------------------------------- nursery
    
    var nursery_1 = new StyledMarker({
        
        styleIcon: new StyledIcon(StyledIconTypes.MARKER, {
            
            text:"N"
            
        }, nurseryStyle),
    
        position: new google.maps.LatLng(-32.337548,19.025186),
        map: map,
        title: 'Nursery - Citrus'
        
    });
    
    var nursery_2 = new StyledMarker({
        
        styleIcon: new StyledIcon(StyledIconTypes.MARKER, {
            
            text:"N"
            
        }, nurseryStyle),
    
        position: new google.maps.LatLng(-32.337258,19.025593),
        map: map,
        title: 'Nursery - Mango'
        
    }); 
    
    // -------------------------------------------------------------------------- campsites
    
    var campsite_1 = new StyledMarker({
        
        styleIcon: new StyledIcon(StyledIconTypes.MARKER, {
            
            text: "C"
            
        }, campsiteStyle),
    
        position: new google.maps.LatLng(-32.339406,19.019671),
        map: map,
        title: 'Camping grounds - original'
        
    });
    
    var campsite_2 = new StyledMarker({
        
        styleIcon: new StyledIcon(StyledIconTypes.MARKER, {
            
            text: "C"
            
        }, campsiteStyle),
    
        position: new google.maps.LatLng(-32.342995,19.022933),
        map: map,
        title: 'Camping grounds - Krip se Vlei'
        
    });
    
    // -------------------------------------------------------------------------- water
    
    var water_1 = new StyledMarker({
        
        styleIcon: new StyledIcon(StyledIconTypes.MARKER, {
            
            text:"W"
            
        }, waterStyle),
    
        position: new google.maps.LatLng(-32.340122,19.029301),
        map: map,
        title: 'Dam 1'
        
    });
    
    var water_2 = new StyledMarker({
        
        styleIcon: new StyledIcon(StyledIconTypes.MARKER, {
            
            text:"W"
            
        }, waterStyle),
    
        position: new google.maps.LatLng(-32.343983,19.032224),
        map: map,
        title: 'Dam 2'
        
    });
    
    var water_3 = new StyledMarker({
        
        styleIcon: new StyledIcon(StyledIconTypes.MARKER, {
            
            text:"W"
            
        }, waterStyle),
    
        position: new google.maps.LatLng(-32.338545,19.033737),
        map: map,
        title: 'Waterfall'
        
    });
    
    var water_4 = new StyledMarker({
        
        styleIcon: new StyledIcon(StyledIconTypes.MARKER, {
            
            text:"W"
            
        }, waterStyle),
    
        position: new google.maps.LatLng(-32.341273,19.021066),
        map: map,
        title: 'Rondegatrivier'
            
    });

});
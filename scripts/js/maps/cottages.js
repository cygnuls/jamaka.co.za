jQuery(function() {

    // declare variables
    var map,
        domContainer = document.getElementById('map-cottages'),
        CenterOfMap  = new google.maps.LatLng(-32.340865, 19.029189),
        mapOptions = {

            center: CenterOfMap,
            zoom: 16,
            minZoom: 10,
            mapTypeId: google.maps.MapTypeId.SATELLITE,
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
        controlUI.style.backgroundColor = 'rgba(29, 56, 36, 0.8)';
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
        controlText.style.textShadow = '0 0 3px #132618';
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

    // create map through constructor
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
    var cottageStyle   = new StyledIcon(StyledIconTypes.CLASS,{color:"#E8D0BE"});

    // -------------------------------------------------------------------------- cottages

    // positions

    var LatLngHouse1  = new google.maps.LatLng(-32.337384,19.02465),
        LatLngHouse2  = new google.maps.LatLng(-32.338051,19.023931),
        LatLngHouse3  = new google.maps.LatLng(-32.338019,19.02325),
        LatLngHouse4  = new google.maps.LatLng(-32.336632,19.020627),
        LatLngHouse5  = new google.maps.LatLng(-32.344981,19.030894),
        LatLngHouse6  = new google.maps.LatLng(-32.341201,19.029741),
        LatLngHouse7  = new google.maps.LatLng(-32.340485,19.03002),
        LatLngHouse8  = new google.maps.LatLng(-32.341722,19.029719),
        LatLngHouse9  = new google.maps.LatLng(-32.340439,19.028915),
        LatLngHouse10 = new google.maps.LatLng(-32.337419,19.022247),
        LatLngHouse11 = new google.maps.LatLng(-32.337365,19.021477),
        LatLngHouse12 = new google.maps.LatLng(-32.337792,19.021494);

    // options

    var house1 = new StyledMarker({

        styleIcon: new StyledIcon(StyledIconTypes.MARKER, {

            text:"1"

        }, cottageStyle),

        position: LatLngHouse1,
        map: map,
        title: 'House 1'

    });

    var house2 = new StyledMarker({

        styleIcon: new StyledIcon(StyledIconTypes.MARKER, {

            text:"2"

        }, cottageStyle),

        position: LatLngHouse2,
        map: map,
        title: 'House 2'

    });

    var house3 = new StyledMarker({

        styleIcon: new StyledIcon(StyledIconTypes.MARKER, {

            text:"3"

        }, cottageStyle),

        position: LatLngHouse3,
        map: map,
        title: 'House 3'

    });

    var house4 = new StyledMarker({

        styleIcon: new StyledIcon(StyledIconTypes.MARKER, {

            text:"4"

        }, cottageStyle),

        position: LatLngHouse4,
        map: map,
        title: 'House 4'

    });

    var house5 = new StyledMarker({

        styleIcon: new StyledIcon(StyledIconTypes.MARKER, {

            text:"5"

        }, cottageStyle),

        position: LatLngHouse5,
        map: map,
        title: 'House 5'

    });

    var house6 = new StyledMarker({

        styleIcon: new StyledIcon(StyledIconTypes.MARKER, {

            text:"6"

        }, cottageStyle),

        position: LatLngHouse6,
        map: map,
        title: 'House 6'

    });

    var house7 = new StyledMarker({

        styleIcon: new StyledIcon(StyledIconTypes.MARKER, {

            text:"7"

        }, cottageStyle),

        position: LatLngHouse7,
        map: map,
        title: 'House 7'

    });

    var house8 = new StyledMarker({

        styleIcon: new StyledIcon(StyledIconTypes.MARKER, {

            text:"8"

        }, cottageStyle),

        position: LatLngHouse8,
        map: map,
        title: 'House 8'

    });

    var house9 = new StyledMarker({

        styleIcon: new StyledIcon(StyledIconTypes.MARKER, {

            text:"9"

        }, cottageStyle),

        position: LatLngHouse9,
        map: map,
        title: 'House 9'

    });

    var house10 = new StyledMarker({

        styleIcon: new StyledIcon(StyledIconTypes.MARKER, {

            text:"10"

        }, cottageStyle),

        position: LatLngHouse10,
        map: map,
        title: 'House 10'

    });

    var house11 = new StyledMarker({

        styleIcon: new StyledIcon(StyledIconTypes.MARKER, {

            text:"11"

        }, cottageStyle),

        position: LatLngHouse11,
        map: map,
        title: 'House 11'

    });

    var house12 = new StyledMarker({

        styleIcon: new StyledIcon(StyledIconTypes.MARKER, {

            text:"12"

        }, cottageStyle),

        position: LatLngHouse12,
        map: map,
        title: 'House 12'

    });

    // information windows

    WindowOptionsHouse1 = {

        position: LatLngHouse1,

        content:

        '<div id="info-window" style="overflow: hidden; text-align: center;">'+

            '<h1 style="font-family: sans-serif; font-size: 1.2em; font-weight: bold; text-transform: none; margin: 0 0 4px 0; padding: 2px 0 6px 0; letter-spacing: normal; color: #665751; border-bottom: 1px dotted #82736D">'+

                'Cottage 1'+

            '</h1>'+

            '<a href="stay/cottages/1" style="font-size: 1.05em; line-height: 1.2; padding: 0 0 5px 0;">'+

                'View Details'+

            '</a>'+

        '</div>'

    };

    var InfoWindowHouse1 = new google.maps.InfoWindow(WindowOptionsHouse1);

    google.maps.event.addListener(house1, 'click', function() {

        InfoWindowHouse1.open(map, house1);

    });

    WindowOptionsHouse2 = {

        position: LatLngHouse2,

        content:

        '<div id="info-window" style="overflow: hidden; text-align: center;">'+

            '<h1 style="font-family: sans-serif; font-size: 1.2em; font-weight: bold; text-transform: none; margin: 0 0 4px 0; padding: 2px 0 6px 0; letter-spacing: normal; color: #665751; border-bottom: 1px dotted #82736D">'+

                'Cottage 2'+

            '</h1>'+

            '<a href="stay/cottages/2" style="font-size: 1.05em; line-height: 1.2; padding: 0 0 5px 0;">'+

                'View Details'+

            '</a>'+

        '</div>'

    };

    var InfoWindowHouse2 = new google.maps.InfoWindow(WindowOptionsHouse2);

    google.maps.event.addListener(house2, 'click', function() {

        InfoWindowHouse2.open(map, house2);

    });

    WindowOptionsHouse3 = {

        position: LatLngHouse3,

        content:

        '<div id="info-window" style="overflow: hidden; text-align: center;">'+

            '<h1 style="font-family: sans-serif; font-size: 1.3em; font-weight: bold; text-transform: none; margin: 0 0 4px 0; padding: 3px 0 6px 0; letter-spacing: normal; color: #665751; border-bottom: 1px dotted #83736D">'+

                'Cottage 3'+

            '</h1>'+

            '<a href="stay/cottages/3" style="font-size: 1.05em; line-height: 1.3; padding: 0 0 5px 0;">'+

                'View Details'+

            '</a>'+

        '</div>'

    };

    var InfoWindowHouse3 = new google.maps.InfoWindow(WindowOptionsHouse3);

    google.maps.event.addListener(house3, 'click', function() {

        InfoWindowHouse3.open(map, house3);

    });

    WindowOptionsHouse4 = {

        position: LatLngHouse4,

        content:

        '<div id="info-window" style="overflow: hidden; text-align: center;">'+

            '<h1 style="font-family: sans-serif; font-size: 1.3em; font-weight: bold; text-transform: none; margin: 0 0 4px 0; padding: 3px 0 6px 0; letter-spacing: normal; color: #665751; border-bottom: 1px dotted #83736D">'+

                'Cottage 4'+

            '</h1>'+

            '<a href="stay/cottages/4" style="font-size: 1.05em; line-height: 1.3; padding: 0 0 5px 0;">'+

                'View Details'+

            '</a>'+

        '</div>'

    };

    var InfoWindowHouse4 = new google.maps.InfoWindow(WindowOptionsHouse4);

    google.maps.event.addListener(house4, 'click', function() {

        InfoWindowHouse4.open(map, house4);

    });

    WindowOptionsHouse5 = {

        position: LatLngHouse5,

        content:

        '<div id="info-window" style="overflow: hidden; text-align: center;">'+

            '<h1 style="font-family: sans-serif; font-size: 1.3em; font-weight: bold; text-transform: none; margin: 0 0 4px 0; padding: 3px 0 6px 0; letter-spacing: normal; color: #665751; border-bottom: 1px dotted #83736D">'+

                'Cottage 5'+

            '</h1>'+

            '<a href="stay/cottages/5" style="font-size: 1.05em; line-height: 1.3; padding: 0 0 5px 0;">'+

                'View Details'+

            '</a>'+

        '</div>'

    };

    var InfoWindowHouse5 = new google.maps.InfoWindow(WindowOptionsHouse5);

    google.maps.event.addListener(house5, 'click', function() {

        InfoWindowHouse5.open(map, house5);

    });

    WindowOptionsHouse6 = {

        position: LatLngHouse6,

        content:

        '<div id="info-window" style="overflow: hidden; text-align: center;">'+

            '<h1 style="font-family: sans-serif; font-size: 1.3em; font-weight: bold; text-transform: none; margin: 0 0 4px 0; padding: 3px 0 6px 0; letter-spacing: normal; color: #665751; border-bottom: 1px dotted #83736D">'+

                'Cottage 6'+

            '</h1>'+

            '<a href="stay/cottages/6" style="font-size: 1.05em; line-height: 1.3; padding: 0 0 5px 0;">'+

                'View Details'+

            '</a>'+

        '</div>'

    };

    var InfoWindowHouse6 = new google.maps.InfoWindow(WindowOptionsHouse6);

    google.maps.event.addListener(house6, 'click', function() {

        InfoWindowHouse6.open(map, house6);

    });

    WindowOptionsHouse7 = {

        position: LatLngHouse7,

        content:

        '<div id="info-window" style="overflow: hidden; text-align: center;">'+

            '<h1 style="font-family: sans-serif; font-size: 1.3em; font-weight: bold; text-transform: none; margin: 0 0 4px 0; padding: 3px 0 6px 0; letter-spacing: normal; color: #665751; border-bottom: 1px dotted #83736D">'+

                'Cottage 7'+

            '</h1>'+

            '<a href="stay/cottages/7" style="font-size: 1.05em; line-height: 1.3; padding: 0 0 5px 0;">'+

                'View Details'+

            '</a>'+

        '</div>'

    };

    var InfoWindowHouse7 = new google.maps.InfoWindow(WindowOptionsHouse7);

    google.maps.event.addListener(house7, 'click', function() {

        InfoWindowHouse7.open(map, house7);

    });

    WindowOptionsHouse8 = {

        position: LatLngHouse8,

        content:

        '<div id="info-window" style="overflow: hidden; text-align: center;">'+

            '<h1 style="font-family: sans-serif; font-size: 1.3em; font-weight: bold; text-transform: none; margin: 0 0 4px 0; padding: 3px 0 6px 0; letter-spacing: normal; color: #665751; border-bottom: 1px dotted #83736D">'+

                'Cottage 8'+

            '</h1>'+

            '<a href="maps/cottages" style="font-size: 1.05em; line-height: 1.3; padding: 0 0 5px 0;">'+

                'View Details'+

            '</a>'+

        '</div>'

    };

    var InfoWindowHouse8 = new google.maps.InfoWindow(WindowOptionsHouse8);

    google.maps.event.addListener(house8, 'click', function() {

        InfoWindowHouse8.open(map, house8);

    });

    WindowOptionsHouse9 = {

        position: LatLngHouse9,

        content:

        '<div id="info-window" style="overflow: hidden; text-align: center;">'+

            '<h1 style="font-family: sans-serif; font-size: 1.3em; font-weight: bold; text-transform: none; margin: 0 0 4px 0; padding: 3px 0 6px 0; letter-spacing: normal; color: #665751; border-bottom: 1px dotted #83736D">'+

                'Cottage 9'+

            '</h1>'+

            '<a href="stay/cottages/9" style="font-size: 1.05em; line-height: 1.3; padding: 0 0 5px 0;">'+

                'View Details'+

            '</a>'+

        '</div>'

    };

    var InfoWindowHouse9 = new google.maps.InfoWindow(WindowOptionsHouse9);

    google.maps.event.addListener(house9, 'click', function() {

        InfoWindowHouse9.open(map, house9);

    });

    WindowOptionsHouse10 = {

        position: LatLngHouse10,

        content:

        '<div id="info-window" style="overflow: hidden; text-align: center;">'+

            '<h1 style="font-family: sans-serif; font-size: 1.3em; font-weight: bold; text-transform: none; margin: 0 0 4px 0; padding: 3px 0 6px 0; letter-spacing: normal; color: #665751; border-bottom: 1px dotted #83736D">'+

                'Cottage 10'+

            '</h1>'+

            '<a href="stay/cottages/10" style="font-size: 1.05em; line-height: 1.3; padding: 0 0 5px 0;">'+

                'View Details'+

            '</a>'+

        '</div>'

    };

    var InfoWindowHouse10 = new google.maps.InfoWindow(WindowOptionsHouse10);

    google.maps.event.addListener(house10, 'click', function() {

        InfoWindowHouse10.open(map, house10);

    });

    WindowOptionsHouse11 = {

        position: LatLngHouse11,

        content:

        '<div id="info-window" style="overflow: hidden; text-align: center;">'+

            '<h1 style="font-family: sans-serif; font-size: 1.3em; font-weight: bold; text-transform: none; margin: 0 0 4px 0; padding: 3px 0 6px 0; letter-spacing: normal; color: #665751; border-bottom: 1px dotted #83736D">'+

                'Cottage 11'+

            '</h1>'+

            '<a href="stay/cottages/11" style="font-size: 1.05em; line-height: 1.3; padding: 0 0 5px 0;">'+

                'View Details'+

            '</a>'+

        '</div>'

    };

    var InfoWindowHouse11 = new google.maps.InfoWindow(WindowOptionsHouse11);

    google.maps.event.addListener(house11, 'click', function() {

        InfoWindowHouse11.open(map, house11);

    });

    WindowOptionsHouse12 = {

        position: LatLngHouse12,

        content:

        '<div id="info-window" style="overflow: hidden; text-align: center;">'+

            '<h1 style="font-family: sans-serif; font-size: 1.3em; font-weight: bold; text-transform: none; margin: 0 0 4px 0; padding: 3px 0 6px 0; letter-spacing: normal; color: #665751; border-bottom: 1px dotted #83736D">'+

                'Cottage 12'+

            '</h1>'+

            '<a href="stay/cottages/12" style="font-size: 1.05em; line-height: 1.3; padding: 0 0 5px 0;">'+

                'View Details'+

            '</a>'+

        '</div>'

    };

    var InfoWindowHouse12 = new google.maps.InfoWindow(WindowOptionsHouse12);

    google.maps.event.addListener(house12, 'click', function() {

        InfoWindowHouse12.open(map, house12);

    });

});

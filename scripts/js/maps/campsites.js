jQuery(function() {

    // declare variables
    var map,
        domContainer = document.getElementById('map-campsites'),
        CenterOfMap  = new google.maps.LatLng(-32.33728,19.020483),
        mapOptions = {
        
            center: CenterOfMap,
            zoom: 18,
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
        controlText.style.letterSpacing = 'normal';
        controlText.style.paddingTop = '5px';
        controlText.style.paddingBottom = '7px';
        controlText.style.paddingLeft = '8px';
        controlText.style.paddingRight = '8px';
        controlText.innerHTML = '<strong>View Campsites</strong>';
        controlUI.appendChild(controlText);
        
        // Click event listeners - set the map to Jamaka
        google.maps.event.addDomListener(controlUI, 'click', function() {
            
            var zoomCenter = new google.maps.LatLng(-32.33927,19.022108)
            map.setCenter(zoomCenter)
            map.setZoom(17)
          
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
    
    // -------------------------------------------------------------------------- polylines
    
    // from office to entrance
    
    var officeToEntrance = new google.maps.Polyline({
        
        path: [
    
            new google.maps.LatLng(-32.341074,19.029226),
            new google.maps.LatLng(-32.341167,19.0291),
            new google.maps.LatLng(-32.341108,19.02862),
            new google.maps.LatLng(-32.341169,19.028298),
            new google.maps.LatLng(-32.340412,19.027885),
            new google.maps.LatLng(-32.339075,19.027075),
            new google.maps.LatLng(-32.33651,19.025573),
            new google.maps.LatLng(-32.336544,19.025493),
            new google.maps.LatLng(-32.33658,19.02545)
                       
        ],
        
        strokeColor: '#FF2E00',
        strokeOpacity: 0.7,
        strokeWeight: 5
        
    });
    
    officeToEntrance.setMap(map);
    
    // old campsite
    var roadToCampsite_1 = new google.maps.Polyline({
        
        path: [
    
            new google.maps.LatLng(-32.336596,19.025423),
            new google.maps.LatLng(-32.336634,19.025402),
            new google.maps.LatLng(-32.336686,19.025343),
            new google.maps.LatLng(-32.336759,19.025225),
            new google.maps.LatLng(-32.336845,19.024959),
            new google.maps.LatLng(-32.33692,19.024771),
            new google.maps.LatLng(-32.336924,19.024514),
            new google.maps.LatLng(-32.336977,19.023865),
            new google.maps.LatLng(-32.337017,19.023715),
            new google.maps.LatLng(-32.337056,19.023433),
            new google.maps.LatLng(-32.337137,19.023183),
            new google.maps.LatLng(-32.337201,19.022931),
            new google.maps.LatLng(-32.337205,19.022843),
            new google.maps.LatLng(-32.337176,19.022752),
            new google.maps.LatLng(-32.336847,19.021968),
            new google.maps.LatLng(-32.336788,19.021464),
            new google.maps.LatLng(-32.336766,19.021389),
            new google.maps.LatLng(-32.336732,19.021338),
            new google.maps.LatLng(-32.336575,19.021191),
            new google.maps.LatLng(-32.336473,19.021056),
            new google.maps.LatLng(-32.336387,19.020922),
            new google.maps.LatLng(-32.336342,19.020775),
            new google.maps.LatLng(-32.33631,19.0207),
            new google.maps.LatLng(-32.336233,19.020614),
            new google.maps.LatLng(-32.336229,19.02056),
            new google.maps.LatLng(-32.336245,19.020517),
            new google.maps.LatLng(-32.336322,19.020477),
            new google.maps.LatLng(-32.336444,19.020391),
            new google.maps.LatLng(-32.336487,19.02034),
            new google.maps.LatLng(-32.336539,19.020281),
            new google.maps.LatLng(-32.336603,19.020246)
                       
        ],
        
        strokeColor: '#00BFFF',
        strokeOpacity: 0.7,
        strokeWeight: 5
        
    });
    
    roadToCampsite_1.setMap(map);
    
    // krip se vlei
    var roadToCampsite_2 = new google.maps.Polyline({
        
        path: [
    
            new google.maps.LatLng(-32.336607,19.025445),
            new google.maps.LatLng(-32.336682,19.025399),
            new google.maps.LatLng(-32.336947,19.025219),
            new google.maps.LatLng(-32.337208,19.024994),
            new google.maps.LatLng(-32.33745,19.024932),
            new google.maps.LatLng(-32.337516,19.024849),
            new google.maps.LatLng(-32.337611,19.024595),
            new google.maps.LatLng(-32.337661,19.024256),
            new google.maps.LatLng(-32.337681,19.023862),
            new google.maps.LatLng(-32.337783,19.02365),
            new google.maps.LatLng(-32.337876,19.02358),
            new google.maps.LatLng(-32.338039,19.023562),
            new google.maps.LatLng(-32.338223,19.023629),
            new google.maps.LatLng(-32.338309,19.023803),
            new google.maps.LatLng(-32.338846,19.023835),
            new google.maps.LatLng(-32.338989,19.023851),
            new google.maps.LatLng(-32.339705,19.02387),
            new google.maps.LatLng(-32.339918,19.023873),
            new google.maps.LatLng(-32.339988,19.0239),
            new google.maps.LatLng(-32.340265,19.024109),
            new google.maps.LatLng(-32.340408,19.02412),
            new google.maps.LatLng(-32.340435,19.024066),
            new google.maps.LatLng(-32.3405,19.023908),
            new google.maps.LatLng(-32.34099,19.023417),
            new google.maps.LatLng(-32.341214,19.023248),
            new google.maps.LatLng(-32.341266,19.023122),
            new google.maps.LatLng(-32.341269,19.023031),
            new google.maps.LatLng(-32.341246,19.022856),
            new google.maps.LatLng(-32.341332,19.022569),
            new google.maps.LatLng(-32.341387,19.022462),
            new google.maps.LatLng(-32.341359,19.022263),
            new google.maps.LatLng(-32.341402,19.022116),
            new google.maps.LatLng(-32.341473,19.022057),
            new google.maps.LatLng(-32.341545,19.022036),
            new google.maps.LatLng(-32.341645,19.022043),
            new google.maps.LatLng(-32.341998,19.022242),
            new google.maps.LatLng(-32.342028,19.022314),
            new google.maps.LatLng(-32.342103,19.022655),
            new google.maps.LatLng(-32.342318,19.022896)
                       
        ],
        
        strokeColor: '#62B200',
        strokeOpacity: 0.7,
        strokeWeight: 5
        
    });
    
    roadToCampsite_2.setMap(map);
    
    // -------------------------------------------------------------------------- markers
    
    // dynamically styled markers
    
    // color classes
    var siteStyle      = new StyledIcon(StyledIconTypes.CLASS,{color:"DDB999"}),
        siteStyleRiver = new StyledIcon(StyledIconTypes.CLASS,{color:"97B9C9"}),
        caravanStyle   = new StyledIcon(StyledIconTypes.CLASS,{color:"C67171"}),
        ablutionStyle  = new StyledIcon(StyledIconTypes.CLASS,{color:"8FBC8F"}),
        poolStyle      = new StyledIcon(StyledIconTypes.CLASS,{color:"ffffff", fore:"104E8B"});
    
    // positions
    
    // campsites
    
    var LatLngSite1   = new google.maps.LatLng(-32.336453,19.020131),
    
        LatLngSite2   = new google.maps.LatLng(-32.336881,19.020372),
        LatLngSite2A  = new google.maps.LatLng(-32.337069,19.02008),
        
        LatLngSite3   = new google.maps.LatLng(-32.337246,19.020091),
        LatLngSite3A  = new google.maps.LatLng(-32.337033,19.020391),
        
        LatLngSite4   = new google.maps.LatLng(-32.337307,19.020437),
        LatLngSite4A  = new google.maps.LatLng(-32.337464,19.020415),
        
        LatLngSite5   = new google.maps.LatLng(-32.33806,19.019941),
        LatLngSite6   = new google.maps.LatLng(-32.338132,19.019841),
        LatLngSite7   = new google.maps.LatLng(-32.338391,19.019876),
        LatLngSite8   = new google.maps.LatLng(-32.338701,19.020008),
        
        LatLngSite9   = new google.maps.LatLng(-32.33891,19.020112),
        LatLngSite9A  = new google.maps.LatLng(-32.339009,19.020214),
        
        LatLngSite10  = new google.maps.LatLng(-32.338799,19.019592),
        LatLngSite10A = new google.maps.LatLng(-32.338962,19.019501),
        
        LatLngSite11  = new google.maps.LatLng(-32.338955,19.019734),
        LatLngSite11A = new google.maps.LatLng(-32.339046,19.019815),
        LatLngSite11B = new google.maps.LatLng(-32.339193,19.019798),
        LatLngSite11C = new google.maps.LatLng(-32.339313,19.019844),
        
        LatLngSite12  = new google.maps.LatLng(-32.339612,19.019954),
        LatLngSite12A = new google.maps.LatLng(-32.339705,19.020005),
        LatLngSite12B = new google.maps.LatLng(-32.33978,19.020174),
        LatLngSite12C = new google.maps.LatLng(-32.339943,19.020308),
        LatLngSite12D = new google.maps.LatLng(-32.340006,19.020018),
        LatLngSite12E = new google.maps.LatLng(-32.340145,19.019973),
        
        LatLngSite13  = new google.maps.LatLng(-32.340206,19.02019),
        LatLngSite13C = new google.maps.LatLng(-32.340199,19.020346),
        
        LatLngSite14  = new google.maps.LatLng(-32.340269,19.020466),
        LatLngSite14A = new google.maps.LatLng(-32.340344,19.020579),
        
        LatLngSite15  = new google.maps.LatLng(-32.340541,19.020469),
        LatLngSite15A = new google.maps.LatLng(-32.340426,19.020619),
        LatLngSite15B = new google.maps.LatLng(-32.340534,19.020263),
        LatLngSite15C = new google.maps.LatLng(-32.340403,19.020228),
        
        LatLngSite16  = new google.maps.LatLng(-32.340775,19.020431),
        
        LatLngSite17  = new google.maps.LatLng(-32.340945,19.020686),
        LatLngSite17A = new google.maps.LatLng(-32.341103,19.020772),
        LatLngSite17B = new google.maps.LatLng(-32.34111,19.020917),
        LatLngSite17C = new google.maps.LatLng(-32.341341,19.021142),
        LatLngSite17D = new google.maps.LatLng(-32.341221,19.020901),
        LatLngSite17E = new google.maps.LatLng(-32.341425,19.020568),
        
        LatLngSite18  = new google.maps.LatLng(-32.341217,19.020367),
        LatLngSite19  = new google.maps.LatLng(-32.340954,19.020144),
        LatLngSite20  = new google.maps.LatLng(-32.339975,19.019541),
        LatLngSite21  = new google.maps.LatLng(-32.339816,19.019447),
        LatLngSite22  = new google.maps.LatLng(-32.339315,19.019402),
        LatLngSite23  = new google.maps.LatLng(-32.339141,19.019399),
        LatLngSite24  = new google.maps.LatLng(-32.339447,19.0199),
        LatLngSite25  = new google.maps.LatLng(-32.335988,19.02022),
        LatLngSite26  = new google.maps.LatLng(-32.335687,19.020402),
        LatLngSite27  = new google.maps.LatLng(-32.336337,19.020209),
        LatLngSite28  = new google.maps.LatLng(-32.336113,19.020032),
        
        LatLngSite30  = new google.maps.LatLng(-32.342635,19.022301),
        LatLngSite30A = new google.maps.LatLng(-32.342637,19.022156),
        LatLngSite31  = new google.maps.LatLng(-32.342665,19.022459),
        LatLngSite32  = new google.maps.LatLng(-32.342671,19.022931),
        LatLngSite33  = new google.maps.LatLng(-32.342461,19.023132),
        LatLngSite34  = new google.maps.LatLng(-32.342517,19.023229),
        LatLngSite35  = new google.maps.LatLng(-32.342624,19.023304),
        LatLngSite36  = new google.maps.LatLng(-32.34269,19.023355),
        LatLngSite37  = new google.maps.LatLng(-32.342733,19.023444),
        LatLngSite38  = new google.maps.LatLng(-32.34278,19.023562),
        LatLngSite39  = new google.maps.LatLng(-32.342814,19.023669),
        LatLngSite40  = new google.maps.LatLng(-32.342846,19.023843),
        LatLngSite41  = new google.maps.LatLng(-32.342907,19.023765),
        LatLngSite42  = new google.maps.LatLng(-32.342986,19.024071),
        LatLngSite43  = new google.maps.LatLng(-32.343041,19.024229),
        LatLngSite44  = new google.maps.LatLng(-32.343102,19.024366),
        LatLngSite45  = new google.maps.LatLng(-32.343229,19.024508),
        LatLngSite46  = new google.maps.LatLng(-32.343351,19.024613),
        LatLngSite47  = new google.maps.LatLng(-32.343406,19.024761),
        LatLngSite47A = new google.maps.LatLng(-32.343508,19.024852),
        LatLngSite48  = new google.maps.LatLng(-32.343852,19.024859),
        LatLngSite49  = new google.maps.LatLng(-32.343725,19.024538),
        LatLngSite49A = new google.maps.LatLng(-32.343494,19.024328),
        LatLngSite50  = new google.maps.LatLng(-32.343512,19.024076),
        LatLngSite52  = new google.maps.LatLng(-32.343376,19.023245),
        LatLngSite54  = new google.maps.LatLng(-32.34348,19.023921),
        LatLngSite68  = new google.maps.LatLng(-32.344876,19.025895);
    
    // caravans
    
    var LatLngCaravan1 = new google.maps.LatLng(-32.337677,19.020349),
        LatLngCaravan2 = new google.maps.LatLng(-32.33781,19.02033),
        LatLngCaravan3 = new google.maps.LatLng(-32.337792,19.020115),
        LatLngCaravan4 = new google.maps.LatLng(-32.338948,19.0199),
        LatLngCaravan5 = new google.maps.LatLng(-32.340557,19.020091);
        
    // ablution
    
    var LatLngAblutionA = new google.maps.LatLng(-32.336797,19.020359),
        LatLngAblutionB = new google.maps.LatLng(-32.338017,19.02048),
        LatLngAblutionC = new google.maps.LatLng(-32.340405,19.019844),
        LatLngAblutionD = new google.maps.LatLng(-32.343222,19.022577),
        LatLngAblutionE = new google.maps.LatLng(-32.343508,19.023637);
        
    // pools
    
    var LatLngPool1 = new google.maps.LatLng(-32.337647,19.019831),
        LatLngPool2 = new google.maps.LatLng(-32.342225,19.022913);
        
    // options
    
    //campsites
    var site1   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"1"   }, siteStyleRiver ), position: LatLngSite1,   map: map, title: 'Campsite 1'   }),
        site2   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"2"   }, siteStyle      ), position: LatLngSite2,   map: map, title: 'Campsite 2'   }),
        site2A  = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"2A"  }, siteStyleRiver ), position: LatLngSite2A,  map: map, title: 'Campsite 2A'  }),
        site3   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"3"   }, siteStyleRiver ), position: LatLngSite3,   map: map, title: 'Campsite 3'   }),
        site3A  = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"3A"  }, siteStyle      ), position: LatLngSite3A,  map: map, title: 'Campsite 3A'  }),
        site4   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"4"   }, siteStyle      ), position: LatLngSite4,   map: map, title: 'Campsite 4'   }),
        site4A  = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"4A"  }, siteStyle      ), position: LatLngSite4A,  map: map, title: 'Campsite 4A'  }),
        site5   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"5"   }, siteStyleRiver ), position: LatLngSite5,   map: map, title: 'Campsite 5'   }),
        site6   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"6"   }, siteStyleRiver ), position: LatLngSite6,   map: map, title: 'Campsite 6'   }),
        site7   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"7"   }, siteStyleRiver ), position: LatLngSite7,   map: map, title: 'Campsite 7'   }),
        site8   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"8"   }, siteStyleRiver ), position: LatLngSite8,   map: map, title: 'Campsite 8'   }),
        site9   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"9"   }, siteStyleRiver ), position: LatLngSite9,   map: map, title: 'Campsite 9'   }),
        site9A  = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"9A"  }, siteStyleRiver ), position: LatLngSite9A,  map: map, title: 'Campsite 9A'  }),
        site10  = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"10"  }, siteStyleRiver ), position: LatLngSite10,  map: map, title: 'Campsite 10'  }),
        site10A = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"10A" }, siteStyle      ), position: LatLngSite10A, map: map, title: 'Campsite 10A' }),
        site11  = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"11"  }, siteStyleRiver ), position: LatLngSite11,  map: map, title: 'Campsite 11'  }),
        site11A = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"11A" }, siteStyleRiver ), position: LatLngSite11A, map: map, title: 'Campsite 11A' }),
        site11B = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"11B" }, siteStyleRiver ), position: LatLngSite11B, map: map, title: 'Campsite 11B' }),
        site11C = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"11C" }, siteStyleRiver ), position: LatLngSite11C, map: map, title: 'Campsite 11C' }),
        site12  = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"12"  }, siteStyleRiver ), position: LatLngSite12,  map: map, title: 'Campsite 12'  }),
        site12A = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"12A" }, siteStyleRiver ), position: LatLngSite12A, map: map, title: 'Campsite 12A' }),
        site12B = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"12B" }, siteStyleRiver ), position: LatLngSite12B, map: map, title: 'Campsite 12B' }),
        site12C = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"12C" }, siteStyleRiver ), position: LatLngSite12C, map: map, title: 'Campsite 12C' }),
        site12D = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"12D" }, siteStyle      ), position: LatLngSite12D, map: map, title: 'Campsite 12D' }),
        site12E = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"12E" }, siteStyle      ), position: LatLngSite12E, map: map, title: 'Campsite 12E' }),
        site13  = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"13"  }, siteStyle      ), position: LatLngSite13,  map: map, title: 'Campsite 13'  }),
        site13C = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"13C" }, siteStyleRiver ), position: LatLngSite13C, map: map, title: 'Campsite 13C' }),
        site14  = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"14"  }, siteStyleRiver ), position: LatLngSite14,  map: map, title: 'Campsite 14'  }),
        site14A = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"14A" }, siteStyleRiver ), position: LatLngSite14A, map: map, title: 'Campsite 14A' }),
        site15  = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"15"  }, siteStyleRiver ), position: LatLngSite15,  map: map, title: 'Campsite 15'  }),
        site15A = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"15A" }, siteStyleRiver ), position: LatLngSite15A, map: map, title: 'Campsite 15A' }),
        site15B = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"15B" }, siteStyle      ), position: LatLngSite15B, map: map, title: 'Campsite 15B' }),
        site15C = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"15C" }, siteStyle      ), position: LatLngSite15C, map: map, title: 'Campsite 15C' }),
        site16  = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"16"  }, siteStyleRiver ), position: LatLngSite16,  map: map, title: 'Campsite 16'  }),
        site17  = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"17"  }, siteStyleRiver ), position: LatLngSite17,  map: map, title: 'Campsite 17'  }),
        site17A = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"17A" }, siteStyleRiver ), position: LatLngSite17A, map: map, title: 'Campsite 17A' }),
        site17B = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"17B" }, siteStyleRiver ), position: LatLngSite17B, map: map, title: 'Campsite 17B' }),
        site17C = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"17C" }, siteStyleRiver ), position: LatLngSite17C, map: map, title: 'Campsite 17C' }),
        site17D = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"17D" }, siteStyle      ), position: LatLngSite17D, map: map, title: 'Campsite 17D' }),
        site17E = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"17E" }, siteStyle      ), position: LatLngSite17E, map: map, title: 'Campsite 17E' }),
        site18  = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"18"  }, siteStyle      ), position: LatLngSite18,  map: map, title: 'Campsite 18'  }),
        site19  = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"19"  }, siteStyle      ), position: LatLngSite19,  map: map, title: 'Campsite 19'  }),
        site20  = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"20"  }, siteStyle      ), position: LatLngSite20,  map: map, title: 'Campsite 20'  }),
        site21  = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"21"  }, siteStyle      ), position: LatLngSite21,  map: map, title: 'Campsite 21'  }),
        site22  = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"22"  }, siteStyle      ), position: LatLngSite22,  map: map, title: 'Campsite 22'  }),
        site23  = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"23"  }, siteStyle      ), position: LatLngSite23,  map: map, title: 'Campsite 23'  }),
        site24  = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"24"  }, siteStyleRiver ), position: LatLngSite24,  map: map, title: 'Campsite 24'  }),
        site25  = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"25"  }, siteStyle      ), position: LatLngSite25,  map: map, title: 'Campsite 25'  }),
        site26  = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"26"  }, siteStyleRiver ), position: LatLngSite26,  map: map, title: 'Campsite 26'  }),
        site27  = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"27"  }, siteStyleRiver ), position: LatLngSite27,  map: map, title: 'Campsite 27'  }),
        site28  = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"28"  }, siteStyleRiver ), position: LatLngSite28,  map: map, title: 'Campsite 28'  }),
        site30  = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"30"  }, siteStyleRiver ), position: LatLngSite30,  map: map, title: 'Campsite 30'  }),
        site30A = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"30A" }, siteStyleRiver ), position: LatLngSite30A, map: map, title: 'Campsite 30A' }),
        site31  = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"31"  }, siteStyleRiver ), position: LatLngSite31,  map: map, title: 'Campsite 31'  }),
        site32  = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"32"  }, siteStyleRiver ), position: LatLngSite32,  map: map, title: 'Campsite 32'  }),
        site33  = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"33"  }, siteStyleRiver ), position: LatLngSite33,  map: map, title: 'Campsite 33'  }),
        site34  = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"34"  }, siteStyleRiver ), position: LatLngSite34,  map: map, title: 'Campsite 34'  }),
        site35  = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"35"  }, siteStyleRiver ), position: LatLngSite35,  map: map, title: 'Campsite 35'  }),
        site36  = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"36"  }, siteStyleRiver ), position: LatLngSite36,  map: map, title: 'Campsite 36'  }),
        site37  = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"37"  }, siteStyleRiver ), position: LatLngSite37,  map: map, title: 'Campsite 37'  }),
        site38  = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"38"  }, siteStyleRiver ), position: LatLngSite38,  map: map, title: 'Campsite 38'  }),
        site39  = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"39"  }, siteStyleRiver ), position: LatLngSite39,  map: map, title: 'Campsite 39'  }),
        site40  = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"40"  }, siteStyleRiver ), position: LatLngSite40,  map: map, title: 'Campsite 40'  }),
        site41  = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"41"  }, siteStyleRiver ), position: LatLngSite41,  map: map, title: 'Campsite 41'  }),
        site42  = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"42"  }, siteStyleRiver ), position: LatLngSite42,  map: map, title: 'Campsite 42'  }),
        site43  = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"43"  }, siteStyleRiver ), position: LatLngSite43,  map: map, title: 'Campsite 43'  }),
        site44  = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"44"  }, siteStyleRiver ), position: LatLngSite44,  map: map, title: 'Campsite 44'  }),
        site45  = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"45"  }, siteStyleRiver ), position: LatLngSite45,  map: map, title: 'Campsite 45'  }),
        site46  = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"46"  }, siteStyleRiver ), position: LatLngSite46,  map: map, title: 'Campsite 46'  }),
        site47  = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"47"  }, siteStyleRiver ), position: LatLngSite47,  map: map, title: 'Campsite 47'  }),
        site47A = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"47A" }, siteStyleRiver ), position: LatLngSite47A, map: map, title: 'Campsite 47A' }),
        site48  = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"48"  }, siteStyle      ), position: LatLngSite48,  map: map, title: 'Campsite 48'  }),
        site49  = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"49"  }, siteStyle      ), position: LatLngSite49,  map: map, title: 'Campsite 49'  }),
        site49A = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"49A" }, siteStyle      ), position: LatLngSite49A, map: map, title: 'Campsite 49A' }),
        site50  = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"50"  }, siteStyle      ), position: LatLngSite50,  map: map, title: 'Campsite 50'  }),
        site52  = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"52"  }, siteStyle      ), position: LatLngSite52,  map: map, title: 'Campsite 52'  }),
        site54  = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"54"  }, siteStyle      ), position: LatLngSite54,  map: map, title: 'Campsite 54'  }),        
        site68  = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"68"  }, siteStyleRiver ), position: LatLngSite68,  map: map, title: 'Campsite 68'  });
    
    // caravans
    
    var caravan1 = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"1" }, caravanStyle ), position: LatLngCaravan1, map: map, title: 'Caravan 1' }),
        caravan2 = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"2" }, caravanStyle ), position: LatLngCaravan2, map: map, title: 'Caravan 2' }),
        caravan3 = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"3" }, caravanStyle ), position: LatLngCaravan3, map: map, title: 'Caravan 3' }),
        caravan4 = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"4" }, caravanStyle ), position: LatLngCaravan4, map: map, title: 'Caravan 4' }),
        caravan5 = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"5" }, caravanStyle ), position: LatLngCaravan5, map: map, title: 'Caravan 5' });
        
    // ablution
    
    var ablutionA = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.BUBBLE, { text:"A" }, ablutionStyle ), position: LatLngAblutionA, map: map, title: 'Ablution Block A' }),
        ablutionB = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.BUBBLE, { text:"B" }, ablutionStyle ), position: LatLngAblutionB, map: map, title: 'Ablution Block B' }),
        ablutionC = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.BUBBLE, { text:"C" }, ablutionStyle ), position: LatLngAblutionC, map: map, title: 'Ablution Block C' }),
        ablutionD = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.BUBBLE, { text:"D" }, ablutionStyle ), position: LatLngAblutionD, map: map, title: 'Ablution Block D' }),
        ablutionE = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.BUBBLE, { text:"E" }, ablutionStyle ), position: LatLngAblutionE, map: map, title: 'Ablution Block E' });
    
    // pools
    
    var pool1 = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.BUBBLE, { text:"Pool" }, poolStyle ), position: LatLngPool1, map: map, title: 'Swimming Pool' }),
        pool2 = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.BUBBLE, { text:"Pool" }, poolStyle ), position: LatLngPool2, map: map, title: 'Swimming Pool' });
    
    // information windows
    
    // window markup
    
    var winBegin =
    
        '<div id="info-window" style="overflow: hidden; text-align: center;">'+
            
            '<h1 style="font-family: sans-serif; font-size: 1.2em; font-weight: bold; text-transform: none; margin: 0 0 4px 0; padding: 2px 0 6px 0; letter-spacing: normal; color: #284F2C; border-bottom: 1px dotted #82736D">'+
            
                'Campsite ',
                
        winMiddle = 
            
            '</h1>'+
            
            '<a href="stay/campsites/',
            
        winEnd = 
            
            '" style="font-size: 1.05em; line-height: 1.2; padding: 0 0 5px 0;">'+
            
                'View Details'+
            
            '</a>'+
            
        '</div>';
        
    // set options, arm
    
    winOptsSite1 = { position: LatLngSite1, content: winBegin + '1' + winMiddle + '1' + winEnd };
    var windowSite1 = new google.maps.InfoWindow(winOptsSite1);
    google.maps.event.addListener(site1, 'click', function() { windowSite1.open(map, site1) });
    
    winOptsSite2 = { position: LatLngSite2, content: winBegin + '2' + winMiddle + '2' + winEnd };
    var windowSite2 = new google.maps.InfoWindow(winOptsSite2);
    google.maps.event.addListener(site2, 'click', function() { windowSite2.open(map, site2) });
    
    winOptsSite2A = { position: LatLngSite1, content: winBegin + '2A' + winMiddle + '2a' + winEnd };
    var windowSite2A = new google.maps.InfoWindow(winOptsSite2A);
    google.maps.event.addListener(site2A, 'click', function() { windowSite2A.open(map, site2A) });
    
    winOptsSite3 = { position: LatLngSite1, content: winBegin + '3' + winMiddle + '3' + winEnd };
    var windowSite3 = new google.maps.InfoWindow(winOptsSite3);
    google.maps.event.addListener(site3, 'click', function() { windowSite3.open(map, site3) });
    
    winOptsSite3A = { position: LatLngSite3A, content: winBegin + '3A' + winMiddle + '3a' + winEnd };
    var windowSite3A = new google.maps.InfoWindow(winOptsSite3A);
    google.maps.event.addListener(site3A, 'click', function() { windowSite3A.open(map, site3A) });
    
    winOptsSite4 = { position: LatLngSite4, content: winBegin + '4' + winMiddle + '4' + winEnd };
    var windowSite4 = new google.maps.InfoWindow(winOptsSite4);
    google.maps.event.addListener(site4, 'click', function() { windowSite4.open(map, site4) });
    
    winOptsSite4A = { position: LatLngSite4A, content: winBegin + '4A' + winMiddle + '4a' + winEnd };
    var windowSite4A = new google.maps.InfoWindow(winOptsSite4A);
    google.maps.event.addListener(site4A, 'click', function() { windowSite4A.open(map, site4A) });
    
    winOptsSite5 = { position: LatLngSite5, content: winBegin + '5' + winMiddle + '5' + winEnd };
    var windowSite5 = new google.maps.InfoWindow(winOptsSite5);
    google.maps.event.addListener(site5, 'click', function() { windowSite5.open(map, site5) });
    
    winOptsSite6 = { position: LatLngSite6, content: winBegin + '6' + winMiddle + '6' + winEnd };
    var windowSite6 = new google.maps.InfoWindow(winOptsSite6);
    google.maps.event.addListener(site6, 'click', function() { windowSite6.open(map, site6) });
    
    winOptsSite7 = { position: LatLngSite7, content: winBegin + '7' + winMiddle + '7' + winEnd };
    var windowSite7 = new google.maps.InfoWindow(winOptsSite7);
    google.maps.event.addListener(site7, 'click', function() { windowSite7.open(map, site7) });
    
    winOptsSite8 = { position: LatLngSite8, content: winBegin + '8' + winMiddle + '8' + winEnd };
    var windowSite8 = new google.maps.InfoWindow(winOptsSite8);
    google.maps.event.addListener(site8, 'click', function() { windowSite8.open(map, site8) });
    
    winOptsSite9 = { position: LatLngSite9, content: winBegin + '9' + winMiddle + '9' + winEnd };
    var windowSite9 = new google.maps.InfoWindow(winOptsSite9);
    google.maps.event.addListener(site9, 'click', function() { windowSite9.open(map, site9) });
    
    winOptsSite9A = { position: LatLngSite9A, content: winBegin + '9A' + winMiddle + '9a' + winEnd };
    var windowSite9A = new google.maps.InfoWindow(winOptsSite9A);
    google.maps.event.addListener(site9A, 'click', function() { windowSite9A.open(map, site9A) });
    
    winOptsSite10 = { position: LatLngSite10, content: winBegin + '10' + winMiddle + '10' + winEnd };
    var windowSite10 = new google.maps.InfoWindow(winOptsSite10);
    google.maps.event.addListener(site10, 'click', function() { windowSite10.open(map, site10) });
    
    winOptsSite11 = { position: LatLngSite11, content: winBegin + '11' + winMiddle + '11' + winEnd };
    var windowSite11 = new google.maps.InfoWindow(winOptsSite11);
    google.maps.event.addListener(site11, 'click', function() { windowSite11.open(map, site11) });
    
    winOptsSite11A = { position: LatLngSite11A, content: winBegin + '11A' + winMiddle + '11a' + winEnd };
    var windowSite11A = new google.maps.InfoWindow(winOptsSite11A);
    google.maps.event.addListener(site11A, 'click', function() { windowSite11A.open(map, site11A) });
    
    winOptsSite11B = { position: LatLngSite11B, content: winBegin + '11B' + winMiddle + '11b' + winEnd };
    var windowSite11B = new google.maps.InfoWindow(winOptsSite11B);
    google.maps.event.addListener(site11B, 'click', function() { windowSite11B.open(map, site11B) });
    
    winOptsSite11C = { position: LatLngSite11C, content: winBegin + '11C' + winMiddle + '11c' + winEnd };
    var windowSite11C = new google.maps.InfoWindow(winOptsSite11C);
    google.maps.event.addListener(site11C, 'click', function() { windowSite11C.open(map, site11C) });
    
    winOptsSite12 = { position: LatLngSite12, content: winBegin + '12' + winMiddle + '12' + winEnd };
    var windowSite12 = new google.maps.InfoWindow(winOptsSite12);
    google.maps.event.addListener(site12, 'click', function() { windowSite12.open(map, site12) });

    winOptsSite12A = { position: LatLngSite12A, content: winBegin + '12A' + winMiddle + '12a' + winEnd };
    var windowSite12A = new google.maps.InfoWindow(winOptsSite12A);
    google.maps.event.addListener(site12A, 'click', function() { windowSite12A.open(map, site12A) });
    
    winOptsSite12B = { position: LatLngSite12B, content: winBegin + '12B' + winMiddle + '12b' + winEnd };
    var windowSite12B = new google.maps.InfoWindow(winOptsSite12B);
    google.maps.event.addListener(site12B, 'click', function() { windowSite12B.open(map, site12B) });
    
    winOptsSite12C = { position: LatLngSite12C, content: winBegin + '12C' + winMiddle + '12c' + winEnd };
    var windowSite12C = new google.maps.InfoWindow(winOptsSite12C);
    google.maps.event.addListener(site12C, 'click', function() { windowSite12C.open(map, site12C) });
    
    winOptsSite12D = { position: LatLngSite12D, content: winBegin + '12D' + winMiddle + '12d' + winEnd };
    var windowSite12D = new google.maps.InfoWindow(winOptsSite12D);
    google.maps.event.addListener(site12D, 'click', function() { windowSite12D.open(map, site12D) });
    
    winOptsSite12E = { position: LatLngSite12E, content: winBegin + '12E' + winMiddle + '12e' + winEnd };
    var windowSite12E = new google.maps.InfoWindow(winOptsSite12E);
    google.maps.event.addListener(site12E, 'click', function() { windowSite12E.open(map, site12E) });
    
    winOptsSite13 = { position: LatLngSite13, content: winBegin + '13' + winMiddle + '13' + winEnd };
    var windowSite13 = new google.maps.InfoWindow(winOptsSite13);
    google.maps.event.addListener(site13, 'click', function() { windowSite13.open(map, site13) });
    
    winOptsSite13C = { position: LatLngSite13C, content: winBegin + '13C' + winMiddle + '13c' + winEnd };
    var windowSite13C = new google.maps.InfoWindow(winOptsSite13C);
    google.maps.event.addListener(site13C, 'click', function() { windowSite13C.open(map, site13C) });
    
    winOptsSite14 = { position: LatLngSite14, content: winBegin + '14' + winMiddle + '14' + winEnd };
    var windowSite14 = new google.maps.InfoWindow(winOptsSite14);
    google.maps.event.addListener(site14, 'click', function() { windowSite14.open(map, site14) });
    
    winOptsSite14A = { position: LatLngSite14A, content: winBegin + '14A' + winMiddle + '14a' + winEnd };
    var windowSite14A = new google.maps.InfoWindow(winOptsSite14A);
    google.maps.event.addListener(site14A, 'click', function() { windowSite14A.open(map, site14A) });
    
    winOptsSite15 = { position: LatLngSite15, content: winBegin + '15' + winMiddle + '15' + winEnd };
    var windowSite15 = new google.maps.InfoWindow(winOptsSite15);
    google.maps.event.addListener(site15, 'click', function() { windowSite15.open(map, site15) });
    
    winOptsSite15A = { position: LatLngSite15A, content: winBegin + '15A' + winMiddle + '15a' + winEnd };
    var windowSite15A = new google.maps.InfoWindow(winOptsSite15A);
    google.maps.event.addListener(site15A, 'click', function() { windowSite15A.open(map, site15A) });
    
    winOptsSite15B = { position: LatLngSite15B, content: winBegin + '15B' + winMiddle + '15b' + winEnd };
    var windowSite15B = new google.maps.InfoWindow(winOptsSite15B);
    google.maps.event.addListener(site15B, 'click', function() { windowSite15B.open(map, site15B) });
    
    winOptsSite15C = { position: LatLngSite15C, content: winBegin + '15C' + winMiddle + '15c' + winEnd };
    var windowSite15C = new google.maps.InfoWindow(winOptsSite15C);
    google.maps.event.addListener(site15C, 'click', function() { windowSite15C.open(map, site15C) });
    
    winOptsSite16 = { position: LatLngSite16, content: winBegin + '16' + winMiddle + '16' + winEnd };
    var windowSite16 = new google.maps.InfoWindow(winOptsSite16);
    google.maps.event.addListener(site16, 'click', function() { windowSite16.open(map, site16) });
    
    winOptsSite17 = { position: LatLngSite17, content: winBegin + '17' + winMiddle + '17' + winEnd };
    var windowSite17 = new google.maps.InfoWindow(winOptsSite17);
    google.maps.event.addListener(site17, 'click', function() { windowSite17.open(map, site17) });
    
    winOptsSite17A = { position: LatLngSite17A, content: winBegin + '17A' + winMiddle + '17a' + winEnd };
    var windowSite17A = new google.maps.InfoWindow(winOptsSite17A);
    google.maps.event.addListener(site17A, 'click', function() { windowSite17A.open(map, site17A) });
    
    winOptsSite17B = { position: LatLngSite17B, content: winBegin + '17B' + winMiddle + '17b' + winEnd };
    var windowSite17B = new google.maps.InfoWindow(winOptsSite17B);
    google.maps.event.addListener(site17B, 'click', function() { windowSite17B.open(map, site17B) });
    
    winOptsSite17C = { position: LatLngSite17C, content: winBegin + '17C' + winMiddle + '17c' + winEnd };
    var windowSite17C = new google.maps.InfoWindow(winOptsSite17C);
    google.maps.event.addListener(site17C, 'click', function() { windowSite17C.open(map, site17C) });
    
    winOptsSite17D = { position: LatLngSite17D, content: winBegin + '17D' + winMiddle + '17d' + winEnd };
    var windowSite17D = new google.maps.InfoWindow(winOptsSite17D);
    google.maps.event.addListener(site17D, 'click', function() { windowSite17D.open(map, site17D) });
    
    winOptsSite17E = { position: LatLngSite17E, content: winBegin + '17E' + winMiddle + '17e' + winEnd };
    var windowSite17E = new google.maps.InfoWindow(winOptsSite17E);
    google.maps.event.addListener(site17E, 'click', function() { windowSite17E.open(map, site17E) });
    
    winOptsSite18 = { position: LatLngSite18, content: winBegin + '18' + winMiddle + '18' + winEnd };
    var windowSite18 = new google.maps.InfoWindow(winOptsSite18);
    google.maps.event.addListener(site18, 'click', function() { windowSite18.open(map, site18) });
    
    winOptsSite19 = { position: LatLngSite19, content: winBegin + '19' + winMiddle + '19' + winEnd };
    var windowSite19 = new google.maps.InfoWindow(winOptsSite19);
    google.maps.event.addListener(site19, 'click', function() { windowSite19.open(map, site19) });
    
    winOptsSite20 = { position: LatLngSite20, content: winBegin + '20' + winMiddle + '20' + winEnd };
    var windowSite20 = new google.maps.InfoWindow(winOptsSite20);
    google.maps.event.addListener(site20, 'click', function() { windowSite20.open(map, site20) });
    
    winOptsSite21 = { position: LatLngSite21, content: winBegin + '21' + winMiddle + '21' + winEnd };
    var windowSite21 = new google.maps.InfoWindow(winOptsSite21);
    google.maps.event.addListener(site21, 'click', function() { windowSite21.open(map, site21) });
    
    winOptsSite22 = { position: LatLngSite22, content: winBegin + '22' + winMiddle + '22' + winEnd };
    var windowSite22 = new google.maps.InfoWindow(winOptsSite22);
    google.maps.event.addListener(site22, 'click', function() { windowSite22.open(map, site22) });
    
    winOptsSite23 = { position: LatLngSite23, content: winBegin + '23' + winMiddle + '23' + winEnd };
    var windowSite23 = new google.maps.InfoWindow(winOptsSite23);
    google.maps.event.addListener(site23, 'click', function() { windowSite23.open(map, site23) });
    
    winOptsSite24 = { position: LatLngSite24, content: winBegin + '24' + winMiddle + '24' + winEnd };
    var windowSite24 = new google.maps.InfoWindow(winOptsSite24);
    google.maps.event.addListener(site24, 'click', function() { windowSite24.open(map, site24) });
    
    winOptsSite25 = { position: LatLngSite25, content: winBegin + '25' + winMiddle + '25' + winEnd };
    var windowSite25 = new google.maps.InfoWindow(winOptsSite25);
    google.maps.event.addListener(site25, 'click', function() { windowSite25.open(map, site25) });
    
    winOptsSite26 = { position: LatLngSite26, content: winBegin + '26' + winMiddle + '26' + winEnd };
    var windowSite26 = new google.maps.InfoWindow(winOptsSite26);
    google.maps.event.addListener(site26, 'click', function() { windowSite26.open(map, site26) });
    
    winOptsSite27 = { position: LatLngSite27, content: winBegin + '27' + winMiddle + '27' + winEnd };
    var windowSite27 = new google.maps.InfoWindow(winOptsSite27);
    google.maps.event.addListener(site27, 'click', function() { windowSite27.open(map, site27) });
    
    winOptsSite28 = { position: LatLngSite28, content: winBegin + '28' + winMiddle + '28' + winEnd };
    var windowSite28 = new google.maps.InfoWindow(winOptsSite28);
    google.maps.event.addListener(site28, 'click', function() { windowSite28.open(map, site28) });
    
    winOptsSite30 = { position: LatLngSite30, content: winBegin + '30' + winMiddle + '30' + winEnd };
    var windowSite30 = new google.maps.InfoWindow(winOptsSite30);
    google.maps.event.addListener(site30, 'click', function() { windowSite30.open(map, site30) });
    
    winOptsSite30A = { position: LatLngSite30A, content: winBegin + '30A' + winMiddle + '30a' + winEnd };
    var windowSite30A = new google.maps.InfoWindow(winOptsSite30A);
    google.maps.event.addListener(site30A, 'click', function() { windowSite30A.open(map, site30A) });
    
    winOptsSite31 = { position: LatLngSite31, content: winBegin + '31' + winMiddle + '31' + winEnd };
    var windowSite31 = new google.maps.InfoWindow(winOptsSite31);
    google.maps.event.addListener(site31, 'click', function() { windowSite31.open(map, site31) });
    
    winOptsSite32 = { position: LatLngSite32, content: winBegin + '32' + winMiddle + '32' + winEnd };
    var windowSite32 = new google.maps.InfoWindow(winOptsSite32);
    google.maps.event.addListener(site32, 'click', function() { windowSite32.open(map, site32) });
    
    winOptsSite33 = { position: LatLngSite33, content: winBegin + '33' + winMiddle + '33' + winEnd };
    var windowSite33 = new google.maps.InfoWindow(winOptsSite33);
    google.maps.event.addListener(site33, 'click', function() { windowSite33.open(map, site33) });
    
    winOptsSite34 = { position: LatLngSite34, content: winBegin + '34' + winMiddle + '34' + winEnd };
    var windowSite34 = new google.maps.InfoWindow(winOptsSite34);
    google.maps.event.addListener(site34, 'click', function() { windowSite34.open(map, site34) });
    
    winOptsSite35 = { position: LatLngSite35, content: winBegin + '35' + winMiddle + '35' + winEnd };
    var windowSite35 = new google.maps.InfoWindow(winOptsSite35);
    google.maps.event.addListener(site35, 'click', function() { windowSite35.open(map, site35) });
    
    winOptsSite36 = { position: LatLngSite36, content: winBegin + '36' + winMiddle + '36' + winEnd };
    var windowSite36 = new google.maps.InfoWindow(winOptsSite36);
    google.maps.event.addListener(site36, 'click', function() { windowSite36.open(map, site36) });
    
    winOptsSite37 = { position: LatLngSite37, content: winBegin + '37' + winMiddle + '37' + winEnd };
    var windowSite37 = new google.maps.InfoWindow(winOptsSite37);
    google.maps.event.addListener(site37, 'click', function() { windowSite37.open(map, site37) });
    
    winOptsSite38 = { position: LatLngSite38, content: winBegin + '38' + winMiddle + '38' + winEnd };
    var windowSite38 = new google.maps.InfoWindow(winOptsSite38);
    google.maps.event.addListener(site38, 'click', function() { windowSite38.open(map, site38) });
    
    winOptsSite39 = { position: LatLngSite39, content: winBegin + '39' + winMiddle + '39' + winEnd };
    var windowSite39 = new google.maps.InfoWindow(winOptsSite39);
    google.maps.event.addListener(site39, 'click', function() { windowSite39.open(map, site39) });
    
    winOptsSite40 = { position: LatLngSite40, content: winBegin + '40' + winMiddle + '40' + winEnd };
    var windowSite40 = new google.maps.InfoWindow(winOptsSite40);
    google.maps.event.addListener(site40, 'click', function() { windowSite40.open(map, site40) });
    
    winOptsSite41 = { position: LatLngSite41, content: winBegin + '41' + winMiddle + '41' + winEnd };
    var windowSite41 = new google.maps.InfoWindow(winOptsSite41);
    google.maps.event.addListener(site41, 'click', function() { windowSite41.open(map, site41) });
    
    winOptsSite42 = { position: LatLngSite42, content: winBegin + '42' + winMiddle + '42' + winEnd };
    var windowSite42 = new google.maps.InfoWindow(winOptsSite42);
    google.maps.event.addListener(site42, 'click', function() { windowSite42.open(map, site42) });
    
    winOptsSite43 = { position: LatLngSite43, content: winBegin + '43' + winMiddle + '43' + winEnd };
    var windowSite43 = new google.maps.InfoWindow(winOptsSite43);
    google.maps.event.addListener(site43, 'click', function() { windowSite43.open(map, site43) });
    
    winOptsSite44 = { position: LatLngSite44, content: winBegin + '44' + winMiddle + '44' + winEnd };
    var windowSite44 = new google.maps.InfoWindow(winOptsSite44);
    google.maps.event.addListener(site44, 'click', function() { windowSite44.open(map, site44) });
    
    winOptsSite45 = { position: LatLngSite45, content: winBegin + '45' + winMiddle + '45' + winEnd };
    var windowSite45 = new google.maps.InfoWindow(winOptsSite45);
    google.maps.event.addListener(site45, 'click', function() { windowSite45.open(map, site45) });
    
    winOptsSite46 = { position: LatLngSite46, content: winBegin + '46' + winMiddle + '46' + winEnd };
    var windowSite46 = new google.maps.InfoWindow(winOptsSite46);
    google.maps.event.addListener(site46, 'click', function() { windowSite46.open(map, site46) });
    
    winOptsSite47 = { position: LatLngSite47, content: winBegin + '47' + winMiddle + '47' + winEnd };
    var windowSite47 = new google.maps.InfoWindow(winOptsSite47);
    google.maps.event.addListener(site47, 'click', function() { windowSite47.open(map, site47) });
    
    winOptsSite47A = { position: LatLngSite47A, content: winBegin + '47A' + winMiddle + '47a' + winEnd };
    var windowSite47A = new google.maps.InfoWindow(winOptsSite47A);
    google.maps.event.addListener(site47A, 'click', function() { windowSite47A.open(map, site47A) });
    
    winOptsSite48 = { position: LatLngSite48, content: winBegin + '48' + winMiddle + '48' + winEnd };
    var windowSite48 = new google.maps.InfoWindow(winOptsSite48);
    google.maps.event.addListener(site48, 'click', function() { windowSite48.open(map, site48) });
    
    winOptsSite49 = { position: LatLngSite49, content: winBegin + '49' + winMiddle + '49' + winEnd };
    var windowSite49 = new google.maps.InfoWindow(winOptsSite49);
    google.maps.event.addListener(site49, 'click', function() { windowSite49.open(map, site49) });
    
    winOptsSite49A = { position: LatLngSite49A, content: winBegin + '49A' + winMiddle + '49a' + winEnd };
    var windowSite49A = new google.maps.InfoWindow(winOptsSite49A);
    google.maps.event.addListener(site49A, 'click', function() { windowSite49A.open(map, site49A) });
    
    winOptsSite50 = { position: LatLngSite50, content: winBegin + '50' + winMiddle + '50' + winEnd };
    var windowSite50 = new google.maps.InfoWindow(winOptsSite50);
    google.maps.event.addListener(site50, 'click', function() { windowSite50.open(map, site50) });
    
    winOptsSite52 = { position: LatLngSite52, content: winBegin + '52' + winMiddle + '52' + winEnd };
    var windowSite52 = new google.maps.InfoWindow(winOptsSite52);
    google.maps.event.addListener(site52, 'click', function() { windowSite52.open(map, site52) });
    
    winOptsSite54 = { position: LatLngSite54, content: winBegin + '54' + winMiddle + '54' + winEnd };
    var windowSite54 = new google.maps.InfoWindow(winOptsSite54);
    google.maps.event.addListener(site54, 'click', function() { windowSite54.open(map, site54) });    
    
    winOptsSite68 = { position: LatLngSite68, content: winBegin + '68' + winMiddle + '68' + winEnd };
    var windowSite68 = new google.maps.InfoWindow(winOptsSite68);
    google.maps.event.addListener(site68, 'click', function() { windowSite68.open(map, site68) });
    
    
}); // jquery
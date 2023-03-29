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

    var LatLngSiteA1   = new google.maps.LatLng(-32.3352616026147,19.020079841929),
        LatLngSiteA2   = new google.maps.LatLng(-32.3351574810395,19.0200755188452),
        LatLngSiteA3   = new google.maps.LatLng(-32.3350436002152,19.0200754554512),
        LatLngSiteA4   = new google.maps.LatLng(-32.3349208118059,19.0200652633945),
        LatLngSiteA5   = new google.maps.LatLng(-32.3348025119203,19.0200713952905),
        LatLngSite27   = new google.maps.LatLng(-32.336328460858,19.0201775826862),
        LatLngSite28   = new google.maps.LatLng(-32.3360338074693,19.0201277015141),
        LatLngSite1   = new google.maps.LatLng(-32.3364978129839,19.0201839717987),
        LatLngSite2A   = new google.maps.LatLng(-32.3367576007806,19.0201717940992),
        LatLngSite3   = new google.maps.LatLng(-32.3370812146157,19.0201704046688),
        LatLngSite5   = new google.maps.LatLng(-32.3380472452752,19.0200251471735),
        LatLngSite6   = new google.maps.LatLng(-32.3382409877281,19.019989984313),
        LatLngSite7   = new google.maps.LatLng(-32.3384295880941,19.0199649147514),
        LatLngSite8   = new google.maps.LatLng(-32.3385888796739,19.0199920535559),
        LatLngSite9   = new google.maps.LatLng(-32.3387768446347,19.0200377917845),
        LatLngSite9A   = new google.maps.LatLng(-32.3389003123569,19.0201203040051),
        LatLngSite10   = new google.maps.LatLng(-32.3385554350583,19.0196053910651),
        LatLngSite11   = new google.maps.LatLng(-32.3387201032814,19.0196939470446),
        LatLngSite11A   = new google.maps.LatLng(-32.3390414110771,19.0198154614499),
        LatLngSite11B   = new google.maps.LatLng(-32.3391707090051,19.0198082270329),
        LatLngSite11C   = new google.maps.LatLng(-32.3392819489823,19.0198786715234),
        LatLngSite24   = new google.maps.LatLng(-32.3393949202696,19.0199208417333),
        LatLngSite24A   = new google.maps.LatLng(-32.339525737698,19.0199729630601),
        LatLngSite12   = new google.maps.LatLng(-32.3396674752367,19.0200206608532),
        LatLngSite12A   = new google.maps.LatLng(-32.3397955627664,19.0202046382354),
        LatLngSite13F   = new google.maps.LatLng(-32.3399576376738,19.0202390308098),
        LatLngSite13E   = new google.maps.LatLng(-32.3401194197236,19.0203256516368),
        LatLngSite13D   = new google.maps.LatLng(-32.3402448218222,19.0204022414416),
        LatLngSite13C   = new google.maps.LatLng(-32.3403670195135,19.0204809650877),
        LatLngSite14   = new google.maps.LatLng(-32.3404791314899,19.0205525065881),
        LatLngSite14A   = new google.maps.LatLng(-32.3406183666071,19.0206288318993),
        LatLngSite15A   = new google.maps.LatLng(-32.3407678085181,19.0206935347839),
        LatLngSite15   = new google.maps.LatLng(-32.3409141709493,19.0207502071111),
        LatLngSite16   = new google.maps.LatLng(-32.3411453374385,19.0207437943104),
        LatLngSite17   = new google.maps.LatLng(-32.3412656068339,19.0208200527391),
        LatLngSite17A   = new google.maps.LatLng(-32.3413762462173,19.0209009100496),
        LatLngSite17B   = new google.maps.LatLng(-32.3414679360156,19.0210067116328),
        LatLngSite17C   = new google.maps.LatLng(-32.3415729982661,19.0210814587957),
        LatLngSite16A   = new google.maps.LatLng(-32.3414310542554,19.0213795667167),
        LatLngSite16B   = new google.maps.LatLng(-32.3415685910837,19.0214400416239),
        LatLngSite16C   = new google.maps.LatLng(-32.3416821256522,19.0215154530952),
        LatLngSite16D   = new google.maps.LatLng(-32.3417980964079,19.0216085869144),
        LatLngSite16E   = new google.maps.LatLng(-32.3419063668146,19.0217224219703),
        LatLngSite16I   = new google.maps.LatLng(-32.3422625804347,19.0221819838017),
        LatLngSite16J   = new google.maps.LatLng(-32.3423177288378,19.0223170451988),
        LatLngSite16K   = new google.maps.LatLng(-32.3423423007117,19.0224442815142),
        LatLngSite16L   = new google.maps.LatLng(-32.3423268188144,19.0225800551722),
        LatLngSite16M   = new google.maps.LatLng(-32.3422829339884,19.0226794600811),
        LatLngSite30   = new google.maps.LatLng(-32.3426223193245,19.0224798473629),
        LatLngSite30A   = new google.maps.LatLng(-32.342671423797,19.0222664710874),
        LatLngSite31   = new google.maps.LatLng(-32.3426608671565,19.0226740592291),
        LatLngSite32   = new google.maps.LatLng(-32.3426438901783,19.0229347634822),
        LatLngSite33   = new google.maps.LatLng(-32.3423736561651,19.0230850912955),
        LatLngSite33A   = new google.maps.LatLng(-32.3424648438009,19.0231635449644),
        LatLngSite34   = new google.maps.LatLng(-32.3425633585146,19.0232569441797),
        LatLngSite35   = new google.maps.LatLng(-32.3426363789745,19.0233371696978),
        LatLngSite36   = new google.maps.LatLng(-32.3427296004183,19.0234243058666),
        LatLngSite37   = new google.maps.LatLng(-32.3428116871308,19.0235206627525),
        LatLngSite38   = new google.maps.LatLng(-32.3428870839752,19.0236332418319),
        LatLngSite39   = new google.maps.LatLng(-32.3429624530517,19.0237398223135),
        LatLngSite40   = new google.maps.LatLng(-32.3430446437381,19.023893066179),
        LatLngSite41   = new google.maps.LatLng(-32.3430951899211,19.0240202584301),
        LatLngSite42   = new google.maps.LatLng(-32.3431580056048,19.0241579337699),
        LatLngSite43   = new google.maps.LatLng(-32.3432350808583,19.024306695332),
        LatLngSite44   = new google.maps.LatLng(-32.3433826328074,19.0245062304456),
        LatLngSite45   = new google.maps.LatLng(-32.34349206256,19.0246556142534),
        LatLngSite46   = new google.maps.LatLng(-32.3436102504624,19.024811352723),
        LatLngSite47   = new google.maps.LatLng(-32.3436464084977,19.0249895995861),
        LatLngSite47A   = new google.maps.LatLng(-32.3437021627015,19.0252114293116),
        LatLngSite54   = new google.maps.LatLng(-32.3438381896073,19.0253736598111),
        LatLngSite54A   = new google.maps.LatLng(-32.3439948651286,19.0254490540941),
        LatLngSite57   = new google.maps.LatLng(-32.34414354773,19.0256847241618),
        LatLngSite69   = new google.maps.LatLng(-32.3451197337487,19.026453996),
        LatLngSite70   = new google.maps.LatLng(-32.3452304613085,19.0264608962971),
        LatLngSite71   = new google.maps.LatLng(-32.3453479632554,19.0264439396318),
        LatLngSite72   = new google.maps.LatLng(-32.3454688934757,19.0264493188264),
        LatLngSite73   = new google.maps.LatLng(-32.3456313352436,19.026495538433),
        LatLngSite74   = new google.maps.LatLng(-32.3457599408684,19.0265264649828),
        LatLngSite75   = new google.maps.LatLng(-32.3458944522094,19.0265582702693),
        LatLngSite76   = new google.maps.LatLng(-32.3460132419667,19.0265904177816),
        LatLngSite77   = new google.maps.LatLng(-32.3461558443717,19.0266512263639),
        LatLngSite78   = new google.maps.LatLng(-32.3471730347284,19.0274067441339),
        LatLngSite79   = new google.maps.LatLng(-32.3461718052696,19.0267965431184),
        LatLngSite80   = new google.maps.LatLng(-32.3459978096442,19.0267336389129),
        LatLngSite81   = new google.maps.LatLng(-32.3458681946823,19.0267099498865),
        LatLngSite82   = new google.maps.LatLng(-32.3457637498412,19.0267145649026),
        LatLngSite83   = new google.maps.LatLng(-32.3456395872734,19.0267079835768),
        LatLngSite84   = new google.maps.LatLng(-32.34551298661,19.0267102421776),
        LatLngSite85   = new google.maps.LatLng(-32.3453785078898,19.0266947687453),
        LatLngSite86   = new google.maps.LatLng(-32.3461737670869,19.0269756519618),
        LatLngSite87   = new google.maps.LatLng(-32.3462995952156,19.0270542397482),
        LatLngSite88   = new google.maps.LatLng(-32.3464069154144,19.0271338791158),
        LatLngSite89   = new google.maps.LatLng(-32.3465094365632,19.0272212824952),
        LatLngSite91   = new google.maps.LatLng(-32.3465920375719,19.0273512642997),
        LatLngSite93   = new google.maps.LatLng(-32.3466756111759,19.0274678264509),
        LatLngSite95   = new google.maps.LatLng(-32.3467722508468,19.0275696717203),
        LatLngSite98   = new google.maps.LatLng(-32.3469190620283,19.0277688819758),
        LatLngSite26   = new google.maps.LatLng(-32.3356471782691,19.0204423483362),
        LatLngSite25   = new google.maps.LatLng(-32.3360143927124,19.0203340886123),
        LatLngSite2   = new google.maps.LatLng(-32.3369136053292,19.0204311569493),
        LatLngSite2B   = new google.maps.LatLng(-32.3370204786454,19.0204167348612),
        LatLngSite3A   = new google.maps.LatLng(-32.3371341896104,19.0204199256149),
        LatLngSite4   = new google.maps.LatLng(-32.3372633958866,19.0204190130686),
        LatLngSite4A   = new google.maps.LatLng(-32.3374168049327,19.0204226980874),
        LatLngSite4B   = new google.maps.LatLng(-32.3375687469387,19.0204036201762),
        LatLngSite6A   = new google.maps.LatLng(-32.3383015719291,19.020433558185),
        LatLngSite7A   = new google.maps.LatLng(-32.3382269787642,19.0202488074901),
        LatLngSite7B   = new google.maps.LatLng(-32.3383599014372,19.0202194610784),
        LatLngSite10A   = new google.maps.LatLng(-32.3388244530379,19.0195166716092),
        LatLngSite23   = new google.maps.LatLng(-32.3390409464387,19.0194411815146),
        LatLngSite22   = new google.maps.LatLng(-32.3392156926861,19.0194214514588),
        LatLngSite22A   = new google.maps.LatLng(-32.3393602089996,19.0194474484888),
        LatLngSite21   = new google.maps.LatLng(-32.3397788641399,19.0194952995755),
        LatLngSite21A   = new google.maps.LatLng(-32.3398890799501,19.0195173820429),
        LatLngSite20   = new google.maps.LatLng(-32.3400091838672,19.0195928424628),
        LatLngSite20A   = new google.maps.LatLng(-32.3400923678435,19.0197292789517),
        LatLngSite20B   = new google.maps.LatLng(-32.3401579647183,19.0198430137612),
        LatLngSite12B   = new google.maps.LatLng(-32.3399360546822,19.0199606853835),
        LatLngSite12C   = new google.maps.LatLng(-32.3400883182883,19.0200547985535),
        LatLngSite12D   = new google.maps.LatLng(-32.3402034272614,19.0201365659437),
        LatLngSite12E   = new google.maps.LatLng(-32.3404705272684,19.020237457349),
        LatLngSite13A   = new google.maps.LatLng(-32.3406414251997,19.0201652731662),
        LatLngSite15E   = new google.maps.LatLng(-32.3405926083794,19.020309051117),
        LatLngSite15D   = new google.maps.LatLng(-32.3406884377646,19.0203617285543),
        LatLngSite15C   = new google.maps.LatLng(-32.340779563086,19.0204049764978),
        LatLngSite15B   = new google.maps.LatLng(-32.3408807002978,19.0204453232575),
        LatLngSite13B   = new google.maps.LatLng(-32.3409328211551,19.0201550707958),
        LatLngSite19   = new google.maps.LatLng(-32.3410709821059,19.0202587046587),
        LatLngSite19A   = new google.maps.LatLng(-32.3409846923149,19.0203822181277),
        LatLngSite18   = new google.maps.LatLng(-32.3412083534281,19.0203541560479),
        LatLngSite18A   = new google.maps.LatLng(-32.3411481883184,19.0205018038883),
        LatLngSite17E   = new google.maps.LatLng(-32.3415045386605,19.0206017988414),
        LatLngSite17F   = new google.maps.LatLng(-32.3415627740954,19.0207945070224),
        LatLngSite17D   = new google.maps.LatLng(-32.3415586263568,19.0209446768954),
        LatLngSite30B   = new google.maps.LatLng(-32.3428860075638,19.0225382316589),
        LatLngSite36A   = new google.maps.LatLng(-32.3428555063216,19.0232674302386),
        LatLngSite53A   = new google.maps.LatLng(-32.3429954132007,19.0230523084466),
        LatLngSite53   = new google.maps.LatLng(-32.3431227693773,19.023253080441),
        LatLngSite52C   = new google.maps.LatLng(-32.3433502115232,19.0231392812432),
        LatLngSite52   = new google.maps.LatLng(-32.3434205299417,19.0233227482766),
        LatLngSite52B   = new google.maps.LatLng(-32.3434804984442,19.0234825214057),
        LatLngSite52A   = new google.maps.LatLng(-32.3431918007414,19.023409447278),
        LatLngSite39A   = new google.maps.LatLng(-32.3430798257464,19.023589582602),
        LatLngSite40A   = new google.maps.LatLng(-32.3432206283998,19.0236699655789),
        LatLngSite40B   = new google.maps.LatLng(-32.3432238770283,19.0238605640387),
        LatLngSite51B   = new google.maps.LatLng(-32.3433882023825,19.0236578349724),
        LatLngSite51A   = new google.maps.LatLng(-32.343487941233,19.0238549976486),
        LatLngSite51   = new google.maps.LatLng(-32.3435384290118,19.0240210168566),
        LatLngSite50   = new google.maps.LatLng(-32.3436276441373,19.0241930581559),
        LatLngSite49   = new google.maps.LatLng(-32.3437005616078,19.0243572532022),
        LatLngSite49A   = new google.maps.LatLng(-32.3435596887986,19.0243943931981),
        LatLngSite48   = new google.maps.LatLng(-32.3437823337792,19.0245523180424),
        LatLngSite55   = new google.maps.LatLng(-32.3439926303376,19.0249003404924),
        LatLngSite56   = new google.maps.LatLng(-32.3441008600686,19.0249615768428),
        LatLngSite56A   = new google.maps.LatLng(-32.3441945942875,19.0250255839826),
        LatLngSite59   = new google.maps.LatLng(-32.3442966014783,19.0251104319642),
        LatLngSite58   = new google.maps.LatLng(-32.3443666464833,19.0252587508477),
        LatLngSite60   = new google.maps.LatLng(-32.3444449661983,19.025368330849),
        LatLngSite61   = new google.maps.LatLng(-32.344502975936,19.0254761674089),
        LatLngSite62   = new google.maps.LatLng(-32.3445752186887,19.0255576188299),
        LatLngSite63   = new google.maps.LatLng(-32.3446500602536,19.0256253542992),
        LatLngSite64   = new google.maps.LatLng(-32.3447512776635,19.0256962380067),
        LatLngSite65   = new google.maps.LatLng(-32.344860435235,19.0257672046833),
        LatLngSite66   = new google.maps.LatLng(-32.3449762434832,19.0258525345488),
        LatLngSite67   = new google.maps.LatLng(-32.3450907857113,19.025927041652),
        LatLngSite68   = new google.maps.LatLng(-32.3451765596296,19.0259808577363),
        LatLngSite68A   = new google.maps.LatLng(-32.3452783813998,19.0260896618812),
        LatLngSite90   = new google.maps.LatLng(-32.3463765809298,19.0274565327712),
        LatLngSite92   = new google.maps.LatLng(-32.346469117303,19.0275689984936),
        LatLngSite94   = new google.maps.LatLng(-32.3465726877276,19.0276672677966),
        LatLngSite96   = new google.maps.LatLng(-32.3466711700327,19.0277355775388),
        LatLngSite97   = new google.maps.LatLng(-32.3467755762959,19.0277833587577),
        LatLngSite47B   = new google.maps.LatLng(-32.3439908426648,19.0251491481136);
        
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
        LatLngAblutionE = new google.maps.LatLng(-32.343508,19.023637),
        LatLngAblutionF = new google.maps.LatLng(-32.343890,19.024762);

    // pools

    var LatLngPool1 = new google.maps.LatLng(-32.337647,19.019831),
        LatLngPool2 = new google.maps.LatLng(-32.342225,19.022913),
        LatLngPool3 = new google.maps.LatLng(-32.344518,19.026273);

    // options

    //campsites
    var siteA1   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"A1"   }, siteStyleRiver ), position: LatLngSiteA1,   map: map, title: 'Campsite A1'   }),
        siteA2   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"A2"   }, siteStyleRiver ), position: LatLngSiteA2,   map: map, title: 'Campsite A2'   }),
        siteA3   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"A3"   }, siteStyleRiver ), position: LatLngSiteA3,   map: map, title: 'Campsite A3'   }),
        siteA4   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"A4"   }, siteStyleRiver ), position: LatLngSiteA4,   map: map, title: 'Campsite A4'   }),
        siteA5   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"A5"   }, siteStyleRiver ), position: LatLngSiteA5,   map: map, title: 'Campsite A5'   }),
        site27   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"27"   }, siteStyleRiver ), position: LatLngSite27,   map: map, title: 'Campsite 27'   }),
        site28   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"28"   }, siteStyleRiver ), position: LatLngSite28,   map: map, title: 'Campsite 28'   }),
        site1   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"1"   }, siteStyleRiver ), position: LatLngSite1,   map: map, title: 'Campsite 1'   }),
        site2A   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"2A"   }, siteStyleRiver ), position: LatLngSite2A,   map: map, title: 'Campsite 2A'   }),
        site3   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"3"   }, siteStyleRiver ), position: LatLngSite3,   map: map, title: 'Campsite 3'   }),
        site5   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"5"   }, siteStyleRiver ), position: LatLngSite5,   map: map, title: 'Campsite 5'   }),
        site6   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"6"   }, siteStyleRiver ), position: LatLngSite6,   map: map, title: 'Campsite 6'   }),
        site7   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"7"   }, siteStyleRiver ), position: LatLngSite7,   map: map, title: 'Campsite 7'   }),
        site8   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"8"   }, siteStyleRiver ), position: LatLngSite8,   map: map, title: 'Campsite 8'   }),
        site9   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"9"   }, siteStyleRiver ), position: LatLngSite9,   map: map, title: 'Campsite 9'   }),
        site9A   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"9A"   }, siteStyleRiver ), position: LatLngSite9A,   map: map, title: 'Campsite 9A'   }),
        site10   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"10"   }, siteStyleRiver ), position: LatLngSite10,   map: map, title: 'Campsite 10'   }),
        site11   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"11"   }, siteStyleRiver ), position: LatLngSite11,   map: map, title: 'Campsite 11'   }),
        site11A   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"11A"   }, siteStyleRiver ), position: LatLngSite11A,   map: map, title: 'Campsite 11A'   }),
        site11B   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"11B"   }, siteStyleRiver ), position: LatLngSite11B,   map: map, title: 'Campsite 11B'   }),
        site11C   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"11C"   }, siteStyleRiver ), position: LatLngSite11C,   map: map, title: 'Campsite 11C'   }),
        site24   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"24"   }, siteStyleRiver ), position: LatLngSite24,   map: map, title: 'Campsite 24'   }),
        site24A   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"24A"   }, siteStyleRiver ), position: LatLngSite24A,   map: map, title: 'Campsite 24A'   }),
        site12   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"12"   }, siteStyleRiver ), position: LatLngSite12,   map: map, title: 'Campsite 12'   }),
        site12A   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"12A"   }, siteStyleRiver ), position: LatLngSite12A,   map: map, title: 'Campsite 12A'   }),
        site13F   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"13F"   }, siteStyleRiver ), position: LatLngSite13F,   map: map, title: 'Campsite 13F'   }),
        site13E   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"13E"   }, siteStyleRiver ), position: LatLngSite13E,   map: map, title: 'Campsite 13E'   }),
        site13D   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"13D"   }, siteStyleRiver ), position: LatLngSite13D,   map: map, title: 'Campsite 13D'   }),
        site13C   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"13C"   }, siteStyleRiver ), position: LatLngSite13C,   map: map, title: 'Campsite 13C'   }),
        site14   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"14"   }, siteStyleRiver ), position: LatLngSite14,   map: map, title: 'Campsite 14'   }),
        site14A   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"14A"   }, siteStyleRiver ), position: LatLngSite14A,   map: map, title: 'Campsite 14A'   }),
        site15A   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"15A"   }, siteStyleRiver ), position: LatLngSite15A,   map: map, title: 'Campsite 15A'   }),
        site15   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"15"   }, siteStyleRiver ), position: LatLngSite15,   map: map, title: 'Campsite 15'   }),
        site16   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"16"   }, siteStyleRiver ), position: LatLngSite16,   map: map, title: 'Campsite 16'   }),
        site17   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"17"   }, siteStyleRiver ), position: LatLngSite17,   map: map, title: 'Campsite 17'   }),
        site17A   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"17A"   }, siteStyleRiver ), position: LatLngSite17A,   map: map, title: 'Campsite 17A'   }),
        site17B   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"17B"   }, siteStyleRiver ), position: LatLngSite17B,   map: map, title: 'Campsite 17B'   }),
        site17C   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"17C"   }, siteStyleRiver ), position: LatLngSite17C,   map: map, title: 'Campsite 17C'   }),
        site16A   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"16A"   }, siteStyleRiver ), position: LatLngSite16A,   map: map, title: 'Campsite 16A'   }),
        site16B   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"16B"   }, siteStyleRiver ), position: LatLngSite16B,   map: map, title: 'Campsite 16B'   }),
        site16C   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"16C"   }, siteStyleRiver ), position: LatLngSite16C,   map: map, title: 'Campsite 16C'   }),
        site16D   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"16D"   }, siteStyleRiver ), position: LatLngSite16D,   map: map, title: 'Campsite 16D'   }),
        site16E   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"16E"   }, siteStyleRiver ), position: LatLngSite16E,   map: map, title: 'Campsite 16E'   }),
        site16I   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"16I"   }, siteStyleRiver ), position: LatLngSite16I,   map: map, title: 'Campsite 16I'   }),
        site16J   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"16J"   }, siteStyleRiver ), position: LatLngSite16J,   map: map, title: 'Campsite 16J'   }),
        site16K   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"16K"   }, siteStyleRiver ), position: LatLngSite16K,   map: map, title: 'Campsite 16K'   }),
        site16L   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"16L"   }, siteStyleRiver ), position: LatLngSite16L,   map: map, title: 'Campsite 16L'   }),
        site16M   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"16M"   }, siteStyleRiver ), position: LatLngSite16M,   map: map, title: 'Campsite 16M'   }),
        site30   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"30"   }, siteStyleRiver ), position: LatLngSite30,   map: map, title: 'Campsite 30'   }),
        site30A   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"30A"   }, siteStyleRiver ), position: LatLngSite30A,   map: map, title: 'Campsite 30A'   }),
        site31   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"31"   }, siteStyleRiver ), position: LatLngSite31,   map: map, title: 'Campsite 31'   }),
        site32   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"32"   }, siteStyleRiver ), position: LatLngSite32,   map: map, title: 'Campsite 32'   }),
        site33   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"33"   }, siteStyleRiver ), position: LatLngSite33,   map: map, title: 'Campsite 33'   }),
        site33A   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"33A"   }, siteStyleRiver ), position: LatLngSite33A,   map: map, title: 'Campsite 33A'   }),
        site34   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"34"   }, siteStyleRiver ), position: LatLngSite34,   map: map, title: 'Campsite 34'   }),
        site35   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"35"   }, siteStyleRiver ), position: LatLngSite35,   map: map, title: 'Campsite 35'   }),
        site36   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"36"   }, siteStyleRiver ), position: LatLngSite36,   map: map, title: 'Campsite 36'   }),
        site37   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"37"   }, siteStyleRiver ), position: LatLngSite37,   map: map, title: 'Campsite 37'   }),
        site38   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"38"   }, siteStyleRiver ), position: LatLngSite38,   map: map, title: 'Campsite 38'   }),
        site39   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"39"   }, siteStyleRiver ), position: LatLngSite39,   map: map, title: 'Campsite 39'   }),
        site40   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"40"   }, siteStyleRiver ), position: LatLngSite40,   map: map, title: 'Campsite 40'   }),
        site41   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"41"   }, siteStyleRiver ), position: LatLngSite41,   map: map, title: 'Campsite 41'   }),
        site42   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"42"   }, siteStyleRiver ), position: LatLngSite42,   map: map, title: 'Campsite 42'   }),
        site43   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"43"   }, siteStyleRiver ), position: LatLngSite43,   map: map, title: 'Campsite 43'   }),
        site44   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"44"   }, siteStyleRiver ), position: LatLngSite44,   map: map, title: 'Campsite 44'   }),
        site45   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"45"   }, siteStyleRiver ), position: LatLngSite45,   map: map, title: 'Campsite 45'   }),
        site46   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"46"   }, siteStyleRiver ), position: LatLngSite46,   map: map, title: 'Campsite 46'   }),
        site47   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"47"   }, siteStyleRiver ), position: LatLngSite47,   map: map, title: 'Campsite 47'   }),
        site47A   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"47A"   }, siteStyleRiver ), position: LatLngSite47A,   map: map, title: 'Campsite 47A'   }),
        site54   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"54"   }, siteStyleRiver ), position: LatLngSite54,   map: map, title: 'Campsite 54'   }),
        site54A   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"54A"   }, siteStyleRiver ), position: LatLngSite54A,   map: map, title: 'Campsite 54A'   }),
        site57   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"57"   }, siteStyleRiver ), position: LatLngSite57,   map: map, title: 'Campsite 57'   }),
        site69   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"69"   }, siteStyleRiver ), position: LatLngSite69,   map: map, title: 'Campsite 69'   }),
        site70   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"70"   }, siteStyleRiver ), position: LatLngSite70,   map: map, title: 'Campsite 70'   }),
        site71   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"71"   }, siteStyleRiver ), position: LatLngSite71,   map: map, title: 'Campsite 71'   }),
        site72   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"72"   }, siteStyleRiver ), position: LatLngSite72,   map: map, title: 'Campsite 72'   }),
        site73   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"73"   }, siteStyleRiver ), position: LatLngSite73,   map: map, title: 'Campsite 73'   }),
        site74   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"74"   }, siteStyleRiver ), position: LatLngSite74,   map: map, title: 'Campsite 74'   }),
        site75   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"75"   }, siteStyleRiver ), position: LatLngSite75,   map: map, title: 'Campsite 75'   }),
        site76   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"76"   }, siteStyleRiver ), position: LatLngSite76,   map: map, title: 'Campsite 76'   }),
        site77   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"77"   }, siteStyleRiver ), position: LatLngSite77,   map: map, title: 'Campsite 77'   }),
        site78   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"78"   }, siteStyleRiver ), position: LatLngSite78,   map: map, title: 'Campsite 78'   }),
        site79   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"79"   }, siteStyleRiver ), position: LatLngSite79,   map: map, title: 'Campsite 79'   }),
        site80   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"80"   }, siteStyleRiver ), position: LatLngSite80,   map: map, title: 'Campsite 80'   }),
        site81   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"81"   }, siteStyleRiver ), position: LatLngSite81,   map: map, title: 'Campsite 81'   }),
        site82   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"82"   }, siteStyleRiver ), position: LatLngSite82,   map: map, title: 'Campsite 82'   }),
        site83   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"83"   }, siteStyleRiver ), position: LatLngSite83,   map: map, title: 'Campsite 83'   }),
        site84   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"84"   }, siteStyleRiver ), position: LatLngSite84,   map: map, title: 'Campsite 84'   }),
        site85   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"85"   }, siteStyleRiver ), position: LatLngSite85,   map: map, title: 'Campsite 85'   }),
        site86   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"86"   }, siteStyleRiver ), position: LatLngSite86,   map: map, title: 'Campsite 86'   }),
        site87   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"87"   }, siteStyleRiver ), position: LatLngSite87,   map: map, title: 'Campsite 87'   }),
        site88   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"88"   }, siteStyleRiver ), position: LatLngSite88,   map: map, title: 'Campsite 88'   }),
        site89   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"89"   }, siteStyleRiver ), position: LatLngSite89,   map: map, title: 'Campsite 89'   }),
        site91   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"91"   }, siteStyleRiver ), position: LatLngSite91,   map: map, title: 'Campsite 91'   }),
        site93   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"93"   }, siteStyleRiver ), position: LatLngSite93,   map: map, title: 'Campsite 93'   }),
        site95   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"95"   }, siteStyleRiver ), position: LatLngSite95,   map: map, title: 'Campsite 95'   }),
        site98   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"98"   }, siteStyleRiver ), position: LatLngSite98,   map: map, title: 'Campsite 98'   }),
        site26   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"26"   }, siteStyle      ), position: LatLngSite26,   map: map, title: 'Campsite 26'   }),
        site25   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"25"   }, siteStyle      ), position: LatLngSite25,   map: map, title: 'Campsite 25'   }),
        site2   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"2"   }, siteStyle      ), position: LatLngSite2,   map: map, title: 'Campsite 2'   }),
        site2B   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"2B"   }, siteStyle      ), position: LatLngSite2B,   map: map, title: 'Campsite 2B'   }),
        site3A   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"3A"   }, siteStyle      ), position: LatLngSite3A,   map: map, title: 'Campsite 3A'   }),
        site4   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"4"   }, siteStyle      ), position: LatLngSite4,   map: map, title: 'Campsite 4'   }),
        site4A   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"4A"   }, siteStyle      ), position: LatLngSite4A,   map: map, title: 'Campsite 4A'   }),
        site4B   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"4B"   }, siteStyle      ), position: LatLngSite4B,   map: map, title: 'Campsite 4B'   }),
        site6A   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"6A"   }, siteStyle      ), position: LatLngSite6A,   map: map, title: 'Campsite 6A'   }),
        site7A   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"7A"   }, siteStyle      ), position: LatLngSite7A,   map: map, title: 'Campsite 7A'   }),
        site7B   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"7B"   }, siteStyle      ), position: LatLngSite7B,   map: map, title: 'Campsite 7B'   }),
        site10A   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"10A"   }, siteStyle      ), position: LatLngSite10A,   map: map, title: 'Campsite 10A'   }),
        site23   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"23"   }, siteStyle      ), position: LatLngSite23,   map: map, title: 'Campsite 23'   }),
        site22   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"22"   }, siteStyle      ), position: LatLngSite22,   map: map, title: 'Campsite 22'   }),
        site22A   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"22A"   }, siteStyle      ), position: LatLngSite22A,   map: map, title: 'Campsite 22A'   }),
        site21   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"21"   }, siteStyle      ), position: LatLngSite21,   map: map, title: 'Campsite 21'   }),
        site21A   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"21A"   }, siteStyle      ), position: LatLngSite21A,   map: map, title: 'Campsite 21A'   }),
        site20   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"20"   }, siteStyle      ), position: LatLngSite20,   map: map, title: 'Campsite 20'   }),
        site20A   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"20A"   }, siteStyle      ), position: LatLngSite20A,   map: map, title: 'Campsite 20A'   }),
        site20B   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"20B"   }, siteStyle      ), position: LatLngSite20B,   map: map, title: 'Campsite 20B'   }),
        site12B   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"12B"   }, siteStyle      ), position: LatLngSite12B,   map: map, title: 'Campsite 12B'   }),
        site12C   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"12C"   }, siteStyle      ), position: LatLngSite12C,   map: map, title: 'Campsite 12C'   }),
        site12D   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"12D"   }, siteStyle      ), position: LatLngSite12D,   map: map, title: 'Campsite 12D'   }),
        site12E   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"12E"   }, siteStyle      ), position: LatLngSite12E,   map: map, title: 'Campsite 12E'   }),
        site13A   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"13A"   }, siteStyle      ), position: LatLngSite13A,   map: map, title: 'Campsite 13A'   }),
        site15E   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"15E"   }, siteStyle      ), position: LatLngSite15E,   map: map, title: 'Campsite 15E'   }),
        site15D   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"15D"   }, siteStyle      ), position: LatLngSite15D,   map: map, title: 'Campsite 15D'   }),
        site15C   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"15C"   }, siteStyle      ), position: LatLngSite15C,   map: map, title: 'Campsite 15C'   }),
        site15B   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"15B"   }, siteStyle      ), position: LatLngSite15B,   map: map, title: 'Campsite 15B'   }),
        site13B   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"13B"   }, siteStyle      ), position: LatLngSite13B,   map: map, title: 'Campsite 13B'   }),
        site19   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"19"   }, siteStyle      ), position: LatLngSite19,   map: map, title: 'Campsite 19'   }),
        site19A   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"19A"   }, siteStyle      ), position: LatLngSite19A,   map: map, title: 'Campsite 19A'   }),
        site18   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"18"   }, siteStyle      ), position: LatLngSite18,   map: map, title: 'Campsite 18'   }),
        site18A   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"18A"   }, siteStyle      ), position: LatLngSite18A,   map: map, title: 'Campsite 18A'   }),
        site17E   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"17E"   }, siteStyle      ), position: LatLngSite17E,   map: map, title: 'Campsite 17E'   }),
        site17F   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"17F"   }, siteStyle      ), position: LatLngSite17F,   map: map, title: 'Campsite 17F'   }),
        site17D   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"17D"   }, siteStyle      ), position: LatLngSite17D,   map: map, title: 'Campsite 17D'   }),
        site30B   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"30B"   }, siteStyle      ), position: LatLngSite30B,   map: map, title: 'Campsite 30B'   }),
        site36A   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"36A"   }, siteStyle      ), position: LatLngSite36A,   map: map, title: 'Campsite 36A'   }),
        site53A   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"53A"   }, siteStyle      ), position: LatLngSite53A,   map: map, title: 'Campsite 53A'   }),
        site53   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"53"   }, siteStyle      ), position: LatLngSite53,   map: map, title: 'Campsite 53'   }),
        site52C   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"52C"   }, siteStyle      ), position: LatLngSite52C,   map: map, title: 'Campsite 52C'   }),
        site52   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"52"   }, siteStyle      ), position: LatLngSite52,   map: map, title: 'Campsite 52'   }),
        site52B   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"52B"   }, siteStyle      ), position: LatLngSite52B,   map: map, title: 'Campsite 52B'   }),
        site52A   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"52A"   }, siteStyle      ), position: LatLngSite52A,   map: map, title: 'Campsite 52A'   }),
        site39A   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"39A"   }, siteStyle      ), position: LatLngSite39A,   map: map, title: 'Campsite 39A'   }),
        site40A   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"40A"   }, siteStyle      ), position: LatLngSite40A,   map: map, title: 'Campsite 40A'   }),
        site40B   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"40B"   }, siteStyle      ), position: LatLngSite40B,   map: map, title: 'Campsite 40B'   }),
        site51B   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"51B"   }, siteStyle      ), position: LatLngSite51B,   map: map, title: 'Campsite 51B'   }),
        site51A   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"51A"   }, siteStyle      ), position: LatLngSite51A,   map: map, title: 'Campsite 51A'   }),
        site51   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"51"   }, siteStyle      ), position: LatLngSite51,   map: map, title: 'Campsite 51'   }),
        site50   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"50"   }, siteStyle      ), position: LatLngSite50,   map: map, title: 'Campsite 50'   }),
        site49   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"49"   }, siteStyle      ), position: LatLngSite49,   map: map, title: 'Campsite 49'   }),
        site49A   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"49A"   }, siteStyle      ), position: LatLngSite49A,   map: map, title: 'Campsite 49A'   }),
        site48   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"48"   }, siteStyle      ), position: LatLngSite48,   map: map, title: 'Campsite 48'   }),
        site55   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"55"   }, siteStyle      ), position: LatLngSite55,   map: map, title: 'Campsite 55'   }),
        site56   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"56"   }, siteStyle      ), position: LatLngSite56,   map: map, title: 'Campsite 56'   }),
        site56A   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"56A"   }, siteStyle      ), position: LatLngSite56A,   map: map, title: 'Campsite 56A'   }),
        site59   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"59"   }, siteStyle      ), position: LatLngSite59,   map: map, title: 'Campsite 59'   }),
        site58   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"58"   }, siteStyle      ), position: LatLngSite58,   map: map, title: 'Campsite 58'   }),
        site60   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"60"   }, siteStyle      ), position: LatLngSite60,   map: map, title: 'Campsite 60'   }),
        site61   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"61"   }, siteStyle      ), position: LatLngSite61,   map: map, title: 'Campsite 61'   }),
        site62   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"62"   }, siteStyle      ), position: LatLngSite62,   map: map, title: 'Campsite 62'   }),
        site63   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"63"   }, siteStyle      ), position: LatLngSite63,   map: map, title: 'Campsite 63'   }),
        site64   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"64"   }, siteStyle      ), position: LatLngSite64,   map: map, title: 'Campsite 64'   }),
        site65   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"65"   }, siteStyle      ), position: LatLngSite65,   map: map, title: 'Campsite 65'   }),
        site66   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"66"   }, siteStyle      ), position: LatLngSite66,   map: map, title: 'Campsite 66'   }),
        site67   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"67"   }, siteStyle      ), position: LatLngSite67,   map: map, title: 'Campsite 67'   }),
        site68   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"68"   }, siteStyle      ), position: LatLngSite68,   map: map, title: 'Campsite 68'   }),
        site68A   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"68A"   }, siteStyle      ), position: LatLngSite68A,   map: map, title: 'Campsite 68A'   }),
        site90   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"90"   }, siteStyle      ), position: LatLngSite90,   map: map, title: 'Campsite 90'   }),
        site92   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"92"   }, siteStyle      ), position: LatLngSite92,   map: map, title: 'Campsite 92'   }),
        site94   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"94"   }, siteStyle      ), position: LatLngSite94,   map: map, title: 'Campsite 94'   }),
        site96   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"96"   }, siteStyle      ), position: LatLngSite96,   map: map, title: 'Campsite 96'   }),
        site97   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"97"   }, siteStyle      ), position: LatLngSite97,   map: map, title: 'Campsite 97'   }),
        site47B   = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.MARKER, { text:"47B"   }, siteStyle      ), position: LatLngSite47B,   map: map, title: 'Campsite 47B'   });
        
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
        ablutionE = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.BUBBLE, { text:"E" }, ablutionStyle ), position: LatLngAblutionE, map: map, title: 'Ablution Block E' }),
        ablutionF = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.BUBBLE, { text:"F" }, ablutionStyle ), position: LatLngAblutionF, map: map, title: 'Ablution Block F' });

    // pools

    var pool1 = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.BUBBLE, { text:"Pool" }, poolStyle ), position: LatLngPool1, map: map, title: 'Swimming Pool' }),
        pool2 = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.BUBBLE, { text:"Pool" }, poolStyle ), position: LatLngPool2, map: map, title: 'Swimming Pool' }),
        pool3 = new StyledMarker({ styleIcon: new StyledIcon(StyledIconTypes.BUBBLE, { text:"Pool" }, poolStyle ), position: LatLngPool3, map: map, title: 'Swimming Pool' });

    // information windows

    // window markup

    var winBegin =

        '<div id="info-window" style="overflow: hidden; text-align: center;">'+

            '<h1 style="font-family: sans-serif; font-size: 1.2em; font-weight: bold; text-transform: none; margin: 0 0 4px 0; padding: 2px 0 6px 0; letter-spacing: normal; color: #284F2C">'+

                'Campsite ',

        winEnd =

            '</h1></div>'; //+
        //
        //     '<a href="/stay/campsites/',
        //
        // winEnd =
        //
        //     '" style="font-size: 1.05em; line-height: 1.2; padding: 0 0 5px 0;">'+
        //
        //         'View Details'+
        //
        //     '</a>'+
        //
        // '</div>';

    // set options, arm

    winOptsSite1 = { position: LatLngSite1, content: winBegin + '1' + winEnd };
    var windowSite1 = new google.maps.InfoWindow(winOptsSite1);
    google.maps.event.addListener(site1, 'click', function() { windowSite1.open(map, site1) });

    winOptsSite2 = { position: LatLngSite2, content: winBegin + '2' + winEnd };
    var windowSite2 = new google.maps.InfoWindow(winOptsSite2);
    google.maps.event.addListener(site2, 'click', function() { windowSite2.open(map, site2) });

    winOptsSite2A = { position: LatLngSite1, content: winBegin + '2A' + winEnd };
    var windowSite2A = new google.maps.InfoWindow(winOptsSite2A);
    google.maps.event.addListener(site2A, 'click', function() { windowSite2A.open(map, site2A) });

    winOptsSite3 = { position: LatLngSite1, content: winBegin + '3' + winEnd };
    var windowSite3 = new google.maps.InfoWindow(winOptsSite3);
    google.maps.event.addListener(site3, 'click', function() { windowSite3.open(map, site3) });

    winOptsSite3A = { position: LatLngSite3A, content: winBegin + '3A' + winEnd };
    var windowSite3A = new google.maps.InfoWindow(winOptsSite3A);
    google.maps.event.addListener(site3A, 'click', function() { windowSite3A.open(map, site3A) });

    winOptsSite4 = { position: LatLngSite4, content: winBegin + '4' + winEnd };
    var windowSite4 = new google.maps.InfoWindow(winOptsSite4);
    google.maps.event.addListener(site4, 'click', function() { windowSite4.open(map, site4) });

    winOptsSite4A = { position: LatLngSite4A, content: winBegin + '4A' + winEnd };
    var windowSite4A = new google.maps.InfoWindow(winOptsSite4A);
    google.maps.event.addListener(site4A, 'click', function() { windowSite4A.open(map, site4A) });

    winOptsSite5 = { position: LatLngSite5, content: winBegin + '5' + winEnd };
    var windowSite5 = new google.maps.InfoWindow(winOptsSite5);
    google.maps.event.addListener(site5, 'click', function() { windowSite5.open(map, site5) });

    winOptsSite6 = { position: LatLngSite6, content: winBegin + '6' + winEnd };
    var windowSite6 = new google.maps.InfoWindow(winOptsSite6);
    google.maps.event.addListener(site6, 'click', function() { windowSite6.open(map, site6) });

    winOptsSite6A = { position: LatLngSite6A, content: winBegin + '6A' + winEnd };
    var windowSite6A = new google.maps.InfoWindow(winOptsSite6A);
    google.maps.event.addListener(site6A, 'click', function() { windowSite6A.open(map, site6A) });

    winOptsSite7 = { position: LatLngSite7, content: winBegin + '7' + winEnd };
    var windowSite7 = new google.maps.InfoWindow(winOptsSite7);
    google.maps.event.addListener(site7, 'click', function() { windowSite7.open(map, site7) });

    winOptsSite8 = { position: LatLngSite8, content: winBegin + '8' + winEnd };
    var windowSite8 = new google.maps.InfoWindow(winOptsSite8);
    google.maps.event.addListener(site8, 'click', function() { windowSite8.open(map, site8) });

    winOptsSite9 = { position: LatLngSite9, content: winBegin + '9' + winEnd };
    var windowSite9 = new google.maps.InfoWindow(winOptsSite9);
    google.maps.event.addListener(site9, 'click', function() { windowSite9.open(map, site9) });

    winOptsSite9A = { position: LatLngSite9A, content: winBegin + '9A' + winEnd };
    var windowSite9A = new google.maps.InfoWindow(winOptsSite9A);
    google.maps.event.addListener(site9A, 'click', function() { windowSite9A.open(map, site9A) });

    winOptsSite10 = { position: LatLngSite10, content: winBegin + '10' + winEnd };
    var windowSite10 = new google.maps.InfoWindow(winOptsSite10);
    google.maps.event.addListener(site10, 'click', function() { windowSite10.open(map, site10) });

    winOptsSite11 = { position: LatLngSite11, content: winBegin + '11' + winEnd };
    var windowSite11 = new google.maps.InfoWindow(winOptsSite11);
    google.maps.event.addListener(site11, 'click', function() { windowSite11.open(map, site11) });

    winOptsSite11A = { position: LatLngSite11A, content: winBegin + '11A' + winEnd };
    var windowSite11A = new google.maps.InfoWindow(winOptsSite11A);
    google.maps.event.addListener(site11A, 'click', function() { windowSite11A.open(map, site11A) });

    winOptsSite11B = { position: LatLngSite11B, content: winBegin + '11B' + winEnd };
    var windowSite11B = new google.maps.InfoWindow(winOptsSite11B);
    google.maps.event.addListener(site11B, 'click', function() { windowSite11B.open(map, site11B) });

    winOptsSite11C = { position: LatLngSite11C, content: winBegin + '11C' + winEnd };
    var windowSite11C = new google.maps.InfoWindow(winOptsSite11C);
    google.maps.event.addListener(site11C, 'click', function() { windowSite11C.open(map, site11C) });

    winOptsSite12 = { position: LatLngSite12, content: winBegin + '12' + winEnd };
    var windowSite12 = new google.maps.InfoWindow(winOptsSite12);
    google.maps.event.addListener(site12, 'click', function() { windowSite12.open(map, site12) });

    winOptsSite12A = { position: LatLngSite12A, content: winBegin + '12A' + winEnd };
    var windowSite12A = new google.maps.InfoWindow(winOptsSite12A);
    google.maps.event.addListener(site12A, 'click', function() { windowSite12A.open(map, site12A) });

    winOptsSite12B = { position: LatLngSite12B, content: winBegin + '12B' + winEnd };
    var windowSite12B = new google.maps.InfoWindow(winOptsSite12B);
    google.maps.event.addListener(site12B, 'click', function() { windowSite12B.open(map, site12B) });

    winOptsSite12C = { position: LatLngSite12C, content: winBegin + '12C' + winEnd };
    var windowSite12C = new google.maps.InfoWindow(winOptsSite12C);
    google.maps.event.addListener(site12C, 'click', function() { windowSite12C.open(map, site12C) });

    winOptsSite12D = { position: LatLngSite12D, content: winBegin + '12D' + winEnd };
    var windowSite12D = new google.maps.InfoWindow(winOptsSite12D);
    google.maps.event.addListener(site12D, 'click', function() { windowSite12D.open(map, site12D) });

    winOptsSite12E = { position: LatLngSite12E, content: winBegin + '12E' + winEnd };
    var windowSite12E = new google.maps.InfoWindow(winOptsSite12E);
    google.maps.event.addListener(site12E, 'click', function() { windowSite12E.open(map, site12E) });

    winOptsSite13 = { position: LatLngSite13, content: winBegin + '13' + winEnd };
    var windowSite13 = new google.maps.InfoWindow(winOptsSite13);
    google.maps.event.addListener(site13, 'click', function() { windowSite13.open(map, site13) });

    winOptsSite13C = { position: LatLngSite13C, content: winBegin + '13C' + winEnd };
    var windowSite13C = new google.maps.InfoWindow(winOptsSite13C);
    google.maps.event.addListener(site13C, 'click', function() { windowSite13C.open(map, site13C) });

    winOptsSite14 = { position: LatLngSite14, content: winBegin + '14' + winEnd };
    var windowSite14 = new google.maps.InfoWindow(winOptsSite14);
    google.maps.event.addListener(site14, 'click', function() { windowSite14.open(map, site14) });

    winOptsSite14A = { position: LatLngSite14A, content: winBegin + '14A' + winEnd };
    var windowSite14A = new google.maps.InfoWindow(winOptsSite14A);
    google.maps.event.addListener(site14A, 'click', function() { windowSite14A.open(map, site14A) });

    winOptsSite15 = { position: LatLngSite15, content: winBegin + '15' + winEnd };
    var windowSite15 = new google.maps.InfoWindow(winOptsSite15);
    google.maps.event.addListener(site15, 'click', function() { windowSite15.open(map, site15) });

    winOptsSite15A = { position: LatLngSite15A, content: winBegin + '15A' + winEnd };
    var windowSite15A = new google.maps.InfoWindow(winOptsSite15A);
    google.maps.event.addListener(site15A, 'click', function() { windowSite15A.open(map, site15A) });

    winOptsSite15B = { position: LatLngSite15B, content: winBegin + '15B' + winEnd };
    var windowSite15B = new google.maps.InfoWindow(winOptsSite15B);
    google.maps.event.addListener(site15B, 'click', function() { windowSite15B.open(map, site15B) });

    winOptsSite15C = { position: LatLngSite15C, content: winBegin + '15C' + winEnd };
    var windowSite15C = new google.maps.InfoWindow(winOptsSite15C);
    google.maps.event.addListener(site15C, 'click', function() { windowSite15C.open(map, site15C) });

    winOptsSite16 = { position: LatLngSite16, content: winBegin + '16' + winEnd };
    var windowSite16 = new google.maps.InfoWindow(winOptsSite16);
    google.maps.event.addListener(site16, 'click', function() { windowSite16.open(map, site16) });

    winOptsSite17 = { position: LatLngSite17, content: winBegin + '17' + winEnd };
    var windowSite17 = new google.maps.InfoWindow(winOptsSite17);
    google.maps.event.addListener(site17, 'click', function() { windowSite17.open(map, site17) });

    winOptsSite17A = { position: LatLngSite17A, content: winBegin + '17A' + winEnd };
    var windowSite17A = new google.maps.InfoWindow(winOptsSite17A);
    google.maps.event.addListener(site17A, 'click', function() { windowSite17A.open(map, site17A) });

    winOptsSite17B = { position: LatLngSite17B, content: winBegin + '17B' + winEnd };
    var windowSite17B = new google.maps.InfoWindow(winOptsSite17B);
    google.maps.event.addListener(site17B, 'click', function() { windowSite17B.open(map, site17B) });

    winOptsSite17C = { position: LatLngSite17C, content: winBegin + '17C' + winEnd };
    var windowSite17C = new google.maps.InfoWindow(winOptsSite17C);
    google.maps.event.addListener(site17C, 'click', function() { windowSite17C.open(map, site17C) });

    winOptsSite17D = { position: LatLngSite17D, content: winBegin + '17D' + winEnd };
    var windowSite17D = new google.maps.InfoWindow(winOptsSite17D);
    google.maps.event.addListener(site17D, 'click', function() { windowSite17D.open(map, site17D) });

    winOptsSite17E = { position: LatLngSite17E, content: winBegin + '17E' + winEnd };
    var windowSite17E = new google.maps.InfoWindow(winOptsSite17E);
    google.maps.event.addListener(site17E, 'click', function() { windowSite17E.open(map, site17E) });

    winOptsSite17F = { position: LatLngSite17F, content: winBegin + '17F' + winEnd };
    var windowSite17E = new google.maps.InfoWindow(winOptsSite17F);
    google.maps.event.addListener(site17F, 'click', function() { windowSite17F.open(map, site17F) });

    winOptsSite18 = { position: LatLngSite18, content: winBegin + '18' + winEnd };
    var windowSite18 = new google.maps.InfoWindow(winOptsSite18);
    google.maps.event.addListener(site18, 'click', function() { windowSite18.open(map, site18) });

    winOptsSite19 = { position: LatLngSite19, content: winBegin + '19' + winEnd };
    var windowSite19 = new google.maps.InfoWindow(winOptsSite19);
    google.maps.event.addListener(site19, 'click', function() { windowSite19.open(map, site19) });

    winOptsSite20 = { position: LatLngSite20, content: winBegin + '20' + winEnd };
    var windowSite20 = new google.maps.InfoWindow(winOptsSite20);
    google.maps.event.addListener(site20, 'click', function() { windowSite20.open(map, site20) });

    winOptsSite21 = { position: LatLngSite21, content: winBegin + '21' + winEnd };
    var windowSite21 = new google.maps.InfoWindow(winOptsSite21);
    google.maps.event.addListener(site21, 'click', function() { windowSite21.open(map, site21) });

    winOptsSite22 = { position: LatLngSite22, content: winBegin + '22' + winEnd };
    var windowSite22 = new google.maps.InfoWindow(winOptsSite22);
    google.maps.event.addListener(site22, 'click', function() { windowSite22.open(map, site22) });

    winOptsSite23 = { position: LatLngSite23, content: winBegin + '23' + winEnd };
    var windowSite23 = new google.maps.InfoWindow(winOptsSite23);
    google.maps.event.addListener(site23, 'click', function() { windowSite23.open(map, site23) });

    winOptsSite24 = { position: LatLngSite24, content: winBegin + '24' + winEnd };
    var windowSite24 = new google.maps.InfoWindow(winOptsSite24);
    google.maps.event.addListener(site24, 'click', function() { windowSite24.open(map, site24) });

    winOptsSite25 = { position: LatLngSite25, content: winBegin + '25' + winEnd };
    var windowSite25 = new google.maps.InfoWindow(winOptsSite25);
    google.maps.event.addListener(site25, 'click', function() { windowSite25.open(map, site25) });

    winOptsSite26 = { position: LatLngSite26, content: winBegin + '26' + winEnd };
    var windowSite26 = new google.maps.InfoWindow(winOptsSite26);
    google.maps.event.addListener(site26, 'click', function() { windowSite26.open(map, site26) });

    winOptsSite27 = { position: LatLngSite27, content: winBegin + '27' + winEnd };
    var windowSite27 = new google.maps.InfoWindow(winOptsSite27);
    google.maps.event.addListener(site27, 'click', function() { windowSite27.open(map, site27) });

    winOptsSite28 = { position: LatLngSite28, content: winBegin + '28' + winEnd };
    var windowSite28 = new google.maps.InfoWindow(winOptsSite28);
    google.maps.event.addListener(site28, 'click', function() { windowSite28.open(map, site28) });

    winOptsSite30 = { position: LatLngSite30, content: winBegin + '30' + winEnd };
    var windowSite30 = new google.maps.InfoWindow(winOptsSite30);
    google.maps.event.addListener(site30, 'click', function() { windowSite30.open(map, site30) });

    winOptsSite30A = { position: LatLngSite30A, content: winBegin + '30A' + winEnd };
    var windowSite30A = new google.maps.InfoWindow(winOptsSite30A);
    google.maps.event.addListener(site30A, 'click', function() { windowSite30A.open(map, site30A) });

    winOptsSite30B = { position: LatLngSite30B, content: winBegin + '30B' + winEnd };
    var windowSite30B = new google.maps.InfoWindow(winOptsSite30B);
    google.maps.event.addListener(site30B, 'click', function() { windowSite30B.open(map, site30B) });

    winOptsSite31 = { position: LatLngSite31, content: winBegin + '31' + winEnd };
    var windowSite31 = new google.maps.InfoWindow(winOptsSite31);
    google.maps.event.addListener(site31, 'click', function() { windowSite31.open(map, site31) });

    winOptsSite32 = { position: LatLngSite32, content: winBegin + '32' + winEnd };
    var windowSite32 = new google.maps.InfoWindow(winOptsSite32);
    google.maps.event.addListener(site32, 'click', function() { windowSite32.open(map, site32) });

    winOptsSite33 = { position: LatLngSite33, content: winBegin + '33' + winEnd };
    var windowSite33 = new google.maps.InfoWindow(winOptsSite33);
    google.maps.event.addListener(site33, 'click', function() { windowSite33.open(map, site33) });

    winOptsSite34 = { position: LatLngSite34, content: winBegin + '34' + winEnd };
    var windowSite34 = new google.maps.InfoWindow(winOptsSite34);
    google.maps.event.addListener(site34, 'click', function() { windowSite34.open(map, site34) });

    winOptsSite35 = { position: LatLngSite35, content: winBegin + '35' + winEnd };
    var windowSite35 = new google.maps.InfoWindow(winOptsSite35);
    google.maps.event.addListener(site35, 'click', function() { windowSite35.open(map, site35) });

    winOptsSite36 = { position: LatLngSite36, content: winBegin + '36' + winEnd };
    var windowSite36 = new google.maps.InfoWindow(winOptsSite36);
    google.maps.event.addListener(site36, 'click', function() { windowSite36.open(map, site36) });

    winOptsSite36A = { position: LatLngSite36A, content: winBegin + '36A' + winEnd };
    var windowSite36A = new google.maps.InfoWindow(winOptsSite36A);
    google.maps.event.addListener(site36A, 'click', function() { windowSite36A.open(map, site36A) });

    winOptsSite37 = { position: LatLngSite37, content: winBegin + '37' + winEnd };
    var windowSite37 = new google.maps.InfoWindow(winOptsSite37);
    google.maps.event.addListener(site37, 'click', function() { windowSite37.open(map, site37) });

    winOptsSite38 = { position: LatLngSite38, content: winBegin + '38' + winEnd };
    var windowSite38 = new google.maps.InfoWindow(winOptsSite38);
    google.maps.event.addListener(site38, 'click', function() { windowSite38.open(map, site38) });

    winOptsSite39 = { position: LatLngSite39, content: winBegin + '39' + winEnd };
    var windowSite39 = new google.maps.InfoWindow(winOptsSite39);
    google.maps.event.addListener(site39, 'click', function() { windowSite39.open(map, site39) });

    winOptsSite40 = { position: LatLngSite40, content: winBegin + '40' + winEnd };
    var windowSite40 = new google.maps.InfoWindow(winOptsSite40);
    google.maps.event.addListener(site40, 'click', function() { windowSite40.open(map, site40) });

    winOptsSite40A = { position: LatLngSite40A, content: winBegin + '40A' + winEnd };
    var windowSite40A = new google.maps.InfoWindow(winOptsSite40A);
    google.maps.event.addListener(site40A, 'click', function() { windowSite40A.open(map, site40A) });

    winOptsSite40B = { position: LatLngSite40B, content: winBegin + '40B' + winEnd };
    var windowSite40B = new google.maps.InfoWindow(winOptsSite40B);
    google.maps.event.addListener(site40B, 'click', function() { windowSite40B.open(map, site40B) });

    winOptsSite41 = { position: LatLngSite41, content: winBegin + '41' + winEnd };
    var windowSite41 = new google.maps.InfoWindow(winOptsSite41);
    google.maps.event.addListener(site41, 'click', function() { windowSite41.open(map, site41) });

    winOptsSite42 = { position: LatLngSite42, content: winBegin + '42' + winEnd };
    var windowSite42 = new google.maps.InfoWindow(winOptsSite42);
    google.maps.event.addListener(site42, 'click', function() { windowSite42.open(map, site42) });

    winOptsSite43 = { position: LatLngSite43, content: winBegin + '43' + winEnd };
    var windowSite43 = new google.maps.InfoWindow(winOptsSite43);
    google.maps.event.addListener(site43, 'click', function() { windowSite43.open(map, site43) });

    winOptsSite44 = { position: LatLngSite44, content: winBegin + '44' + winEnd };
    var windowSite44 = new google.maps.InfoWindow(winOptsSite44);
    google.maps.event.addListener(site44, 'click', function() { windowSite44.open(map, site44) });

    winOptsSite45 = { position: LatLngSite45, content: winBegin + '45' + winEnd };
    var windowSite45 = new google.maps.InfoWindow(winOptsSite45);
    google.maps.event.addListener(site45, 'click', function() { windowSite45.open(map, site45) });

    winOptsSite46 = { position: LatLngSite46, content: winBegin + '46' + winEnd };
    var windowSite46 = new google.maps.InfoWindow(winOptsSite46);
    google.maps.event.addListener(site46, 'click', function() { windowSite46.open(map, site46) });

    winOptsSite47 = { position: LatLngSite47, content: winBegin + '47' + winEnd };
    var windowSite47 = new google.maps.InfoWindow(winOptsSite47);
    google.maps.event.addListener(site47, 'click', function() { windowSite47.open(map, site47) });

    winOptsSite47A = { position: LatLngSite47A, content: winBegin + '47A' + winEnd };
    var windowSite47A = new google.maps.InfoWindow(winOptsSite47A);
    google.maps.event.addListener(site47A, 'click', function() { windowSite47A.open(map, site47A) });

    winOptsSite48 = { position: LatLngSite48, content: winBegin + '48' + winEnd };
    var windowSite48 = new google.maps.InfoWindow(winOptsSite48);
    google.maps.event.addListener(site48, 'click', function() { windowSite48.open(map, site48) });

    winOptsSite49 = { position: LatLngSite49, content: winBegin + '49' + winEnd };
    var windowSite49 = new google.maps.InfoWindow(winOptsSite49);
    google.maps.event.addListener(site49, 'click', function() { windowSite49.open(map, site49) });

    winOptsSite49A = { position: LatLngSite49A, content: winBegin + '49A' + winEnd };
    var windowSite49A = new google.maps.InfoWindow(winOptsSite49A);
    google.maps.event.addListener(site49A, 'click', function() { windowSite49A.open(map, site49A) });

    winOptsSite50 = { position: LatLngSite50, content: winBegin + '50' + winEnd };
    var windowSite50 = new google.maps.InfoWindow(winOptsSite50);
    google.maps.event.addListener(site50, 'click', function() { windowSite50.open(map, site50) });

    winOptsSite51 = { position: LatLngSite51, content: winBegin + '51' + winEnd };
    var windowSite51 = new google.maps.InfoWindow(winOptsSite51);
    google.maps.event.addListener(site51, 'click', function() { windowSite51.open(map, site51) });

    winOptsSite51A = { position: LatLngSite51A, content: winBegin + '51A' + winEnd };
    var windowSite51A = new google.maps.InfoWindow(winOptsSite51A);
    google.maps.event.addListener(site51A, 'click', function() { windowSite51A.open(map, site51A) });

    winOptsSite52 = { position: LatLngSite52, content: winBegin + '52' + winEnd };
    var windowSite52 = new google.maps.InfoWindow(winOptsSite52);
    google.maps.event.addListener(site52, 'click', function() { windowSite52.open(map, site52) });

    winOptsSite52A = { position: LatLngSite52A, content: winBegin + '52A' + winEnd };
    var windowSite52A = new google.maps.InfoWindow(winOptsSite52A);
    google.maps.event.addListener(site52A, 'click', function() { windowSite52A.open(map, site52A) });

    winOptsSite52B = { position: LatLngSite52B, content: winBegin + '52B' + winEnd };
    var windowSite52B = new google.maps.InfoWindow(winOptsSite52B);
    google.maps.event.addListener(site52B, 'click', function() { windowSite52B.open(map, site52B) });

    winOptsSite53 = { position: LatLngSite53, content: winBegin + '53' + winEnd };
    var windowSite53 = new google.maps.InfoWindow(winOptsSite53);
    google.maps.event.addListener(site53, 'click', function() { windowSite53.open(map, site53) });

    winOptsSite53A = { position: LatLngSite53A, content: winBegin + '53A' + winEnd };
    var windowSite53A = new google.maps.InfoWindow(winOptsSite53A);
    google.maps.event.addListener(site53A, 'click', function() { windowSite53A.open(map, site53A) });

    winOptsSite54 = { position: LatLngSite54, content: winBegin + '54' + winEnd };
    var windowSite54 = new google.maps.InfoWindow(winOptsSite54);
    google.maps.event.addListener(site54, 'click', function() { windowSite54.open(map, site54) });

    winOptsSite55 = { position: LatLngSite55, content: winBegin + '55' + winEnd };
    var windowSite55 = new google.maps.InfoWindow(winOptsSite55);
    google.maps.event.addListener(site55, 'click', function() { windowSite55.open(map, site55) });

    winOptsSite56 = { position: LatLngSite56, content: winBegin + '56' + winEnd };
    var windowSite56 = new google.maps.InfoWindow(winOptsSite56);
    google.maps.event.addListener(site56, 'click', function() { windowSite56.open(map, site56) });

    winOptsSite57 = { position: LatLngSite57, content: winBegin + '57' + winEnd };
    var windowSite57 = new google.maps.InfoWindow(winOptsSite57);
    google.maps.event.addListener(site57, 'click', function() { windowSite57.open(map, site57) });

    winOptsSite58 = { position: LatLngSite58, content: winBegin + '58' + winEnd };
    var windowSite58 = new google.maps.InfoWindow(winOptsSite58);
    google.maps.event.addListener(site58, 'click', function() { windowSite58.open(map, site58) });

    winOptsSite60 = { position: LatLngSite60, content: winBegin + '60' + winEnd };
    var windowSite60 = new google.maps.InfoWindow(winOptsSite60);
    google.maps.event.addListener(site60, 'click', function() { windowSite60.open(map, site60) });

    winOptsSite64 = { position: LatLngSite64, content: winBegin + '64' + winEnd };
    var windowSite64 = new google.maps.InfoWindow(winOptsSite64);
    google.maps.event.addListener(site64, 'click', function() { windowSite64.open(map, site64) });

    winOptsSite68 = { position: LatLngSite68, content: winBegin + '68' + winEnd };
    var windowSite68 = new google.maps.InfoWindow(winOptsSite68);
    google.maps.event.addListener(site68, 'click', function() { windowSite68.open(map, site68) });


}); // jquery

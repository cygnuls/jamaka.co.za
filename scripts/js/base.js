(function($) {

// **********************************************************************| optimizations

// performance: cache document in local scope
var doc = document;

// **********************************************************************| functions { utilities }

// html entity decoding
function decodeHtml(input) {
    // simulate dom environment with in-memory element
    var simulate = doc.createElement("textarea");
    // populate node with html to be decoded
    simulate.innerHTML = input;
    // return decoded html entities
    return simulate.value;
};

// **********************************************************************| functions { local }

var modules = {

    stay: function() {

        // thumbnails
        $('#gallery img').each(function() {

            var defPath = $(this).attr('src'),
                preLoad = new Image(),
                imgExt = /(\.\w{3,4}$)/;

            preLoad.src = defPath.replace(imgExt, '_h$1');

            $(this).hover(function() {
                $(this).attr('src', preLoad.src);
            }, function() {
                $(this).attr('src', defPath);
            }); // end hover

        }); // end each

        // gallery
        $('#gallery a').click(function(e){

            e.preventDefault();

            var imgPath = $(this).attr('href'),
                imgPrev = $('#display img'),
                imgNext = $('<img src="' + imgPath + '">');

            imgNext.hide();

            $('#display').prepend(imgNext);

            imgNext.fadeIn(600);

            imgPrev.fadeOut(700, function() {

                $(this).remove();

            }); // end fadeOut

        }); // end click

        // display first image on page load
        $('#gallery a:first').click();

    }, // stay

    gallery: function() {

        // animate hover activity on images

        var target = $('#gallery main section a');

        target.append('<img src="/images/gallery/focus.png">');

        target.bind({

            'mouseenter': function() {
                // :nth-child(2) == .eq(1)
                $(this).children(':nth-child(2)').animate({
                    'opacity': 0
                }, 200, 'swing')
            },
            'mouseleave': function() {
                $(this).children().eq(1).animate({
                    'opacity': 1
                }, 200, 'swing')
            }

        });

        // override default fancybox styling and options

        $('#gallery main section a').fancybox({

            // overflow CSS property: create/hide scrollbars
            scrolling: 'auto',
            // # of images to preload (def: 3)
            preload: 3,
            // enables cyclic navigation (last -> first)
            loop: true,
            // custom styling (in base stylesheet)
            wrapCSS: 'bespoke',
            // or array: [top, right, bottom, left] (def: 15)
            padding: 15,
            // effects ('elastic', 'fade', 'none')
            prevEffect: 'fade',
            nextEffect: 'fade',
            // easing (default: 'swing')
            prevEasing: 'swing',
            nextEasing: 'swing',
            // animation duration ('slow', 'medium', 'fast')
            prevSpeed: 666,
            nextSpeed: 666,
            // user interaction
            closeBtn: false,
            arrows: false,
            nextClick: false,
            mouseWheel: true,
            // slideshow capability
            autoPlay: true,
            playSpeed: 4444,

            // augmentation
            helpers: {
                // set "overlay: null" to remove completely
                overlay: {
                    // close fancybox on overlay click
                    closeClick: true,
                    // duration of overlay fadeOut
                    speedOut: 400,

                    css: {

                       'background': 'rgba(20,20,20,0.9)'

                    } // css

                }, // overlay

                // control where the title attribute displays
                title: {
                    type: 'inside'
                },

                thumbs: {

                    width: 70,
                    height: 47,
                    // 'top' | 'bottom'
                    position: 'bottom'

                }, // thumbs

                buttons: {

                    // 'top' | 'bottom'
                    position: 'top',
                    // button template - useful for title changes
                    tpl: '<div id="fancybox-buttons">                                                                       \
                            <ul><li><a class="btnPrev"      title="Terug"               href="javascript:;"></a></li>       \
                                <li><a class="btnPlay"      title="Begin"               href="javascript:;"></a></li>       \
                                <li><a class="btnNext"      title="Volgende"            href="javascript:;"></a></li>       \
                                <li><a class="btnToggle"    title="Verander Grootte"    href="javascript:;"></a></li>       \
                                <li><a class="btnClose"     title="Maak Toe"            href="javascript:;"></a></li>       \
                            </ul>                                                                                           \
                          </div>'

                } // buttons

            }, // helpers

            // general template, useful for amending language, sensitive to app audience
            tpl: {
                error    : '<p class="fancybox-error">Die versoekte inhoud kon nie gelaai word nie.<br/>Probeer asseblief later weer.</p>',
                            closeBtn : '<a title="Maak Toe" class="fancybox-item fancybox-close" href="javascript:;"></a>',
                            next     : '<a title="Volgende" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
                            prev     : '<a title="Terug" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
            }

        }); // fancybox

    },

    contact: function() {

        // cache DOM nodes

        var optsCottage  = $('#options-cottage'),
            optsCampsite = $('#options-campsite');

        // hide conditional fields
        optsCottage.hide();
        optsCampsite.hide();
        // radio input corresponding to a section will show it
        $('#type input').on('click', function() {

            optsCottage.parent().css('height', '62px'); // mitigate jumpyness

            if ($(this).prop('id') == 'cottage') {
                optsCottage.slideDown();
                optsCampsite.slideUp();
            } else {
                optsCampsite.slideDown();
                optsCottage.slideUp();
            };
        });

        // date picker options
        $('#arrival, #departure').datepicker({

            showButtonPanel: true,
            currentText: "Vandag",
            closeText: 'Kies',
            dateFormat: 'DD, d MM, yy',
            showAnim: 'fadeIn',
            showOn: 'button',
            buttonText: '&#8986;',
            defaultDate: +1,
            minDate: +0,
            duration: 300

        });
        
    } // contact

};

// **********************************************************************| functions { global }

// mobile navigation

function dropDown() {

    $('header nav[role="primary"] ul li.sub').on({

        'mouseenter': function() {

            var self = $(this);

            self.addClass('navHoverBack');
            self.children('ul').stop().slideDown(300, 'swing').show();

        },

        'mouseleave': function() {

            var self = $(this);

            self.removeClass('navHoverBack');
            self.children('ul').stop().slideUp(300, 'swing');

        }
    });
};

// mobile navigation

function handyNav() {

    $('header button').on('click', function() {

        $(this).next().slideToggle(300);

    });

};

// remove sans js warning
function sansJs() {

    var child = doc.getElementById('sanScript');
    child.parentNode.removeChild(child);

};

// modify behaviour of external anchors
function extAnchors() {

    $('a, area').filter(function() {

        return this.hostname && this.hostname != location.hostname;

    }).attr({

        target: '_blank',
        title: function() {
            desc = ($(this).text()).slice(0,17);
            return desc + '... (open in tab)';
        }
    });

};

// ***********************************************************************| execution

$(function() {

    ///// global

    // sansJs();
    dropDown();
    handyNav();
    extAnchors();

    ///// local

    var id = doc.body.id;
    if (id && id in modules) {
        modules[id]();
    };

});

// **********************************************************************| sandbox


})(jQuery); // end iife

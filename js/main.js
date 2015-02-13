//Skrollr
var windowWidth = $(window).width();

window.onload = function() {

  $.extend($.easing, {
    def: 'easeOutQuad',
    swing: function (x, t, b, c, d) {
        //alert($.easing.default);
        return $.easing[$.easing.def](x, t, b, c, d);
      },
      easeInQuad: function (x, t, b, c, d) {
        return c * (t /= d) * t + b;
      },
      easeOutQuad: function (x, t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b;
      },
      easeInOutQuad: function (x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t + b;
        return -c / 2 * ((--t) * (t - 2) - 1) + b;
      },
      easeInCubic: function (x, t, b, c, d) {
        return c * (t /= d) * t * t + b;
      },
      easeOutCubic: function (x, t, b, c, d) {
        return c * ((t = t / d - 1) * t * t + 1) + b;
      },
      easeInOutCubic: function (x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t + 2) + b;
      },
      easeInQuart: function (x, t, b, c, d) {
        return c * (t /= d) * t * t * t + b;
      },
      easeOutQuart: function (x, t, b, c, d) {
        return -c * ((t = t / d - 1) * t * t * t - 1) + b;
      },
      easeInOutQuart: function (x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
        return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
      },
      easeInQuint: function (x, t, b, c, d) {
        return c * (t /= d) * t * t * t * t + b;
      },
      easeOutQuint: function (x, t, b, c, d) {
        return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
      },
      easeInOutQuint: function (x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
      },
      easeInSine: function (x, t, b, c, d) {
        return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
      },
      easeOutSine: function (x, t, b, c, d) {
        return c * Math.sin(t / d * (Math.PI / 2)) + b;
      },
      easeInOutSine: function (x, t, b, c, d) {
        return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
      },
      easeInExpo: function (x, t, b, c, d) {
        return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
      },
      easeOutExpo: function (x, t, b, c, d) {
        return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
      },
      easeInOutExpo: function (x, t, b, c, d) {
        if (t == 0) return b;
        if (t == d) return b + c;
        if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
        return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
      },
      easeInCirc: function (x, t, b, c, d) {
        return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
      },
      easeOutCirc: function (x, t, b, c, d) {
        return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
      },
      easeInOutCirc: function (x, t, b, c, d) {
        if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
        return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
      },
      easeInElastic: function (x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0) return b;
        if ((t /= d) == 1) return b + c;
        if (!p) p = d * .3;
        if (a < Math.abs(c)) {
          a = c;
          var s = p / 4;
        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
        return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
      },
      easeOutElastic: function (x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0) return b;
        if ((t /= d) == 1) return b + c;
        if (!p) p = d * .3;
        if (a < Math.abs(c)) {
          a = c;
          var s = p / 4;
        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
        return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
      },
      easeInOutElastic: function (x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0) return b;
        if ((t /= d / 2) == 2) return b + c;
        if (!p) p = d * (.3 * 1.5);
        if (a < Math.abs(c)) {
          a = c;
          var s = p / 4;
        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
        if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
        return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
      },
      easeInBack: function (x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c * (t /= d) * t * ((s + 1) * t - s) + b;
      },
      easeOutBack: function (x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
      },
      easeInOutBack: function (x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
        return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
      },
      easeInBounce: function (x, t, b, c, d) {
        return c - $.easing.easeOutBounce(x, d - t, 0, c, d) + b;
      },
      easeOutBounce: function (x, t, b, c, d) {
        if ((t /= d) < (1 / 2.75)) {
          return c * (7.5625 * t * t) + b;
        } else if (t < (2 / 2.75)) {
          return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
        } else if (t < (2.5 / 2.75)) {
          return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
        } else {
          return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
        }
      },
      easeInOutBounce: function (x, t, b, c, d) {
        if (t < d / 2) return $.easing.easeInBounce(x, t * 2, 0, c, d) * .5 + b;
        return $.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b;
      }
    });


if(windowWidth > 1024){
  var s = skrollr.init({
    forceHeight: false,
    smoothScrolling: true,
    mobileDeceleration: 0.004,
    easing: {
    //This easing will sure drive you crazy
    wtf: Math.random,
    inverted: function(p) {
      return 1 - p;
    }
    },
    render: function(data) {
    //Log the current scroll position.
    //console.log(data.curTop);
    $('#info').text(data.curTop);
    }
});
} else {
        //Hide preloaded images
        //hide_images();
      }
  //  press.hide( "fast", function() {
  //   s.refresh();
  // });
};

//Slick slider
function do_slick(){
  $('.partners').slick({
    centerMode: true,
    centerPadding: '30px',
    variableWidth: false,
    slidesToShow: 1,
    dots: false,
    arrows: false,
    infinite: true,
    respondTo: "slider",
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '30px',
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '15px',
        slidesToShow: 1
      }
    }
    ]
  });
}

function do_logo_slider(){
//Logos
$('.logos').slick({
  dots: true,
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 6,
  responsive: [
  {
    breakpoint: 1024,
    settings: {
      arrows: false,
      centerMode: true,
      centerPadding: '0px',
      slidesToShow: 6,
      slidesToScroll: 6,
    }
  },
  {
    breakpoint: 768,
    settings: {
      arrows: false,
      centerMode: true,
      centerPadding: '0px',
      slidesToShow: 4,
      slidesToScroll: 4,
    }
  },
  {
    breakpoint: 480,
    settings: {
      arrows: false,
      centerMode: true,
      centerPadding: '0px',
      slidesToShow: 3,
      slidesToScroll: 3,
    }
  }
  ]
});
}

function do_image_slider(){
//Logos
$('.image-gallery').slick({
  infinite: true,
  dots: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: '150px',
  responsive: [
  {
    breakpoint: 1024,
    settings: {
      arrows: false,
      centerMode: true,
      centerPadding: '0px',
      slidesToShow: 1,
      slidesToScroll: 1,
      centerPadding: '0px',
    }
  },
  {
    breakpoint: 768,
    settings: {
      arrows: false,
      centerMode: true,
      centerPadding: '0px',
      slidesToShow: 1,
      slidesToScroll: 1,
    }
  },
  {
    breakpoint: 480,
    settings: {
      arrows: false,
      centerMode: true,
      centerPadding: '0px',
      slidesToShow: 1,
      slidesToScroll: 1,
    }
  }
  ]
});
}


function do_select_style(){
    $('#normal_select').dropkick({
      mobile: true
    });
  };

function do_google_map(latitude, longitude){

  //Google maps
  var map;
  var myMap = new google.maps.LatLng(latitude, longitude);
  //var myMap = new google.maps.LatLng(51.514753, -0.136690);
  var image;

  var stylez = [
  {
    featureType: "all",
    elementType: "all",
    stylers: [/*
    { "saturation": -50 },
    { "hue": "#8f9d8d" },
    { "weight": 1 }*/]
  }
  ];

  var mapOptions = {
    zoom: 13,
    center: myMap,
    mapTypeControl:false,
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'grey']
    },
      // zoomControl: true,
      // zoomControlOptions: {
      //     style: google.maps.ZoomControlStyle.SMALL,
      //     position: google.maps.ControlPosition.LEFT_CENTER
      // },
      // zoomControl: false,
      // scaleControl: false,
      // scrollwheel: false,
      // draggable: false,
      // streetViewControl: false,
      // disableDoubleClickZoom: true,
      // mapTypeControl:false
      panControl: true,
      panControlOptions: {
        position: google.maps.ControlPosition.RIGHT
      },
      zoomControl: true,
      zoomControlOptions: {
        style: google.maps.ZoomControlStyle.LARGE,
        position: google.maps.ControlPosition.RIGHT
      },
      mapTypeControl: false,
      scaleControl: false,
      scrollwheel: false,
      streetViewControl: false,
      draggable: true,
      overviewMapControl: false
    };

    map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

    var mapType = new google.maps.StyledMapType(stylez, { name:"Grayscale" });    
    map.mapTypes.set('grey', mapType);
    map.setMapTypeId('grey');

  //Map Marker 
  var image = '../img/map-markers/blue-balloon.png';
  var myLatLng = myMap;
  var beachMarker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: image
  });
};

$(document).ready(function(){

  if(windowWidth > 600){
   do_slick();
 }

 function do_full_map(){
  var get_header_height = $(".template-header").outerHeight();
  //get_footer_height = $(".footer-container").outerHeight(),
  //get_combined_height = get_footer_height + get_header_height;

  $('.large-map').css('height', window.innerHeight - get_header_height);

  //console.log(get_combined_height);
}


$( window ).resize(function() {
  do_full_map();
  //do_google_map();
});


  


//Multi Select
function do_multi_select(){

    //multiselect
    $(".select").multiselect({
      height: 175,
      minWidth: 325
    });

    $(".region select").multiselect({
     header: "Provincia",
     noneSelectedText: "Provincia",
     selectedList: 1,
   });

    $(".county select").multiselect({
     header: "Département",
     noneSelectedText: "Département",
     selectedList: 1
   });

    $(".activity select").multiselect({
     header: "Activité",
     noneSelectedText: "Activité",
     selectedList: 1
   });
  }

  (function(){
    var search_toggle_button = $('.search-toggle'),
    items = $('.list-items');

    setTimeout(function() {
      items = $('.list-items').slideUp(1000);
      search_toggle_button.removeClass('active');
    }, 2000);

    search_toggle_button.click(function(e) {
      search_toggle_button.toggleClass('active');
      items.each(function(i) {
        $(this).delay(100 * i).slideToggle('2000', 'easeInOutCirc');
      }); 
      e.preventDefault()
    });
  })();

// $('.visable').each(function(i) {
//   $(this).delay(600 * i).fadeIn(600);
// });    

  //do_check_window();

/*  $(window).resize(function(){
    do_check_window();
    console.log('run');
  });
*/


/*  var hover_container = $('.inner a'),
      thumb = $('.slider-image-wrapper');

  hover_container.hover(function() {
    $(this).addClass('this');
    thumb.not('.this .slider-image-wrapper').addClass('active');

  }, function() {
    $(this).removeClass('this');
    thumb.removeClass('active');

  });*/


//var opacity = $('.do-opacity');
$('.cssmenu li.active').addClass('open').children('ul').show();

$('.cssmenu li.has-sub>a').on('click', function(){
  $(this).removeAttr('href');
  var element = $(this).parent('li');
  if (element.hasClass('open')) {
    $('.do-opacity').removeClass('active-opacity');
    element.removeClass('open');
    element.find('li').removeClass('open');
    element.find('ul').slideUp(200);
    element.find('ol').slideUp(200);
  }
  else {
    element.addClass('open');
    element.children('ul').slideDown(200);
    element.children('ol').slideDown(200);
    element.siblings('li').children('ul').slideUp(200);
    element.siblings('li').children('ol').slideUp(200);
    element.siblings('li').removeClass('open');
    element.siblings('li').find('li').removeClass('open');
    element.siblings('li').find('ul').slideUp(200);
    element.siblings('li').find('ol').slideUp(200);
    $('.do-opacity').not('open').addClass('active-opacity');
  }
});






// opacity.hover(function() {
//   opacity.not(this).addClass('active-opacity');
// }, function() {
//   opacity.removeClass('active-opacity');
// });



//Input fields
var fields = $('.fields input'),
    sliding = $('.sliding-u-l-r');

fields.focus(function(){
  $(this).parent().children(sliding).addClass('active');
});
fields.blur(function(){
  $(this).parent().children(sliding).removeClass('active');
}); 

// fields.val(function(){
// $(this).addClass('value');
// })

fields.blur(function() {
  if( $(this).val() ) {
    $(this).addClass('has-value');
  }
});



//Map Icon bounce
var map_link = $('.map-link');
    map_link.hover(
      function() {
        $(this).parent().children('.fa-map-marker').addClass('animated bounce');
      }, function() {
        $(this).parent().children('.fa-map-marker').removeClass('animated bounce');
      }
    );


  var hover_container = $('.inner a'),
      thumb = $('.slider-image-wrapper');

  hover_container.hover(function() {
    hover_container.not(this).addClass('active');
  }, function() {
    hover_container.removeClass('active');
  });

  //Background slides
  $(function() {
    $('#slides').superslides({
      hashchange: false,
      animation: 'fade',
      play: 4000
    });
  });


  do_multi_select();
  do_logo_slider();
  do_image_slider();
  //do_google_map();
  do_full_map();


/*  $("#normal_select").dropkick({
    mobile: true
  });*/

  //End
});

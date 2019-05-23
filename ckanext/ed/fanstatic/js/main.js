$('body').scrollspy({ target: '#spy', offset:280});


//Getting sidebar height


$(window).on('load',function(){
    calcScrollLocation();
});

$(window).scroll(function() {    
    calcScrollLocation();
}); 

function calcSidebarHeight(){
    var height = $(".module-content").outerHeight();
    $(".sidebar").height(height);
};

function calcScrollLocation(){
    var scroll = $(window).scrollTop();

}


$(document).ready(function(){

    //Checks the page name via page tag
    var page = $('body').find('.page-home').text();

    /* Particles for homepage */
    if(page=="home"){
        renderParticles();
    }
    
    if(page=="search"){
        if ($(window).width() >= 768) {
            new SimpleBar($('#scrollbar')[0]);
        }
    }

    var navHeight = $("#nav-wrapper").outerHeight();
    $("body").css("paddingTop",navHeight);
}); 

function renderParticles(){
    particlesJS("hero", {
        "particles": {
            "number": {
                "value":20, "density": {
                    "enable": true, "value_area": 1000
                }
            }
            , "color": {
                "value": ["#3da650", "#0372e4"]
            }
            , "shape": {
                "type":"edge", "stroke": {
                    "width": 0, "color": "#000000"
                }
                , "polygon": {
                    "nb_sides": 10
                }
                , "image": {
                    "src": "img/github.svg", "width": 100, "height": 100
                }
            }
            , "opacity": {
                "value":1, "random":false, "anim": {
                    "enable": false, "speed": 1, "opacity_min": 0, "sync": false
                }
            }
            , "size": {
                "value":5.5, "random":true, "anim": {
                    "enable": false, "speed": 4, "size_min": 3.5, "sync": false
                }
            }
            , "line_linked": {
                "enable": false, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1
            }
            , "move": {
                "enable":true, "speed":1, "direction":"none", "random":true, "straight":false, "out_mode":"out", "bounce":false, "attract": {
                    "enable": false, "rotateX": 600, "rotateY": 600
                }
            }
        }
        , "interactivity": {
            "detect_on":"canvas", "events": {
                "onhover": {
                    "enable": false, "mode": "bubble"
                }
                , "onclick": {
                    "enable": false, "mode": "repulse"
                }
                , "resize":true
            }
            , "modes": {
                "grab": {
                    "distance":400, "line_linked": {
                        "opacity": 1
                    }
                }
                , "bubble": {
                    "distance": 85.26810729164123, "size": 0, "duration": 2, "opacity": 0, "speed": 3
                }
                , "repulse": {
                    "distance": 400, "duration": 0.4
                }
                , "push": {
                    "particles_nb": 4
                }
                , "remove": {
                    "particles_nb": 2
                }
            }
        }
        , "retina_detect":true
    });


    function calcCanvasHeight(){
        setTimeout(function() { 
            $(".hero > canvas").height("400px");
            $(".hero > canvas").attr("height",400);
         },1);
    }
    

}
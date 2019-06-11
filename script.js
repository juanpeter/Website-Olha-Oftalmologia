'use strict'
// Dark overlay when page is loaded
$(document).ready(()=>{
    $(".overlay").animate({
        opacity: 1,
    }, 1500);
});
// menuMobile show up
$(".navbar-toggler").click(()=>{
    if ($('.navbar-toggler span img').is('#open')){
        $(".navbar-toggler").empty();
        $(".navbar-toggler").append("<span><img id='close' alt='Fechar menu' src='images/close.svg' height='42' width='42'></span>")
        $(".mobileMenu").css("display","block");
        $(".mobileMenu").animate({
            opacity:1,
        }, 500);
    }
    else if ($('.navbar-toggler span img').is('#close')){
        $(".navbar-toggler").empty();
        $(".navbar-toggler").append("<span><img id='open' alt='Abrir menu' src='images/menu.svg' height='42' width='42'></span>")
        $(".mobileMenu").animate({
            opacity:0,
        }, 500);
        //Workaround for jQuery's display animate issues
        setTimeout(()=>{ $(".mobileMenu").css("display","none");}, 500);
    }
});

$(window).resize(()=>{
    if($(window).width() >= 992){
        if ($('.navbar-toggler span img').is('#close')){
            $(".navbar-toggler").empty();
            $(".navbar-toggler").append("<span><img id='open' alt='Abrir menu' src='images/menu.svg' height='42' width='42'></span>")
            $(".mobileMenu").animate({
                opacity:0,
            }, 500);
            //Workaround for jQuery's display animate issues
            setTimeout(()=>{ $(".mobileMenu").css("display","none");}, 500);
        }
    }
});
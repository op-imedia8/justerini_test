

$('.owl-carousel').owlCarousel({
    loop:true,
    // margin: 20,
    //   autoHeight:true,
    nav:true,
    navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
    animateOut: 'fadeOut',
    dots:false, 
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

var $ = jQuery.noConflict();

(function($) {
    "use strict";



    /*-------------------------------------------------*/
    /* =  Isotope
    /*-------------------------------------------------*/
    try {
        var $mainContainer=$('.works-items');
        $mainContainer.imagesLoaded( function(){
            
            var $container=$('.works-items').isotope({itemSelector:'.one-item'});

            $('#works .filters').on('click','li',function(){
                var filterValue=$(this).attr('data-filter');$container.isotope({
                    filter:filterValue});
            });
            $('#works .filters').each(function(i,buttonGroup){
                var $buttonGroup=$(buttonGroup);
                $buttonGroup.on('click','li',function(){
                    $buttonGroup.find('.is-checked').removeClass('is-checked');
                    $(this).addClass('is-checked');
                });
            });
            
        });
    } catch(err) {

    }
    //portfolio with border
    try {
        var $mainContainerBorder=$('.works-items.border');
        $mainContainerBorder.imagesLoaded( function(){

            var $container=$('.works-items.border').isotope({
                filter: '.design',
                itemSelector:'.one-item',
                layoutMode: 'masonry',
                masonry: {
                    columnWidth: '.one-item',
                    gutter: 30
                },
                percentPosition: true
            });
            
            

            $('#works .filters').on('click','li',function(){
                var filterValue=$(this).attr('data-filter');$container.isotope({
                    filter:filterValue});
            });
            $('#works .filters').each(function(i,buttonGroup){
                var $buttonGroup=$(buttonGroup);
                $buttonGroup.on('click','li',function(){
                    $buttonGroup.find('.is-checked').removeClass('is-checked');
                    $(this).addClass('is-checked');
                });
            });
        });
    } catch(err) {

    }
    //blog masonry
    try {
        var $blogContainer = $('.masonry-grid');
        $blogContainer.imagesLoaded( function(){
            $blogContainer.isotope({itemSelector: '.masonry-item', layoutMode: 'masonry' });
        });
    } catch(err) {

    }
    /*-------------------------------------------------*/
    /* =  Magnific popup
    /*-------------------------------------------------*/
    try {
        $('.works-items').each(function() { // the containers for all your galleries
            $(this).magnificPopup({
                delegate: '.lightbox',
                type: 'image',
                gallery: {
                    enabled:true
                },
                callbacks:{
                    beforeOpen:function(){
                        $("body").css({"margin-right":"-17px"});
                    },
                    beforeClose:function() {
                        $("body").css({"margin-right":"0"});
                    }
                }
            });
        });
        $('.popup-youtube, .popup-vimeo, .popup-gmaps, .popup-video').magnificPopup({
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
                
        
    } catch(err) {

    }
    
    



})(jQuery);

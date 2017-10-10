
var $ = jQuery.noConflict();

(function($) {
    "use strict";



    /*-------------------------------------------------*/
    /* =  Isotope
    /*-------------------------------------------------*/

    //portfolio with border
    try {

        var $container=$('.works-items.border').isotope({
            itemSelector:'.one-item',
            layoutMode: 'masonry',
            masonry: {
                columnWidth: '.one-item',
                gutter: 30
            },
            percentPosition: true
        });



        $('#works .filters').on('click','li',function(){
            var filterValue=$(this).attr('data-filter');
            $container.isotope({filter:filterValue});
        });
        $('#works .filters').each(function(i,buttonGroup){
            var $buttonGroup=$(buttonGroup);
            $buttonGroup.on('click','li',function(){
                $buttonGroup.find('.is-checked').removeClass('is-checked');
                $(this).addClass('is-checked');
            });
        });
    } catch(err) {

    }

    /*-------------------------------------------------*/
    /* =  fancybox popup
    /*-------------------------------------------------*/
    try {   
        $("[data-fancybox]").fancybox({
            seletor: '.light-box',
            loop: true
        });
        
    } catch(err) {

    }
    
    



})(jQuery);

$(document).ready(function() {
    
    /*
    * Slider
    */
    if(UIkit.slider('.uk-slider')) {
        UIkit.slider('.uk-slider', {
            finite: true // deactivate infinite scrolling
        });
    }
    
    /*
    * Filter
    */
    $('.category-filter ul li').click(function(event) {
        $('.category-filter ul li').removeClass('selected');
        $(this).addClass('selected');
    });
});

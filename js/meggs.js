(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Closes the Responsive Menu on Menu Item Click
    // $('btn .navbar-toggle collapsed').click(function() {
    //     console.log("why");
    //     var toCollapse = document.getElementsByClassName('.collapse');
    //     toCollapse.style.display = toCollapse.style.display === 'none' ? '' : 'none';
    // });


})(jQuery); // End of use strict

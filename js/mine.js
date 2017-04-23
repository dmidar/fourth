$(document).ready(function() {
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title');
			}
		},
	});
});


//the sticky sidebar
$(document).ready(function() {
    if ($(window).width() > '768'){
    var bottomPos = $('.sidebar').outerHeight(true) - $(window).height();
    $(window).scroll( function() {
        if ( $(window).scrollTop() > bottomPos + 90 ) {
            $('.sidebar').css({'position':'fixed','top':'auto','bottom':'0px'});
        } else {
            $('.sidebar').css({'position':'absolute','top':'90px'});
        }
    });
    }
});


// if the sidebar height is shorter than the main content
$(document).ready(function() {
    if ($(window).width() > '768'){
        var sb_h = $('.sidebar').outerHeight() + 90;
        var win_h = $(window).height();
            if ( win_h > sb_h ) {
                var dif = win_h - sb_h; 
                $('li.contacts').css('margin-top', parseInt($('li.contacts').css('margin-top')) + dif);
            }
    }
});


//mobile menu
$('.menu_icon, .close').on('click', function(){
	$('.menu-mobile').toggleClass('show')
})


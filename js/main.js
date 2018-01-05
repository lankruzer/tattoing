jQuery(function($) {
	$("input[type='tel']").mask("+7 (999) 999-99-99");
});

$(".complete-works .slides").slick({
	slidesToShow: 3,
	slidesToScroll: 3,
	dots: true,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

$(".reviews .slides").slick({
	slidesToShow: 2,
	slidesToScroll: 2,
	dots: true,
	responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1				
			}
		}
	]
})

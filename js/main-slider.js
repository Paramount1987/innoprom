$( document ).ready(function() {

	var sliderInnerffset = $(".wrap-main-slider .slider-inner").offset();
        $(".wrap-main-slider").find(".bx-prev").css({
          left: sliderInnerffset.left - 100
        });

        $(".wrap-main-slider").find(".bx-next").css({
          left: sliderInnerffset.left + 20 + $(".wrap-main-slider .slider-inner").outerWidth()
        });


        $(window).resize(function(event) {
        	    sliderInnerffset = $(".wrap-main-slider .slider-inner").offset();
$(".wrap-main-slider").find(".bx-prev").css({
  left: sliderInnerffset.left - 100
});

$(".wrap-main-slider").find(".bx-next").css({
  left: sliderInnerffset.left + 20 + $(".wrap-main-slider .slider-inner").outerWidth()
});
        });
        

}); 
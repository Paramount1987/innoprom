

////////////////////////////////////

$( document ).ready(function() {

//////////////////////////////////////////

//////////////////////////////////////

if(viewportSize.getWidth() < 768){
  $(".logo-header img").attr('src', 'i/logo-mobile.png');
  $(".user-enter-link").html('Личный кабинет');
  $("nav").addClass('nav-mobile');


  // $(".main-slider li > img").each(function(index, el) {
  //   var img = $(this).data("href");
  //    $(this).attr('src', img);
  // });
}else{
  $(".mobile-twist .inner").removeClass('fixed-mobile');
}

$(window).resize(function(event) {

///////////////////////////////////////////////////
  if(viewportSize.getWidth()< 768){
  $(".logo-header img").attr('src', 'i/logo-mobile.png');
  $(".user-enter-link").html('Личный кабинет');
  $("nav").css('display', 'none');
  $("nav").addClass('nav-mobile');
  $(".nav-inner").removeClass('fixed');
}else{
  $(".logo-header img").attr('src', 'i/logo.png');
  $(".user-enter-link").html('Вход в личный кабинет');
  $("nav").removeClass('nav-mobile');
  $("nav").css('display', 'block');

  $(".mobile-twist .inner").removeClass('fixed-mobile');
  $(".nav-list li ul").slideDown();

}

////////////////////////////////////////////////////////

});

//////////////////////////////slider
    $('.main-slider').bxSlider({
      mode: 'fade',
      prevText: '',
      nextText: '',
      onSlideAfter: function(){
        $(".timeback span").addClass('rotate');
      },
      onSlideBefore: function(){
          $(".timeback span").removeClass('rotate');
      }
    });

    $('.slider-speaker').bxSlider({
      mode: 'fade',
      controls: false
    });

  var slider =  $('.tab-item.active .sponsor-list').bxSlider({
      controls: false,
      slideWidth: 120,
      minSlides: 2,
      maxSlides: 12,
      slideMargin: 10,
      auto: true
    });



var pager = $(".tab-content .tab-item .bx-pager-item").length;

if(pager < 2){
  $(".tab-content .tab-item .bx-pager-item").addClass('one');
}else{
  $(".tab-content .tab-item .bx-pager-item").removeClass('one');
}



var sliderNews = $('.slider-news').bxSlider({
  mode: "fade",
  adaptiveHeight: true,
  pager: false
});
//////////////////////////////////////
///////////////////////////////////////////



//var widthSlider = $(".wrap-main-slider .slider-inner").width();

///////////////////////////////////
$(".icon-search").click(function(event) {
  event.preventDefault();
  $(".fied-search").toggleClass('show');
});
//////////////////////////////////////
var widthWindow = viewportSize.getWidth();
var height = widthWindow / 2.84;

var widthProject = $(".project-gid").width();
var heightProject = widthProject / 1.7;
$(".project-gid").css('height', heightProject);
$(".project-prof").css('height', heightProject);

//var widthSub = $(".subscribe .inner").width();
//var heightSub = widthSub * 1.18;
//$(".subscribe .inner").css('height', heightSub);



$(".wrap-main-slider .bx-viewport").css("height",height);

$(window).resize(function(event) {
  widthWindow = viewportSize.getWidth();
  widthProject = $(".project-gid").width();
  //widthSub = $(".subscribe .inner").width();

  //heightSub = widthSub * 1.18;
  height = widthWindow / 2.84;
  //heightSub = widthSub * 1.18;
  heightProject = widthProject / 1.7;

  //$(".subscribe .inner").css('height', heightSub);
  $(".wrap-main-slider .bx-viewport").css("height",height);
  $(".project-gid").css('height', heightProject);
    $(".project-prof").css('height', heightProject);


   /* $(".nav-list li ul").slideUp();*/




slider.reloadSlider();


function getPager(){
  pager = $(".tab-content .tab-item .bx-pager-item").length;

if(pager < 2){
  $(".tab-content .tab-item .bx-pager-item").addClass('one');
}else{
  $(".tab-content .tab-item .bx-pager-item").removeClass('one');
}
}




setTimeout(getPager, 500);

});
////////////////////////////////////////
$(window).scroll(function(event) {
  var scrollTop = $(window).scrollTop();
  var w = viewportSize.getWidth();

  if(w >= 768){
    if(scrollTop > 300){
         $(".nav-inner").addClass('fixed');
    }else{
        $(".nav-inner").removeClass('fixed');

    }
  }else{

    if(scrollTop > 200){
         $(".mobile-twist .inner").addClass('fixed-mobile');
    }else{
        $(".mobile-twist .inner").removeClass('fixed-mobile');

    }
  } 


});
///////////////////////////////////////////
$(".nav-link").click(function(event) {

 // $(".nav-mobile").slideToggle('fast');
 $(".nav-mobile").addClass('opened');
});

$(".header-nav .close").click(function(event) {
  //$(".nav-mobile").slideUp('fast');
  $(".nav-mobile").removeClass('opened');
});

///////////////////////////////////////////
     /* $(function() {
        
        $("select.custom").each(function() {          
          var sb = new SelectBox({
            selectbox: $(this),
            height: 90,
            width: 60
          });
        });
        
      });*/

// $(".select-lang span").click(function(event) {
//   if( $(this).text() == "ru" ){
//     $(this).text('en');
//   }else{
//     $(this).text('ru');
//   }
// });

//////////////////////////////////////////////
$(".tab-switch span").click(function(event) {

  $(this).closest(".tab-switch").find("li span").removeClass('active');
  $(this).closest(".tab-switch").find("li").removeClass('active');

  $(this).addClass('active');
  $(this).parent("li").addClass('active');
  var data = $(this).data('href');

  $(this).closest('.tab-switch').next(".tab-content").find(".tab-item").removeClass('active');
  //$(".tab-content .tab-item").removeClass('active');
  $(".tab-content").find("[data-href='" + data + "']").addClass('active in');

slider.destroySlider();
 slider =  $('.tab-item.active .sponsor-list').bxSlider({
      controls: false,
      slideWidth: 120,
      minSlides: 2,
      maxSlides: 12,
      slideMargin: 10,
      auto: true
    });

 if(pager < 2){
  $(".tab-content .tab-item .bx-pager-item").addClass('one');
}else{
  $(".tab-content .tab-item .bx-pager-item").removeClass('one');
}
  //$(".sponsor-list").each(function(index, el) {
  
  //var widthSlider = $(this).width();
  //widthSlider += 100;
  //var wTab = $(".sponsors .tab-item").width();
  //if(widthSlider >= wTab){

  //  $(this).bxSlider({
  //    minSlides: 2,
  //    mode: 'fade',
  //    prevText: '',
  //    nextText: ''
  //  });
  //}
//});
if($(".tab-item-map").hasClass('active')){
  $(".content").addClass('content-contact ');
}else{
  $(".content").removeClass('content-contact ');
}

});
////////////////////////////////////////////




/*$(".nav-list li").hover(function(event) {

if(viewportSize.getWidth() >= 768) {
  $(this).find('ul').slideDown(500);

}


},function(event){

 if(viewportSize.getWidth() >= 768) {
  $(this).find('ul').slideUp(100);

}

}
);
*/


$(".nav-list li").click(function(event) {

if(viewportSize.getWidth() < 768) {
  event.preventDefault();
  $(this).children('div').slideToggle();

}


}
);
////////////////////////////////////
$(".show-all").delegate('.link-show', 'click', function(event) {
    event.preventDefault();
  $(".member-org-wrap.workers .member-org .hidden-li").css({
    height: 'auto',
    paddingBottom: '35px'
  });
  $(this).css('display', 'none');
});


////////////////////////////////////////////

$(".list-type-news li").each(function(index, el) {

  var h = $(this).find(".list-footer").height();
  h = h + 20;
  $(this).css('paddingBottom', h);

});

$(window).resize(function(event) {
$(".list-type-news li").each(function(index, el) {

  var h = $(this).find(".list-footer").height();
  h = h + 20;
  $(this).css('paddingBottom', h);

});
});




///////////////////////////////////////////////
$(".nav-list-inner").hover(function() {
  $(this).prev("a").addClass('hover');
}, function() {
  $(this).prev("a").removeClass('hover');
});

$(".nav-list-inner-short").hover(function() {
  $(this).prev("a").addClass('hover');
}, function() {
  $(this).prev("a").removeClass('hover');
});
////////////////////////////////////////////////
});
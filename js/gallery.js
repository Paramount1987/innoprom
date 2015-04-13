$( document ).ready(function() {

   $(".thumbs a").click(function(event) {
      event.preventDefault();
      $(".thumbs a").removeClass("active");
      $(this).addClass("active");

      var galleryItem = $(this).data('href');

      $(".gallery-wrap .slideshow-container img").attr('src',galleryItem);

  });

 /*  $(".controls-gallery a").click(function(event) {
      event.preventDefault();
      var i = $(".thumbnails-list .active").closest("li").index();
      var length = $(".thumbnails-list li").length - 1;


      if($(this).hasClass("prev")){

         
            if(i < 1){
                return;
            }else{
              var current = $(".thumbnails-list .active");
              
              $(".thumbnails-list .active").closest("li").prev().find("a").addClass("active");
              var galleryItem  = $(current).closest("li").prev().find('img').attr('src');
              $(".gallery-wrap .img-full img").attr('src',galleryItem);

              $(current).removeClass("active");
              
            }

      }else{
        
            if(i == length){
              return;
            }else{
              var current = $(".thumbnails-list .active");
              
              $(".thumbnails-list .active").closest("li").next().find("a").addClass("active");
              var galleryItem  = $(current).closest("li").next().find('img').attr('src');
              $(".gallery-wrap .img-full img").attr('src',galleryItem);

              $(current).removeClass("active");

            }
        

      }
    });  

*/

   

      
        var count = 0;
        var onMouseOutOpacity = 1;

        $('#thumbs ul.thumbs li').opacityrollover({

          mouseOutOpacity:   onMouseOutOpacity,

          mouseOverOpacity:  1.0,

          fadeSpeed:         'fast',

          exemptionSelector: '.selected'

        });


if(viewportSize.getWidth() < 1024){

        $('#thumbs').galleriffic({

          delay:                     200,
          numThumbs:                 3,
          preloadAhead:              10,
          enableBottomPager:         true,
          maxPagesToShow:            6,
          imageContainerSel:         '#slideshow',
          renderSSControls:          true,
          renderNavControls:         true,
          prevLinkText:              '<ious Photo',
          nextLinkText:              'Next Photo &rsaquo;',
          nextPageLinkText:          '>',
          prevPageLinkText:          '<',
          enableHistory:             false,
          autoStart:                 false,
          syncTransitions:           true,
          defaultTransitionDuration: 200,
          onSlideChange:             function(prevIndex, nextIndex) {

            // 'this' refers to the gallery, which is an extension of $('#thumbs')

            this.find('ul.thumbs').children()

              .eq(prevIndex).fadeTo('fast', onMouseOutOpacity).end()

              .eq(nextIndex).fadeTo('fast', 1.0);

          },

          onPageTransitionOut:       function(callback) {

            this.fadeTo('fast', 0.0, callback);

          },

          onPageTransitionIn:        function() {

            this.fadeTo('fast', 1.0);

          }

        });
count = 3;
}if(viewportSize.getWidth() <= 1280 && viewportSize.getWidth() >= 1024){
    $('#thumbs').galleriffic({

          delay:                     200,
          numThumbs:                 8,
          enableBottomPager:         true,
          maxPagesToShow:            6,
          imageContainerSel:         '#slideshow',
          renderSSControls:          true,
          renderNavControls:         true,
          nextPageLinkText:          '>',
          prevPageLinkText:          '<',
          enableHistory:             false,
          autoStart:                 false,
          defaultTransitionDuration: 200,
          onSlideChange:             function(prevIndex, nextIndex) {

            // 'this' refers to the gallery, which is an extension of $('#thumbs')

            this.find('ul.thumbs').children()

              .eq(prevIndex).fadeTo('fast', onMouseOutOpacity).end()

              .eq(nextIndex).fadeTo('fast', 1.0);

          },

          onPageTransitionOut:       function(callback) {

            this.fadeTo('fast', 0.0, callback);

          },

          onPageTransitionIn:        function() {

            this.fadeTo('fast', 1.0);

          }

        });
count = 8;

}if(viewportSize.getWidth() > 1280){
  $('#thumbs').galleriffic({

          delay:                     200,
          numThumbs:                 12,
          preloadAhead:              10,
          enableBottomPager:         true,
          maxPagesToShow:            6,
          imageContainerSel:         '#slideshow',
          renderSSControls:          true,
          renderNavControls:         true,
          nextPageLinkText:          '>',
          prevPageLinkText:          '<',
          enableHistory:             false,
          autoStart:                 false,
          syncTransitions:           true,
          defaultTransitionDuration: 200,
          onSlideChange:             function(prevIndex, nextIndex) {

            // 'this' refers to the gallery, which is an extension of $('#thumbs')

            this.find('ul.thumbs').children()

              .eq(prevIndex).fadeTo('fast', onMouseOutOpacity).end()

              .eq(nextIndex).fadeTo('fast', 1.0);

          },

          onPageTransitionOut:       function(callback) {

            this.fadeTo('fast', 0.0, callback);

          },

          onPageTransitionIn:        function() {

            this.fadeTo('fast', 1.0);

          }

        });
count = 12;
}



///////////////////////////resize
$(window).resize(function(event) {
 if(viewportSize.getWidth() > 1280){

    if(count != 12){

       $('#thumbs').galleriffic({

          delay:                     200,
          numThumbs:                 12,
          preloadAhead:              10,
          enableBottomPager:         true,
          maxPagesToShow:            6,
          imageContainerSel:         '#slideshow',
          renderSSControls:          true,
          renderNavControls:         true,
          prevLinkText:              '<ious Photo',
          nextLinkText:              'Next Photo &rsaquo;',
          nextPageLinkText:          '>',
          prevPageLinkText:          '<',
          enableHistory:             false,
          autoStart:                 false,
          syncTransitions:           true,
          defaultTransitionDuration: 200,
          onSlideChange:             function(prevIndex, nextIndex) {

            // 'this' refers to the gallery, which is an extension of $('#thumbs')

            this.find('ul.thumbs').children()

              .eq(prevIndex).fadeTo('fast', onMouseOutOpacity).end()

              .eq(nextIndex).fadeTo('fast', 1.0);

          },

          onPageTransitionOut:       function(callback) {

            this.fadeTo('fast', 0.0, callback);

          },

          onPageTransitionIn:        function() {

            this.fadeTo('fast', 1.0);

          }

        });
     }


count = 12;


}

 if(viewportSize.getWidth() <= 1280){

  if(count != 8){
       $('#thumbs').galleriffic({

          delay:                     200,
          numThumbs:                 8,
          preloadAhead:              10,
          enableBottomPager:         true,
          maxPagesToShow:            6,
          imageContainerSel:         '#slideshow',
          renderSSControls:          true,
          renderNavControls:         true,
          prevLinkText:              '<ious Photo',
          nextLinkText:              'Next Photo &rsaquo;',
          nextPageLinkText:          '>',
          prevPageLinkText:          '<',
          enableHistory:             false,
          autoStart:                 false,
          syncTransitions:           true,
          defaultTransitionDuration: 200,
          onSlideChange:             function(prevIndex, nextIndex) {

            // 'this' refers to the gallery, which is an extension of $('#thumbs')

            this.find('ul.thumbs').children()

              .eq(prevIndex).fadeTo('fast', onMouseOutOpacity).end()

              .eq(nextIndex).fadeTo('fast', 1.0);

          },

          onPageTransitionOut:       function(callback) {

            this.fadeTo('fast', 0.0, callback);

          },

          onPageTransitionIn:        function() {

            this.fadeTo('fast', 1.0);

          }

        });
}

count = 8;

}
if(viewportSize.getWidth() < 1024){
  if(count != 3) {
       $('#thumbs').galleriffic({

          delay:                     200,
          numThumbs:                 3,
          preloadAhead:              10,
          enableBottomPager:         true,
          maxPagesToShow:            6,
          imageContainerSel:         '#slideshow',
          renderSSControls:          true,
          renderNavControls:         true,
          prevLinkText:              '<ious Photo',
          nextLinkText:              'Next Photo &rsaquo;',
          nextPageLinkText:          '>',
          prevPageLinkText:          '<',
          enableHistory:             false,
          autoStart:                 false,
          syncTransitions:           true,
          defaultTransitionDuration: 200,
          onSlideChange:             function(prevIndex, nextIndex) {

            // 'this' refers to the gallery, which is an extension of $('#thumbs')

            this.find('ul.thumbs').children()

              .eq(prevIndex).fadeTo('fast', onMouseOutOpacity).end()

              .eq(nextIndex).fadeTo('fast', 1.0);

          },

          onPageTransitionOut:       function(callback) {

            this.fadeTo('fast', 0.0, callback);

          },

          onPageTransitionIn:        function() {

            this.fadeTo('fast', 1.0);

          }

        });
}

count = 3;
}
});




});
$( document ).ready(function() {

        var rightBlock = $(".right-side-block");

          if(window.innerWidth < 768){

              if( $(".service").length){
                $(".service").before(rightBlock);
              } else{
                $(".sponsors").before(rightBlock);

              }
              
          }
          $(window).resize(function(event) {

             if(window.innerWidth < 768){
              
              $(".right-side-block").remove();

              if( $(".service").length){
                $(".service").before(rightBlock);
              } else{
                $(".sponsors").before(rightBlock);
              }
              
            }else{
              $(".right-side-block").remove();
              $(".content-body").before(rightBlock);
          }

        });


});
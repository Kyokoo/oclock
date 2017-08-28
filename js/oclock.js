$(document).ready(function() {
  var aboutShow = false;
  var animation = false;
  $('#about').click(function(e) {
    if (!aboutShow){
      $("#aboutPanel").animate({'top': '0'},400);
    }
    else
      $("#aboutPanel").animate({'top': '100%'},400);
    aboutShow = !aboutShow;
  });
  var lastScrollTop = 0;
  $(window).scroll(function(event){
     var st = $(this).scrollTop();
     if (st > lastScrollTop){
       if (st < $('#project01-1').offset().top - ($('#project01-1').height() / 2) && animation == false){
         animation = true;
         $('html, body').stop().animate({
             scrollTop: $('#project01-1').offset().top - ($('#project01-1').height() / 2)
         }, 1000, function(){
           animation = false;
         });
      }
    } else if (st < lastScrollTop) {
        if (st < $('#project01-1').offset().top - ($('#project01-1').height() / 2) && animation == false){
          animation = true;
          $('html, body').stop().animate({
              scrollTop: 0
          }, 1000, function(){
            animation = false;
          });
        }
     }
     lastScrollTop = st;
  });
});

$(function() {
  $(".blockhover").hover(function(){
    $(".caption").each(function() {
      $(this).animate({'opacity': '1'},300)
      var topMin = parseInt($(this).attr("data-captionTopStart"));
      var topMax = parseInt($(this).attr("data-captionTopDist"));
      var leftMin = parseInt($(this).attr("data-captionLeftStart"));
      var leftMax = parseInt($(this).attr("data-captionLeftDist"));
      var top = parseInt(Math.floor((Math.random() * topMax) + topMin));
      var left = parseInt(Math.floor((Math.random() * leftMax) + leftMin));
      $(this).css({
        position: 'fixed',
        zIndex: '999',
        '-webkit-transform': 'rotate(' + Math.floor((Math.random() * 90) + 1 - 45) + 'deg)',
        top: top + '%',
        left: left + '%',
      })
    })
  }, function() {
    $(".caption").each(function(){
      $(this).css({opacity: '0'});
    })
  });
});

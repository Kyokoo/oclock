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
         }, 800, function(){
           animation = false;
           $(this).scrollTop($('#project01-1').offset().top - ($('#project01-1').height() / 2) + 1);
         });
      }
    } else if (st < lastScrollTop) {
        if (st < $('#project01-1').offset().top - ($('#project01-1').height() / 2) - 20 && animation == false){
          animation = true;
          $('html, body').stop().animate({
              scrollTop: 0
          }, 800, function(){
            animation = false;
          });
        }
     }
     lastScrollTop = st;
  });

  // Hover blocs
  $(".blockhover").hover(function(){

    // Logo and category changes
    // Data from HTML
    var category = $(this).attr("data-category");
    var clock = $(this).attr("data-clock");
    // Avoiding "undefined" and apply default value
    if (category == null)
      category = "";
    if (clock == null)
      clock = "4";
    $('#clock').html("&nbsp" + clock + "&nbsp");
    $('#category').html(category);

    // Caption placement & animation
    // Need optimization !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    $(".caption").each(function() {
      // Angle of the rotation
      var angle = 90;
      // Data from HTML
      var topMin = parseInt($(this).attr("data-captionTopStart"));
      var topMax = parseInt($(this).attr("data-captionTopDist"));
      var leftMin = parseInt($(this).attr("data-captionLeftStart"));
      var leftMax = parseInt($(this).attr("data-captionLeftDist"));
      // Randomizer
      var top = parseInt(Math.floor((Math.random() * topMax) + topMin));
      var left = parseInt(Math.floor((Math.random() * leftMax) + leftMin));
      // Caption's animation
      $(this).animate({'opacity': '1'},300)
      // Caption style
      $(this).css({
        position: 'fixed',
        zIndex: '999',
        '-webkit-transform': 'rotate(' + Math.floor(((Math.random() * angle) + 1) - (angle/2)) + 'deg)',
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

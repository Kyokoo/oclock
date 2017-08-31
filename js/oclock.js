$(document).ready(function() {
  var aboutShow = false;
  var animation = false;
  var limit = false;
  var initialPageHeight = $('body').height();
  var lastScrollTop = 0;
  var overlayShow = false;
  // Set here the colors for about's panel
  // Colors are in RGB
  var colors = [[8, 56, 105], [181, 167, 154], [213, 1, 42]];

  $('#about').click(function(e) {
    if (!aboutShow){
      // Assign random color to aboutPanel
      var color = randomColor(colors);

      $("#aboutPanel").animate({'top': '0'},400);
      $("#aboutPanel").css({"background-color":  "rgb(" + color[0] + "," + color[1] + "," + color[2] + ")"});
    }
    else
      $("#aboutPanel").animate({'top': '100%'},400);

    aboutShow = !aboutShow;
  });



  $(window).scroll(function(event){
     var st = $(this).scrollTop();
     var sb = $(document).height() - $(window).height() - $(window).scrollTop();
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
      if (sb <= 10 && !limit){
        limit = true;
        var color = randomColor();
        $("#aboutPanel").css({position: 'relative', width: '100vw', height: '100vh', transform: 'translateY(-100%)',
      "background-color":  "rgb(" + color[0] + "," + color[1] + "," + color[2] + ")"});
        $('#aboutPanel').appendTo('body')
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
        if (st <= initialPageHeight - $(this).height()){
          limit = false;
          $("#aboutPanel").css({position: 'absolute', width: '100vw', height: '100vh', transform: 'translateY(0)'});
          $('#aboutPanel').appendTo('#menu')
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
      clock = "&nbsp;&nbsp;";
    $('#clock').css({color: 'rgba(0, 0, 0, 1)'});
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
    $('#clock').css({color: 'rgba(0, 0, 0, 0)'});
    $('#clock').html("&nbsp;&nbsp;&nbsp;&nbsp;");
    $('#category').html("");
    $(".caption").each(function(){
      $(this).css({opacity: '0'});
    })
  });

  $(".blockhover").click(function(){
    if (!overlayShow){
      overlayShow = true;

      var htmlContent = $(this).find('.projectContent').html();
      $("#overlayContent").html(htmlContent);
      $("#overlayBody").css({display: 'block'});
      $("#overlayBody").stop().animate({ 'opacity': '1'}, 300, function(){
        $("#overlayContent").prependTo($('body'));
        disableScroll();
      });
    }
  });

  $("#overlayBody").click(function(){
    $('#overlayContent').appendTo($(this));
    $("#overlayBody").stop().animate({ 'opacity': '0'}, 300, function(){
      $("#overlayBody").css({display: 'none'}); overlayShow = false;
      enableScroll();
    });
  })

  // Generate random color from list
  function randomColor(color){
    return color[Math.floor((Math.random() * 3))];
  };

  function fillOverlay(){

  };

  function disableScroll(){
    $('html, body').css({
      overflow: 'hidden',
      height: '100%'
    });
    $('.blockhover').each(function(){
      var dim = ($(this).position().left) + "px";
      $(this).css({'left': dim});
    })
  };

  function enableScroll(){
    $('html, body').css({
      overflow: 'auto',
      height: 'auto'
    });
    $(this).css({'right': dim});
  };

  function getScrollBarWidth () {
    var inner = document.createElement('p');
    inner.style.width = "100%";
    inner.style.height = "200px";

    var outer = document.createElement('div');
    outer.style.position = "absolute";
    outer.style.top = "0px";
    outer.style.left = "0px";
    outer.style.visibility = "hidden";
    outer.style.width = "200px";
    outer.style.height = "150px";
    outer.style.overflow = "hidden";
    outer.appendChild (inner);
a
    document.body.appendChild (outer);
    var w1 = inner.offsetWidth;
    outer.style.overflow = 'scroll';
    var w2 = inner.offsetWidth;
    if (w1 == w2) w2 = outer.clientWidth;

    document.body.removeChild (outer);

    return (w1 - w2);
  };
});

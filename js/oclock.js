$(document).ready(function() {
  var aboutShow = false;
    $('#about').click(function(e) {
      if (!aboutShow){
        $("#aboutPanel").animate({'top': '0'},400);
      }
      else
        $("#aboutPanel").animate({'top': '100%'},400);
      aboutShow = !aboutShow;
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

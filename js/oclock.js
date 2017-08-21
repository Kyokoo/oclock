$(function() {
$(".blockhover").hover(function(){
  $(".caption").each(function() {
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
});
});

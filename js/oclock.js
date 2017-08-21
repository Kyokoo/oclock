$(document).ready(function(){
  $(".caption").each(function() {
    $(this).css({
      position: 'relative',
      zIndex: '999',
      '-webkit-transform': 'rotate(' + Math.floor((Math.random() * 90) + 1 - 45) + 'deg)',
      top: Math.floor((Math.random() * 80) + 1 + 10) + '%',
      left: Math.floor((Math.random() * 80) + 1 + 10) + '%',
    })
  })
});

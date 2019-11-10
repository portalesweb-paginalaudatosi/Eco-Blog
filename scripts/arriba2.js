$(document).ready(function() {
  $(".arriba2").click(function() {
    $("body, html ").animate(
      {
        scrollTop: "0px"
      },
      300
    );
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
      $(".arriba2").slideDown(300);
    } else {
      $(".arriba2").slideUp(300);
    }
  });
});

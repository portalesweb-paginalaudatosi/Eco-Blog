$(document).ready(function() {
    $(".arribaIndex").click(function() {
      $("body, html ").animate(
        {
          scrollTop: "0px"
        },
        300
      );
    });
  
    $(window).scroll(function() {
      if ($(this).scrollTop() > 0) {
        $(".arribaIndex").slideDown(300);
      } else {
        $(".arriba").slideUp(300);
      }
    });
  
    $(".arribaHogar").click(function() {
      $("body, html ").animate(
        {
          scrollTop: "0px"
        },
        300
      );
    });
  
    $(window).scroll(function() {
      if ($(this).scrollTop() > 0) {
        $(".arribaHogar").slideDown(300);
      } else {
        $(".arriba").slideUp(300);
      }
    });
  });
  
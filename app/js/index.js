$(document).scroll(function() {
  if($(document).width() < 1024)
  return false;

  if($(document).scrollTop() > $(".full-page").height() / 3)
    $("header").addClass("fixed");
  else
    $("header").removeClass("fixed");
});

$(".up-btn").on("click", function() {
  $("html, body").animate({
    scrollTop: 0
  }, 'slow');
});

$("#show-menu").on("click", function() {
  $("#hidden-menu").animate({
    "right": 0
  }, 500);
});

$("#hidden-menu .close").on("click", function() {
  $("#hidden-menu").animate({
    "right": -300
  }, 200);
});

$(document).ready(function() {
  $("#slider").slick({
    dots: false,
    prevArrow: '<div class="arrow-prev"><i class="fa-solid fa-arrow-left-long"></i></div>',
    nextArrow: '<div class="arrow-next"><i class="fa-solid fa-arrow-right-long"></i></div>',
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2
  });
});

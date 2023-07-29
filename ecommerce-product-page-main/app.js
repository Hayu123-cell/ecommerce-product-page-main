
$('.featured-product-image').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.scroll'
  });
  $('.scroll').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.featured-product-image',
    dots: false,
    arrows: false
  });

  
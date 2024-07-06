$(function () {

  $('.catalog__select').styler();

  $('.catalog__price-input').ionRangeSlider({
    type: "double",
    onStart: function (data){
      $('.catalog__price-from').text(data.from);
      $('.catalog__price-to').text(data.to);
    },
    onChange: function (data){
      $('.catalog__price-from').text(data.from);
      $('.catalog__price-to').text(data.to);
    }
  });

  $('.burger-btn, .burger-menu a').on('click', function () {
    $('.burger-menu').toggleClass('burger-menu--active');
  })

  $('.filter-btn, .filter-btn__close, .catalog__categories-link').on('click', function () {
    $('.catalog__filter').toggleClass('catalog__filter--active');
  })

  $('.coments__content').slick({
    dots: true,
    prevArrow: $('.slick-prev'),
    nextArrow: $('.slick-next')
  });

  $(window).on('load resize', function () {
    if ($(window).width() < 1200) {
      $('.popular__filter:not(.slick-initialized)').slick({
        arrows: false,
        variableWidth: true
      });
    } else {
      $(".popular__filter.slick-initialized").slick("unslick");
    }
  });

  $(window).on('load resize', function () {
    if ($(window).width() < 768) {
      $('.restorant__content:not(.slick-initialized)').slick({
        arrows: false,
        dots: true
      });
    } else {
      $(".restorant__content.slick-initialized").slick("unslick");
    }
  });

  $(window).on('load resize', function () {
    if ($(window).width() < 768) {
      $('.promo__content:not(.slick-initialized)').slick({
        arrows: false,
        dots: true
      });
    } else {
      $(".promo__content.slick-initialized").slick("unslick");
    }
  });

    var mixer = mixitup('.popular__content');

  })
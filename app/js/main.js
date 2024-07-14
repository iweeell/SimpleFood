$(function () {

  $('.resent__content').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    variableWidth: true,
    prevArrow: '<button type="button" class="slick-prev"><svg width="18" height="11" viewBox="0 0 19 32" xmlns="http://www.w3.org/2000/svg"><path d="M13.805 30.449l-13.046-13.046c-1.012-1.018-1.012-2.661 0-3.679l13.046-13.046c0.976-0.838 2.419-0.838 3.394 0 1.093 0.937 1.221 2.586 0.284 3.679l-11.193 11.193 11.193 11.219c1.012 1.018 1.012 2.661 0 3.679-1.018 1.012-2.661 1.012-3.679 0z"></path></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg width="18" height="11" viewBox="0 0 19 32" xmlns="http://www.w3.org/2000/svg"><path d="M4.721 30.449l13.046-13.046c1.012-1.018 1.012-2.661 0-3.679l-13.046-13.046c-0.976-0.838-2.419-0.838-3.394 0-1.093 0.937-1.221 2.586-0.284 3.679l11.193 11.193-11.193 11.219c-1.012 1.018-1.012 2.661 0 3.679 1.018 1.012 2.661 1.012 3.679 0z"></path></svg></button>',
  }); 

  $('.product-tabs__top-link').on('click', function(e) {
    e.preventDefault();

    $('.product-tabs__top-link').removeClass('product-tabs__top-link--active');
    $(this).addClass('product-tabs__top-link--active');

    $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
    $($(this).attr('href')).addClass('product-tabs__content-item--active');
    
  });

  $('.product__slider').slick({
    variableWidth: true,
    prevArrow: '<button type="button" class="slick-prev"><svg width="19" height="32" viewBox="0 0 19 32" xmlns="http://www.w3.org/2000/svg"><path d="M0.384665 15.2262L16.398 0.839919C16.9234 0.324519 17.7756 0.324519 18.3011 0.839919C18.8266 1.35528 18.8266 2.19151 18.3011 2.70691L3.25336 16.2267L18.2998 29.7465C18.8253 30.2619 18.8253 31.0981 18.2998 31.6135C17.7743 32.1288 16.9221 32.1288 16.3967 31.6135L0.38333 17.2273C0.103261 16.9525 -0.0168143 16.5883 0.00189296 16.228C-0.0155212 15.8665 0.104514 15.5023 0.384665 15.2262Z" fill="#363853" /></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg width="19" height="32" viewBox="0 0 19 32" xmlns="http://www.w3.org/2000/svg"><path d="M18.3105 14.7728L2.29726 0.38655C1.77178 -0.12885 0.919578 -0.12885 0.394105 0.38655C-0.131368 0.90191 -0.131369 1.73814 0.394104 2.25354L15.4418 15.7734L0.395433 29.2931C-0.130041 29.8085 -0.130041 30.6447 0.395432 31.1601C0.920905 31.6755 1.77311 31.6755 2.29854 31.1601L18.3119 16.7739C18.5919 16.4991 18.712 16.1349 18.6933 15.7747C18.7107 15.4131 18.5907 15.0489 18.3105 14.7728Z" /></svg></button>',
  });

  $('.star').rateYo({
    starWidth: '16px',
  });

  $('.catalog__select, .product__input').styler();

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
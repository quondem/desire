$(function(){
    $('.header__btn').on('click', function(){
        $('.rightside-menu').removeClass('rightside-menu--close')
    })
    $('.rightside-menu__close').on('click',function(){
        $('.rightside-menu').addClass('rightside-menu--close')
    })

    $('.header__btn-menu').on('click', function(){
        $('.menu').toggleClass('menu--open')
    })
    
    $('.top__slider').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true
    })
    $('.bottom__slider').slick({
        dots: true,
        slidesToShow: 10,
        slidesToScroll: 10,
        arrows: false,
        responsive: [
    {
      breakpoint: 1850,
      settings: {
        slidesToShow: 9,
        slidesToScroll: 9,
      }
    },
    {
      breakpoint: 1650,
      settings: {
        slidesToShow: 8,
        slidesToScroll: 8
      }
    },
    {
      breakpoint: 1460,
      settings: {
        slidesToShow: 7,
        slidesToScroll: 7
      }
    },
    {
      breakpoint: 1290,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 6
      }
    },
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5
      }
    },
    {
      breakpoint: 940,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 650,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 540,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
  ]
    })
    $('.article-slider__items').slick({
        dots: false,
        arrows: true,
        autoplay: true,
        prevArrow: $('.article-slider__prev'),
        nextArrow: $('.article-slider__next')
    })


    let mixer = mixitup('.gallery__inner',{
        load: {
            filter: '.living'
        }
    })

    if($(window).width() < 651){
        $('.works-path__item--measuring').appendTo($('.works-path__items-box'))
    }
})
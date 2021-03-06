(function ($) {
  "use strict";

  /*-------------------------------------------------------------------------------
  Preloader
	-------------------------------------------------------------------------------*/
  $(window).on("load", function () {
    $(".ct-preloader").addClass("hidden");
  });

  /*-------------------------------------------------------------------------------
  Aside Menu
	-------------------------------------------------------------------------------*/
  $(".aside-trigger").on("click", function () {
    $(".main-aside").toggleClass("open");
  });
  $(".main-aside .menu-item-has-children > a").on("click", function (e) {
    var submenu = $(this).next(".submenu");
    e.preventDefault();

    submenu.slideToggle(200);
  });

  /*-------------------------------------------------------------------------------
    Cart Trigger
    -------------------------------------------------------------------------------*/
  $(".cart-trigger i").on("click", function (e) {
    $(this).parent().toggleClass("open");
  });

  /*-------------------------------------------------------------------------------
    Search Trigger
    -------------------------------------------------------------------------------*/
  $(".search-trigger").on("click", function (e) {
    $(".search-form-wrapper").toggleClass("open");
  });

  /*-------------------------------------------------------------------------------
  Sticky Header
	-------------------------------------------------------------------------------*/
  // var header = $(".can-sticky");
  // var headerHeight = header.innerHeight();

  // function doSticky() {
  //   if (window.pageYOffset > headerHeight) {
  //     header.addClass("sticky");
  //   } else {
  //     header.removeClass("sticky");
  //   }
  // }
  // doSticky();

  /*-------------------------------------------------------------------------------
  Aside Scroll
	-------------------------------------------------------------------------------*/
  function initAsideScrollbar() {
    var scrollHeight =
      $(".main-aside").innerHeight() -
      $(".main-aside .navbar-brand").innerHeight(); // Calculate the height of the scroll container
    var calculatedHeight = isNaN(scrollHeight) ? "auto" : scrollHeight;
    $(".aside-scroll").slimScroll({
      height: calculatedHeight,
      position: "right",
      size: "5px",
      color: "#dcdcdc",
      opacity: 1,
      wheelStep: 5,
      touchScrollStep: 50,
    });
  }
  initAsideScrollbar();

  /*-------------------------------------------------------------------------------
    Count Up
    -------------------------------------------------------------------------------*/
  $(".counter-number span").each(function () {
    $(this).animate(
      {
        Counter: $(this).text(),
      },
      {
        duration: 2000,
        step: function (now) {
          $(this).text(Math.ceil(now));
        },
      }
    );
  });

  /*-------------------------------------------------------------------------------
    Tooltips
    -------------------------------------------------------------------------------*/
  $('[data-toggle="tooltip"]').tooltip();

  /*-------------------------------------------------------------------------------
    Magnific Popup
    -------------------------------------------------------------------------------*/
  $(".popup-youtube").magnificPopup({
    type: "iframe",
  });
  $(".popup-vimeo").magnificPopup({
    type: "iframe",
  });
  $(".popup-video").magnificPopup({
    type: "iframe",
  });

  /*-------------------------------------------------------------------------------
    Banner Slider
    -------------------------------------------------------------------------------*/
  $(".banner-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
    autoplaySpeed: 5000,
    speed: 2000,
    arrows: true,
    prevArrow: $(".banner .slider-prev"),
    nextArrow: $(".banner .slider-next"),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  });

  /*-------------------------------------------------------------------------------
    Testimonials Slider
    -------------------------------------------------------------------------------*/
  $(".ct-testimonials-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $(".ct-testimonials .slider-prev"),
    nextArrow: $(".ct-testimonials .slider-next"),
  });

  /*-------------------------------------------------------------------------------
    Banner Carousel Slider
    -------------------------------------------------------------------------------*/
  $(".banner-carousel-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    centerPadding: "0px",
    prevArrow: $(".banner .slider-prev"),
    nextArrow: $(".banner .slider-next"),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  });

  /*-------------------------------------------------------------------------------
    Product Slider
    -------------------------------------------------------------------------------*/

  $(".sigma_product-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    autoplay: true,
    centerPadding: "0px",
    prevArrow: $(".trending-products .slider-prev"),
    nextArrow: $(".trending-products .slider-next"),
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".sigma_product-slider-2").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    autoplay: true,
    centerPadding: "0px",
    prevArrow: $(".ct-categories .slider-prev"),
    nextArrow: $(".ct-categories .slider-next"),
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".sigma_product-slider-3").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    autoplay: false,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  /*-------------------------------------------------------------------------------
    Masonry
    -------------------------------------------------------------------------------*/
  $(".masonry").imagesLoaded(function () {
    var isotopeContainer = $(".masonry");
    isotopeContainer.isotope({
      itemSelector: ".masonry-item",
    });
  });

  /*-------------------------------------------------------------------------------
    Product List/Grid Toggle
    -------------------------------------------------------------------------------*/
  $(".toggle-grid").on("click", function () {
    $(".view-toggler i").removeClass("active");
    $(this).addClass("active");
    $(".ct-product").removeClass("product-list");
    $(".ct-product").parent().removeClass("col-md-12").addClass("col-md-6");
  });
  $(".toggle-list").on("click", function () {
    $(".view-toggler i").removeClass("active");
    $(this).addClass("active");
    $(".ct-product").addClass("product-list");
    $(".ct-product").parent().removeClass("col-md-6").addClass("col-md-12");
  });

  //On scroll events
  //   $(window).on("scroll", function () {
  //     doSticky();
  //   });

  //On resize events
  $(window).on("resize", function () {
    initAsideScrollbar();
  });
})(jQuery);

// switch language //

$(function () {
  oLng.init();
});

oLng = {
  eBlock: null,
  eBtn: null,
  eList: null,
  lang: null,
  init: function () {
    (this.eBlock = $(".lng-select")),
      (this.eList = oLng.eBlock.children("ul")),
      (this.eBtn = oLng.eBlock.children("div")),
      this.onChg();

    this.eBtn.text(oLng.eList.find(".active a").text());

    $(document).click(function (e) {
      if ($(e.target).is(oLng.eBtn)) {
        // Div
        if (oLng.eBlock.hasClass("open")) oLng.hide();
        else oLng.show();
      } else if (
        $(e.target).is(oLng.eList.find("a")) &&
        oLng.eBlock.hasClass("open")
      ) {
        // Link
        oLng.eBtn.text($(e.target).text());
        $(e.target).parent().siblings().removeClass("active");
        $(e.target).parent().addClass("active");
        oLng.onChg();
        oLng.hide();
      } else if (oLng.eBlock.hasClass("open")) {
        // Without lng
        oLng.hide();
      }
    });
  },
  show: function () {
    oLng.eBlock.addClass("open");
    oLng.eList.stop().slideDown(150);
  },
  hide: function () {
    oLng.eBlock.removeClass("open");
    oLng.eList.stop().slideUp(150);
  },
  onChg: function () {
    oLng.lang = oLng.eList.find(".active a").data("lng");
    console.info("Current language: " + oLng.lang);
  },
};

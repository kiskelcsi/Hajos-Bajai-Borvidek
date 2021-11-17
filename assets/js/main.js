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

// Winerys//

var cards = $(".winerycards");
for (var i = 0; i < cards.length; i++) {
  var target = Math.floor(Math.random() * cards.length - 1) + 1;
  var target2 = Math.floor(Math.random() * cards.length - 1) + 1;
  cards.eq(target).before(cards.eq(target2));
}

const hajos = [
  {
    winery: "Huber Pince",
    email: "huberpince@gmail.com",
    str: "..talán a legjobb válasz erre, hogy bort készítünk... ...magunknak, mert nagyon szeretjük. Viszont, ha már itt vagy, te is igyál belőle! Sőt! Vigyél belőle haza is! Éhes vagy? Gyere, együnk valami finomat... ...ehhez imádom a Kékfrankost. Emlékszel, amikor gyerekkorodban beleharaptál egy hatalmas kiflibe, aztán ráittad a kakaót, és mennyire összeillettek az ízek? Hmm. Na, ez pont ilyen érzés, csak már felnőtt vagyok... ...azt hiszem, hogy ez nagyon jó dolog. Ezért is készítek bort. Azért, mert azt hiszem, hogy eddig minden jó dolog mellett, ami velem történt, ott volt a bor.",
    page: "https://huberpince.hu/",
  },
  {
    winery: "Oszvald Pince",
    email: "huberpince@gmail.com",
    str: "1860-ban szorgos sváb őseink alapították meg az Oszvald pincét a Hajósi pincefalu egyik leghangulatosabb terén, amelyet családi vállalkozásban 2009-ben nyitottunk meg ismét a borkedvelő közönség előtt. Célunk, hogy a szívvel-lélekkel gondozott területeinkről származó, kézi szüretelésű termésből készült hajósi borainkat minél többen megkóstolhassák ebben a különleges környezetben.",
    page: "https://oszvaldpincehajos.hu/",
  },
  {
    winery: "Umenhoffer Pince",
    email: "huberpince@gmail.com",
    str: "Egy hangulatos kis pince, a Hajósi – Pincefalu szívében, ahol mindig finom borokkal várjuk az ide látógató vendégeinket. Ha hajósi borokat kóstolnál, vagy csak kíváncsi vagy milyen egy igazi borospince hangulata, térj be hozzánk és nem fogod megbánni!",
    page: "https://oszvaldpincehajos.hu/",
  },
];

//open modal//
const cardButton = document.querySelectorAll(".card button");
const cardImage = document.querySelectorAll(".card");
const outerModal = document.querySelector(".modal_outer");
const innerModal = document.querySelector(".modal_inner");

function handleButtonClicked(event) {
  const button = event.currentTarget;
  const card = button.closest(".card");
  const imgSrc = card.querySelector("img").src;
  const heading = card.querySelector("h2").textContent;
  const description = card.dataset.description;
  //console.log(heading)
  innerModal.innerHTML = `
  <img width="400" height="400" src='${imgSrc.replace(
    "200",
    "600"
  )}' alt='${description}' />
  <h2 class="ptittlemargin">${hajos[description].winery}</h2>
  <p class="pbuttonbottom" >${hajos[description].str}</p>
  <a href="${hajos[description].page}"  class="btn-custom primary">${
    hajos[description].winery
  }</a>
  <a href="javascript:void(0);" class="btn-custom primary goBackModal" onclick="closeModalButton()" >Vissza</a>


`;
  //console.log(card.dataset.description);

  //console.log(imgSrc);
  outerModal.classList.add("open");
}

function closeModal(e) {
  const clickOutside = e.target.closest(".modal_inner");
  if (!clickOutside) {
    outerModal.classList.remove("open");
  }
}
function closeModalButton() {
  let element = document.getElementById("modal_winery");
  element.classList.remove("open");
}

cardButton.forEach((button) =>
  button.addEventListener("click", handleButtonClicked)
);
cardImage.forEach((button) =>
  button.addEventListener("click", handleButtonClicked)
);
// outerModal.addEventListener("click", closeModal);

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

"use strict";

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
    image1: "image/huber/huber1.jpg",
    image2: "image/huber/huber2.jpg",
    image3: "image/huber/huber3.jpg",
    image4: "image/huber/huber4.jpg",
    adresse: "6344, Hajós <br> Csárda sor 7.",
    telefon: "+36/30-548-3904",
    email: "huberpince@gmail.com",

    str: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

    page: "https://huberpince.hu/",
  },
  {
    winery: "Oszvald Pince",
    image1: "image/huber/huber2.jpg",
    image2: "image/huber/huber3.jpg",
    image3:
      "https://oszvaldpincehajos.hu/wp-content/uploads/2020/05/sillerhordo.jpg",
    image4: "image/huber/huber4.jpg",
    adresse: "6344, Hajós <br> Csárda sor 7.",
    telefon: "+36/30-548-3904",
    email: "huberpince@gmail.com",
    str: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    page: "https://oszvaldpincehajos.hu/",
  },
  {
    winery: "Umenhoffer Pince",
    image1: "image/huber/huber2.jpg",
    image2: "image/huber/huber3.jpg",
    image3: "https://umenhofferpince.hu/image/umenhoffer-2.png",
    image4: "image/huber/huber4.jpg",
    adresse: "6344, Hajós <br> Csárda sor 7.",
    telefon: "+36/30-548-3904",
    email: "huberpince@gmail.com",
    str: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
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
  <div class="container" >
  <div class="row" >
  <div class="col-12" ><h2>${hajos[description].winery}</h2></div>
  <div class="row masonry" >
  <div class="col-lg-6 col-md-6 masonry-item cards winerycards">
  <article class="post sigma_featured-product">
      <div class="post-thumbnail card" data-description="1">
          <a href="#"><img src='${hajos[description].image1}' alt="huber1" /></a>
          
      </div>
  </article>
</div>
  <div class="col-lg-6 col-md-6 masonry-item cards winerycards">
  <article class="post sigma_featured-product">
      <div class="post-thumbnail card" data-description="2">
          <a href="#"><img src='${hajos[description].image2}' alt="huber1" /></a>
          
      </div>
  </article>
</div>
<div class="col-lg-6 col-md-6 masonry-item cards winerycards">
  <article class="post sigma_featured-product">
      <div class="post-thumbnail card" data-description="3">
          <a href="#"><img src='${hajos[description].image3}' alt="blog post" /></a>
          
      </div>
  </article>
</div>
<div class="col-lg-6 col-md-6 masonry-item cards winerycards">
  <article class="post sigma_featured-product">
      <div class="post-thumbnail card" data-description="4">
          <a href="#"><img src='${hajos[description].image4}' alt="blog post" /></a>
          
      </div>
  </article>
</div>
</div>
  <p class="col-12 col-md-8 pbuttonbottom " >${hajos[description].str}</p>
  <div class=" col-12 col-md-4 ptittlemargin ">
  <h5>Elérhetőségek:</h5>
  <p>Cím: <br> ${hajos[description].adresse} </p>
  <a href="tel:${hajos[description].telefon}">${hajos[description].telefon}</a><br>
  <a href="mailto:${hajos[description].email}">${hajos[description].email}</a>
  </div>
  <div class="col-12 row " >
  <div class="col-12 col-md-6 justify-content-center d-flex" ><a class=" btn-custom primary justify-content-center" href="${hajos[description].page}">${hajos[description].winery}</a></div>
  <div class="col-12 col-md-6 justify-content-center d-flex" ><a class=" btn-custom primary goBackModal justify-content-center" href="javascript:void(0);"  onclick="closeModalButton()" >Vissza</a></div>
  </div>
  </div>
  </div>
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

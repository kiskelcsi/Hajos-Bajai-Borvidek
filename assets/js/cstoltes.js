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
    winery: "Berger Pince",
    image1: "image/Berger/berger2.jpg",
    image2: "image/Berger/berger3.jpg",
    image3: "image/Berger/berger4.jpg",
    image4: "image/Berger/berger5.jpg",
    adresse: "1234, Hajos-Baja <br> Szőlő utca 7.",
    telefon: "+36/30-123-4567",
    email: "hajosbaja@gmail.com",
    str: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    page: "https://hajosbaja.hu/",
  },
  {
    winery: "Csanádi Pince",
    image1: "image/Csanadi/csanadi2.jpg",
    image2: "image/Csanadi/csanadi3.jpg",
    image3: "image/Csanadi/csanadi4.jpg",
    image4: "image/Csanadi/csanadi5.jpg",
    adresse: "1234, Hajos-Baja <br> Szőlő utca 7.",
    telefon: "+36/30-123-4567",
    email: "hajosbaja@gmail.com",
    str: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    page: "https://hajosbaja.hu/",
  },
  {
    winery: "Lakner Pince",
    image1: "image/Lakner/lakner1.jpg",
    image2: "image/Lakner/lakner2.jpg",
    image3: "image/Lakner/lakner3.jpg",
    image4: "image/Lakner/lakner4.jpg",
    adresse: "1234, Hajos-Baja <br> Szőlő utca 7.",
    telefon: "+36/30-123-4567",
    email: "hajosbaja@gmail.com",
    str: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    page: "https://hajosbaja.hu/",
  },
  {
    winery: "Mendler Pince",
    image1: "image/Mendler/mendler1.jpg",
    image2: "image/Mendler/mendler2.jpg",
    image3: "image/Mendler/mendler3.jpg",
    image4: "image/Mendler/mendler4.jpg",
    adresse: "1234, Hajos-Baja <br> Szőlő utca 7.",
    telefon: "+36/30-123-4567",
    email: "hajosbaja@gmail.com",
    str: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    page: "https://hajosbaja.hu/",
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
        <div class="container">
        <h2>${hajos[description].winery}</h2>

            <div class="row grid ">
                <div class="col-lg-6 col-md-6 grid-item  cards">
                    <article class="post sigma_featured-product">
                        <div class="post-thumbnail card" data-description="1">
                            <a href="#"><img src="${hajos[description].image1}" alt="blog post" /></a>
                        </div>
                    </article>
                </div>
                <div class="col-lg-6 col-md-6 grid-item  cards">
                    <article class="post sigma_featured-product">
                        <div class="post-thumbnail card" data-description="2">
                            <a href="#"><img src="${hajos[description].image2}" alt="blog post" /></a>
                        </div>
                    </article>
                </div>
                <div class="col-lg-6 col-md-6 grid-item  cards">
                    <article class="post sigma_featured-product">
                        <div class="post-thumbnail card" data-description="3">
                            <a href="#"><img src="${hajos[description].image3}" alt="blog post" /></a>
                        </div>
                    </article>
                </div>
                <div class="col-lg-6 col-md-6 grid-item  cards">
                    <article class="post sigma_featured-product">
                        <div class="post-thumbnail card" data-description="4">
                            <a href="#"><img src="${hajos[description].image4}" alt="blog post" /></a>
                        </div>
                    </article>
                </div>
            </div>
            <div class="row">
                <p class="col-12 col-md-8 pbuttonbottom ">${hajos[description].str}</p>
                <div class=" col-12 col-md-4 ptittlemargin ">
                    <h5>Elérhetőségek:</h5>
                    <p>Cím: <br> ${hajos[description].adresse} </p>
                    <a href="tel:${hajos[description].telefon}">${hajos[description].telefon}</a><br>
                    <a href="mailto:${hajos[description].email}">${hajos[description].email}</a>
                </div>
                <div class="col-12 row ">
                    <div class="col-12 col-md-6 justify-content-center d-flex"><a class=" btn-custom primary justify-content-center" href="${hajos[description].page}">${hajos[description].winery}</a></div>
                    <div class="col-12 col-md-6 justify-content-center d-flex"><a class=" btn-custom primary goBackModal justify-content-center" href="javascript:void(0);" onclick="closeModalButton()">Vissza</a></div>
                </div>
            </div>
            
        </div>

        </div>


`;
  //console.log(card.dataset.description);
  //console.log(imgSrc);
  outerModal.classList.add("open");

  $(".grid").isotope({
    itemSelector: ".grid-item",
    columnWidth: 50,
    horizontalOrder: true,
  });

  var $grid = $(".grid");

  $grid.imagesLoaded(function () {
    $grid.isotope();
  });
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

// masonry call

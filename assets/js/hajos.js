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
    telefon: "+36/70-330-6870",
    email: "info@huberpince.hu",

    str: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

    page: "https://huberpince.hu/",
  },
  {
    winery: "Oszvald Pince",
    image3:
      "https://oszvaldpincehajos.hu/wp-content/uploads/2018/02/szobor_aj.jpg",
    image2:
      "https://oszvaldpincehajos.hu/wp-content/uploads/2020/06/6167520251597878645-768x1024.jpg",
    image1:
      "https://oszvaldpincehajos.hu/wp-content/uploads/2020/05/sillerhordo.jpg",
    image4:
      "https://oszvaldpincehajos.hu/wp-content/uploads/2017/12/10380022_521125761347281_6123016571945740324_o-1-1024x685.jpg",
    adresse: "6344, Hajós-Pincefalu <br> Présház utca Hrsz. 7813",
    telefon: "+36/70-946-5724",
    email: "oszvaldpince@gmail.com",
    str: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    page: "https://oszvaldpincehajos.hu/",
  },
  {
    winery: "Umenhoffer Pince",
    image1: "image/Umenhoffer/umen1.jpg",
    image2: "image/Umenhoffer/umen2.jpg",
    image3: "image/Umenhoffer/umen3.jpg",
    image4: "image/Umenhoffer/umen4.jpg",
    adresse: "6344, Hajós <br> Bajai u. 4",
    telefon: "+36/30-703-5139",
    email: "umenhofferpince@gmail.com",
    str: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    page: "https://umenhofferpince.hu/",
  },
  {
    winery: "7 Présház",
    image1: "image/7présház/7preshaz1.jpg",
    image2: "image/7présház/7preshaz4.jpg",
    image3: "image/7présház/7preshaz2.jpg",
    image4: "image/7présház/7preshaz3.jpg",
    adresse: "1234, Hajos-Baja <br> Szőlő utca 7.",
    telefon: "+36/30-123-4567",
    email: "hajosbaja@gmail.com",
    str: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    page: "https://oszvaldpincehajos.hu/",
  },
  {
    winery: "Barth Pince",
    image1: "image/Barth/barth1.jpg",
    image2: "image/Barth/barth3.jpg",
    image3: "image/Barth/barth2.jpg",
    image4: "image/Barth/barth4.jpg",
    adresse: "1234, Hajos-Baja <br> Szőlő utca 7.",
    telefon: "+36/30-123-4567",
    email: "hajosbaja@gmail.com",
    str: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    page: "https://oszvaldpincehajos.hu/",
  },
  {
    winery: "Beck Pince",
    image1: "image/Beck/beck2.jpg",
    image2: "image/Beck/beck1.jpg",
    image3: "image/Beck/beck3.jpg",
    image4: "image/Beck/beck4.jpg",
    adresse: "1234, Hajos-Baja <br> Szőlő utca 7.",
    telefon: "+36/30-123-4567",
    email: "hajosbaja@gmail.com",
    str: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    page: "https://oszvaldpincehajos.hu/",
  },
  {
    winery: "Berta Pince",
    image1: "image/Berta/berta1.jpg",
    image2: "image/Berta/berta2.jpg",
    image3: "image/Berta/berta3.jpg",
    image4: "image/Berta/berta4.jpg",
    adresse: "1234, Hajos-Baja <br> Szőlő utca 7.",
    telefon: "+36/30-123-4567",
    email: "hajosbaja@gmail.com",
    str: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    page: "https://oszvaldpincehajos.hu/",
  },
  {
    winery: "Knehr Pince",
    image1: "image/Knehr/knehr1.jpg",
    image2: "image/Knehr/knehr2.jpg",
    image3: "image/Knehr/knehr3.jpg",
    image4: "image/Knehr/knehr4.jpg",
    adresse: "1234, Hajos-Baja <br> Szőlő utca 7.",
    telefon: "+36/30-123-4567",
    email: "hajosbaja@gmail.com",
    str: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    page: "https://oszvaldpincehajos.hu/",
  },
  {
    winery: "Kovács Borház",
    image1: "image/Kovács/kovacs2.jpg",
    image2: "image/Kovács/kovacs3.jpg",
    image3: "image/Kovács/kovacs4.jpg",
    image4: "image/Kovács/kovacs5.jpg",
    adresse: "1234, Hajos-Baja <br> Szőlő utca 7.",
    telefon: "+36/30-123-4567",
    email: "hajosbaja@gmail.com",
    str: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    page: "https://hajosbaja.hu/",
  },
  {
    winery: "Matos Pince",
    image1: "image/Matos/matos1.jpg",
    image2: "image/Matos/matos2.jpg",
    image3: "image/Matos/matos3.jpg",
    image4: "image/Matos/matos4.jpg",
    adresse: "1234, Hajos-Baja <br> Szőlő utca 7.",
    telefon: "+36/30-123-4567",
    email: "hajosbaja@gmail.com",
    str: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    page: "https://hajosbaja.hu/",
  },
  {
    winery: "Matos Pince",
    image1: "image/Schön/schon1.jpg",
    image2: "image/Schön/schon2.jpg",
    image3: "image/Schön/schon3.jpg",
    image4: "image/Schön/schon4.jpg",
    adresse: "1234, Hajos-Baja <br> Szőlő utca 7.",
    telefon: "+36/30-123-4567",
    email: "hajosbaja@gmail.com",
    str: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    page: "https://hajosbaja.hu/",
  },
  {
    winery: "Szemerey Pince",
    image1: "image/Szemerey/szemerey1.jpg",
    image2: "image/Szemerey/szemerey2.jpg",
    image3: "image/Szemerey/szemerey3.jpg",
    image4: "image/Szemerey/szemerey4.jpg",
    adresse: "1234, Hajos-Baja <br> Szőlő utca 7.",
    telefon: "+36/30-123-4567",
    email: "hajosbaja@gmail.com",
    str: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    page: "https://hajosbaja.hu/",
  },
  {
    winery: "Sziegl Pince",
    image1: "image/Sziegl/sziegl2.jpg",
    image2: "image/Sziegl/sziegl3.jpg",
    image3: "image/Sziegl/sziegl4.jpg",
    image4: "image/Sziegl/sziegl5.jpg",
    adresse: "1234, Hajos-Baja <br> Szőlő utca 7.",
    telefon: "+36/30-123-4567",
    email: "hajosbaja@gmail.com",
    str: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    page: "https://hajosbaja.hu/",
  },
  {
    winery: "Takács Pince",
    image1: "image/Takács/takacs1.jpg",
    image2: "image/Takács/takacs2.jpg",
    image3: "image/Takács/takacs3.jpg",
    image4: "image/Takács/takacs4.jpg",
    adresse: "1234, Hajos-Baja <br> Szőlő utca 7.",
    telefon: "+36/30-123-4567",
    email: "hajosbaja@gmail.com",
    str: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    page: "https://hajosbaja.hu/",
  },
  {
    winery: "Wicker Pince",
    image1: "image/Wicker/wicker1.jpg",
    image2: "image/Wicker/wicker2.jpg",
    image3: "image/Wicker/wicker3.jpg",
    image4: "image/Wicker/wicker4.jpg",
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

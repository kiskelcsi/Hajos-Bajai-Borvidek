"use strict";

// Winerys//

var cards = $(".winerycards");
for (var i = 0; i < cards.length; i++) {
    var target = Math.floor(Math.random() * cards.length - 1) + 1;
    var target2 = Math.floor(Math.random() * cards.length - 1) + 1;
    cards.eq(target).before(cards.eq(target2));
}

const hajos = [{
        winery: "Huber Pince",
        image1: "image/huber/huber1.jpg",
        image2: "image/huber/huber2.jpg",
        image3: "image/huber/huber3.jpg",
        image4: "image/huber/huber4.jpg",
        adresse: "6344, Hajós Pincefalu<br> Csárda sor 7.",
        telefon: "+36703306870",
        email: "info@huberpince.hu",

        str1: "A nagypapa pincéje 1977-ben épült a Présház utcában, Huber János pedig 2008-ban készítette el első saját borát és kezdett el a családi pincében dolgozni. János 2,5 hektár területen dolgozik és évente 8-10.000 palack bort készít.",
        str2: "A papa pincéjét kinőve több pincét is vásárolt a Csárda soron, így jelenleg négy egymás melletti pince áll a rendelkezésére szőlőfeldolgozáshoz, borkészítéshez és a vendégek fogadásához.",
        str3: "Termesztett fajtái az Olaszrizling, Zöld veltelini, Cserszegi fűszeres, Zweigelt, Kékfrankos, Cabernet sauvignon és Merlot.",
        str4: "2021-ben János húga úgy döntött, hogy párjával hazatérnek a családi vállalkozásba külföldi tapasztalatszerzéseik után és segítik testvérét. Azóta Huber János borász mellett Huber Anikó és Pogacsics Krisztián várják a vendégeket és foglalkoznak a gasztronómiával.",

        page: "huberpince.hu/",
    },
    {
        winery: "Oszvald Pince",
        image3: "https://oszvaldpincehajos.hu/wp-content/uploads/2018/02/szobor_aj.jpg",
        image2: "https://oszvaldpincehajos.hu/wp-content/uploads/2020/06/6167520251597878645-768x1024.jpg",
        image1: "https://oszvaldpincehajos.hu/wp-content/uploads/2020/05/sillerhordo.jpg",
        image4: "https://oszvaldpincehajos.hu/wp-content/uploads/2017/12/10380022_521125761347281_6123016571945740324_o-1-1024x685.jpg",
        adresse: "6344, Hajós-Pincefalu <br> Présház utca Hrsz. 7813",
        telefon: "+36/70-946-5724",
        email: "oszvaldpince@gmail.com",
        str1: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
        str2: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
        str3: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
        str4: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
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
        str1: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
        str2: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
        str3: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
        str4: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
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
        str1: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
        str2: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
        str3: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
        str4: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
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
        str1: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
        str2: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
        str3: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
        str4: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
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
        str1: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
        str2: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
        str3: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
        str4: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
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
        str1: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
        str2: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
        str3: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
        str4: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
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
        str1: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
        str2: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
        str3: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
        str4: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
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
        str1: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
        str2: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
        str3: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
        str4: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
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
        str1: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
        str2: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
        str3: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
        str4: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
        page: "https://hajosbaja.hu/",
    },
    {
        winery: "Schön Pince",
        image1: "image/Schön/schon1.jpg",
        image2: "image/Schön/schon2.jpg",
        image3: "image/Schön/schon3.jpg",
        image4: "image/Schön/schon4.jpg",
        adresse: "1234, Hajos-Baja <br> Szőlő utca 7.",
        telefon: "+36/30-123-4567",
        email: "hajosbaja@gmail.com",
        str1: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
        str2: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
        str3: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
        str4: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
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
        str1: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
        str2: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
        str3: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
        str4: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
        page: "https://hajosbaja.hu/",
    },
    {
        winery: "Sziegl Pince",
        image1: "image/Sziegl/sziegl1.jpg",
        image2: "image/Sziegl/sziegl2.jpg",
        image3: "image/Sziegl/sziegl4.jpg",
        image4: "image/Sziegl/sziegl3.jpg",
        adresse: "1234, Hajos-Baja <br> Szőlő utca 7.",
        telefon: "+36/30-123-4567",
        email: "hajosbaja@gmail.com",
        str1: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
        str2: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
        str3: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
        str4: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
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
        str1: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
        str2: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
        str3: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
        str4: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
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
        str1: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
        str2: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
        str3: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
        str4: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
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
        <div class="container modal_winery">
        <h2>${hajos[description].winery}</h2>

            <div class="row grid ">
                <div class="col-lg-12 col-md-12 grid-item row cards">
                    <article class="post col-12 col-md-6 sigma_featured-product">
                        <div class="post-thumbnail card" data-description="1">
                            <a href="#"><img class="lazyload jsimages" src="${hajos[description].image1}" alt="blog post" /></a>
                        </div>
                    </article>
                    <article class="col-12 col-md-6 post sigma_featured-product">
                        <div class="post-thumbnail card" >
                        <p class=" pbuttonbottom ">${hajos[description].str1}</p>
                        </div>
                    </article>
                </div>

                <div class="col-lg-12 col-md-12 grid-item row cards">
                <article class="post col-12 col-md-6 sigma_featured-product">
                        <div class="post-thumbnail card" >
                        <p class=" pbuttonbottom ">${hajos[description].str2}</p>
                        </div>
                    </article>
                    <article class="post col-12 col-md-6 sigma_featured-product">
                        <div class="post-thumbnail card" data-description="2">
                            <a href="#"><img class="lazyload jsimages" src="${hajos[description].image2}" alt="blog post" /></a>
                        </div>
                    </article>
                </div>
                <div class="col-lg-12 col-md-12 grid-item row  cards">
                    <article class="post col-12 col-md-6 sigma_featured-product">
                        <div class="post-thumbnail card" data-description="3">
                            <a href="#"><img class="lazyload jsimages" src="${hajos[description].image3}" alt="blog post" /></a>
                        </div>
                    </article>
                    <article class="post col-12 col-md-6 sigma_featured-product">
                    <div class="post-thumbnail card" >
                    <p class=" pbuttonbottom ">${hajos[description].str3}</p>
                    </div>
                </article>
                </div>
                <div class="col-lg-12 col-md-12 grid-item row cards">
                <article class="post col-12 col-md-6 sigma_featured-product">
                    <div class="post-thumbnail card" >
                    <p class=" pbuttonbottom ">${hajos[description].str4}</p>
                    </div>
                </article>
                    <article class="post col-12 col-md-6 sigma_featured-product">
                        <div class="post-thumbnail card" data-description="4">
                            <a href="#"><img class="lazyload jsimages" src="${hajos[description].image4}" alt="blog post" /></a>
                        </div>
                    </article>
                </div>
                <div class="col-lg-12 col-md-12 grid-item  cards">
                    <article class="post sigma_featured-product">
                        <div class="post-thumbnail card pbuttonbottom" >
                        <h5>Elérhetőségek:</h5>
                        <p>Cím: <br> ${hajos[description].adresse} </p>
                        <a href="tel:${hajos[description].telefon}">${hajos[description].telefon}</a><br>
                        <a href="mailto:${hajos[description].email}">${hajos[description].email}</a>                        </div>
                    </article>
                </div>
            </div>
            <div class="row">

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

    $grid.imagesLoaded(function() {
        $grid.isotope();
    });
    $("img.lazyload").lazyload();
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
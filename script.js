// Initialiser la carte et la centrer sur le monde
var map = L.map('map').setView([20, 0], 2);

// Ajouter une couche de carte (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Liste de 30 pays et leurs informations
var countries = {
    "Canada": {
        "culture": "Multiculturelle avec une forte influence européenne et indigène.",
        "food": "Poutine, sirop d'érable, tourtière.",
        "clothing": "Tenue occidentale moderne, influence autochtone dans certaines régions.",
        "religion": "Christianisme, Islam, Judaïsme, Hindouisme."
    },
    "France": {
        "culture": "Influence majeure dans les arts, la philosophie et la mode.",
        "food": "Baguette, croissant, fromages, vin.",
        "clothing": "Mode parisienne chic, haute couture.",
        "religion": "Catholicisme principalement."
    },
    "Japon": {
        "culture": "Riche en traditions avec des éléments modernes et historiques.",
        "food": "Sushi, ramen, tempura.",
        "clothing": "Kimono, tenue occidentale.",
        "religion": "Shintoïsme, Bouddhisme."
    },
    "Brésil": {
        "culture": "Influences portugaises, africaines et indigènes.",
        "food": "Feijoada, churrasco.",
        "clothing": "Mode estivale décontractée.",
        "religion": "Christianisme, en majorité catholique."
    },
    "Inde": {
        "culture": "Diversifiée avec de nombreuses langues et coutumes.",
        "food": "Curry, chapati, biryani.",
        "clothing": "Sari, kurta, tenues occidentales.",
        "religion": "Hindouisme, Islam, Christianisme, Sikhisme."
    },
    "Chine": {
        "culture": "Civilisation ancienne avec une riche histoire philosophique.",
        "food": "Dumplings, riz, nouilles.",
        "clothing": "Qipao, tenues modernes.",
        "religion": "Bouddhisme, Taoïsme, Confucianisme."
    },
    "Mexique": {
        "culture": "Influences espagnoles et indigènes.",
        "food": "Tacos, enchiladas, guacamole.",
        "clothing": "Tenues traditionnelles comme le poncho.",
        "religion": "Christianisme, en majorité catholique."
    },
    "Allemagne": {
        "culture": "Influence dans la philosophie, la musique et la science.",
        "food": "Saucisses, bretzels, choucroute.",
        "clothing": "Dirndl, lederhosen, tenues modernes.",
        "religion": "Christianisme, principalement protestant."
    },
    "Russie": {
        "culture": "Influence byzantine et européenne.",
        "food": "Borscht, pelmeni.",
        "clothing": "Tenues chaudes pour l'hiver, tenues modernes.",
        "religion": "Christianisme orthodoxe."
    },
    "États-Unis": {
        "culture": "Diversité culturelle avec des influences mondiales.",
        "food": "Hamburgers, hot-dogs, barbecue.",
        "clothing": "Mode décontractée et influencée par les tendances.",
        "religion": "Christianisme, Islam, Judaïsme."
    },
    "Italie": {
        "culture": "Influence majeure dans l'art, la cuisine et l'architecture.",
        "food": "Pizza, pâtes, risotto.",
        "clothing": "Mode élégante, haute couture.",
        "religion": "Catholicisme principalement."
    },
    "Égypte": {
        "culture": "Civilisation ancienne influencée par l'Islam et le christianisme copte.",
        "food": "Ful medames, kushari.",
        "clothing": "Djellaba, hijab, tenues occidentales.",
        "religion": "Islam, minorités chrétiennes."
    },
    "Nigéria": {
        "culture": "Mélange de cultures tribales et influences coloniales.",
        "food": "Jollof rice, fufu.",
        "clothing": "Tenues traditionnelles comme le boubou.",
        "religion": "Islam, Christianisme."
    },
    "Afrique du Sud": {
        "culture": "Multiculturelle avec des influences européennes et africaines.",
        "food": "Biltong, braai.",
        "clothing": "Tenues modernes, tenues traditionnelles africaines.",
        "religion": "Christianisme, diverses croyances indigènes."
    },
    "Corée du Sud": {
        "culture": "Héritage confucéen, influence moderne K-pop.",
        "food": "Kimchi, bibimbap.",
        "clothing": "Hanbok, tenues occidentales.",
        "religion": "Christianisme, Bouddhisme."
    },
    "Argentine": {
        "culture": "Fortement influencée par l'Espagne et l'Italie.",
        "food": "Asado, empanadas.",
        "clothing": "Mode moderne avec une touche traditionnelle.",
        "religion": "Christianisme, principalement catholique."
    },
    "Australie": {
        "culture": "Multiculturelle avec des racines européennes et indigènes.",
        "food": "Vegemite, barbecue.",
        "clothing": "Tenues décontractées, influence occidentale.",
        "religion": "Christianisme, Islam."
    },
    "Espagne": {
        "culture": "Riche en arts, musique, danse flamenco.",
        "food": "Paella, tapas.",
        "clothing": "Mode élégante, influence flamenco.",
        "religion": "Catholicisme principalement."
    },
    "Royaume-Uni": {
        "culture": "Influence mondiale dans la littérature, la politique et la musique.",
        "food": "Fish and chips, roast beef.",
        "clothing": "Mode classique, influence des tendances.",
        "religion": "Christianisme principalement."
    },
    "Grèce": {
        "culture": "Civilisation ancienne influente en philosophie et arts.",
        "food": "Moussaka, souvlaki.",
        "clothing": "Tenues modernes, influence historique dans les festivals.",
        "religion": "Christianisme orthodoxe."
    },
    "Thaïlande": {
        "culture": "Riche en traditions bouddhistes.",
        "food": "Pad Thai, curry vert.",
        "clothing": "Tenue traditionnelle thaïlandaise, tenues modernes.",
        "religion": "Bouddhisme principalement."
    },
    "Turquie": {
        "culture": "Mélange d'influences européennes et asiatiques.",
        "food": "Kebabs, baklava.",
        "clothing": "Tenues modernes, hijab dans certaines régions.",
        "religion": "Islam principalement."
    },
    "Pérou": {
        "culture": "Influence inca et espagnole.",
        "food": "Ceviche, lomo saltado.",
        "clothing": "Poncho traditionnel, tenues modernes.",
        "religion": "Christianisme principalement."
    },
    "Indonésie": {
        "culture": "Diversité ethnique avec plus de 300 groupes ethniques.",
        "food": "Nasi goreng, satay.",
        "clothing": "Tenue batik, sarong.",
        "religion": "Islam, Christianisme, Hindouisme, Bouddhisme."
    },
    "Arabie Saoudite": {
        "culture": "Influencée par l'Islam et les traditions arabes.",
        "food": "Kabsa, dates.",
        "clothing": "Thawb, abaya.",
        "religion": "Islam principalement."
    },
    "Venezuela": {
        "culture": "Influence espagnole et indigène.",
        "food": "Arepas, pabellón criollo.",
        "clothing": "Tenues modernes, influence traditionnelle lors des festivals.",
        "religion": "Christianisme principalement."
    },
    "Vietnam": {
        "culture": "Fortement influencée par le confucianisme.",
        "food": "Pho, spring rolls.",
        "clothing": "Ao Dai, tenues modernes.",
        "religion": "Bouddhisme, Christianisme."
    },
    "Kenya": {
        "culture": "Diversité ethnique avec des traditions tribales.",
        "food": "Ugali, nyama choma.",
        "clothing": "Tenues traditionnelles africaines.",
        "religion": "Christianisme, Islam."
    },
    "Suède": {
        "culture": "Forte tradition de bien-être social.",
        "food": "Köttbullar, gravlax.",
        "clothing": "Mode minimaliste, influence occidentale.",
        "religion": "Christianisme, majoritairement luthérien."
    }
};

// Charger un fichier GeoJSON contenant les frontières des pays
var geojsonLayer = new L.GeoJSON.AJAX("https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson", {
    onEachFeature: function (feature, layer) {
        var countryName = feature.properties.ADMIN; // Nom du pays

        // Vérifie si le pays a des informations dans l'objet countries
        if (countries[countryName]) {
            // Ajouter un événement 'click' pour chaque pays ayant des infos
            layer.on('click', function () {
                var info = countries[countryName];
                // Afficher un popup avec les informations du pays
                layer.bindPopup(`
                    <h3>${countryName}</h3>
                    <strong>Culture:</strong> ${info.culture}<br>
                    <strong>Bouffe:</strong> ${info.food}<br>
                    <strong>Habits:</strong> ${info.clothing}<br>
                    <strong>Religion:</strong> ${info.religion}
                `).openPopup();
            });

            // Optionnel : Changer la couleur du pays pour montrer qu'il est interactif
            layer.setStyle({
                color: 'green', // Couleur des frontières des pays interactifs
                weight: 2,
                fillColor: 'yellow',
                fillOpacity: 0.5
            });

        } else {
            // Désactiver l'interactivité pour les autres pays
            layer.setStyle({
                color: 'gray',  // Couleur des pays non interactifs
                weight: 1,
                fillColor: 'lightgray',
                fillOpacity: 0.5
            });
            layer.off('click'); // Désactive l'événement de clic
        }
    }
}).addTo(map);
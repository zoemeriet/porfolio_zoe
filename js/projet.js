//
// var image_header_projet = document.querySelector("#projet_header > div");
//
// if (urlProjet == 'file:///Users/zoemeriet/Documents/GitHub/PORTFOLIO/projet.html?projet=chat') {
//   image_header_projet.style.backgroundImage = "url('img/projet/chat.jpg')";
// }

// Sélection des élements HTML "page"
var myTitre = document.querySelector('#projet_header h1');
var myImagePresentation = document.querySelector("#projet_header > div");


fetch('http://admin.zoemeriet.com/wp-json/wp/v2/projet').then(function(res) {
	return res.json().then(function(data_projet) {
    console.log(data_projet);
    urlProjet = document.location.href;

    for (var i = 0; i < data_projet.length; i++) {
      var url_name = data_projet[i].acf.url_name;
      urlProjet = 'file:///Users/zoemeriet/Documents/GitHub/PORTFOLIO/projet.html?projet=' + url_name;
      console.log(urlProjet);
      var titre = data_projet[i].title.rendered;
      var image_presentation = data_projet[i].acf.image_presentation;

      // Titre
      myTitre.textContent = titre;
      // Image présentation
      myImagePresentation.style.backgroundImage = "url('"  + image_presentation + "')";
    }
  });
});

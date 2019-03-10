// Sélection des élements HTML "page"
var pageProjets = document.querySelector('main.works');


fetch('http://admin.zoemeriet.com/wp-json/wp/v2/projet').then(function(res) {
	return res.json().then(function(data_projet) {
    console.log(data_projet);

    for (var i = 0; i < data_projet.length; i++) {
      // Création de la section de chaque projet
      var projet_container = document.createElement('section');
      pageProjets.appendChild(projet_container);

      // TITRE //
      var titre = document.createElement('h1');
      projet_container.appendChild(titre);
      var contenu_titre = data_projet[i].title.rendered;
      titre.textContent = contenu_titre;

      // PHOTO DE PRESENTATION //
      var photoPresentation = document.createElement('div');
      photoPresentation.classList = 'photoPresentation';
      projet_container.appendChild(photoPresentation);
      var contenu_photoPresentation = data_projet[i].acf.image_presentation;
      photoPresentation.style.backgroundImage = "url('"  + contenu_photoPresentation + "')";

      // NUMÉRO //
      var numero = document.createElement('h3');
      projet_container.appendChild(numero);
      var contenu_numero = i + 1;
      numero.textContent = '0' + contenu_numero;
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
    // Charger le contenu JSON
    fetch('contenu.json')
        .then(response => response.json())
        .then(data => {
            console.log('JSON data:', data);
          // <!-- header section start-->
          const headerTitre = document.getElementById('headerTitre');
          headerTitre.textContent = data.header.headerTitre;

          const headerNom = document.getElementById('headerNom');
          headerNom.textContent = data.header.headerNom;

          const headerRole = document.getElementById('headerRole');
          headerRole.textContent = data.header.headerRole;
          
          const socialItems = data.header.socialItems;

          // Sélectionner l'élément HTML où vous souhaitez afficher les données
          const socialContainer = document.getElementById('socialContainer');

          // Parcourir les objets et créer des éléments pour les afficher
          socialItems.forEach(socialItem => {
            // Créer un élément li
            const iElement = document.createElement('i');
            iElement.classList.add('fa-brands');
            iElement.classList.add(socialItem.icon);

            // Créer un élément a pour le lien
            const aElement = document.createElement('a');
            aElement.target = '_blank';
            aElement.href = socialItem.link;

            // Ajouter l'élément a à l'élément li
            aElement.appendChild(iElement);

            // Ajouter l'élément li à la liste de liens
            socialContainer.appendChild(aElement);
          });
          const HeaderBtnText = document.getElementById('HeaderBtnText');
          HeaderBtnText.textContent = data.header.HeaderBtnText;

          const ImgProfileContainer = document.getElementById('ImgProfileContainer');
          // Créer un élément img
          const imgProfileElement = document.createElement('img');
          imgProfileElement.src = data.header.imageProfile;
          imgProfileElement.alt = data.header.altProfile;
          ImgProfileContainer.appendChild(imgProfileElement);

          // <!-- header section start-->

          // <!-- nav section start-->
          // Accéder à la liste d'objets dans le fichier JSON
          const menuItems = data.menuItems;

          // Sélectionner l'élément HTML où vous souhaitez afficher les données
          const menuContainer = document.getElementById('menu');

          // Parcourir les objets et créer des éléments pour les afficher
          menuItems.forEach(menuItem => {
            // Créer un élément li
            const liElement = document.createElement('li');

            // Créer un élément a pour le lien
            const aElement = document.createElement('a');
            aElement.href = menuItem.link;
            aElement.textContent = menuItem.text;

            // Ajouter l'élément a à l'élément li
            liElement.appendChild(aElement);

            // Ajouter l'élément li à la liste de liens
            menuContainer.appendChild(liElement);
          });
            // <!-- nav section ends --> 
            // <!--about start -->
            const nomSpan = document.getElementById('nom');
            nomSpan.textContent = data.AboutMe.nom;
            const Introp = document.getElementById('intro');
            Introp.textContent = data.AboutMe.intro;
            const DescriptionP = document.getElementById('description');
            DescriptionP.textContent = data.AboutMe.description;
            const AgeP = document.getElementById('age');
            AgeP.textContent = data.AboutMe.age;
            const EmailSpan = document.getElementById('email');
            EmailSpan.textContent = data.AboutMe.email;
            const PlaceSpan = document.getElementById('place');
            PlaceSpan.textContent = data.AboutMe.place;
            // <!--about ends -->

            // <!--skills start -->
            const images = data.competences;
            const imagesContainer = document.getElementById('imagesContainer');

        // Parcourir les images et créer des éléments pour les afficher
        images.forEach(image => {
            // Créer un élément div avec la classe "item"
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('item');

            // Créer un élément img
            const imgElement = document.createElement('img');
            imgElement.src = image.image;
            imgElement.alt = image.nom;

            // Créer un élément p pour le texte
            const pElement = document.createElement('p');
            pElement.textContent = image.nom;

            // Ajouter l'élément img et l'élément p à l'élément div
            itemDiv.appendChild(imgElement);
            itemDiv.appendChild(pElement);

            // Ajouter l'élément div au conteneur des images
            imagesContainer.appendChild(itemDiv);
            // <!--skills ends-->
        });
            // <!--services start -->
            // Accéder à la liste d'images dans le fichier JSON
            const services = data.services;

            // Sélectionner l'élément HTML où vous souhaitez afficher les images
            const ServicesContainer = document.getElementById('ServicesContainer');

            // Parcourir les images et créer des éléments pour les afficher
            services.forEach(service => {
            // Créer un élément div avec la classe "item"
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('item');

            // Créer un élément img
            const imgElement = document.createElement('img');
            imgElement.src = service.image;
            imgElement.alt = service.titre;

            // Créer un élément p pour le texte
            const h3Element = document.createElement('h3');
            h3Element.textContent = service.titre;

            // Créer un élément p pour le texte
            const pElement = document.createElement('p');
            pElement.textContent = service.description;

            // Ajouter l'élément img et l'élément p à l'élément div
            itemDiv.appendChild(imgElement);
            itemDiv.appendChild(h3Element);
            itemDiv.appendChild(pElement);

            // Ajouter l'élément div au conteneur des images
            ServicesContainer.appendChild(itemDiv);
          });
          // <!--skills ends -->

          // <!--Portfolio starts -->
          // Accéder à la liste d'objets dans le fichier JSON
          const portfolios = data.portfolio;

          // Sélectionner l'élément HTML où vous souhaitez afficher les données
          const PortfolioContainer = document.getElementById('PortfolioContainer');

          // Parcourir les objets et créer des éléments pour les afficher
          portfolios.forEach(item => {
            // Créer un élément div avec la classe "item"
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('item');

            // Créer un élément img
            const imgElement = document.createElement('img');
            imgElement.src = item.image;
            imgElement.alt = item.titre;

            // Créer un élément div avec la classe "item-content"
            const itemContentDiv = document.createElement('div');
            itemContentDiv.classList.add('item-content');

            // Créer un élément h3 pour le titre
            const h3Element = document.createElement('h3');
            h3Element.textContent = item.titre;

            // Créer un élément a pour le lien
            const aElement = document.createElement('a');
            aElement.href = item.lien;
            aElement.target = '_blank';
            aElement.textContent = 'Visit website';

            // Ajouter l'élément img à l'élément div
            itemDiv.appendChild(imgElement);

            // Ajouter l'élément h3 et l'élément a à l'élément div "item-content"
            itemContentDiv.appendChild(h3Element);
            itemContentDiv.appendChild(aElement);

            // Ajouter l'élément "item-content" à l'élément div
            itemDiv.appendChild(itemContentDiv);

            // Ajouter l'élément div au conteneur des données
            PortfolioContainer.appendChild(itemDiv);
          });

        //  <!-- Portfolio ends -->
        })
        .catch(error => console.error('Erreur de chargement du JSON :', error));
});

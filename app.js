// app.js
document.addEventListener('DOMContentLoaded', function () {
    // Charger le contenu JSON
    fetch('contenu.json')
        .then(response => response.json())
        .then(data => {
            // Mettre à jour le contenu HTML avec les données du JSON
            document.getElementById('logo').innerText = data.titre;

            // Section "About"
            document.querySelector('#about h1').innerText = data.presentation.titre;
            document.querySelector('.text-primary').innerText = data.presentation.intro;
            document.querySelector('.content-text h1').innerText = data.presentation.nom;
            document.querySelector('.title').innerText = data.presentation.titre;
            document.querySelector('.col-1 p').innerText = data.presentation.description;
            document.querySelector('.col-2 p:nth-child(1)').innerText = `Age: ${data.presentation.informations.age}`;
            document.querySelector('.col-2 p:nth-child(2)').innerText = `Email: ${data.presentation.informations.email}`;
            document.querySelector('.col-2 p:nth-child(3)').innerText = `Place: ${data.presentation.informations.lieu}`;

            // Section "Skills"
            const skillsContainer = document.querySelector('.skills-content .row');
            data.competences.forEach(competence => {
                const skillItem = document.createElement('div');
                skillItem.classList.add('item');
                skillItem.innerHTML = `<img src="${competence.image}" alt="${competence.nom}"><p>${competence.nom}</p>`;
                skillsContainer.appendChild(skillItem);
            });

            // Section "Services"
            const servicesContainer = document.querySelector('#services .row');
            data.services.forEach(service => {
                const serviceItem = document.createElement('div');
                serviceItem.classList.add('item');
                serviceItem.innerHTML = `<img src="${service.image}" alt=""><h3>${service.nom}</h3><p>${service.description}</p>`;
                servicesContainer.appendChild(serviceItem);
            });

            // Section "Portfolio"
            const portfolioContainer = document.querySelector('#portfolio .row');
            data.portfolio.forEach(portfolioItem => {
                const item = document.createElement('div');
                item.classList.add('item');
                item.innerHTML = `<img src="${portfolioItem.image}" alt=""><div class="item-content"><h3>${portfolioItem.nom}</h3><a href="${portfolioItem.lien}" target="_blank">visit website</a></div>`;
                portfolioContainer.appendChild(item);
            });
        })
        .catch(error => console.error('Erreur de chargement du JSON :', error));
});

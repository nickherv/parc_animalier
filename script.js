document.getElementById('signup-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert("Les mots de passe ne correspondent pas.");
    } else {
        alert("Inscription réussie !");
        // Submit the form or perform further actions
    }
});
document.getElementById('edit-profile').addEventListener('click', function () {
    alert("Fonction de modification à implémenter.");
});

document.getElementById('logout').addEventListener('click', function () {
    alert("Déconnexion réussie.");
    // Rediriger vers la page de connexion
});
document.addEventListener('DOMContentLoaded', function () {
    fetchEnclosures();
});

function fetchEnclosures() {
    // Remplacez cette URL par l'URL de votre API
    fetch('https://api.example.com/enclosures')
        .then(response => response.json())
        .then(data => renderEnclosures(data))
        .catch(error => console.error('Error fetching enclosures:', error));
}

function renderEnclosures(enclosures) {
    const enclosureList = document.getElementById('enclosure-list');
    enclosureList.innerHTML = '';

    enclosures.forEach(enclosure => {
        const enclosureElement = document.createElement('div');
        enclosureElement.className = 'enclosure';

        enclosureElement.innerHTML = `
            <h2>${enclosure.name}</h2>
            <img src="${enclosure.image}" alt="${enclosure.name}">
            <p>${enclosure.description}</p>
        `;

        enclosureList.appendChild(enclosureElement);
    });
}
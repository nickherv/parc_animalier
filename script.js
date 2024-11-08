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
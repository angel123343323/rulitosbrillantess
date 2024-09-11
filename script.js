// script.js
document.getElementById('passwordForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe normalmente

    var password = document.getElementById('password').value;
    var correctPassword = 'miContraseña'; // Cambia esto por tu contraseña real

    if (password === correctPassword) {
        window.location.href = 'confirmacion.html'; // Redirige a la página de confirmación
    } else {
        document.getElementById('error').style.display = 'block'; // Muestra el mensaje de error
    }
});

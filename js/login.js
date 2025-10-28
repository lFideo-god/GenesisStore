document.getElementById('loginForm').addEventListener('submit', function(event) {

    event.preventDefault(); 

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const messageElement = document.getElementById('message');


    if (username === 'admin' && password === '1234') {
        messageElement.textContent = '¡Inicio de sesión exitoso! Bienvenido/a a Genesis\'s Shop.';
        messageElement.style.color = '#38b000'; // Verde
    } else {
        messageElement.textContent = 'Usuario o contraseña incorrectos. Inténtalo de nuevo.';
        messageElement.style.color = '#ff4d4d'; // Rojo
    }
});
document.getElementById('loginForm').addEventListener('submit', function (event) {

    event.preventDefault();

    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const messageElement = document.getElementById('message');

    const username = usernameInput.value;
    const password = passwordInput.value;


    if (username === 'admin' && password === '1234') {

        messageElement.textContent = '¡Inicio de sesión exitoso! Bienvenido/a a Genesis\'s Shop.';
        messageElement.style.color = '#38b000';
    } else {

messageElement.textContent = '';
messageElement.style.color = '#ff4d4d'; 
}

    usernameInput.value = '';
    passwordInput.value = '';


    if (username !== 'admin' || password !== '1234') {
        usernameInput.focus();
    }
});
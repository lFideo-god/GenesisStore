document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const messageElement = document.getElementById('message');

    // Pasar el usuario a minúsculas y eliminar espacios extra
    const username = usernameInput.value.trim().toLowerCase();

    // --- Lógica de acceso ---
    if (username === 'admin') {
        messageElement.textContent = '¡Inicio de sesión exitoso! Bienvenido/a a Genesis\'s Shop.';
        messageElement.style.color = '#38b000';
        setTimeout(() => {
            window.location.href = 'pages/store.html';
        }, 500);

    } else if (username === 'fideo' || username === 'lfideo') {
        window.location.href = 'pages/chars/fideo.html'; 
    }

    else if (username === 'darmoo' || username === 'eldarmoo') {
        window.location.href = 'pages/chars/darmoo.html';
    }

    else if (username === 'dirmoo') {
        messageElement.textContent = 'Jaja, dirmoo';
    }

    else if (username === 'noap') {
        window.location.href = 'pages/chars/noap.html';
    } 
    
    else {
        // --- Usuario no reconocido ---
        //messageElement.textContent = 'Usuario no reconocido.';
        //essageElement.style.color = '#ff4d4d';
        // Redirect a store como invitado
        window.location.href = 'pages/store.html';
        usernameInput.focus();
    }

    // --- Limpieza de campos ---
    usernameInput.value = '';
    passwordInput.value = '';
});
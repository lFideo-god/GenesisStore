console.log('Login script loaded');

document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const messageElement = document.getElementById('message');

    // Pasar el usuario a minúsculas y eliminar espacios extra
    const username = usernameInput.value.trim().toLowerCase();


    if (username === 'fideo' || username === 'lfideo') {
        window.location.href = 'pages/chars/fideo.html'; 
    }

    else if (username === 'darmoo' || username === 'eldarmoo') {
        window.location.href = 'pages/chars/darmoo.html';
    }

    else if (username === 'noap') {
        window.location.href = 'pages/chars/noap.html';
    } 

    else if (username === 'alan' || username === 'alan2k2' || username === 'alan2k2mc' ) {
        window.location.href = 'pages/chars/alan.html';
    } 

    else if (username === 'bluesito' || username === 'bluesitoh' || username === 'blue') {
        window.location.href = 'pages/chars/bluesitoh.html';
    }

    else if (username === 'soru' || username === 'sorusan' || username === 'soru_san') {
        window.location.href = 'pages/chars/soru.html';
    }

    else if (username === 'Snoker' || username === 'Xocke' || username === 'snoker' || username === 'xocke') {
        window.location.href = 'pages/chars/snoker.html';
    }

    // ================ EASTER EGGS ======================


    else if (username === 'dirmoo') {
        messageElement.textContent = 'Jaja, dirmoo';
    }

    else if (username === 'endertuki') {
        
        //show etuki.gif gif for 500 ms
        const etukiImg = document.createElement('img');
        etukiImg.src = 'assets/easters/etuki.gif';
        etukiImg.style.position = 'fixed';
        etukiImg.style.top = '50%';
        etukiImg.style.left = '50%';
        etukiImg.style.transform = 'translate(-50%, -50%)';
        etukiImg.style.zIndex = '1000';
        etukiImg.style.width = '100%';
        etukiImg.style.height = '100%';
        etukiImg.style.mixBlendMode = 'lighten';
    
        document.body.appendChild(etukiImg);

        setTimeout(() => {
            document.body.removeChild(etukiImg);
        }, 300);
        //small delay for the gif to be seen then show alert
        setTimeout(() => {
            alert('👁 👁');
        }, 350);
        
        //alert('👁 👁');
    }

    //else if (username === 'alan2k3' && passwordInput.value === 'FIDEO') {
    //    window.location.href = 'pages/chars/fideo.html';
    //}

    // --- Limpieza de campos ---
    usernameInput.value = '';
    passwordInput.value = '';
});
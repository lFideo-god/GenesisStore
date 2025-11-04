particlesJS('particles-js',
    {
        "particles": {
            "number": {
                "value": 250, // Más partículas para densidad
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#df912bff" // Color morado intenso
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 1,
                    "color": "#f09319ff" // Borde morado oscuro
                },
            },
            "opacity": {
                "value": 0.4, // Menor opacidad para un efecto de "niebla"
                "random": true,
                "anim": {
                    "enable": true, // La opacidad titilante simula inestabilidad/distorsión
                    "speed": 1.5,
                    "opacity_min": 0.05,
                    "sync": false
                }
            },
            "size": {
                "value": 4,
                "random": true,
                "anim": {
                    "enable": true, // Animación de tamaño para inestabilidad
                    "speed": 10,
                    "size_min": 0.5,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150, // ⬆️ Aumentado para una red de conexión más amplia
                "color": "#e26e2bff", // Color de líneas vibrante
                "opacity": 0.7,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 4, // Movimiento lento y constante
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "bounce", // Rebotan en los bordes para un efecto contenido
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse" // CLAVE: Repele las partículas del ratón
                },
                "onclick": {
                    "enable": true,
                    "mode": "bubble" // Al hacer clic, las partículas se expanden/hacen "burbuja"
                },
                "resize": true
            },
            "modes": {
                "repulse": {
                    "distance": 100, // ⬆️ Aumentado (más repulsión)
                    "duration": 1.5 // ⬆️ Aumentado (movimiento más lento/largo para ver el choque)
                },
                "bubble": {
                    "distance": 200,
                    "size": 10,
                    "duration": 2,
                    "opacity": 0.8
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    }
);
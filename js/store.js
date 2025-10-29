// Store functionality for Genesis's Minecraft Shop

document.addEventListener('DOMContentLoaded', function() {
    // Initialize particles.js if not already initialized
    if (typeof particlesJS !== 'undefined' && document.getElementById('particles-js')) {
        // Use the existing particles-config if available, otherwise use default
        const defaultConfig = {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: "#8a2be2"
                },
                shape: {
                    type: "circle",
                    stroke: {
                        width: 0,
                        color: "#000000"
                    }
                },
                opacity: {
                    value: 0.5,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 2,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#8a2be2",
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 1,
                    direction: "none",
                    random: true,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                    attract: {
                        enable: true,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: true,
                        mode: "grab"
                    },
                    onclick: {
                        enable: true,
                        mode: "push"
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    push: {
                        particles_nb: 4
                    }
                }
            },
            retina_detect: true
        };
        
        // Initialize with default config if no custom config exists
        particlesJS('particles-js', defaultConfig);
    }
    
    // Shopping cart functionality
    let cart = [];
    
    // DOM elements
    const cartIcon = document.getElementById('cartIcon');
    const cartModal = document.getElementById('cartModal');
    const closeCart = document.getElementById('closeCart');
    const cartCount = document.getElementById('cartCount');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    // Open cart modal
    cartIcon.addEventListener('click', function() {
        updateCartDisplay();
        cartModal.classList.add('active');
    });
    
    // Close cart modal
    closeCart.addEventListener('click', function() {
        cartModal.classList.remove('active');
    });
    
    // Close cart when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === cartModal) {
            cartModal.classList.remove('active');
        }
    });
    
    // Quantity buttons functionality
    document.querySelectorAll('.qty-btn').forEach(button => {
        button.addEventListener('click', function() {
            const item = this.getAttribute('data-item');
            const input = document.getElementById(`qty-${item}`);
            let value = parseInt(input.value);
            
            if (this.classList.contains('plus')) {
                value = Math.min(value + 1, 64);
            } else if (this.classList.contains('minus')) {
                value = Math.max(value - 1, 1);
            }
            
            input.value = value;
        });
    });
    
    // Add to cart functionality
    document.querySelectorAll('.add-to-cart-btn').forEach(button => {
        button.addEventListener('click', function() {
            const itemCard = this.closest('.item-card');
            const item = this.getAttribute('data-item');
            const name = itemCard.getAttribute('data-name');
            const price = parseInt(itemCard.getAttribute('data-price'));
            const quantity = parseInt(document.getElementById(`qty-${item}`).value);
            
            // Check if item is already in cart
            const existingItemIndex = cart.findIndex(cartItem => cartItem.id === item);
            
            if (existingItemIndex > -1) {
                // Update quantity if item exists
                cart[existingItemIndex].quantity += quantity;
            } else {
                // Add new item to cart
                cart.push({
                    id: item,
                    name: name,
                    price: price,
                    quantity: quantity
                });
            }
            
            // Update cart count
            updateCartCount();
            
            // Show feedback
            showAddToCartFeedback(itemCard);
        });
    });
    
    // Remove item from cart
    function removeItemFromCart(itemId) {
        cart = cart.filter(item => item.id !== itemId);
        updateCartDisplay();
        updateCartCount();
    }
    
    // Update cart count display
    function updateCartCount() {
        const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
        cartCount.textContent = totalItems;
    }
    
    // Update cart display in modal
    function updateCartDisplay() {
        if (cart.length === 0) {
            cartItems.innerHTML = '<p style="color:#aaa;text-align:center;">Tu carrito está vacío</p>';
            cartTotal.textContent = '$0';
            return;
        }
        
        let cartHTML = '';
        let total = 0;
        
        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            
            cartHTML += `
                <div class="cart-item">
                    <div class="cart-item-info">
                        <h4>${item.name}</h4>
                        <p>$${item.price} c/u</p>
                    </div>
                    <div class="cart-item-controls">
                        <span class="cart-quantity">${item.quantity}</span>
                        <button class="remove-item" data-item="${item.id}">−</button>
                    </div>
                </div>
            `;
        });
        
        cartItems.innerHTML = cartHTML;
        cartTotal.textContent = `$${total}`;
        
        // Add event listeners to remove buttons
        document.querySelectorAll('.remove-item').forEach(button => {
            button.addEventListener('click', function() {
                const itemId = this.getAttribute('data-item');
                removeItemFromCart(itemId);
            });
        });
    }
    
    // Show feedback when adding to cart
    function showAddToCartFeedback(itemCard) {
        const originalBg = itemCard.style.backgroundColor;
        itemCard.style.backgroundColor = 'rgba(85, 170, 85, 0.5)';
        
        setTimeout(() => {
            itemCard.style.backgroundColor = originalBg;
        }, 300);
    }
    
    // Initialize cart count
    updateCartCount();
});
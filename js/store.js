// Store functionality for Genesis's Minecraft Shop

    
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
        } else {
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

        //  ✔️ Leer el nombre del <h3>
        const name = itemCard.querySelector("h3").textContent.trim();

        // ✔️ No hay precio en esta tienda ficticia
        const price = 0;

        const quantity = parseInt(document.getElementById(`qty-${item}`).value);

        const existingItemIndex = cart.findIndex(cartItem => cartItem.id === item);

        if (existingItemIndex > -1) {
            cart[existingItemIndex].quantity += quantity;
        } else {
            cart.push({
                id: item,
                name: name,
                price: price,
                quantity: quantity
            });
        }

        updateCartCount();
        showAddToCartFeedback(itemCard);
    });
});
    
    // Remove item from cart
    function removeItemFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    updateCartDisplay();
    updateCartCount();
}

// Update cart count
function updateCartCount() {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;
}
    
    // Update cart display in modal
    function updateCartDisplay() {

    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="color:#aaa;text-align:center;">Tu carrito está vacío</p>';
        cartTotal.textContent = `0 ítems`;
        return;
    }

    let cartHTML = '';
    let total = 0;

    cart.forEach(item => {
        total += item.quantity;

        cartHTML += `
            <div class="cart-item">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>Cantidad: ${item.quantity}</p>
                </div>
                <div class="cart-item-controls">
                    <button class="remove-item" data-item="${item.id}">X</button>
                </div>
            </div>
        `;
    });

    cartItems.innerHTML = cartHTML;
    cartTotal.textContent = `${total} ítems`;

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

    // Tooltip following mouse functionality
    let currentTooltip = null;

    document.querySelectorAll('.item-card').forEach(card => {
        const tooltip = card.querySelector('.item-tooltip');

        card.addEventListener("mouseenter", () => {
    tooltip.style.opacity = "1";
    tooltip.style.visibility = "visible";
});

card.addEventListener("mouseleave", () => {
    tooltip.style.opacity = "0";
    tooltip.style.visibility = "hidden";
});

        card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();

    const offsetX = rect.width + 10; // a la derecha del item
    const offsetY = e.clientY - rect.top - tooltip.offsetHeight / 2;

    tooltip.style.left = offsetX + "px";
    tooltip.style.top = offsetY + "px";
});

    });
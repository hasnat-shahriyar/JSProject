let cart = [];
let totalQuantity = 0;
let totalPrice = 0;

// Load cart data from localStorage on page load
document.addEventListener('DOMContentLoaded', function () {
    if (localStorage.getItem('cart')) {
        cart = JSON.parse(localStorage.getItem('cart'));
        updateCart();
    }
});

function addToCart(price) {
    cart.push(price);
    totalQuantity++;
    totalPrice += price;
    updateCart();
    saveCart();
}

function removeFromCart(index, price) {
    cart.splice(index, 1);
    totalQuantity--;
    totalPrice -= price;
    updateCart();
    saveCart();
}

function updateCart() {
    const cartItemsElement = document.getElementById('cart-items');
    cartItemsElement.innerHTML = '';
    cart.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.textContent = `Product ${index + 1}: $${item}`;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-button'; // Add class for styling
        removeButton.onclick = () => {
            removeFromCart(index, item);
            itemElement.remove(); // Remove the item from DOM when remove button is pressed
        };
        itemElement.appendChild(removeButton);
        cartItemsElement.appendChild(itemElement);
    });

    document.getElementById('total-quantity').textContent = totalQuantity;
    document.getElementById('total-price').textContent = totalPrice;
}

// Save cart data to localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

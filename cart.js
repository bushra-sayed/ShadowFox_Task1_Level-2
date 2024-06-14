document.addEventListener('DOMContentLoaded', () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItems = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');
    let total = 0;
    i=1;
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${i} ${item.product} - $${item.price.toFixed(2)}`;
        i=i+1
        cartItems.appendChild(li);
        total += item.price;
    });

    totalElement.textContent = total.toFixed(2);
    
});

function clearCart() {
    localStorage.removeItem('cart');
    document.getElementById('cart-items').innerHTML = '';
    document.getElementById('total').textContent = '0.00';
}

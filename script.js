const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    });
}


function updateCartTotals() {
    let subtotal = 0;

    // Loop through each row in the cart table
    document.querySelectorAll('#cart tbody tr').forEach(row => {
        const price = parseFloat(row.querySelector('.price').textContent);
        const qty = parseInt(row.querySelector('.qty').value);
        const subtotalCell = row.querySelector('.subtotal');

        // Update row subtotal
        const rowTotal = price * qty;
        subtotalCell.textContent = rowTotal.toFixed(2);

        // Add to cart subtotal
        subtotal += rowTotal;
    });

    // Update totals section
    document.getElementById('cart-subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('cart-total').textContent = `$${subtotal.toFixed(2)}`;
    }

    // Run once on page load
    updateCartTotals();

    // Recalculate when quantity changes
    document.querySelectorAll('#cart .qty').forEach(input => {
    input.addEventListener('input', updateCartTotals);
    });

    // Recalculate when item removed
    document.querySelectorAll('#cart .remove').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const row = button.closest('tr');
        row.remove();
        updateCartTotals();
    });
});

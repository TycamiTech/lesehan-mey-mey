/**
 * Lesehan Mey-Mey - Cart Page JavaScript
 * Handles cart display, options selection, and WhatsApp checkout
 */

document.addEventListener('DOMContentLoaded', () => {
    // Get cart from localStorage
    let cart = JSON.parse(localStorage.getItem('lesehanCart')) || [];

    // DOM Elements
    const cartEmpty = document.getElementById('cartEmpty');
    const cartContent = document.getElementById('cartContent');
    const cartItems = document.getElementById('cartItems');
    const subtotalEl = document.getElementById('subtotal');
    const totalPriceEl = document.getElementById('totalPrice');
    const checkoutBtn = document.getElementById('checkoutBtn');
    const clearCartBtn = document.getElementById('clearCartBtn');
    const customerNameInput = document.getElementById('customerName');
    const orderNotesInput = document.getElementById('orderNotes');

    // WhatsApp Number
    const WHATSAPP_NUMBER = '6281554980475';

    // Initialize cart display
    function initCart() {
        cart = JSON.parse(localStorage.getItem('lesehanCart')) || [];

        if (cart.length === 0) {
            cartEmpty.style.display = 'block';
            cartContent.style.display = 'none';
        } else {
            cartEmpty.style.display = 'none';
            cartContent.style.display = 'block';
            renderCartItems();
            updateTotals();
        }

        updateCartCount();
    }

    // Update cart count in header
    function updateCartCount() {
        const cartCount = document.getElementById('cartCount');
        if (cartCount) {
            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            cartCount.textContent = totalItems;
            cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
        }
    }

    // Render cart items
    function renderCartItems() {
        cartItems.innerHTML = '';

        cart.forEach((item, index) => {
            const menuItem = window.menuData[item.menuId];
            const hasOptions = menuItem && menuItem.options && Object.keys(menuItem.options).length > 0;

            const itemElement = document.createElement('div');
            itemElement.className = 'cart-item';
            itemElement.innerHTML = `
                <div class="cart-item-header">
                    <div class="cart-item-info">
                        <h4>${item.name}</h4>
                        <span class="price">${formatCurrency(item.price)}</span>
                    </div>
                    <button class="cart-item-remove" data-id="${item.id}" aria-label="Hapus item">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                </div>
                
                ${hasOptions ? `
                <div class="cart-item-options">
                    ${renderOptions(item, menuItem)}
                </div>
                ` : ''}
                
                <div class="quantity-control">
                    <label>Jumlah:</label>
                    <div class="quantity-btns">
                        <button class="quantity-btn minus" data-id="${item.id}" aria-label="Kurangi">
                            <i class="fas fa-minus"></i>
                        </button>
                        <span class="quantity-value">${item.quantity}</span>
                        <button class="quantity-btn plus" data-id="${item.id}" aria-label="Tambah">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                </div>
                
                <div class="cart-item-subtotal" style="display: flex; justify-content: space-between; margin-top: 1rem; padding-top: 1rem; border-top: 1px solid #f5f0e8;">
                    <span style="color: #666;">Subtotal:</span>
                    <span style="font-weight: 700; color: #D2691E;">${formatCurrency(item.price * item.quantity)}</span>
                </div>
            `;

            cartItems.appendChild(itemElement);
        });

        // Attach event listeners
        attachCartEventListeners();
    }

    // Render options for a cart item
    function renderOptions(cartItem, menuItem) {
        let optionsHTML = '';

        for (const [optionType, optionValues] of Object.entries(menuItem.options)) {
            const labelText = getOptionLabel(optionType);

            optionsHTML += `
                <div class="option-group">
                    <label>${labelText}</label>
                    <div class="option-choices">
            `;

            if (Array.isArray(optionValues)) {
                optionValues.forEach((option, idx) => {
                    const isObject = typeof option === 'object';
                    const optionName = isObject ? option.name : option;
                    const optionPrice = isObject ? option.price : null;
                    const isSelected = cartItem.selectedOptions[optionType] === optionName;

                    optionsHTML += `
                        <label class="option-choice">
                            <input type="radio" 
                                   name="${cartItem.id}-${optionType}" 
                                   value="${optionName}"
                                   data-item-id="${cartItem.id}"
                                   data-option-type="${optionType}"
                                   ${optionPrice ? `data-price="${optionPrice}"` : ''}
                                   ${isSelected ? 'checked' : ''}>
                            <span>${optionName}${optionPrice ? ` (+${formatCurrency(optionPrice - menuItem.price > 0 ? optionPrice - menuItem.price : 0)})` : ''}</span>
                        </label>
                    `;
                });
            }

            optionsHTML += `
                    </div>
                </div>
            `;
        }

        return optionsHTML;
    }

    // Get option label in Indonesian
    function getOptionLabel(optionType) {
        const labels = {
            'variant': 'Pilih Varian:',
            'bagian': 'Pilih Bagian:',
            'olahan': 'Pilih Olahan:',
            'ukuran': 'Pilih Ukuran:',
            'rasa': 'Pilih Rasa:'
        };
        return labels[optionType] || `Pilih ${optionType}:`;
    }

    // Attach event listeners to cart items
    function attachCartEventListeners() {
        // Remove buttons
        document.querySelectorAll('.cart-item-remove').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const itemId = btn.dataset.id;
                removeFromCart(itemId);
                showToast('Item dihapus dari keranjang', 'success');
                initCart();
            });
        });

        // Quantity buttons
        document.querySelectorAll('.quantity-btn.minus').forEach(btn => {
            btn.addEventListener('click', () => {
                const itemId = btn.dataset.id;
                updateQuantity(itemId, -1);
                initCart();
            });
        });

        document.querySelectorAll('.quantity-btn.plus').forEach(btn => {
            btn.addEventListener('click', () => {
                const itemId = btn.dataset.id;
                updateQuantity(itemId, 1);
                initCart();
            });
        });

        // Option radio buttons
        document.querySelectorAll('.option-choice input[type="radio"]').forEach(radio => {
            radio.addEventListener('change', (e) => {
                const itemId = e.target.dataset.itemId;
                const optionType = e.target.dataset.optionType;
                const optionValue = e.target.value;
                const newPrice = e.target.dataset.price;

                updateItemOption(itemId, optionType, optionValue, newPrice);
                initCart();
            });
        });
    }

    // Update item option with price
    function updateItemOption(cartItemId, optionType, optionValue, newPrice) {
        cart = JSON.parse(localStorage.getItem('lesehanCart')) || [];
        const item = cart.find(item => item.id === cartItemId);

        if (item) {
            item.selectedOptions[optionType] = optionValue;

            if (newPrice) {
                item.price = parseInt(newPrice);
            }

            localStorage.setItem('lesehanCart', JSON.stringify(cart));
        }
    }

    // Remove from cart
    function removeFromCart(cartItemId) {
        cart = cart.filter(item => item.id !== cartItemId);
        localStorage.setItem('lesehanCart', JSON.stringify(cart));
    }

    // Update quantity
    function updateQuantity(cartItemId, change) {
        cart = JSON.parse(localStorage.getItem('lesehanCart')) || [];
        const item = cart.find(item => item.id === cartItemId);

        if (item) {
            item.quantity = Math.max(1, item.quantity + change);
            localStorage.setItem('lesehanCart', JSON.stringify(cart));
        }
    }

    // Update totals
    function updateTotals() {
        const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

        subtotalEl.textContent = formatCurrency(subtotal);
        totalPriceEl.textContent = formatCurrency(subtotal);
    }

    // Format currency
    function formatCurrency(amount) {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(amount);
    }

    // Show toast notification
    function showToast(message, type = 'info') {
        const toast = document.getElementById('toast');
        if (toast) {
            toast.textContent = message;
            toast.className = `toast ${type} show`;

            setTimeout(() => {
                toast.classList.remove('show');
            }, 3000);
        }
    }

    // Generate WhatsApp message
    function generateWhatsAppMessage() {
        const customerName = customerNameInput?.value.trim() || 'Pelanggan';
        const notes = orderNotesInput?.value.trim();

        let message = `🍽️ *PESANAN BARU - LESEHAN MEY-MEY*\n`;
        message += `━━━━━━━━━━━━━━━━━━━━━\n\n`;
        message += `👤 *Nama:* ${customerName}\n\n`;
        message += `📋 *Detail Pesanan:*\n`;
        message += `───────────────────\n`;

        cart.forEach((item, index) => {
            message += `\n${index + 1}. *${item.name}*\n`;

            // Add selected options
            if (item.selectedOptions && Object.keys(item.selectedOptions).length > 0) {
                for (const [optType, optValue] of Object.entries(item.selectedOptions)) {
                    const optLabel = getOptionLabelShort(optType);
                    message += `   ${optLabel}: ${optValue}\n`;
                }
            }

            message += `   Qty: ${item.quantity} x ${formatCurrency(item.price)}\n`;
            message += `   Subtotal: ${formatCurrency(item.price * item.quantity)}\n`;
        });

        message += `\n───────────────────\n`;
        message += `💰 *TOTAL: ${formatCurrency(calculateTotal())}*\n`;

        if (notes) {
            message += `\n📝 *Catatan:*\n${notes}\n`;
        }

        message += `\n━━━━━━━━━━━━━━━━━━━━━\n`;
        message += `Terima kasih telah memesan di Lesehan Mey-Mey! 🙏`;

        return message;
    }

    // Get short option label
    function getOptionLabelShort(optionType) {
        const labels = {
            'variant': '• Varian',
            'bagian': '• Bagian',
            'olahan': '• Olahan',
            'ukuran': '• Ukuran',
            'rasa': '• Rasa'
        };
        return labels[optionType] || `• ${optionType}`;
    }

    // Calculate total
    function calculateTotal() {
        return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    }

    // Checkout via WhatsApp
    function checkout() {
        if (cart.length === 0) {
            showToast('Keranjang masih kosong!', 'error');
            return;
        }

        const customerName = customerNameInput?.value.trim();
        if (!customerName) {
            showToast('Mohon isi nama pemesan!', 'error');
            customerNameInput?.focus();
            return;
        }

        const message = generateWhatsAppMessage();
        const encodedMessage = encodeURIComponent(message);
        const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

        // Open WhatsApp
        window.open(whatsappURL, '_blank');

        // Optional: Clear cart after checkout
        // clearCart();
        // initCart();
        // showToast('Pesanan berhasil dikirim!', 'success');
    }

    // Clear cart
    function clearCartHandler() {
        if (confirm('Apakah Anda yakin ingin mengosongkan keranjang?')) {
            cart = [];
            localStorage.setItem('lesehanCart', JSON.stringify(cart));
            initCart();
            showToast('Keranjang telah dikosongkan', 'success');
        }
    }

    // Event Listeners
    checkoutBtn?.addEventListener('click', checkout);
    clearCartBtn?.addEventListener('click', clearCartHandler);

    // Initialize
    initCart();
});

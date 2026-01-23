/**
 * Lesehan Mey-Mey - Main JavaScript
 * Mobile-First Restaurant Website
 */

// ============================================
// Menu Data - Complete Restaurant Menu
// ============================================
const menuData = {
    // PAHE Category
    'pahe-ayam-penyet': { id: 'pahe-ayam-penyet', name: 'Ayam Penyet', price: 10000, category: 'pahe', options: {} },
    'pahe-ayam-kremes': { id: 'pahe-ayam-kremes', name: 'Ayam Kremes', price: 10000, category: 'pahe', options: {} },
    'pahe-ayam-goreng': { id: 'pahe-ayam-goreng', name: 'Ayam Goreng', price: 10000, category: 'pahe', options: {} },
    'pahe-ayam-geprek': { id: 'pahe-ayam-geprek', name: 'Ayam Geprek', price: 10000, category: 'pahe', options: {} },
    'pahe-ayam-bakar': { id: 'pahe-ayam-bakar', name: 'Ayam Bakar', price: 10000, category: 'pahe', options: {} },
    'pahe-tahu-tempe': { id: 'pahe-tahu-tempe', name: 'Tahu + Tempe', price: 10000, category: 'pahe', options: {} },
    'pahe-lele': { id: 'pahe-lele', name: 'Lele', price: 10000, category: 'pahe', options: {} },
    'pahe-prekmes': { id: 'pahe-prekmes', name: 'Prekmes (Geprek + Kremes)', price: 12000, category: 'pahe', options: {} },
    'pahe-nyetmes': { id: 'pahe-nyetmes', name: 'Nyetmes (Penyet + Kremes)', price: 12000, category: 'pahe', options: {} },
    'pahe-preksu': { id: 'pahe-preksu', name: 'Preksu (Geprek + Keju)', price: 12000, category: 'pahe', options: {} },

    // Ayam & Bebek Category
    'ayam-negri-tempong': { id: 'ayam-negri-tempong', name: 'Ayam Negri Tempong', price: 20000, category: 'ayam', options: {} },
    'ayam-negri-dada': { id: 'ayam-negri-dada', name: 'Ayam Negri Dada', price: 25000, category: 'ayam', options: {} },
    'ayam-kampung-tempong': { id: 'ayam-kampung-tempong', name: 'Ayam Kampung Tempong', price: 25000, category: 'ayam', options: {} },
    'ayam-kampung-dada': { id: 'ayam-kampung-dada', name: 'Ayam Kampung Dada', price: 30000, category: 'ayam', options: {} },
    'ayam-saos-padang': { id: 'ayam-saos-padang', name: 'Ayam Saos Padang', price: 30000, category: 'ayam', options: {} },
    'bebek-tempong': { id: 'bebek-tempong', name: 'Bebek Tempong', price: 25000, category: 'ayam', options: {} },
    'bebek-dada': { id: 'bebek-dada', name: 'Bebek Dada', price: 30000, category: 'ayam', options: {} },

    // Seafood Category
    'gurame': {
        id: 'gurame', name: 'Gurame', price: 35000, category: 'seafood',
        options: {
            olahan: ['Bakar', 'Goreng', 'Saus Padang'],
            ukuran: [{ name: 'Sedang', price: 35000 }, { name: 'Besar', price: 50000 }]
        }
    },
    'nila': {
        id: 'nila', name: 'Nila', price: 25000, category: 'seafood',
        options: {
            olahan: ['Bakar', 'Goreng', 'Saus Padang'],
            ukuran: [{ name: 'Sedang', price: 25000 }, { name: 'Besar', price: 50000 }]
        }
    },
    'udang-goreng': { id: 'udang-goreng', name: 'Udang Goreng Tepung', price: 20000, category: 'seafood', options: {} },
    'udang-saos-padang': { id: 'udang-saos-padang', name: 'Udang Saos Padang', price: 35000, category: 'seafood', options: {} },

    // Tambahan Category
    'nasi': { id: 'nasi', name: 'Nasi Putih', price: 4000, category: 'tambahan', options: {} },
    'nasi-pecel': { id: 'nasi-pecel', name: 'Nasi Pecel', price: 5000, category: 'tambahan', options: {} },
    'telor-ceplok': { id: 'telor-ceplok', name: 'Telor Ceplok', price: 3000, category: 'tambahan', options: {} },

    // Camilan Category
    'richeese': { id: 'richeese', name: 'Richeese Chicken', price: 10000, category: 'camilan', options: {} },
    'corndog-kecil': { id: 'corndog-kecil', name: 'Corndog Kecil', price: 5000, category: 'camilan', options: {} },
    'corndog-besar': { id: 'corndog-besar', name: 'Corndog Besar', price: 10000, category: 'camilan', options: {} },
    'corndog-mozasis-kecil': { id: 'corndog-mozasis-kecil', name: 'Corndog Mozasis Kecil', price: 6000, category: 'camilan', options: {} },
    'corndog-mozasis-besar': { id: 'corndog-mozasis-besar', name: 'Corndog Mozasis Besar', price: 12000, category: 'camilan', options: {} },
    'bakaran-seafood': { id: 'bakaran-seafood', name: 'Bakaran Seafood', price: 15000, category: 'camilan', options: {} },
    'french-fries': { id: 'french-fries', name: 'French Fries', price: 10000, category: 'camilan', options: {} },
    'tahu-crispy': { id: 'tahu-crispy', name: 'Tahu Crispy', price: 10000, category: 'camilan', options: {} },
    'odeng-tomyum': { id: 'odeng-tomyum', name: 'Odeng Kuah Tomyum', price: 15000, category: 'camilan', options: {} },
    'odeng-gochujang': { id: 'odeng-gochujang', name: 'Odeng Kuah Gochujang', price: 15000, category: 'camilan', options: {} },
    'mochi': { id: 'mochi', name: 'Mochi', price: 10000, category: 'camilan', options: {} },
    'kimbap': { id: 'kimbap', name: 'Kimbap', price: 10000, category: 'camilan', options: {} },

    // Minuman Category
    'es-teh': { id: 'es-teh', name: 'Es Teh Ori', price: 3000, category: 'minuman', options: {} },
    'jasmine-tea': {
        id: 'jasmine-tea', name: 'Tea Series', price: 5000, category: 'minuman',
        options: { variant: ['Jasmine Tea', 'Lemon Tea', 'Thai Tea'] }
    },
    'teh-panas': { id: 'teh-panas', name: 'Teh Panas', price: 3000, category: 'minuman', options: {} },
    'kopi-panas': { id: 'kopi-panas', name: 'Kopi Panas', price: 4000, category: 'minuman', options: {} },
    'jaskult': {
        id: 'jaskult', name: 'Jaskult', price: 5000, category: 'minuman',
        options: { rasa: ['Strawberry', 'Melon', 'Mangga', 'Anggur', 'Jeruk'] }
    },
    'es-coco': {
        id: 'es-coco', name: 'Es Coco', price: 6000, category: 'minuman',
        options: {
            variant: [
                { name: 'Ori', price: 6000 }, { name: 'Oreo', price: 7000 }, { name: 'Milo', price: 7000 },
                { name: 'Crunch', price: 7000 }, { name: 'Keju Oreo', price: 8000 },
                { name: 'Keju Milo', price: 8000 }, { name: 'Keju Crunch', price: 8000 },
                { name: 'Red Velvet', price: 10000 }, { name: 'Taro', price: 10000 } // Added common variants if price range is up to 10k
            ]
        }
    },
    'red-velvet-ori': { id: 'red-velvet-ori', name: 'Red Velvet Ori', price: 6000, category: 'minuman', options: {} },
    'red-velvet-keju': { id: 'red-velvet-keju', name: 'Red Velvet Keju', price: 8000, category: 'minuman', options: {} },
    'red-velvet-keju-oreo': { id: 'red-velvet-keju-oreo', name: 'Red Velvet Keju Oreo', price: 10000, category: 'minuman', options: {} },
    'jus-8k': {
        id: 'jus-8k', name: 'Jus Premium', price: 8000, category: 'minuman',
        options: { rasa: ['Mangga', 'Alpukat', 'Strawberry', 'Buah Naga'] }
    },
    'jus-5k': {
        id: 'jus-5k', name: 'Jus Hemat', price: 5000, category: 'minuman',
        options: { rasa: ['Tomat', 'Jeruk Peras'] }
    },
    'smoothies': {
        id: 'smoothies', name: 'Smoothies', price: 12000, category: 'minuman',
        options: { rasa: ['Mangga', 'Buah Naga', 'Alpukat', 'Strawberry'] }
    },
    'pop-series': {
        id: 'pop-series', name: 'Pop Series', price: 10000, category: 'minuman',
        options: { rasa: ['Cola', 'Sprite', 'Fanta', 'Strawberry', 'Melon'] } // Assumed flavors
    },
    'nyoklat': {
        id: 'nyoklat', name: 'Nyoklat', price: 6000, category: 'minuman',
        options: {
            topping: [
                { name: 'Ori', price: 6000 }, { name: 'Keju', price: 8000 }, { name: 'Oreo', price: 8000 },
                { name: 'Milo', price: 8000 }, { name: 'Crunch', price: 8000 }, { name: 'Marshmellow', price: 8000 }
            ]
        }
    },
    'boba': {
        id: 'boba', name: 'Boba', price: 6000, category: 'minuman',
        options: {
            rasa: [
                { name: 'Cappuccino', price: 8000 }, { name: 'Coklat Sultan', price: 10000 },
                { name: 'Durian', price: 8000 }, { name: 'Taro', price: 8000 },
                { name: 'Permen Karet', price: 8000 }, { name: 'Cookies Cream', price: 8000 },
                { name: 'Tea', price: 6000 }, { name: 'Strawberry', price: 8000 },
                { name: 'Caramel', price: 8000 }, { name: 'Vanilla Blue', price: 8000 },
                { name: 'Milo', price: 8000 }, { name: 'Thai Tea', price: 8000 }
            ]
        }
    }
};

// Expose menuData to window for other scripts (cart.js)
window.menuData = menuData;

// ============================================
// Cart State Management
// ============================================
let cart = JSON.parse(localStorage.getItem('lesehanCart')) || [];

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('lesehanCart', JSON.stringify(cart));
    updateCartCount();
}

// Update cart count badge
function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
        cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
    }
}

// Add item to cart
function addToCart(itemId) {
    const menuItem = menuData[itemId];
    if (!menuItem) return;

    // Check if item has options
    const hasOptions = menuItem.options && Object.keys(menuItem.options).length > 0;

    // Create cart item
    const cartItem = {
        id: Date.now().toString(),
        menuId: itemId,
        name: menuItem.name,
        basePrice: menuItem.price,
        price: menuItem.price,
        quantity: 1,
        options: {},
        selectedOptions: {}
    };

    // If item has options, we need to set defaults
    if (hasOptions) {
        for (const [optionType, optionValues] of Object.entries(menuItem.options)) {
            if (Array.isArray(optionValues) && optionValues.length > 0) {
                const firstOption = optionValues[0];
                if (typeof firstOption === 'object') {
                    cartItem.selectedOptions[optionType] = firstOption.name;
                    cartItem.price = firstOption.price;
                } else {
                    cartItem.selectedOptions[optionType] = firstOption;
                }
            }
        }
    }

    cart.push(cartItem);
    saveCart();
    showToast(`${menuItem.name} ditambahkan ke keranjang!`, 'success');
}

// Remove item from cart
function removeFromCart(cartItemId) {
    cart = cart.filter(item => item.id !== cartItemId);
    saveCart();
}

// Update item quantity
function updateQuantity(cartItemId, change) {
    const item = cart.find(item => item.id === cartItemId);
    if (item) {
        item.quantity = Math.max(1, item.quantity + change);
        saveCart();
    }
}

// Update item option
function updateItemOption(cartItemId, optionType, optionValue) {
    const item = cart.find(item => item.id === cartItemId);
    if (item) {
        const menuItem = menuData[item.menuId];
        if (menuItem && menuItem.options[optionType]) {
            item.selectedOptions[optionType] = optionValue;

            // Update price if option has price
            const options = menuItem.options[optionType];
            if (Array.isArray(options)) {
                const selectedOpt = options.find(opt =>
                    typeof opt === 'object' ? opt.name === optionValue : opt === optionValue
                );
                if (selectedOpt && typeof selectedOpt === 'object' && selectedOpt.price) {
                    item.price = selectedOpt.price;
                }
            }

            saveCart();
        }
    }
}

// Clear cart
function clearCart() {
    cart = [];
    saveCart();
}

// Calculate total
function calculateTotal() {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
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

// ============================================
// Toast Notifications
// ============================================
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

// ============================================
// Navigation & UI
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Update cart count on load
    updateCartCount();

    // Mobile menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const navOverlay = document.getElementById('navOverlay');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            navOverlay?.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });

        // Close menu when clicking overlay
        navOverlay?.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
            navOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });

        // Close menu when clicking nav links
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
                navOverlay?.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // Header scroll effect
    const header = document.getElementById('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // Menu tabs functionality - Filter product cards
    const menuTabs = document.querySelectorAll('.menu-tab');
    const productCards = document.querySelectorAll('.product-card');
    const categoryHeaders = document.querySelectorAll('.category-header');

    menuTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const category = tab.dataset.category;

            // Update active tab
            menuTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Filter products
            if (category === 'semua') {
                // Show all products and headers
                productCards.forEach(card => card.style.display = '');
                categoryHeaders.forEach(header => header.style.display = '');
            } else {
                // Filter by category
                productCards.forEach(card => {
                    if (card.dataset.category === category) {
                        card.style.display = '';
                    } else {
                        card.style.display = 'none';
                    }
                });

                // Show/hide category headers
                categoryHeaders.forEach(header => {
                    if (header.dataset.cat === category) {
                        header.style.display = '';
                    } else {
                        header.style.display = 'none';
                    }
                });
            }
        });
    });

    // Add to cart buttons
    const addToCartBtns = document.querySelectorAll('.add-to-cart, .add-btn, .btn-add');
    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();

            // Stop propagation to prevent potentially triggering parent click events (if any)
            e.stopPropagation();

            const itemId = btn.dataset.id;
            addToCart(itemId);

            // Button animation
            const originalContent = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-check"></i>';
            btn.style.background = 'var(--accent-green)';

            // Add pulse animation class if available in CSS, or just transform
            btn.style.transform = 'scale(1.1)';

            setTimeout(() => {
                btn.innerHTML = originalContent; // Restore original icon (either plus or text)
                btn.style.background = '';
                btn.style.transform = '';
            }, 1000);
        });
    });

    // Scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right').forEach(el => {
        observer.observe(el);
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                const headerHeight = document.getElementById('header')?.offsetHeight || 80;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active nav link on scroll
    const sections = document.querySelectorAll('section[id]');

    function updateActiveNavLink() {
        const scrollPos = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', updateActiveNavLink);
});

// Export for cart page
window.menuData = menuData;
window.cart = cart;
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;
window.updateItemOption = updateItemOption;
window.clearCart = clearCart;
window.calculateTotal = calculateTotal;
window.formatCurrency = formatCurrency;
window.saveCart = saveCart;
window.showToast = showToast;

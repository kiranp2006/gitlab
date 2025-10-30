document.addEventListener('DOMContentLoaded', () => {
    const productForm = document.getElementById('product-form');
    const productList = document.getElementById('product-list');

    // Simple array to store product data with unique IDs
    let products = [];
    let nextId = 1;

    // Initialize the particles.js library for the unique background
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle"
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            }
        },
        "retina_detect": true
    });

    // Renders the products from the array to the DOM
    function renderProducts() {
        productList.innerHTML = '';
        products.forEach(product => {
            const productItem = document.createElement('div');
            productItem.className = 'product-item';
            productItem.dataset.id = product.id;
            productItem.innerHTML = `
                <div>
                    <h3>${product.name}</h3>
                    <p>Price: $${product.price.toFixed(2)}</p>
                </div>
                <button class="delete-btn"><i class="fas fa-trash-alt"></i></button>
            `;
            productList.appendChild(productItem);
        });
    }

    // Handles form submission to add a new product
    productForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const price = document.getElementById('price').value;

        if (name && price) {
            const newProduct = {
                id: nextId++,
                name: name,
                price: parseFloat(price)
            };
            products.push(newProduct);
            renderProducts();
            productForm.reset();
        } else {
            alert('Please enter a valid product name and price.');
        }
    });

    // Handles a click on the product list to check for the delete button
    productList.addEventListener('click', function(e) {
        const deleteButton = e.target.closest('.delete-btn');
        if (deleteButton) {
            const productItem = deleteButton.closest('.product-item');
            const idToDelete = parseInt(productItem.dataset.id);

            if (confirm('Are you sure you want to delete this product?')) {
                products = products.filter(product => product.id !== idToDelete);
                renderProducts();
            }
        }
    });
});
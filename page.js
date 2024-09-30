let SecMenu = document.querySelector('.sec-nav');
let BarsMenu = document.querySelector('.ri-menu-add-line');
let Overlay = document.querySelector('.sec-nav-overlay');
let ClosingBars = document.querySelector('.closing-bars');


BarsMenu.addEventListener('click', () => {
    SecMenu.classList.toggle('show-side-menu');
    Overlay.classList.toggle('show-overlay');
});


ClosingBars.addEventListener('click', () => {
    SecMenu.classList.toggle('show-side-menu');
    Overlay.classList.toggle('show-overlay');
});


let selectbox1 = document.querySelector('.select-box');
let selectbox2 = document.querySelector('.select-box2');
let Options1 = document.querySelector('.option1');
let Options2 = document.querySelector('.option2');

selectbox1.addEventListener('click', () =>{
    Options1.classList.toggle('show-options');
});

selectbox2.addEventListener('click', () =>{
    Options2.classList.toggle('show-options');
});

let Openbar = document.querySelector('.ri-shopping-bag-line');
let Closebar = document.querySelector('.close-cart');
let Menucart = document.querySelector('.cart-collec');


Openbar.addEventListener('click', () =>{
    Menucart.classList.toggle('show-cart');
    Overlay.classList.toggle('show-overlay');

});

Closebar.addEventListener('click', () =>{
    Menucart.classList.toggle('show-cart');
    Overlay.classList.toggle('show-overlay');

});

$(document).ready(function(){
    $('#product-filter').change(function(){
        var filterValue = $(this).val();
        $('.product-card').hide();
        $('.product-card[data-category="' + filterValue + '"]').show();
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const searchIcon = document.getElementById('search-icon'); 
    const searchBox = document.getElementById('search-box');  

   
    searchIcon.addEventListener('click', function(event) {
        if (!searchBox.classList.contains('show')) {
            searchBox.classList.add('show');
        } else {
            searchBox.classList.remove('show');
        }
        event.stopPropagation();
    });

  
    document.addEventListener('click', function(event) {
        if (!searchBox.contains(event.target) && !searchIcon.contains(event.target)) {
            searchBox.classList.remove('show');
        }
    });
});


const checkoutButtons = document.querySelectorAll('.text-co');
const modal = document.getElementById('checkout-modal');
const closeModal = document.querySelector('.close-btn');
const checkoutItemsContainer = document.getElementById('checkout-items');

checkoutButtons.forEach(button => {
    button.addEventListener('click', function() {
        const productCard = button.closest('.product-card');
        const productName = productCard.querySelector('.product-name').innerText;
        const productImage = productCard.querySelector('.product-image').src;
        checkoutItemsContainer.innerHTML = '';

        const productItem = document.createElement('div');
        productItem.classList.add('checkout-item');
        productItem.innerHTML = `
            <img src="${productImage}" alt="${productName}" class="product-img">
            <div class="item-details">
                <h3>${productName}</h3>
                <p>Price: <span class="item-price">Rp.132.000</span></p>
                <div class="quantity-control">
                    <button class="quantity-btn minus-btn">-</button>
                    <input type="number" class="quantity-input" value="1" min="1">
                    <button class="quantity-btn plus-btn">+</button>
                </div>
                <p>Total: <span class="total-price">Rp.132.000</span></p>
            </div>
        `;
        checkoutItemsContainer.appendChild(productItem);

       
        const plusBtn = productItem.querySelector('.plus-btn');
        const minusBtn = productItem.querySelector('.minus-btn');
        const quantityInput = productItem.querySelector('.quantity-input');
        const totalPriceElem = productItem.querySelector('.total-price');

        plusBtn.addEventListener('click', () => {
            quantityInput.value = parseInt(quantityInput.value) + 1;
            updateTotalPrice(quantityInput.value, totalPriceElem);
        });

        minusBtn.addEventListener('click', () => {
            if (quantityInput.value > 1) {
                quantityInput.value = parseInt(quantityInput.value) - 1;
                updateTotalPrice(quantityInput.value, totalPriceElem);
            }
        });

        quantityInput.addEventListener('input', () => {
            updateTotalPrice(quantityInput.value, totalPriceElem);
        });

        modal.style.display = 'flex';
    });
}); 

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});


window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});


function updateTotalPrice(quantity, totalPriceElem) {
    const total = 132000 * quantity;
    totalPriceElem.innerText = `Rp.${total.toLocaleString('id-ID')}`;
}


const loginModal = document.getElementById('loginModal');
const registerModal = document.getElementById('registerModal');


const loginLink = document.querySelector('.sec-menu li:first-child a');
const registerLink = document.querySelector('.sec-menu li:nth-child(2) a');

const closeButtons = document.querySelectorAll('.close');
const showLogin = document.getElementById('showLogin');
const showRegister = document.getElementById('showRegister');


loginLink.addEventListener('click', function(event) {
    event.preventDefault();
    loginModal.style.display = 'flex';
});

registerLink.addEventListener('click', function(event) {
    event.preventDefault();
    registerModal.style.display = 'flex';
});


closeButtons.forEach(button => {
    button.addEventListener('click', function() {
        loginModal.style.display = 'none';
        registerModal.style.display = 'none';
    });
});


showLogin.addEventListener('click', function() {
    registerModal.style.display = 'none';
    loginModal.style.display = 'flex';
});

showRegister.addEventListener('click', function() {
    loginModal.style.display = 'none';
    registerModal.style.display = 'flex';
});


window.addEventListener('click', function(event) {
    if (event.target === loginModal || event.target === registerModal) {
        loginModal.style.display = 'none';
        registerModal.style.display = 'none';
    }
});


const fashionFavoritesModal = document.getElementById('fashionFavoritesModal');
const fashionFavoritesLink = document.getElementById('fashion-favorites-link');
const closeBtn = fashionFavoritesModal.querySelector('.fashion-close');
const favoritesItemsContainer = document.getElementById('favorites-items');


fashionFavoritesLink.addEventListener('click', function(event) {
    event.preventDefault();
    fashionFavoritesModal.style.display = 'flex';
});


closeBtn.addEventListener('click', function() {
    fashionFavoritesModal.style.display = 'none';
});


window.addEventListener('click', function(event) {
    if (event.target === fashionFavoritesModal) {
        fashionFavoritesModal.style.display = 'none';
    }
});


const sampleFavorites = [
    {
        name: "T-Shirt ACCONITUM PORSCHE BLACK",
        image: "tshirt.png",
        price: "Rp.132.000",
    },
    {
        name: "Hoodie Cropped",
        image: "hoodie.png",
        price: "Rp.150.000",
    },
];

function displayFavorites() {
    favoritesItemsContainer.innerHTML = ""; 

    if (sampleFavorites.length === 0) {
        document.querySelector('.empty-message').style.display = 'block';
    } else {
        document.querySelector('.empty-message').style.display = 'none';
        sampleFavorites.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('favorite-item');
            itemDiv.innerHTML = `
                <div class="item-info">
                    <img src="${item.image}" alt="${item.name}">
                    <div>
                        <p>${item.name}</p>
                        <p>${item.price}</p>
                    </div>
                </div>
                <button class="remove-btn">Remove</button>
            `;
            favoritesItemsContainer.appendChild(itemDiv);
            
            itemDiv.querySelector('.remove-btn').addEventListener('click', () => {
                itemDiv.remove(); 
            });
        });
    }
}
displayFavorites();

function saveToFavorites(name, image, price) {
    let favorites = JSON.parse(localStorage.getItem('fashionFavorites')) || [];

   
    const itemExists = favorites.some(item => item.name === name);
    
    if (!itemExists) {
        favorites.push({ name, image, price });
        localStorage.setItem('fashionFavorites', JSON.stringify(favorites));
        alert('Item added to your Fashion Favorites!');
    } else {
        alert('Item already in your Fashion Favorites!');
    }

    displayFavorites(); // 
}

document.querySelectorAll('.add-to-favorites-btn').forEach(button => {
    button.addEventListener('click', () => {
        const name = button.getAttribute('data-name');
        const image = button.getAttribute('data-image');
        const price = button.getAttribute('data-price');
        
        saveToFavorites(name, image, price);
    });
});

function displayFavorites() {
    const favorites = JSON.parse(localStorage.getItem('fashionFavorites')) || [];
    favoritesItemsContainer.innerHTML = ""; 

    if (favorites.length === 0) {
        document.querySelector('.empty-message').style.display = 'block';
    } else {
        document.querySelector('.empty-message').style.display = 'none';
        favorites.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('favorite-item');
            itemDiv.innerHTML = `
                <div class="item-info">
                    <img src="${item.image}" alt="${item.name}">
                    <div>
                        <p>${item.name}</p>
                        <p>${item.price}</p>
                    </div>
                </div>
                <button class="remove-btn">Remove</button>
            `;
            favoritesItemsContainer.appendChild(itemDiv);
            
            itemDiv.querySelector('.remove-btn').addEventListener('click', () => {
                removeFromFavorites(item.name);
            });
        });
    }
}
function removeFromFavorites(name) {
    let favorites = JSON.parse(localStorage.getItem('fashionFavorites')) || [];
    favorites = favorites.filter(item => item.name !== name);
    localStorage.setItem('fashionFavorites', JSON.stringify(favorites));

    displayFavorites(); 
}


displayFavorites();



const products = ["T-Shirt Accobitum", "Hoodie Cropped", "Porsche Shirt", "Creeper Hoodie", "Cropped Jacket"];

function showSuggestions(value) {
  let suggestions = "";
  if (value.length > 0) {
    const filteredProducts = products.filter(product => product.toLowerCase().includes(value.toLowerCase()));
    filteredProducts.forEach(product => {
      suggestions += `<div onclick="selectProduct('${product}')">${product}</div>`;
    });
  }
  document.getElementById("suggestions").innerHTML = suggestions;
}

function selectProduct(product) {
  document.getElementById("search-bar").value = product;
}

document.querySelector('.confirm-btn').addEventListener('click', function() {
    const paymentDetails = document.getElementById('payment-details');
    
    
    paymentDetails.style.display = 'block';
    
    console.log('Confirm Checkout clicked');
});


document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.confirm-btn').addEventListener('click', function() {
        const paymentDetails = document.getElementById('payment-details');
        
      
        paymentDetails.style.display = 'block';
        
        console.log('Confirm Checkout clicked');
    });
});





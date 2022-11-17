const navbarEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const menuMobileIcon = document.querySelector('.menu-icon')
const mobileMenu = document.querySelector('.mobile-menu')
const menuShoppingCart = document.querySelector('.navbar-shoppingcart')
const shoppingCartAside = document.querySelector('.shopping-cart-container')
const cardsContainer = document.querySelector('.cards-container')
const productDetailAside = document.querySelector('.product-detail')
const productDetailCloseIcon = document.querySelector('.product-detail-close')

navbarEmail.addEventListener('click', toggleDesktopMenu)
menuMobileIcon.addEventListener('click', toggleMobileMenu)
menuShoppingCart.addEventListener('click', toggleShoppingCart)
productDetailCloseIcon.addEventListener('click', closeProductDetail) 

function toggleDesktopMenu() {
    const isAsideClosed = shoppingCartAside.classList.contains('inactive');
    if (!isAsideClosed) {
        shoppingCartAside.classList.add('inactive')
    }
    closeProductDetail();
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideClosed = shoppingCartAside.classList.contains('inactive');
    if (!isAsideClosed) {
        shoppingCartAside.classList.add('inactive')
    }
    closeProductDetail();
    mobileMenu.classList.toggle('inactive');
}

function toggleShoppingCart() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isProductDetailAsideClosed = productDetailAside.classList.contains('inactive');
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive')
    }
    if (!isProductDetailAsideClosed) {
        productDetailAside.classList.add('inactive')
    }
    shoppingCartAside.classList.toggle('inactive')
    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive')
    }
}

/* Array hipotetico que devuelve cuando hicieramos consultas a la api para obtener los productos */
const productList = [];
productList.push({
    name: 'Guitar',
    price: '100,00',
    image: './Images/guitar.jpeg',
})
productList.push({
    name: 'Bike',
    price: '120,00',
    image: './Images/bike.jpeg',
})
productList.push({
    name: 'Chair',
    price: '300,00',
    image: './Images/chair.jpeg',
})
productList.push({
    name: 'Mirror',
    price: '80,00',
    image: './Images/mirror.jpeg',
})
productList.push({
    name: 'Bike',
    price: '120,00',
    image: './Images/bike.jpeg',
})
productList.push({
    name: 'Chair',
    price: '300,00',
    image: './Images/chair.jpeg',
})
productList.push({
    name: 'Mirror',
    price: '80,00',
    image: './Images/mirror.jpeg',
})
productList.push({
    name: 'Guitar',
    price: '100,00',
    image: './Images/guitar.jpeg',
})
productList.push({
    name: 'Mirror',
    price: '80,00',
    image: './Images/mirror.jpeg',
})
productList.push({
    name: 'Guitar',
    price: '100,00',
    image: './Images/guitar.jpeg',
})
function renderProducts(array) {
    for (product of array) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetail)

        const productInfo= document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoContainer= document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;

        const productName = document.createElement('p');
        productName.innerText = product.name;

        productInfoContainer.append(productPrice, productName)

        const productInfoFigure = document.createElement('figure');

        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './Icons/bt_add_to_cart.svg');

        productInfoFigure.appendChild(productImgCart);

        productInfo.append(productInfoContainer, productInfoFigure);

        productCard.append(productImg, productInfo);

        cardsContainer.appendChild(productCard);  
    }
}
renderProducts(productList);

function closeProductDetail() {
    productDetailAside.classList.add('inactive')
}

function openProductDetail() {
    shoppingCartAside.classList.add('inactive')
    desktopMenu.classList.add('inactive')
    productDetailAside.classList.remove('inactive')
}


const navbarEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const menuMobileIcon = document.querySelector('.menu-icon')
const mobileMenu = document.querySelector('.mobile-menu')
const menuShoppingCart = document.querySelector('.navbar-shoppingcart')
const aside = document.querySelector('.product-detail')

navbarEmail.addEventListener('click', toggleDesktopMenu)
menuMobileIcon.addEventListener('click', toggleMobileMenu)
menuShoppingCart.addEventListener('click', toggleShoppingCart)

function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive');
    if (!isAsideClosed) {
        aside.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive');
    if (!isAsideClosed) {
        aside.classList.add('inactive')
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleShoppingCart() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuclosed = desktopMenu.classList.contains('inactive')
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive')
    }
    aside.classList.toggle('inactive')
    if (!isDesktopMenuclosed) {
        desktopMenu.classList.add('inactive')
    }
}
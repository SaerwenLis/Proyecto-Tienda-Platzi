const navbarEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const menuMobileIcon = document.querySelector('.menu-icon')
const mobileMenu = document.querySelector('.mobile-menu')

navbarEmail.addEventListener('click', toggleDesktopMenu)
menuMobileIcon.addEventListener('click', toggleMobileMenu)

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
}
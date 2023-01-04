const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu')

const burguerIcon = document.querySelector('.menu');
const menuMobile = document.querySelector('.mobile-menu');

const menuCarrito = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('.product-detail')


menuEmail.addEventListener('click', toggleDesktopMenu);
burguerIcon.addEventListener('click', toggleMobileMenu);
menuCarrito.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive');

    if(!isAsideClosed){
        aside.classList.add('inactive')
    }

    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive');

    if(!isAsideClosed){
        aside.classList.add('inactive')
    }
    
    menuMobile.classList.toggle('inactive')
} 

function toggleCarritoAside() {
    const isMobileMenuClosed = menuMobile.classList.contains('inactive')

    if(!isMobileMenuClosed){
        menuMobile.classList.add('inactive')
    }

    aside.classList.toggle('inactive')
} 
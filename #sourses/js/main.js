/**burger handler */
(function() {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header__nav');
    const menuClose = document.querySelector('.header__nav-close');
    const menuLinkls = document.querySelectorAll('.header__link');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header__nav-active');
    });
    menuClose.addEventListener('click', () => {
        menu.classList.remove('header__nav-active');
    });
    if(window.innerWidth <= 766) {
        for(let i = 0; i < menuLinkls.length; i+= 1) {
            menuLinkls[i].addEventListener('click', () => {
                menu.classList.remove('header__nav-active');
            });
        }
    }
}());

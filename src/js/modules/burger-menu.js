function burgerMenu(){
    const burgerBtn = document.querySelector('.header-main__burger-wrap');
    const menuBurger = document.querySelector('.menu-header-main');
    const closeMenu = document.querySelector('.menu-header-main__close');
    const body = document.querySelector('body');

    burgerBtn.addEventListener('click', (e) => {
        burgerBtn.classList.add('_active');
        menuBurger.classList.add('_active');
        body.classList.add('_no-scroll');
    })

    closeMenu.addEventListener('click', (e) => {
        burgerBtn.classList.remove('_active');
        menuBurger.classList.remove('_active')
        body.classList.remove('_no-scroll');
    })
}

export default burgerMenu;
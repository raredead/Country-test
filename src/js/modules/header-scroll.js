function headerScroll(){
    const headerLogo = document.querySelector('.header-main__logo');
    const header = document.querySelector('.header');
    const headerHeight = document.querySelector('.header').clientHeight;

    document.onscroll = function() {
        const scroll = window.scrollY;

        if(scroll > headerHeight) {
            headerLogo.classList.add('_active');
            header.style.backgroundColor = "#ffffff"
        } else {
            headerLogo.classList.remove('_active');
            header.style.backgroundColor = "transparent"
        }
    }
}

export default headerScroll;
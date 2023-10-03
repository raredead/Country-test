function tabs() {
    const tabNavs = document.querySelectorAll('.tabs-nav__item');
    const tabContent = document.querySelectorAll('.content-tabs-main__tab');
    // Имя активного таба
    let tabName;

    tabNavs.forEach(item => {
        item.addEventListener('click', selectTabNav)
    })

    function selectTabNav(e) {
        e.preventDefault();

        tabNavs.forEach(item => {
            item.classList.remove('is-active')
        });
        this.classList.add('is-active')

        tabName = this.getAttribute('data-tab')
        selectTabContent(tabName)
    }

    function selectTabContent(tabName) {
        tabContent.forEach(item => {
            item.classList.contains(tabName) ? item.classList.add('is-active') :
                item.classList.remove('is-active')
        })
    }
}

export default tabs;
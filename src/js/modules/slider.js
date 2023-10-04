import Swiper from 'swiper/bundle';

import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '#slideNext',
        prevEl: '#slidePrev',
    },
});

export default swiper;
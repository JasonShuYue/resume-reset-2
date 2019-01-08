{


    let view = {
        el: '.swiper-container'
    };

    let controller = {
        init(view) {
            this.view = view;
            this.initSwiper();
        },

        initSwiper() {
            var mySwiper = new Swiper ('.swiper-container', {
                loop: true, // 循环模式选项

                autoplay: {
                    delay: 2000,//2秒切换一次
                },

                // 如果需要分页器
                pagination: {
                    el: '.swiper-pagination',
                },

                // 如果需要前进后退按钮
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
        }
    };

    controller.init(view);
}
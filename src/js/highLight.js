{
    let view = {
        el: '#mainContent',
    };

    let controller = {
        init(view) {
            this.view = view;
            this.bindEvents();
            this.findClosestIndex();
        },
        bindEvents() {
            $(window).on('scroll', (e) => {
                let index = this.findClosestIndex();
                this.highLight(index);
            });
            $(window).on('load', (e) => {
                let index = this.findClosestIndex();
                this.highLight(index);
            })
        },
        highLight(index) {
            let sections = document.querySelectorAll(".menu-item");

            $(sections[index]).addClass('highLight').siblings().removeClass('highLight');
        },
        findClosestIndex() {
            let currentPos = window.scrollY - 20;
            let sections = document.querySelectorAll("[section-x]");
            let index = 0;
            for(let i = 0; i < sections.length; i++) {
                if(currentPos > sections[i].offsetTop) {
                    index = i;
                }
            }
            return index;
        }
    };

    controller.init(view);
}
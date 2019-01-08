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
            let index = 0;
            $(window).on('scroll', (e) => {
                console.log(this.findClosestIndex())
            })
        },
        findClosestIndex() {
            let currentPos = window.scrollY - 100;
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
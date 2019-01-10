{
    let view = {
        el: '#resume-wrapper',
    };


    let controller = {

        init(view) {
            this.view = view;
            this.bindEvents();
        },

        bindEvents() {
            $(this.view.el).find('#menu-list').on('click', 'a', (e) => {
                let currentTarget = e.currentTarget;
                if(!currentTarget.getAttribute('noprevent')) {
                    e.preventDefault();
                    let selector = e.currentTarget.attributes["href"].value;
                    console.log('document.querySelector(selector).offsetTop')
                    console.log(document.querySelector(selector).offsetTop)
                    let position = document.querySelector(selector).offsetTop + 50;
                    window.scrollTo({
                        top: position,
                        behavior: "smooth"
                    });
                }

            });
        }
    };

    controller.init(view);
}
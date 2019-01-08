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
                e.preventDefault();
                console.log(e.currentTarget)
            });
        }
    };

    controller.init(view);
}
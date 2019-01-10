{
    let view = {
        el: '#topBar',
        activeSticky() {
            $(this.el).addClass('sticky');
        },
        removeSticky() {
            $(this.el).removeClass('sticky');
        }
    };

    let controller = {
        init(view) {
            this.view = view;
            this.listenScroll();
        },
        listenScroll() {
          window.addEventListener("scroll", (e) => {
              let top = window.scrollY;
              if(top > 0) {
                  this.view.activeSticky();
              } else {
                  this.view.removeSticky();
              }
          });

        window.addEventListener("load", (e) => {
            let top = window.scrollY;
            if(top > 0) {
                this.view.activeSticky();
            } else {
                this.view.removeSticky();
            }
        })
        },

    };

    controller.init(view);
}
{
    let view = {
        el: '#message-list',
        template: `
            <li class="message-item">
                <svg class="icon user-icon" aria-hidden="true">
                    <use xlink:href="#icon-user"></use>
                </svg>
                <div class="content-item">
                    <span class="name">__name__</span>
                    <p class="message-content">__content__</p>
                </div>
            </li>
        `,
        render(data) {
            let needs = ['name', 'content'];

            $(this.el).empty();
            data.map( v => {
                let domLi = this.template;

                needs.map( key => {
                    domLi = domLi.replace(`__${key}__`, v[key] || '');
                });

                $(this.el).append(domLi);
            });
        }
    };

    let model = {
        data: [],
        fetchAll() {
            let query = new AV.Query('Message');
            return query.find().then( (data) => {
                for(let key in data) {
                    this.data.unshift(data[key].attributes);
                }
                return AV.Object.saveAll(data);
            }).then((todos) => {
                // 更新成功
            }, function (error) {
                // 异常处理
            });
        },


    };

    let controller = {
        init(view, model) {
            this.view = view;
            this.model = model;
            this.initQiNiu();
            // this.model.create();
            this.model.fetchAll().then(() => {
                this.view.render(this.model.data)
            });
            window.eventHub.on('createMessage', (data) => {
                this.model.data.unshift(data);
                this.view.render(this.model.data);
            })

        },

        initQiNiu() {
            var { Query, User } = AV;
            var APP_ID = 'GIJjsXdt0vgwoK3OntvjLr80-gzGzoHsz';
            var APP_KEY = '2suDuzV5c04yj22wGhxwhj4k';

            AV.init({
                appId: APP_ID,
                appKey: APP_KEY
            });
        }
    };

    controller.init(view, model);

}
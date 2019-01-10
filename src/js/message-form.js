{
    let view = {
        el: '#messageBoard',
        template: `
            <h2 class="title">Message Board</h2>
            <div class="form-wrapper">
                <h3>请在此留言</h3>
                <form action="" class="message-form">
                    <div class="row">
                        <span class="input-title">名称:</span>
                        <input class="form-name" type="text" placeholder="请填写您的名称" name="name" value="__name__">
                        <p class="error"></p>
                    </div>
                    <div class="row">
                        <span class="input-title">留言:</span>
                        <input class="form-content" type="text" placeholder="请填写您的留言" name="content" value="__content__">
                        <p class="error"></p>
                    </div>
                    <button class="form-bt submit-bt">提交</button>
                    <button class="form-bt reset-bt" >重置</button>
                </form>
            </div>
           
        `,

        render(data) {
            let needs = ['name', 'content'];
            let html = this.template;
            needs.map(key => {
                html = html.replace(`__${key}__`, data[key] || '');
            });
            $(this.el).html(html);
        },

        reset() {
            this.render({});
        }

    };
    let model = {
        data: {
            name: '',
            content: ''
        },
    };
    let controller = {
        init(view, model) {
            this.view = view;
            this.model = model;
            this.view.render(this.model.data);
            this.bindEvents();
        },
        bindEvents() {
            let needs = ['name', 'content'];
            $(this.view.el).on('click', 'form .submit-bt', (e) => {
                e.preventDefault();

                needs.map((key) => {
                    let value = $(this.view.el).find(`input[name=${key}]`).val();
                    this.model.data[key] = value;
                });
                console.log(this.model.data)
                if(this.model.data.name === '') {
                    alert('请填写名称');
                } else {
                    if(this.model.data.content === '') {
                        alert('请填写内容');
                    } else {
                        this.createMessage().then(() => {
                            this.view.reset();
                            window.eventHub.emit('createMessage', this.model.data);
                        });
                    }
                }
            });

            $(this.view.el).on('click', '.reset-bt', (e) => {
                e.preventDefault();
                this.view.reset();
            })
        },

        createMessage() {
            let Message = AV.Object.extend('Message');
            let message = new Message();
            let data = this.model.data;
            return message.save(data).then((object) => {
            })
        }

    };

    controller.init(view, model);
}
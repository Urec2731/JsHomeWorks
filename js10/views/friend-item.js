export class FriendItem extends Marionette.ItemView {
    constructor(options) {
        super({
            template: "#item-template",
            tagName: 'li',
            model: options.model
        });
    }
    onRender() {
        this.$el.attr('data-cid', this.cid);
    }
}
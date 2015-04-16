/**
 * @module '../views/classes/item-triggers.js'
 * @exports ItemTriggers
 * @class ItemTriggers
 * @extends Marionette.ItemView
 */
export class ItemTriggers extends Marionette.ItemView {
    constructor(options) {
        super(options);
    }
    onRender() {
        var model_cid = this.model.cid;
        this.$('input').each(function (i, item) {
            item.name = model_cid;
            item.value = i;
        });
    }
}
/**
 * @module '../views/no-children.js'
 * @exports EmptyView
 * @class EmptyView
 * @extends Marionette.ItemView
 */
export class EmptyView extends Marionette.ItemView {
    constructor() {
        super({
            template: "#no-children"
        });
    }
}
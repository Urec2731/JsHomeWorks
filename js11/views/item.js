/**
 * @module '../views/item.js'
 * @extends '../views/classes/item-triggers.js'
 * @exports ItemView
 */
import {ItemTriggers} from '../views/classes/item-triggers.js';
/**
 * @class ItemView
 * @extends ItemTriggers
 */
export class ItemView extends ItemTriggers {
    constructor(options) {
        super({
            template: "#item-template",
            tagName: 'section',
            model: options.model,
            className: "enter-the-class-name",
            attributes: {
                'data-section': ""
            },
            events: {
                'click .del-x': 'removeItem'
            }
        });
    }
    removeItem() {
        this.trigger('remove');
    }
}
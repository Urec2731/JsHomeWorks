/**
 * @module '../views/footer.js'
 * @exports FooterView
 * @class FooterView
 * @extends Marionette.ItemView
 */
export class FooterView extends Marionette.ItemView {
    constructor() {
        super({
            template: "#footer-template"
        });
    }
}
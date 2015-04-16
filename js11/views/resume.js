/**
 * @module '../views/resume.js'
 * @exports ResumeView
 * @class InternalModel
 * @extends Backbone.Model
 */

class InternalModel extends Backbone.Model {
    constructor(numOfItems) {
        super({
            numOfItems: numOfItems
        });
    }
}
/**
 * @class ResumeView
 * @extends Marionette.ItemView
 */
export class ResumeView extends Marionette.ItemView {
    constructor(options) {
        super({
            template: "#resume-template",
            //tagName: 'section',
            model: new InternalModel(options),
            className: "enter-the-class-name",
            attributes: {
                'data-resume': ""
            }
        });
    }

}
/**
 * @module  '../controllers/classes/root-triggers.js'
 * @extends '../../views/resume.js'
 * @exports RootTriggers
 */
import {ResumeView} from '../../views/resume.js';
/**
 * @class RootTriggers
 * @extends Marionette.Controller
 */
export class RootTriggers extends Marionette.Controller {
    constructor() {
        super();
    }
    onRootViewGetResume (numOfItems) {
        this.rootView.getRegion('main').currentView.destroy();
        this.rootView.getRegion('footer').currentView.destroy();
        this.rootView.getRegion('main').show(new ResumeView(numOfItems));
    }


}


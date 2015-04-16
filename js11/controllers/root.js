/**
 * @module  '../controllers/root.js'
 * @extends '../controllers/classes/root-triggers.js'
 * @extends '../controllers/classes/listener.js'
 * @extends '../views/layout.js'
 * @extends '../views/footer.js'
 * @extends '../views/main.js'
 * @exports resume
 */
import {listener} from '../controllers/classes/listener.js';
import {RootTriggers} from '../controllers/classes/root-triggers.js';
import {RootView} from '../views/layout.js';
import {FooterView} from '../views/footer.js';
import {CollectionView} from '../views/main.js';
/**
 * @class Controller
 * @extends RootTriggers
 */
class Controller extends RootTriggers {
    constructor() {
        super();
        this.rootView = new RootView();
        this.rootView.getRegion('main').show(new CollectionView());
        this.rootView.getRegion('footer').show(new FooterView());
        this.listenTo(this.rootView, 'all', listener);

    }

}
resume = new Controller();

window.dispatcher = resume; // Debug line

export var resume;
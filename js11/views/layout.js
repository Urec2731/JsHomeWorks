/**
 * @module '../views/layout.js'
 * @extends '../views/classes/layout-triggers.js'
 * @exports RootView
 */
import {RootViewTriggers} from '../views/classes/layout-triggers.js';
/**
 * @class RootView
 * @extends RootViewTriggers
 */
export class RootView extends RootViewTriggers {
    constructor() {
        super({
            el: '#the-app',
            template: false,
            regions: {
                main:   'main',
                footer: 'footer'
            },
            events: {
                'click #delete-all': 'removeSelected',
                'click #resume-of-tests': 'resumeOfTests'
            }
        });
    }
    resumeOfTests () {
        var view = this.getRegion('main').currentView;
        var inputs = view.children.map(views => views.$(':checked').get());
        var pares =    _.flatten(inputs).map( input => [input.name, input.value]);
        var modelsCidList = _.uniq(pares.map( pare => pare[0])) ;
        var models = modelsCidList.map( model => view.collection.get(model));
        var answersList = models.map( model => [model.cid, model.attributes.spoiler]);
        if ( !_.every(answersList.map( item => item[1] instanceof Array)) ) {
            console.warn('models.spoiler\'s is not Array');
        }
        var mappedList = answersList.map( item => item[1].map( answer => [item[0], answer - 1]));
        var referencePares = _.flatten(mappedList, true);
        var overlap = _.intersection(
            referencePares.map( item => item[0] + ':' + item[1]),
            pares.map( item => item[0] + ':' + item[1])
        );
        //console.dir( overlap);

        this.trigger('get:resume', overlap.length);
    }
    removeSelected () {
        this.getRegion('main').currentView.triggerMethod('remove:selected');
    }
}
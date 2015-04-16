/**
 * @module '../views/main.js'
 * @extends '../controllers/questions.js'
 * @extends '../views/classes/main-triggers.js'
 * @extends '../views/item.js'
 * @extends '../views/no-children.js'
 * @exports CollectionView
 */
import {CollectionViewTriggers}  from '../views/classes/main-triggers.js';
import {topics}  from '../controllers/questions.js';
import {ItemView} from '../views/item.js';
import {EmptyView}  from '../views/no-children.js';
/**
 * @class CollectionView
 * @extends CollectionViewTriggers
 */
export class CollectionView extends CollectionViewTriggers {
    constructor() {
        super({
            collection: topics,
            childView: ItemView,
            emptyView: EmptyView,
            tagName: 'article',
            events: {
                'click [data-section]': 'selectAndUnSelect'
            }
        });
    }
    selectAndUnSelect (e) {
        var $target= this.$(e.target);
        if ($target.is('[data-section]')){
            $target.toggleClass('selected');
        }
    }
}
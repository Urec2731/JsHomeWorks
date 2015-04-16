/**
 * @module '../views/classes/main-triggers.js'
 * @exports CollectionViewTriggers
 * @class CollectionViewTriggers
 * @extends Marionette.CollectionView
 */
export class CollectionViewTriggers extends Marionette.CollectionView {
    constructor(options) {
        super(options);
    }
    onChildviewRemove (item) {
        this.collection.remove(item.model);
    }
    onRemoveSelected () {
        var models = this.children
            .filter(view => view.$el.hasClass('selected'))
            .map(view => view.model);
        this.collection.remove(models);
    }

}
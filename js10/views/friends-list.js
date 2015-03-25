/**
 * @module '../views/friends-list.js'
 * @extends '../controllers/friends.js'
 * @extends '../views/friend-item.js'
 * @extends '../views/no-children.js'
 * @exports FriendsListView
 */
import {friends}  from '../controllers/friends.js';
import {FriendItem} from '../views/friend-item.js';
import {EmptyView}  from '../views/no-children.js';
/**
 * @class FriendsListView
 * @extends Marionette.CollectionView
 */
export class FriendsListView extends Marionette.CollectionView {
    constructor() {
        super({
            collection: friends,
            childView: FriendItem,
            emptyView: EmptyView,
            tagName: 'ul',
            events: {
                'click [data-cid]': 'selectAndUnSelect',
                'click [data-del-button]': 'removeOneContact',
                'delete:selected': 'removeSelectedContacts',
                'friend:add': 'addNewFriendOnClick'
            }
        });
    }
    addNewFriendOnClick () {
        this.collection.add({friendName: arguments[1]});
    }
    removeSelectedContacts () {
        var view = this;
        var models = view.$('.selected').map(function (i, item) {
            var cid = item.getAttribute('data-cid');
            return view.children.findByCid(cid).model;
        }).get();
        view.collection.remove(models);
    }
    removeOneContact (e) {
        var childrenModel =
            this.children.findByCid(
                this.$(e.target).closest('[data-cid]').attr('data-cid')).model;
        this.collection.remove(childrenModel);
    }
    selectAndUnSelect (e) {
        var $target= this.$(e.target);
        if ($target.is('[data-cid]')){
            $target.toggleClass('selected');
        }
    }
}
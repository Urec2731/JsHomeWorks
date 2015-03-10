
define('view/friends-list',
    ['marionette', 'controller/friends', 'view/friend', 'view/no-children'],
    function (Mn, friends, FriendView, NoChildrenView){
        return Mn.CollectionView.extend({
            collection: friends,
            childView: FriendView,
            emptyView: NoChildrenView,
            tagName: 'ul',
            events: {
                'click [data-cid]': 'select-and-unSelect',
                'click [data-del-button]': 'removeOneContact',
                'delete:selected': 'removeSelectedContacts',
                'friend:add': 'addNewFriendOnClick'
            },
            addNewFriendOnClick: function () {
                    this.collection.add({friendName: arguments[1]});
            },
            removeSelectedContacts: function () {
                var view = this;
                var models = view.$('.selected').map(function (i, item) {
                    var cid = item.getAttribute('data-cid');
                    return view.children.findByCid(cid).model;
                }).get();
                view.collection.remove(models);
            },
            'select-and-unSelect': function (e) {
                var $target= this.$(e.target);
                if ($target.is('[data-cid]')){
                    $target.toggleClass('selected');
                }
            },
            'removeOneContact': function (e) {
                var childrenModel =
                    this.children.findByCid(
                        this.$(e.target).closest('[data-cid]').attr('data-cid')).model;
                this.collection.remove(childrenModel);
            }
        });
    });

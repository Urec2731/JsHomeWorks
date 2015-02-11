//jQuery(function ($) {
    var names  = ['Саня','Толик','Вован','Влад','Кирюша','Шурик','Миха','Тоха','Андрей','Дима'];


    var Friend = Backbone.Model.extend();
    var FriendsCollection = Backbone.Collection.extend({
        model: Friend
    });
    var friends = new FriendsCollection();

    var RootView = Mn.LayoutView.extend({
        el: '#friend-app',
        template: false,
        regions: {
            contacts: '#contacts',
            'static-controller': '#static-controller'
        }
    });

    var rootView = new RootView();
    var FriendView = Mn.ItemView.extend({
        template: "#some-template",
        tagName: 'li',
        onRender: function () {
            this.$el.attr('data-cid', this.cid);
        }
    });

    var NoChildrenView = Mn.ItemView.extend({
        template: "#no-children"
    });



    var FriendsList = Mn.CollectionView.extend({
        collection: friends,
        childView: FriendView,
        emptyView: NoChildrenView,
        tagName: 'ul',
        events: {
            'click [data-cid]': 'selectandunselect',
            'click [data-del-button]': 'removeOneContact'
        },
        selectandunselect: function (e) {
            var $target= $(e.target);
            if ($target.is('[data-cid]')){
                $target.toggleClass('selected');
            }
        },
        removeOneContact: function (e) {
            var childrenModel =
            this.children.findByCid(
            $(e.target).closest('[data-cid]').attr('data-cid')).model;
            this.collection.remove(childrenModel);
        }

    });

    friends.set(names.map(function (friendName) {
        return {friendName: friendName};
    }));

var friendsList = new FriendsList();

var ControllerView = Mn.ItemView.extend({
    template: "#static-controller-template",
    events: {
        'click #add-new-friend': 'addNewFriendOnClick',
        'click #delete-all': 'removeSelectedContacts'
    },
    addNewFriendOnClick: function () {
        var $name = this.$('#friends-new-name')[0];
        if (!!$name.value){
            friends.add({friendName: $name.value});
            $name.value='';
        }
    },
    removeSelectedContacts: function () {
        var models = friendsList.$('.selected').map(function (i, item) {
            var cid = item.getAttribute('data-cid');
            return friendsList.children.findByCid(cid).model;
        }).get();
        friends.remove(models);
    }
});

    rootView.getRegion('contacts').show(friendsList);
    rootView.getRegion('static-controller').show( new ControllerView());












//});

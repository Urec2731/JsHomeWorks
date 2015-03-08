requirejs.config({
    baseUrl: "/js8",
    paths: {
        jquery: 'lib/jquery-2.1.1.min',
        backbone: 'lib/backbone',
        underscore: 'lib/underscore',
        marionette: 'lib/backbone.marionette'
    },
    shim: {
        'underscore': {
            exports: '_'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'marionette': {
            deps: ['backbone', 'underscore'],
            exports: ['Marionette', 'Mn']
        }
    }
});
////////////////////////////////////////////////////////
define('data/names', [], function (){
    return ['Саня','Толик','Вован','Влад','Кирюша','Шурик','Миха','Тоха','Андрей','Дима'];
});


define('collection/friends', ['backbone'], function (Backbone){
    var Friend = Backbone.Model.extend();
    var FriendsCollection = Backbone.Collection.extend({
        model: Friend
    });
    return new FriendsCollection();
});

define('view/root', ['marionette'], function (Mn){
    var RootView = Mn.LayoutView.extend({
        el: '#friend-app',
        template: false,
        regions: {
            contacts: '#contacts',
            'static-controller': '#static-controller'
        }
    });

    return new RootView();
});

define('view/friend', ['marionette'], function (Mn){

    return Mn.ItemView.extend({
        template: "#some-template",
        tagName: 'li',
        onRender: function () {
            this.$el.attr('data-cid', this.cid);
        }
    });
});

define('view/no-children', ['marionette'], function (Mn){
    return Mn.ItemView.extend({
        template: "#no-children"
    });
});

define('view/friends-list',
['jquery', 'marionette', 'collection/friends', 'view/friend', 'view/no-children', 'data/names'],
function ($, Mn, friends, FriendView, NoChildrenView, names){

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

    return new FriendsList();
});


define('view/controller',
['marionette', 'collection/friends', 'view/friends-list', 'view/root'],
function (Mn, friends, friendsList, rootView){

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

    return true;
});




////////////////////////////////////////////////////////

require(['view/controller'], function () {
       console.log('marionette enabled');
});



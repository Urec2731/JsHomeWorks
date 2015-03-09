define('view/root', ['marionette'], function (Mn){
    return Mn.LayoutView.extend({
        el: '#friend-app',
        template: false,
        regions: {
            contacts: '#contacts',
            'static-controller': '#static-controller'
        },
        events: {
            'click #add-new-friend': 'addNewFriendOnClick',
            'click #delete-all': 'removeSelectedContacts'
        },
        addNewFriendOnClick: function () {
            this.getRegion('contacts').currentView.$el.trigger('friend:add');
        },
        removeSelectedContacts: function () {
            this.getRegion('contacts').currentView.$el.trigger('delete:selected');
        }
    });
});
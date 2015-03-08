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
            var $name = this.$('#friends-new-name')[0];
            if (!!$name.value){
                this.getRegion('contacts').currentView
                    .collection.add({friendName: $name.value});
                $name.value='';
            }
        },
        removeSelectedContacts: function () {
            var theView = this.getRegion('contacts').currentView;

            var models = theView.$('.selected').map(function (i, item) {
                var cid = item.getAttribute('data-cid');
                return theView.children.findByCid(cid).model;
            }).get();

            theView.collection.remove(models);
        }
    });
});
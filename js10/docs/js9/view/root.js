
define('view/root', ['marionette'], function (Mn){
    /**
     * @exports view/root
     * @extends marionette
     */
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
            var nameTrim;
            var $name = this.$('#friends-new-name')[0];
            if ($name.value) {
                nameTrim = $name.value.trim();
                if (nameTrim) {
                    this.getRegion('contacts').currentView.$el.trigger('friend:add', nameTrim);
                }
                $name.value='';
            }
        },
        removeSelectedContacts: function () {
            this.getRegion('contacts').currentView.$el.trigger('delete:selected');
        }
    });
});
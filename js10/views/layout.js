export class RootView extends Marionette.LayoutView {
    constructor() {
        super({
            el: '#friend-app',
            template: false,
            regions: {
                contacts: '#contacts',
                footer: 'footer'
            },
            events: {
                'click #add-new-friend': 'addNewFriendOnClick',
                'click #delete-all': 'removeSelectedContacts'
            }


        });
    }
    addNewFriendOnClick () {
        var nameTrim;
        var $name = this.$('#friends-new-name')[0];
        if ($name.value) {
            nameTrim = $name.value.trim();
            if (nameTrim) {
                this.getRegion('contacts').currentView.$el.trigger('friend:add', nameTrim);
            }
            $name.value='';
        }
    }
    removeSelectedContacts () {
        this.getRegion('contacts').currentView.$el.trigger('delete:selected');
    }
}
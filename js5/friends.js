jQuery(function ($) {
    var $contacts = $('#contacts');
    var $Li_template = $contacts.find(':first-child').eq(0).remove(); 
    $contacts.empty();
    var names  = ['Саня','Толик','Вован','Влад','Кирюша','Шурик','Миха','Тоха','Андрей','Дима'];


    var Friend = Backbone.Model.extend();
    var FriendsCollection = Backbone.Collection.extend();
    var collection = new FriendsCollection();

    var ContactsView = Backbone.View.extend({
        el: '#contacts',
        $template: $Li_template,

        events: {
            'click [data-friend]': 'selectUnselect',
            'click [data-delete]': 'removeOneContact'
        },
        
        initialize: function () {
            this.listenTo(this.collection, 'add', this.myChangesControllerAdd);
            this.listenTo(this.collection, 'remove', this.myChangesControllerRemove);
        },
        
        selectUnselect: function (e) {
            var $target=$(e.target);
            if ($target.is('[data-friend]')){
                $target.toggleClass('selected');
            }
        },
        removeOneContact: function (e) {
            var tmpModel = collection.get(
                $(e.target).closest('[data-friend]').attr('data-friend')
            );
            this.collection.remove(tmpModel);
        },
        addNewFriend: function (someName, cid) {
            var $clone = this.$template.clone();
            $clone.find('input').prop('value', someName);
            $clone.attr('data-friend', cid);
            $clone.appendTo(this.$el);
        },
        myChangesControllerAdd: function(AddedModel){
            this.addNewFriend(AddedModel.get('friendName'), AddedModel.cid);
        },
        myChangesControllerRemove: function (RemovedModel){
            this.$('[data-friend=' + RemovedModel.cid + ']').remove();
        }

    });

    var view = new ContactsView({
        collection: collection
    });

    collection.set(names.map(function (friendName) {
        return {friendName: friendName};
    }));


    var StaticController = Backbone.View.extend({
        el: '#static-control',
        events: {
            'click #add-new-friend': 'addNewFriendOnClick',
            'click #delete-all': 'removeSelectedContacts'
        },
        addNewFriendOnClick: function () {
            var $name = this.$('#friends-new-name')[0];
            if (!!$name.value){
                collection.add({friendName: $name.value});
                $name.value='';
            }
        },
        removeSelectedContacts: function () {
            var models = view.$('.selected').map(function (i, item) {
                var cid = item.getAttribute('data-friend');
                return collection.get(cid);
            }).get();
            
            this.collection.remove(models);
        }
    });

    var staticController = new StaticController({
        collection: collection
    });



});

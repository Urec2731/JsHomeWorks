jQuery(function ($) {
    var $contacts = $('#contacts');
    var $Li_template = $contacts.find(':first-child').eq(0).remove(); $contacts.empty();
    var Names  = ['Саня','Толик','Вован','Влад','Кирюша','Шурик','Миха','Тоха','Андрей','Дима'];


    var Friend = Backbone.Model.extend();
    var FriendsCollection = Backbone.Collection.extend();
    var collection = new FriendsCollection();

    var ContactsView = Backbone.View.extend ({
        el: '#contacts',
        $template: $Li_template,

        events: {
            'click [data-friend]': 'selectUnselect',
            'click [data-delete]': 'removeOneContact'
        },
        selectUnselect: function (e) {
            var $target=$(e.target);
            if ($target.is('[data-friend]')){$target.toggleClass('selected');}
        },
        removeOneContact: function (e) {
            var tmpModel = collection.get(
                $(e.target).closest('[data-friend]').attr('data-friend'));
            collection.remove(tmpModel);
        },
        addNewFriend: function (someName,cid) {
            var $clone = this.$template.clone();
            $clone.find('input').attr('value',someName);
            $clone.attr('data-friend',cid);
            $clone.appendTo(this.$el);
        },
        myChangesControllerAdd: function(AddedModel){
            this.addNewFriend(AddedModel.get('friendName'),AddedModel.cid);
        },
        myChangesControllerRemove: function (RemovedModel){
            this.$el.find( '[data-friend='+RemovedModel.cid+']').remove();
        }

    });

    var view = new ContactsView();
    view.listenTo(collection,'add',view.myChangesControllerAdd);
    view.listenTo(collection,'remove',view.myChangesControllerRemove);



    var NamesM = Names.map(function (friendName){
        return new Friend({friendName:friendName});
    });
    collection.set(NamesM);


    var StaticController = Backbone.View.extend({
        el: '#static-control',
        events: {
            'click #add-new-friend': 'addNewFriendOnClick',
            'click #delete-all': 'removeSelectedContacts'
        },
        addNewFriendOnClick: function () {
            var $name=this.$el.find('#friends-new-name')[0];
            if (!!$name.value){
                collection.add(new Friend({friendName:$name.value}))
                $name.value='';
            }
        },
        removeSelectedContacts: function () {
            var $fetch = view.$el.find('.selected');
            var i = 0, tmpArray = [];
            for (i = 0; i < $fetch.length; i++){tmpArray.push($fetch.eq(i).attr('data-friend'))};
            collection.remove(tmpArray.map(function (mycid){return collection.get(mycid)}));
        }
    });

    var staticController = new StaticController();



});

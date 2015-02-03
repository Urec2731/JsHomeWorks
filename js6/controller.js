define ([
    'backbone',
    'collection',
    'view'],
    function (
    Backbone,
    collection,
    view
) {
        var StaticController = Backbone.View.extend({
            el: '#static-control',
            events: {
                'click #add-new-friend': 'addNewFriendOnClick',
                'click #delete-all': 'removeSelectedContacts'
            },
            addNewFriendOnClick: function () {
                var $name = this.$('#friends-new-name')[0];
                if (!!$name.value){
                    this.collection.add({friendName: $name.value});
                    $name.value='';
                }
            },
            removeSelectedContacts: function () {
                var collection = this.collection;
                var models = view.$('.selected').map(function (i, item) {
                    var cid = item.getAttribute('data-friend');
                    return collection.get(cid);
                }).get();

                this.collection.remove(models);
            }
        });

        return new StaticController({
            collection: collection
        });


});
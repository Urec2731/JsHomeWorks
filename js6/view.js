define (
    ['jquery',
    'backbone',
    'collection',
    'template'],
    function (
    $,
    Backbone,
    collection,
    $Li_template
){
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
                var $target= $(e.target);
                if ($target.is('[data-friend]')){
                    $target.toggleClass('selected');
                }
            },
            removeOneContact: function (e) {
                var tmpModel = this.collection.get(
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

        return new ContactsView({
            collection: collection
        });

});
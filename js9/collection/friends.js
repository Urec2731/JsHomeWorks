define('collection/friends', ['backbone', 'model/friend'], function (Backbone, Friend){
    return Backbone.Collection.extend({
        model: Friend
    });
});

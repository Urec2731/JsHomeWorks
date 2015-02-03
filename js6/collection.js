define(['backbone'], function (Backbone) {
    var Friend = Backbone.Model.extend();
    var FriendsCollection = Backbone.Collection.extend();
    return new FriendsCollection({
        model: Friend
    });
});
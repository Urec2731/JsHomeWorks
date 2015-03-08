define('controller/friends', ['collection/friends', 'data/names'],
    function (FriendsCollection, names){
        var friends = new FriendsCollection();

        friends.set(names.map(function (friendName) {
            return {friendName: friendName};
        }));
        return friends;
    });

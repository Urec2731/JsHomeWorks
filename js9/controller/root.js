
define('controller/root', ['view/root', 'view/static', 'view/friends-list'],
    function (RootView, StaticView, FriendsList){
        var rootView = new RootView();
        rootView.getRegion('contacts').show(new FriendsList());
        rootView.getRegion('static-controller').show(new StaticView());
        return true;
    });
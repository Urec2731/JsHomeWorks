
define('controller/root', ['view/root', 'controller/static', 'controller/friends-list'],
    function (RootView, staticView, friendsList){
        var rootView = new RootView();
        rootView.getRegion('contacts').show(friendsList);
        rootView.getRegion('static-controller').show(staticView);
        return rootView;
    });
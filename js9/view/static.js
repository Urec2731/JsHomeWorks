define('view/static', ['marionette'],
    function (Mn){
        return Mn.ItemView.extend({
            template: "#static-controller-template"
        });
    });

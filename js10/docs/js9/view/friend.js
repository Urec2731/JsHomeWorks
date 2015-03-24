define('view/friend', ['marionette'], function (Mn){
    return Mn.ItemView.extend({
        template: "#some-template",
        tagName: 'li',
        onRender: function () {
            this.$el.attr('data-cid', this.cid);
        }
    });
});
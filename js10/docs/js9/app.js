requirejs.config({
    baseUrl: "/js9",
    paths: {
        jquery: 'lib/jquery-2.1.1.min',
        backbone: 'lib/backbone',
        underscore: 'lib/underscore',
        marionette: 'lib/backbone.marionette'
    },
    shim: {
        'underscore': {
            exports: '_'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'marionette': {
            deps: ['backbone', 'underscore'],
            exports: ['Marionette', 'Mn']
        }
    }
});
////////////////////////////////////////////////////////

require(['controller/root'], function () {
    /**
     * @extends module:controller/root
     */
});



requirejs.config({
    baseUrl: "/js6",
    paths: {
        jquery: 'libs/jquery.min',
        backbone: 'libs/backbone',
        underscore: 'libs/underscore'
    },
    shim: {
        'underscore': {
            exports: '_'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        }
    }
});
////////////////////////////////////////////////////////

require(['jquery', 'collection', 'names', 'controller'], function (jQuery, collection, names) {
   jQuery(function () {
       collection.set(names.map(function (friendName) {
           return {friendName: friendName};
       }));
   });
});



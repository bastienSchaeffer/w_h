/*global require*/
'use strict';

require.config({
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/lodash/dist/lodash'
    }
});

require([
    'backbone',
    'routes/router'
], function (Backbone, RouterRouter) {
    var router = new RouterRouter();
    Backbone.history.start(); 
});

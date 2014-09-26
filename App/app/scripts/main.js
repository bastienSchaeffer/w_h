/*global require*/
'use strict';

require.config({
	shim: {
        'slicknav': {
            deps: ['jquery']
        },
        'swipe': {
            deps: ['jquery']
        }
    },
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/lodash/dist/lodash',
        'slicknav': 'libs/slicknav/jquery.slicknav.min',
        'swipe': 'libs/idangerous/idangerous.swiper.min',
        'picturefill': 'libs/picturefill/picturefill.min',
    }
});

require([
    'backbone',
    'routes/router'
], function (Backbone, RouterRouter) {
	new RouterRouter();
	Backbone.history.start();
});

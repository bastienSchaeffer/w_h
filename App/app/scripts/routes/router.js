/*global define*/

define([
    'jquery',
    'backbone',
    'picturefill',
    'swipe',
    //Views
    'views/HeaderView',
    'views/AsideView',
    'views/FormView',
    'views/ContentView',
    'views/FooterView',
    //cpt
    'components/FeaturesCptView'
], function (
    $,
    Backbone,
    picturefill,
    swipe,
    //Views
    HeaderView,
    AsideView,
    FormView,
    ContentView,
    FooterView,
    //cpt
    FeaturesCptView
){
    'use strict';

    var RouterRouter = Backbone.Router.extend({
        
        routes: {
			'': 'home'
        },

        home: function() {
            new HeaderView();
            new AsideView();
            new FormView();
            var featuresCptView = new FeaturesCptView();
            featuresCptView.render();
            new ContentView();
            new FooterView();
        }

    });

    return RouterRouter;
});
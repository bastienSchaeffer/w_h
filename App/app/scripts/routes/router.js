/*global define*/

define([
    'jquery',
    'backbone',
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
            new ContentView();
            var featuresCptView = new FeaturesCptView();
            featuresCptView.render();
            new FooterView();
        }

    });

    return RouterRouter;
});

define([
    'jquery',
    'underscore',
    'backbone',
    'collections/FeaturesCollection',
    'views/FeaturesView'
], function($, _, Backbone, FeaturesCollection, FeaturesView) {
    'use strict';

    var FeaturesCptView = Backbone.View.extend({
        initialize : function() { //initialize models, collections and views ...
            this.featuresCollection = new FeaturesCollection();
            this.featuresView = new FeaturesView({ collection : this.featuresCollection });
            this.listenTo(this.featuresView, 'featuresAreRendered', this.sendMessage);
            this.featuresCollection.fetch();
        },
        sendMessage : function() {
            $('.this-is-a-message').html('FeaturesView are loaded, so, all is OK, have fun!');
        }
    });

    return FeaturesCptView;
});
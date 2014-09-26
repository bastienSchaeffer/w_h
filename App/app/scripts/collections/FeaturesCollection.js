define([
    'backbone',
    'models/FeatureModel'
], function(Backbone, FeatureModel){
	'use strict';
    var FeaturesCollection = Backbone.Collection.extend({
        model : FeatureModel,
        url : 'data/features.data.js'
    });

    return FeaturesCollection;
});
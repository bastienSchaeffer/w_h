define([
    'backbone',
    'models/FeatureModel'
], function(Backbone, FeatureModel){

    var FeaturesCollection = Backbone.Collection.extend({
        model : FeatureModel,
        url : "data/features.data.js"
    });

    return FeaturesCollection
});
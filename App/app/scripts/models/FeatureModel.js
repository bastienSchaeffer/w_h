define([
    'backbone'
], function(Backbone){
	'use strict';
    var FeatureModel = Backbone.Model.extend({
        defaults : {
            featureTitle : 'Feature',
            featureCopy: 'Feature\'s copy',
            featureImage : 'Image'
        }
    });

    return FeatureModel;

});
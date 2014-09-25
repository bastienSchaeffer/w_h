define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function($, _, Backbone, JST){

    var FeaturesView = Backbone.View.extend({

        el  : $("#m-content"),

        template: JST['app/scripts/templates/featuresTpl.ejs'],

        initialize : function () {
            this.listenTo(this.collection, "sync", this.render)
        },

        render : function () {
            var renderedContent = this.template({ features : this.collection.toJSON() });
            this.$el.append(renderedContent);
            this.trigger("featuresAreRendered")
            return this;
        }
    });

    return FeaturesView;
});
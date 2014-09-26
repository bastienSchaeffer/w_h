/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'picturefill'
], function ($, _, Backbone, JST, picturefill) {
    'use strict';

    var PromotedFeatureView = Backbone.View.extend({
        template: JST['app/scripts/templates/promotedFeatureTpl.ejs'],

        el: '#promoted_feature',


        initialize: function (options) {
            this.render(options);
        },

        render: function (options) {
            this.$el.html(this.template({ feature : options}));
            picturefill();
        }
    });

    return PromotedFeatureView;
});

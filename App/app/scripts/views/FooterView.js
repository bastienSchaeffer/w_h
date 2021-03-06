/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var FooterView = Backbone.View.extend({
        template: JST['app/scripts/templates/footerTpl.ejs'],

        el: '#footer',

        initialize: function () {
            this.render();
        },

        render: function () {
            this.$el.html(this.template);
        }
    });

    return FooterView;
});

/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var ContentView = Backbone.View.extend({
        template: JST['app/scripts/templates/contentTpl.ejs'],

        el: '#m-content',

        initialize: function () {
            this.render();
        },


        render: function () {
            this.$el.append(this.template);
        }
    });

    return ContentView;
});

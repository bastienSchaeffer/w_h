/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var LogedinView = Backbone.View.extend({
        template: JST['app/scripts/templates/logedinTpl.ejs'],

        el: '#user',

        events: {
            'click a': 'onLogOut'
        },

        onLogOut: function( e ){
            e.preventDefault();
            $(e.currentTarget).parent().parent().fadeOut(function(){
                $("#m-login").fadeIn();
            });
        },

        initialize: function () {
            this.render();
        },

        render: function () {
            this.$el.html(this.template);
        }
    });

    return LogedinView;
});

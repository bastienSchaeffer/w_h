/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var HeaderView = Backbone.View.extend({
        template: JST['app/scripts/templates/headerTpl.ejs'],

        el: '#header',

        events: {
            'click li': 'onNavigationItemClick',
            'click i': 'onExpandItemClick'
        },

        onNavigationItemClick: function( e ){
            e.preventDefault();
            $('.is_expanded').removeClass('is_expanded');
            $('.is_active').removeClass('is_active');
            $(e.currentTarget).addClass('is_active');
        },

        onExpandItemClick: function( e ){
            e.preventDefault();
            this.$el.find('ul').toggleClass("is_expanded");
        },

        initialize: function () {
            this.render();
        },

        render: function () {
            this.$el.html(this.template);
        }
    });

    return HeaderView;
});

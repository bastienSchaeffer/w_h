/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'models/LoginModel'
], function ($, _, Backbone, JST, LoginModel) {
    'use strict';

    var FormviewView = Backbone.View.extend({
        template: JST['app/scripts/templates/formTpl.ejs'],

        el: '#m-content',


        model: new LoginModel(),

        events: {
            'submit': 'login'
        },


        login: function (e) {
            e.preventDefault();
            var usernameVal = $('#username').val(),
                passwordVal = $('#password').val();
            this.model.validate({username: usernameVal, password: passwordVal});
        },


        initialize: function () {
            this.render();
        },

        render: function () {
            this.$el.append(this.template);
        }
    });

    return FormviewView;
});

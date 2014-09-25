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
            "submit": "login"
        },


        login: function (e) {
            e.preventDefault();
            var username_val = $("#username").val(),
                password_val = $("#password").val();
            var that = this;
            this.model.validate({username: username_val, password: password_val})
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

/*global define*/

define([
    'underscore',
    'backbone',
    'views/LogedinView'
], function (_, Backbone, LogedinView) {
    'use strict';

    var LoginModel = Backbone.Model.extend({

        defaults: {
            'username': '',
            'password': ''
        },

        validate: function(attrs) {
            var errors = [];

            if (attrs.username !== "username") {
                errors.push({name: 'username', message: 'Please provide a correct username.'});
                $('#username').addClass("is_invalid");
            }else{
                $('#username').removeClass("is_invalid");
            }

            if (attrs.password !== "password") {
                errors.push({name: 'password', message: 'Please provide a correct password.'});
                $('#password').addClass("is_invalid");
            }else{
                $('#password').removeClass("is_invalid");
            }
     
            if ( errors.length ) {
                this.displayError(errors)
            }else{
                $("#m-login").fadeOut(function(){
                    new LogedinView();
                });
            }
            
        },


        parse: function(response, options)  {
            return response;
        }

    });

    return LoginModel;
});

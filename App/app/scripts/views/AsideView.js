/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var AsideView = Backbone.View.extend({
        template: JST['app/scripts/templates/asideTpl.ejs'],

        el: '#m-aside',

        events: {
            'click #bt-subnav': 'openSubnav'
        },

        //============================
        //  SPY SCROLL TO FIX ASIDE
        //  Remove fixed as soon as footer is on the page
        //============================
        set_respers_height: function(){
            this.headerHeight = $('#header').outerHeight(true);
            this.footerHeight = $('#footer').outerHeight(true);
            this.scrollTop = $('body').scrollTop();
            this.winWidth = $( window ).width();
            this.winHeight = $( window ).height();
            this.documentWidth = $( document ).width();
            this.documentHeight = $( document ).height();
            this.limitBottom = (this.documentHeight ) - (this.winHeight + this.footerHeight);

        },

        detect_scroll: function() {
            this.set_respers_height();
            if(this.winWidth > 600){
                if((this.scrollTop >= this.headerHeight)&&(this.scrollTop < this.limitBottom )){
                    $('#m-aside').addClass("is_fixed");
                }else{
                    $('#m-aside').removeClass("is_fixed");
                }
            }else{
                $('#m-aside').removeClass("is_fixed");
            }
        },
        //============================

        openSubnav: function( e ){
            $('aside').toggleClass("is_open");
        },

        initialize: function () {
            _.bindAll(this, 'detect_scroll');
            $(window).resize(this.detect_scroll);
            $(window).scroll(this.detect_scroll);
            this.render();
        },

        render: function () {
            this.$el.html(this.template);
        }
    });

    return AsideView;
});

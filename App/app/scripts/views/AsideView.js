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
            'click #bt-subnav': 'openSubnav',
            'click li': 'onNavigationItemClick'
        },

        onNavigationItemClick: function( e ){
            e.preventDefault();
            $('.is_open').removeClass('is_open');
            $('#m-aside .is_active').removeClass('is_active');
            $(e.currentTarget).addClass('is_active');
        },
        //============================
        //  SPY SCROLL TO FIX ASIDE
        //  Remove fixed as soon as footer is on the page
        //============================
        setRespersHeight: function(){
            this.headerHeight = $('#header').outerHeight(true);
            this.footerHeight = $('#footer').outerHeight(true);
            this.footerOffset = $('#footer').offset().top - this.footerHeight;
            this.scrollTop = $('body').scrollTop();
            this.winWidth = $( window ).width();
            this.winHeight = $( window ).height();
            this.documentWidth = $( document ).width();
            this.documentHeight = $( document ).height();
            this.limitBottom = (this.documentHeight ) - (this.winHeight + this.footerHeight);
            this.positionAside = this.scrollTop - this.headerHeight;
        },

        detectScroll: function() {
            this.setRespersHeight();
            if((this.scrollTop >= this.headerHeight)&&(this.scrollTop < this.footerOffset )){
                $('#m-aside').css({
                    position: 'absolute',
                    top: this.positionAside+'px'
                });
            }
            if(this.scrollTop <= this.headerHeight){
                $('#m-aside').attr('style', '');
            }
        },
        //============================

        openSubnav: function(){
            $('aside').toggleClass('is_open');
        },

        initialize: function () {
            _.bindAll(this, 'detectScroll');
            $(window).resize(this.detectScroll);
            $(window).scroll(this.detectScroll);
            this.render();
        },

        render: function () {
            this.$el.html(this.template);
        }
    });

    return AsideView;
});

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'views/PromotedFeatureView',
    'picturefill',
    'swipe'
], function($, _, Backbone, JST, PromotedFeatureView, picturefill, Swiper){

    'use strict';

    var FeaturesView = Backbone.View.extend({

        el  : $('#m-content'),

        mySwiper: '',

        events : {
            'click li': 'swipePromotedFeature'
        },

        template: JST['app/scripts/templates/featuresTpl.ejs'],

        initialize : function () {
            this.listenTo(this.collection, 'sync', this.render);
        },

        render : function () {
            var randomFeatureId = Math.floor(Math.random() * this.collection.length);
            var renderedContent = this.template({ features : this.collection.toJSON(), randomFeature: randomFeatureId});

            if ($('#content').length){
                $('#content').before(renderedContent);
            }else{
                this.$el.append(renderedContent);
            }
            
            //=================
            picturefill();
            //=================
            this.setSwiper(randomFeatureId);
            //=================
            // Create a featured div: is replaced by a carousel now
            // to see it please uncomment
            //new PromotedFeatureView(this.collection.toJSON()[randomFeatureId]);
            return this;
        },

        setSwiper: function(randomFeatureId){
            this.mySwiper = new Swiper('.swiper-container',{
                pagination: '.pagination',
                loop:true,
                grabCursor: true,
                paginationClickable: true,
                calculateHeight: true
            });

            $('.arrow-left').on('click', function(e){
                e.preventDefault();
                this.mySwiper.swipePrev();
            });

            $('.arrow-right').on('click', function(e){
                e.preventDefault();
                this.mySwiper.swipeNext();
            });

            this.mySwiper.swipeTo(randomFeatureId, 0, false);
        },

        swipePromotedFeature: function(e){
            var idData = $(e.currentTarget).attr('id');
            this.mySwiper.swipeTo(idData, 500, true);

            // Create a featured div: is replaced by a carousel now
            // to see it please uncomment
            //this.renderPromotedFeature(idData)
        },

        renderPromotedFeature: function(idData) {
            new PromotedFeatureView(this.collection.toJSON()[idData]);
        }
    });

    return FeaturesView;
});
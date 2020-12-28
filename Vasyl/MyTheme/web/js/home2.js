define([
    'jquery',
    'jquery-ui-modules/widget',
    'slick'
], function ($) {
    'use strict';

    $.widget('Vasyl.home2', {
        options: {
            slickOptions: {
                slidesToShow: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                dots: true,
                arrows: false
            },

        },

        /**
         * @private
         */
        _create: function () {
            this.element.slick(this.options.slickOptions);
        }
    });

    return $.Vasyl.home2;
});
define([
    'jquery',
    'jquery-ui-modules/widget',
    'slick'
], function ($) {
    'use strict';

    $.widget('Vasyl.home1', {
        options: {
            slickOptions: {
                slidesToShow: 4,
                autoplay: true,
                autoplaySpeed: 2000,
            },

        },

        /**
         * @private
         */
        _create: function () {
            this.element.slick(this.options.slickOptions);
        }
    });

    return $.Vasyl.home1;
});
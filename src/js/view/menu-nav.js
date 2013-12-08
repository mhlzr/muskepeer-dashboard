/**
 * @author Matthieu Holzer
 * @date 30.11.13
 */

define(['../router'], function (router) {
    var _self;

    function removeActiveStateFromOptions() {
        _self.$el.find('ul>li').removeClass('active');
    }

    return {

        $el: null,

        init: function ($el, viewModel) {
            _self = this;
            this.$el = $el;

            //Menu-Listener
            this.$el.find('ul>li>a').on('click', function (e) {

                e.preventDefault();

                if ($(this).parent().hasClass('disabled')) {
                    return;
                }

                router.setDashboardState(null, $(this).attr('href').replace('#', ''));
            })
        },

        disableMenuOptionByHash: function (hash) {
            this.getMenuOptionByHash(hash).addClass('disabled');
        },

        enableMenuOptionByHash: function (hash) {
            this.getMenuOptionByHash(hash).removeClass('disabled');
        },

        getMenuOptionByHash: function (hash) {
            var $anchor = this.$el.find('a[href|="' + hash + '"]');
            return $anchor.parent();
        },

        selectMenuOptionByHash: function (hash) {
            removeActiveStateFromOptions();
            this.getMenuOptionByHash(hash).addClass('active');
        }
    };
});
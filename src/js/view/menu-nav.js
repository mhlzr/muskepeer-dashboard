/**
 * @author Matthieu Holzer
 * @date 30.11.13
 */

define([], function () {
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
            this.$el.find('ul>li').on('click', function (e) {

                if ($(this).hasClass('disabled')) {
                    e.preventDefault();
                    return;
                }
                //remove state from all
                removeActiveStateFromOptions();

                //set state to current
                $(this).addClass('active');
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
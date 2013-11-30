/**
 * @author Matthieu Holzer
 * @date 30.11.13
 */

define([], function () {
    var _self;
    return {
        $el: null,
        init: function ($el, viewModel) {

            _self = this;
            this.$el = $el;

            //Menu-Listener
            this.$el.find('ul>li').on('click', function (e) {
                _self.$el.find('ul>li').removeClass('active');
                $(this).addClass('active');
            })
        }
    };
});
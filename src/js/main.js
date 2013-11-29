/**
 * Created by Matthieu Holzer on 28.11.13.
 */
require.config({
    paths: {
        'domready': 'lib/requirejs-domready/domReady',
        'zepto': 'lib/zepto/zepto'
    },
    shim: {
        'zepto': {
            exports: '$'
        }
    }
});

require(['domready', 'zepto'], function (DomReady, $) {

    //window.Muskepeer = Muskepeer.init();

    //Menu-Listener
    $('nav>ul>li').on('click', function (e) {
        $('nav>ul>li').removeClass('active');
        $(this).addClass('active');
    })

});


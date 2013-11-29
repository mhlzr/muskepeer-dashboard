/**
 * Created by Matthieu Holzer on 28.11.13.
 */
require.config({
    paths: {
        'async': 'lib/requirejs-plugins/src/async',
        'domready': 'lib/requirejs-domready/domReady',
        'knockout': 'lib/knockout.js/knockout.debug',
        'zepto': 'lib/zepto/zepto'
    },
    shim: {
        'zepto': {
            exports: '$'
        }
    }
});

require(['domready', 'zepto', 'muskepeer-dashboard'], function (DomReady, $, MuskepeerDashboard) {

    //window.Muskepeer = Muskepeer.init();

    window.Muskepeer = {
        network: {
            peers: {
                list: [
                    {uuid: 1, long: Math.random() * 100, lat: Math.random() * 100},
                    {uuid: 2, long: Math.random() * 100, lat: Math.random() * 100},
                    {uuid: 3, long: Math.random() * 100, lat: Math.random() * 100}
                ]
            }
        }
    };

    MuskepeerDashboard.init(Muskepeer);

    //Menu-Listener
    $('nav>ul>li').on('click', function (e) {
        $('nav>ul>li').removeClass('active');
        $(this).addClass('active');
    })

});


/**
 * Created by Matthieu Holzer on 28.11.13.
 */
require.config({
    paths: {
        'async': 'lib/requirejs-plugins/src/async',
        'chartjs': 'lib/chartjs/Chart',
        'domready': 'lib/requirejs-domready/domReady',
        'eventemitter2': 'lib/eventemitter2/lib/eventemitter2',
        'modernizr': 'lib/modernizr/modernizr',
        'observe-js': 'lib/observe-js/src/observe',
        'ractive': 'lib/ractive/build/Ractive',
        'q': 'lib/q/q',
        'qr-js': 'lib/qr-js/qr',
        'zepto': 'lib/zepto/zepto'
    },
    shim: {
        'chartjs': {
            exports: 'Chart'
        },
        'zepto': {
            exports: '$'
        }
    }
});

require(['domready', 'modernizr', 'muskepeer-dashboard'], function (DomReady, Modernizr, MuskepeerDashboard) {

    //window.Muskepeer = Muskepeer.init();

    window.jquery = $;

    window.Muskepeer = {
        project: {
            uuid: '234rw3tgbvmzrtrzef567890'
        },
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

    window.Dashboard = MuskepeerDashboard.init(Muskepeer);

});


/**
 * Created by Matthieu Holzer on 28.11.13.
 */
require.config({
    paths: {
        'async': 'lib/requirejs-plugins/src/async',
        'chartjs': 'lib/chartjs/Chart',
        'domready': 'lib/requirejs-domready/domReady',
        'knockout': 'lib/knockout.js/knockout.debug',
        'modernizr': 'lib/modernizr/modernizr',
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

});


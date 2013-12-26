/**
 * Created by Matthieu Holzer on 28.11.13.
 */
require.config({
    paths: {
        'async': 'lib/requirejs-plugins/src/async',
        'chartjs': 'lib/chartjs/Chart',
        'domready': 'lib/requirejs-domready/domReady',
        'eventemitter2': 'lib/eventemitter2/lib/eventemitter2',
        'fastclick': 'lib/fastclick/lib/fastclick',
        'modernizr': 'lib/modernizr/modernizr',
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

require(['domready', 'fastclick', 'modernizr', 'muskepeer-client', 'muskepeer-dashboard'], function (DomReady, Fastclick, Modernizr, MuskepeerClient, MuskepeerDashboard) {

    //window.Muskepeer = Muskepeer.init();

    Fastclick.attach(document.body);

    window.jquery = $;

    window.Muskepeer = MuskepeerClient.init();

    window.Dashboard = MuskepeerDashboard.init(Muskepeer);

    Muskepeer.start({
        project: {

            uuid: '2345678902765456789',
            title: 'TestProject',
            description: 'Here be dragons!',
            active: true,

            owner: {
                email: 'matthieholzer@gmx.de',
                name: 'Matthieu Holzer',
                url: 'http://www.matthieuholzer.de',
                publicKey: ''
            },

            computation: {
                offlineAllowed: true,
                hasDependingTasks: false,
                hasFiniteTasks: true,
                hasDataFiles: false,
                validationIterations: -1, //-1 : Inifinite, 0 : None; >0 : Amount,
                worker: {
                    url: null,
                    algorithm: ''
                },
                jobs: {},
                results: {
                    bundleSize: 100,
                    storages: [
                        {
                            enabled: true,
                            type: 'rest',
                            url: 'http://www.parse.com',
                            method: 'post',
                            params: {}
                        }
                    ]
                }
            },

            network: {
                useGeoLocation: true
            }
        },
        nodes: [
            {
                host: 'node01-muskepeer.rhcloud.com',
                isSecure: true,
                port: 8443
            },
            {
                host: 'node02-muskepeer.rhcloud.com',
                isSecure: true,
                port: 8443
            }/*,
             {
             host: '192.168.178.26',
             isSecure: false,
             port: 8080
             }*/

        ]
    });

});


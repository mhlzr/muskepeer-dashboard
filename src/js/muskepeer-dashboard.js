/**
 * @author Matthieu Holzer
 * @date 29.11.13
 */

define(['' +
    'zepto',
    'knockout',
    'viewModel/peers',
    'viewModel/profile',
    'view/menu-nav',
    'view/peers-chart',
    'view/peers-map',
    'view/peers-table',
    'view/profile-device',
    'view/profile-user'
],
    function ($, ko, PeersViewModel, ProfileViewModel, MenuNavView, PeerChartView, PeerMapView, PeerTableView, ProfileDeviceView, ProfileUserView) {

        return {

            /**
             *
             * @param model Instance of MuskepeerClient
             */
            init: function (model) {

                //already a section chosen?
                if (location.hash == '') {
                    //then default-view
                    location.hash = '#overview';
                }

                $.ajax({
                    url: '//server-muskepeer.rhcloud.com/collections/test'
                });

                //Create ViewModels
                var peersViewModel = new PeersViewModel(model.network.peers),
                    profileViewModel = new ProfileViewModel(model);


                //Knockout bindings
                ko.applyBindings(peersViewModel, $('#peers')[0]);
                ko.applyBindings(profileViewModel, $('#profile')[0]);

                //Initialize Views
                MenuNavView.init($('#menu nav'));

                PeerChartView.init($('#peers .panel.chart'), peersViewModel);
                PeerMapView.init($('#peers .panel.map'), peersViewModel);
                PeerTableView.init($('#peers .panel.table'), peersViewModel);

                ProfileUserView.init($('#profile .user'), profileViewModel);
                ProfileDeviceView.init($('#profile .device'), profileViewModel);

            }
        }
    }
);
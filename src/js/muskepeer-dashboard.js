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
    'view/peers-map',
    'view/peers-table',
    'view/profile-device',
    'view/profile-user'
],
    function ($, ko, PeersViewModel, ProfileViewModel, MenuNavView, PeerMapView, PeerTableView, ProfileDeviceView, ProfileUserView) {

        return {

            /**
             *
             * @param model Instance of MuskepeerClient
             */
            init: function (model) {

                //Create ViewModels
                var peersViewModel = new PeersViewModel(model.network.peers),
                    profileViewModel = new ProfileViewModel(model);


                //Knockout bindings
                ko.applyBindings(peersViewModel, $('#peers')[0]);
                ko.applyBindings(profileViewModel, $('#profile')[0]);

                //Initialize Views
                MenuNavView.init($('#menu nav'));

                PeerMapView.init($('#peers .map'), peersViewModel);
                PeerTableView.init($('#peers table'), peersViewModel);

                ProfileUserView.init($('#profile .user'), profileViewModel);
                ProfileDeviceView.init($('#profile .device'), profileViewModel);

            }
        }
    }
);
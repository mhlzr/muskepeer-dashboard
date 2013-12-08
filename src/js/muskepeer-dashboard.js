/**
 * @author Matthieu Holzer
 * @date 29.11.13
 */

define([
    'zepto',
    'router',
    'model/server',
    'viewModel/overview',
    'viewModel/peers',
    'viewModel/project',
    'viewModel/profile',
    'view/menu-nav',
    'view/overview-projects-table',
    'view/project-qrcode',
    'view/peers-chart',
    'view/peers-map',
    'view/peers-table',
    'view/profile-device',
    'view/profile-user'
],
    function ($, router, Server, OverviewViewModel, PeersViewModel, ProjectViewModel, ProfileViewModel, MenuNavView, OverviewProjectTableView, ProjectQRCodeView, PeerChartView, PeerMapView, PeerTableView, ProfileDeviceView, ProfileUserView) {

        var _self;


        return {

            /**
             *
             * @param client Instance of MuskepeerClient
             */
            init: function (client) {

                _self = this;

                this.server = new Server('//server-muskepeer.rhcloud.com');
                this.client = client;

                //TODO online?, project defined?, localstorage?

                this.initializeViews();
                this.initializeRouting();

                return this;

            },


            /**
             * Add EventListeners to Router
             */
            initializeRouting: function () {

                router.on('section:change', function (sectionName) {
                    _self.showSectionViewByName(sectionName);
                });

                router.on('project:change', function (projectUuid) {
                    //TODO change everything, inform user and reload?

                });

                //initial state
                router.setInitialDashboardState();
            },


            /**
             * Create views and register window listeners
             */
            initializeViews: function () {

                //Create ViewModels
                var overviewViewModel = new OverviewViewModel(this.server),
                    peersViewModel = new PeersViewModel(this.client.network.peers),
                    projectViewModel = new ProjectViewModel(this.client.project);

                //Initialize Views
                MenuNavView.init($('#menu nav'));

                //Overview

                OverviewProjectTableView.init($('#overview .panel.table'), overviewViewModel);

                //Project
                ProjectQRCodeView.init($('#project .panel.qrcode'), projectViewModel);

                //PeerChartView.init($('#peers .panel.chart'), peersViewModel);
                PeerMapView.init($('#peers .panel.map'), peersViewModel);
                PeerTableView.init($('#peers .panel.table'), peersViewModel);

                //ProfileUserView.init($('#profile .user'), profileViewModel);
                // ProfileDeviceView.init($('#profile .device'), profileViewModel);

            },


            /**
             * Change to a default section and or
             * test if selected section is enabled
             * @param name name of section to activate
             */
            showSectionViewByName: function (name) {
                var $sections = $('section'),
                    $sectionWanted = $sections.filter('#' + name);

                if ($sectionWanted.length > 0 && !$sectionWanted.hasClass('disabled')) {
                    $sections.removeClass('active');
                    $sectionWanted.addClass('active');
                    MenuNavView.selectMenuOptionByHash('#' + name);
                }

            }
        }
    }
);
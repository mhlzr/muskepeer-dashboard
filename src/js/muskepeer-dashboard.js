/**
 * @author Matthieu Holzer
 * @date 29.11.13
 */

define(['knockout', 'viewModel/peers', 'async!http://maps.google.com/maps/api/js?v=3&sensor=false'], function (ko, PeersViewModel, GoogleMaps) {
        return {


            /**
             *
             * @param model Instance of MuskepeerClient
             */
            init: function (model) {

                ko.applyBindings(new PeersViewModel(model.network.peers));

                //GOOGLE
                var mapOptions = {
                    center: new google.maps.LatLng(-34.397, 150.644),
                    zoom: 8,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };

                var map = new google.maps.Map(document.getElementById('peerMap'),
                    mapOptions);


                var pos1 = new google.maps.LatLng(-24.397, 120.644);
                var pos2 = new google.maps.LatLng(-20.397, 130.644);

                var marker1 = new google.maps.Marker({
                    position: pos1,
                    map: map,
                    title: 'Foo'
                });

                var marker2 = new google.maps.Marker({
                    position: pos2,
                    map: map,
                    title: 'Foo'
                });

                var bounds = new google.maps.LatLngBounds();
                bounds.extend(pos1);
                bounds.extend(pos2);
                map.fitBounds(bounds);

            }
        }
    }
);
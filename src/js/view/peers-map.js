/**
 * @author Matthieu Holzer
 * @date 30.11.13
 */

define(['async!http://maps.google.com/maps/api/js?v=3&sensor=false'], function () {
    return {
        init: function ($el, viewModel) {

            //GOOGLE
            var mapOptions = {
                center: new google.maps.LatLng(-34.397, 150.644),
                zoom: 8,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };

            var map = new google.maps.Map($el[0],
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
    };
});
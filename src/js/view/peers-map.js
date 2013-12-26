/**
 * @author Matthieu Holzer
 * @date 30.11.13
 */

define(['async!http://maps.google.com/maps/api/js?key=&v=3&sensor=false'], function () {
    return {
        init: function ($el, viewModel) {

            var $map = $el.find('.map');
            //GOOGLE
            var mapOptions = {
                center: new google.maps.LatLng(-34.397, 150.644),
                zoom: 8,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };

            var map = new google.maps.Map($map[0],
                mapOptions);


            var pos1 = new google.maps.LatLng(-24.397, 120.644);
            var pos2 = new google.maps.LatLng(-20.397, 130.644);
            var pos3 = new google.maps.LatLng(50.58714, 8.69093);

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

            var marker23 = new google.maps.Marker({
                position: pos3,
                map: map,
                title: 'Foo'
            });

            var bounds = new google.maps.LatLngBounds();
            bounds.extend(pos1);
            bounds.extend(pos2);
            bounds.extend(pos3);
            map.fitBounds(bounds);


            //Draw a line
            var flightPath = new google.maps.Polyline({
                draggable: false,
                path: [pos1, pos2, pos3],
                geodesic: true,
                map: map,
                strokeColor: '#FF0000',
                strokeOpacity: 1.0,
                strokeWeight: 2
            });


        }
    };
});
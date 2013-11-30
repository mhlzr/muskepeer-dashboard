/**
 * @author Matthieu Holzer
 * @date 29.11.13
 */

define(['knockout'], function (ko) {

    return function ViewModel(peers) {

        this.list = ko.observableArray(peers.list);

    }

})
;
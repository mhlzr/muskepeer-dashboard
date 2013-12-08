/**
 * @author Matthieu Holzer
 * @date 29.11.13
 */

define([], function () {

    return function ViewModel(peers) {

        this.list = peers.list;
        this.amount = this.list.length;

    }
});


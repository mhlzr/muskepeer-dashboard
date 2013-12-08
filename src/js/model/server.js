/**
 * @author Matthieu Holzer
 * @date 08.12.13
 */

define(['zepto', 'q'], function ($, Q) {

    function getCollectionFromServer(url, collectionName) {
        var deferred = Q.defer();

        $.ajax({
            error: function (xhr, status, error) {
                deferred.reject(error);
            },
            success: function (data, status, xhr) {
                deferred.resolve(data);
            },
            type: 'GET',
            url: url + '/' + collectionName
        });

        return deferred.promise;
    }

    return function Server(url) {
        this.url = url;
        this.projects = [];
        this.nodes = [];

        this.getProjects = function () {
            var self = this;
            return getCollectionFromServer(this.url, 'projects').then(function (data) {
                self.projects = data;
            });

        };

        this.getNodes = function () {
            var self = this;
            return getCollectionFromServer(this.url, 'nodes').then(function (data) {
                self.nodes = data;
            });
        };


        this.getProjects()
            .then(this.getNodes());

    };
})
;
(function(){

    'use strict';
    /**
     *
     * Note the methods match the controller method I am calling
     *
     * https://github.com/johnpapa/angularjs-styleguide#data-services
     * @param Restangular
     * @constructor
     */
    function FooService(Restangular) {
        vm = this;
        vm.Restangular = Restangular;
        return {
            index: index,
            get:get,
            update:update,
            create:create,
            getCreateObject:getCreateObject
        };

        //////
        function index() {
            return vm.Restangular.one('api/v1/foos').get().then(
                success,
                fail
            );
        }

        function update(payload, token, successCallback, errorCallback) {
            var rest = vm.Restangular.one('api/v1/foos', payload.id);
            rest._token = token;
            rest.data   = payload;
            rest.put().then(
                successCallback,
                errorCallback
            );
        }

        function getCreateObject()
        {
            return {};
        }

        function create(payload, token, successCallback, errorCallback) {

            var rest = vm.Restangular
                .all('api/v1/foos');
            rest._token = token;
            rest.post({ "data": payload }).then(
                successCallback,
                errorCallback
            );
        }

        function get(id) {
            return vm.Restangular.one('api/v1/foos', id).get().then(
                success,
                fail
            );
        }

        function success(response) {
            return response;
        }

        function fail(response) {
            return response;
        }
    }

    angular
        .module('app')
        .factory('FooService', FooService);
})();
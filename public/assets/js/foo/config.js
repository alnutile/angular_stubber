(function () {
    angular
        .module('app')
        .config(FooConfig);

    /* @ngInject */
    function FooConfig($stateProvider) {
        $stateProvider
            .state('foo', {
                url: "/foo",
                views: {
                    '': {
                        controller: 'FooIndexCtrl',
                        controllerAs: 'vm',
                        resolve: { /* @ngInject */
                            fooIndex: ['FooService', function(FooService){
                                return FooService.index();
                            }]
                        },
                        templateUrl: "/assets/js/foo/templates/index.html"
                    }
                },
                data: { pageTitle: 'Foo' }
            });
    }


})();
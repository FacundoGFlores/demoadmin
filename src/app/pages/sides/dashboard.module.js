(function () {
    'use strict';

    angular.module('DemoAdmin.pages.dashboard', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('dashboard', {
                url: '/dashboard',
                templateUrl: 'app/pages/sides/sides.html',
                redirectTo: 'dashboard.home'
            });
    }

})();

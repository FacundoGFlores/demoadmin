(function () {
    'use strict';

    angular.module('DemoAdmin.pages.login', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('login', {
                url: '/login',
                title: 'login',
                templateUrl: 'app/pages/login/login.html',
                controller: 'loginCtrl',
            });
    }

})();

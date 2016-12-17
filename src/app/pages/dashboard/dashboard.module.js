(function () {
    'use strict';

    angular.module('DemoAdmin.pages.home', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('dashboard.home', {
                url: '/home',
                templateUrl: 'app/pages/dashboard/dashboard.html',
                title: 'Dashboard',
                sidebarMeta: {
                    icon: 'ion-android-home',
                    order: 0,
                },
            });
    }

})();

(function () {
    'use strict';

    angular.module('DemoAdmin.pages', [
        'ui.router',
        'DemoAdmin.pages.dashboard',
        'DemoAdmin.pages.home',
        'DemoAdmin.pages.login',
    ])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($urlRouterProvider, baSidebarServiceProvider) {
        $urlRouterProvider.otherwise('/login');

        // baSidebarServiceProvider.addStaticItem({
        //     title: 'Menu Level 1',
        //     icon: 'ion-ios-more',
        //     subMenu: [{
        //         title: 'Menu Level 1.1',
        //         disabled: true
        //     }, {
        //         title: 'Menu Level 1.2',
        //         subMenu: [{
        //             title: 'Menu Level 1.2.1',
        //             disabled: true
        //         }]
        //     }]
        // });
    }

})();

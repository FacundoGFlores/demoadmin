(function () {
    'use strict';

    angular.module('DemoAdmin.pages.login')
        .controller('loginCtrl', loginCtrl);

    /** @ngInject */
    function loginCtrl($scope, $state) {
        $scope.submit = function (userdata) {
            if (userdata.username === 'admin' && userdata.password === 'admin') {
                $state.go('dashboard.home');
            } else {
                $state.reload();
            }
        }
    }

})();

(function(app) {
    'use strict';

    var forgetPasswordCtrl = function($scope, $http) {

    };

    var mainRouter = function($stateProvider) {
        $stateProvider.state('forgetPassword', {
            url: '/forgetPassword',
            templateUrl: 'modules/login/forgetPassword.html',
            controller: forgetPasswordCtrl
        });
    };

    app.config(mainRouter);
})(angular.module('isj'));



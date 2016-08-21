(function(app) {
    'use strict';

    var forgetPasswordCtrl = function($scope,$state,$ionicHistory) {

        $scope.input = {
            phone: ''
        };

        $scope.back = function () {
          $ionicHistory.goBack();
        };

        $scope.getCode = function(){
            $state.go('forgetPasswordSetting');
        };
    };

    var mainRouter = function($stateProvider) {
        $stateProvider.state('forgetPassword', {
            url: '/forgetPassword',
            cache:'false',
            templateUrl: 'modules/login/forgetPassword.html',
            controller: forgetPasswordCtrl
        });
    };

    app.config(mainRouter);
})(angular.module('isj'));



(function(app) {
    'use strict';

<<<<<<< HEAD
    var forgetPasswordCtrl = function($scope,$state,$ionicHistory,$http) {
=======
    var forgetPasswordCtrl = function($scope,$state,$ionicHistory) {
>>>>>>> 3174530b73f82ae83e8158f573e54c8055800c66

        $scope.input = {
            phone: ''
        };

        $scope.back = function () {
          $ionicHistory.goBack();
        };

        $scope.getCode = function(){
            var phone = {
                phone:$scope.input.phone.toString()
            };
            $http.put('/login/forgetPassword', phone).success(function(data) {
                if (angular.isUndefined(data.errMsg)) {
                    if(data.status === 'success'){
                        $state.go('forgetPasswordSetting',{phone:$scope.input
                            .phone});
                    }else{
                        alert('手机号不存在！');
                    }
                }
            });

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



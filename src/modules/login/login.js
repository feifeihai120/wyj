(function(app) {
    'use strict';

    var loginCtrl = function($scope, $http,$state,$ionicHistory) {
        $scope.input = {
            phone: '',
            password:''
        };

        $scope.back = function(){
<<<<<<< HEAD
            //$ionicHistory.goBack();
            $state.go('tab.personal');
=======
            $ionicHistory.goBack();
>>>>>>> 3174530b73f82ae83e8158f573e54c8055800c66
        };
        $scope.login = function(){
            var phoneAndPwd = {
                phone:$scope.input.phone.toString(),
                password:$scope.input.password
            };
            $http.put('/login/login', phoneAndPwd).success(function(data) {
                if (angular.isUndefined(data.errMsg)) {
                    if(data.status === 'success'){
                        $state.go('tab.main');
                    }else{
                        alert('用户名或密码错误，请核对后重试');
                    }
                }
            });

        };
    };

    var mainRouter = function($stateProvider) {
        $stateProvider.state('login', {
            url: '/login',
            cache:'false',
            templateUrl: 'modules/login/login.html',
            controller: loginCtrl
        });
    };

    app.config(mainRouter);
})(angular.module('isj'));


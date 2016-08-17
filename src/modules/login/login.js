(function(app) {
    'use strict';

    var loginCtrl = function($scope, $http,$state) {
        $scope.login = function(){
            var phoneAndPwd = {
                phone:document.getElementById("login-phone").value,
                password:document.getElementById("login-password").value
            };
            $http.put('/login/login', phoneAndPwd).success(function(data) {
                if (angular.isUndefined(data.errMsg)) {
                    if(data.status == 'success'){
                        $state.go("tab.main");
                    }else{
                        alert("用户名或密码错误，请核对后重试");
                    }
                }
            });

        }
    };

    var mainRouter = function($stateProvider) {
        $stateProvider.state('login', {
            url: '/login',
            templateUrl: 'modules/login/login.html',
            controller: loginCtrl
        });
    };

    app.config(mainRouter);
})(angular.module('isj'));


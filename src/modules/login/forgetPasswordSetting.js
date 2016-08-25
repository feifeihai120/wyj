(function(app) {
    'use strict';

<<<<<<< HEAD
    var forgetPasswordSettingCtrl = function($scope,$stateParams,$state,$ionicHistory,$http) {
=======
    var forgetPasswordSettingCtrl = function($scope,$ionicHistory) {
>>>>>>> 3174530b73f82ae83e8158f573e54c8055800c66

        $scope.input = {
            code:'',
            password:''
        };
        //是否重新发送的标志位
        $scope.isResend = false;

<<<<<<< HEAD
        $scope.phone = $stateParams.phone.toString().substring(0,3)+'****'+$stateParams.phone.toString().substring(7,11);
=======
>>>>>>> 3174530b73f82ae83e8158f573e54c8055800c66
        $scope.back = function(){
            $ionicHistory.goBack();
        };

<<<<<<< HEAD
        $scope.changePassword = function () {
            if($scope.input.password.length<6){
                alert('密码长度过短请重新设置');
            }else{
                var password = {
                    password:$scope.input.password
                };
                $http.put('/login/forgetPasswordSetting', password).success(function(data) {
                    if (angular.isUndefined(data.errMsg)) {
                        /*if(data.status === 'success'){
                             $state.go('login',{phone:$scope.input
                             .phone});
                        }else{
                            alert('身份证号不存在！');
                        }*/
                    }
                });
            }
        };

=======
>>>>>>> 3174530b73f82ae83e8158f573e54c8055800c66
        $scope.time = {
            second:5
        };
        $scope.secondString = '('+$scope.time.second+')';
        var updateTime = function() {
            //倒计时结束可以重新发送验证码
            if ($scope.time.second === 0) {
                $scope.secondString = '';
            }else if($scope.time.second === 1){
                $scope.isResend = true;
                --$scope.time.second;
                $scope.secondString = '';
            }else{
                --$scope.time.second;
                $scope.secondString = '('+$scope.time.second+')';
            }
        };
        setInterval(function(){
            $scope.$apply(updateTime);

        }, 1000);
    };

    var mainRouter = function($stateProvider) {
        $stateProvider.state('forgetPasswordSetting', {
            url: '/forgetPasswordSetting',
            cache:'false',
            params:{'phone':''},
            templateUrl: 'modules/login/forgetPasswordSetting.html',
            controller: forgetPasswordSettingCtrl
        });
    };

    app.config(mainRouter);
})(angular.module('isj'));

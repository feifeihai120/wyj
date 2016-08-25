(function(app) {
   // 'use strict';

<<<<<<< HEAD
    var registSettingCtrl = function($scope,$ionicHistory,$stateParams,$http,$state) {
        $scope.isResend = false;
        $scope.input = {
            name:'',
            password:'',
            code:'',
            idCard:''
        };
        $scope.phone = $stateParams.phone.toString().substring(0,3)+'****'+$stateParams.phone.toString().substring(7,11);
=======
    var registSettingCtrl = function($scope,$ionicHistory) {
        $scope.isResend = false;

>>>>>>> 3174530b73f82ae83e8158f573e54c8055800c66
        $scope.back = function(){
            $ionicHistory.goBack();
        };

<<<<<<< HEAD
        $scope.regist = function(){
            var idCard = {
                idCard:$scope.input.idCard.toString()
            };
            $http.put('/login/registSetting', idCard).success(function(data) {
                if (angular.isUndefined(data.errMsg)) {
                    if(data.status === 'success'){
                       /* $state.go('login',{phone:$scope.input
                            .phone});*/
                    }else{
                        alert('身份证号不存在！');
                    }
                }
            });
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
            //console.log($scope.time.second);
        }, 1000);
    };

    var mainRouter = function($stateProvider) {
        $stateProvider.state('registSetting', {
            url: '/registSetting',
            cache:'false',
            params:{'phone':''},
            templateUrl: 'modules/login/registSetting.html',
            controller: registSettingCtrl
        });
    };

    app.config(mainRouter);
})(angular.module('isj'));



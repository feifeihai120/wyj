(function(app) {
    'use strict';

    var registCtrl = function($scope, $http) {

    };

    var mainRouter = function($stateProvider) {
        $stateProvider.state('regist', {
            url: '/regist',
            templateUrl: 'modules/login/regist.html',
            controller: registCtrl
        });
    };

    app.config(mainRouter);
})(angular.module('isj'));



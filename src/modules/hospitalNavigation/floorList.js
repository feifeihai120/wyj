(function(app) {
  'use strict';

  var hospitalNavigationDloorListCtrl = function($scope, $http, $stateParams, $cordovaToast) {
    //取得各楼层信息
    $http.get('/hospitalNavigation/builds/floors', {params: {buildId: $stateParams.id}}).success(function(data) {
      $scope.floorList = data;
    }).error(function(data){
      $cordovaToast.showShortBottom(data);
    });
  };

  var mainRouter = function($stateProvider) {
    $stateProvider.state('hospitalNavigationFloorList', {
      url: '/hospitalNavigation/floorList/:id',
      templateUrl: 'modules/hospitalNavigation/floorList.html',
      controller: hospitalNavigationDloorListCtrl
    });
  };

  app.config(mainRouter);
})(angular.module('isj'));

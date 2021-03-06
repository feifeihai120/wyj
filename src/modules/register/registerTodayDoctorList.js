(function(app) {
  'use strict';

  var registerTodayDoctorListCtrl = function($scope, $http, $state, $stateParams, $filter, $timeout, $cordovaToast) {
    $scope.hideSearch = true;

    //取得医生照片
    var getDoctorPhoto = function(doctorId, index) {
      $http.get('/doctors/photo', {params: {doctorId: doctorId, index: index}}).success(function(data, status, headers, config) {
        $scope.doctors[config.params.index].photo = data;
      }).error(function(data, status, fun, config){
        $scope.doctors[config.params.index].photo = '';
      });
    };

    //不同的院区的颜色
    $scope.districtColor = new Map();
    //颜色数组
    var color = ['district-icon-positive', 'district-icon-balanced',
      'district-icon-royal', 'district-icon-calm', 'district-icon-assertive'];
    //院区数量
    var districtCount = 0;
    //取得排班医生列表
    var today = $filter('date')(new Date(),'yyyy-MM-dd');
    $scope.major = $stateParams.major;
    var getDoctors = function(pageNo, isInit) {
      var params = {
        pageNo: pageNo,
        districtId: $stateParams.districtId,
        subjectId: $stateParams.subjectId,
        major: $scope.major,
        startDate: today,
        endDate: today
      };
      $http.get('/schedule/doctors', {params: params}).success(function(data) {
        $scope.spinnerShow = false;
        if (data.length === 0) {
          $scope.vm.moreData = false;
        }
        var index = 0;
        if (isInit) {
          $scope.doctors = data;
        }
        else {
          index = $scope.doctors.length;
          for (var k = 0 ; k < data.length ; k++) {
            $scope.doctors.push(data[k]);
          }
        }
        var id;
        for (var i = index ; i < $scope.doctors.length ; i++) {
          $scope.doctors[i].district = $scope.doctors[i].district.substring(0,2);
          id = $scope.doctors[i].districtId;
          if (i > index) {
            if ($scope.doctors[i].districtId !== $scope.doctors[i - 1].districtId) {
              districtCount++;
              $scope.districtColor.set(id, color[districtCount - 1]);
            }
          } else {
            districtCount = 1;
            $scope.districtColor.set(id, color[districtCount - 1]);
          }
          getDoctorPhoto($scope.doctors[i].id, i);
        }
        $scope.$broadcast('scroll.infiniteScrollComplete');
      }).error(function(data){
        $scope.spinnerShow = false;
        $scope.doctors = [];
        $cordovaToast.showShortBottom(data);
      });
    };

    $scope.$on('$ionicView.beforeEnter', function(){
      //上拉加载医生
      $scope.vm = {
        moreData: true,
        pageNo: 1,
        init: function () {
          $scope.spinnerShow = true;
          $scope.doctors = null;
          $scope.vm.pageNo = 1;
          getDoctors($scope.vm.pageNo, true);
        },
        loadMore: function () {
          $scope.vm.pageNo++;
          getDoctors($scope.vm.pageNo, false);
        }
      };
      $scope.vm.init();
    });

    //查询框显示隐藏事件
    $scope.searchClk = function() {
      $scope.hideSearch = !$scope.hideSearch;
      if (!$scope.hideSearch) {
        $timeout(function(){
          document.getElementById('registerTodayDoctorList_search').focus();
        }, 50);
      }
    };

    //查询事件
    $scope.doSearch = function() {
      $scope.vm.init();
    };

    //选择照片事件
    $scope.photoClk = function(id, event) {
      event.stopPropagation();
      $state.go('doctorIntroductionView', {doctorId: id, type: '0'});
    };

    //医生选择事件
    $scope.doctorClk = function(doctorId, overCount) {
      if (overCount > 0) {
        $state.go('registerDoctorTimeSelect', {doctorId: doctorId, date: today, type: '1'});
      }
    };
  };

  var mainRouter = function($stateProvider) {
    $stateProvider.state('registerTodayDoctorList', {
      url: '/register/registerTodayDoctorList/:districtId/:subjectId/:major',
      templateUrl: 'modules/register/registerTodayDoctorList.html',
      controller: registerTodayDoctorListCtrl
    });
  };

  app.config(mainRouter);
})(angular.module('isj'));

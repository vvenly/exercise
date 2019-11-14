/**
 * Created by bjwsl-001 on 2017/2/15.
 */

var app = angular.module('kfl', ['ionic']);

app.config(
  function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    $ionicConfigProvider.tabs.position('bottom');

    $stateProvider
      .state('start', {
        url: '/kflStart',
        templateUrl: 'tpl/start.html'
      })
      .state('main', {
        url: '/kflMain',
        templateUrl: 'tpl/main.html'
      })
      .state('detail', {
        url: '/kflDetail',
        templateUrl: 'tpl/detail.html'
      })
      .state('order', {
        url: '/kflOrder',
        templateUrl: 'tpl/order.html'
      })
      .state('myOrder', {
        url: '/kflMyOrder',
        templateUrl: 'tpl/myOrder.html'
      })

    $urlRouterProvider.otherwise('/kflStart')

  })


app.controller('parentCtrl', ['$scope', '$state',
  function ($scope, $state) {

    $scope.jump = function (stateName, arg) {
      $state.go(stateName, arg);
    }

  }]);



























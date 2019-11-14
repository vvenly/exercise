var app = angular.module('kaifanla', ['ionic']);
app.config(function($stateProvider,$urlRouterProvider,$ionicConfigProvider){

  $ionicConfigProvider.tabs.position('bottom');
  $stateProvider
    .state('start',{
      url:'/kflStart',
      templateUrl:'tpl/start.html'
    })
    .state('main',{
      url:'/kflMain',
      templateUrl:'tpl/main.html',
      controller:'mainCtrl'
    })
    //需要传值
    .state('detail',{
      url:'/kflDetail/:id',
      templateUrl:'tpl/detail.html',
      controller:'detailCtrl'
    })
    .state('order',{
      url:'/kflOrder/:id',
      templateUrl:'tpl/order.html',
      controller:'orderCtrl'
    })
    .state('myOrder',{
      url:'/kflMyOrder/:id',
      templateUrl:'tpl/myorder.html',
      controller:'myOrderCtrl'
    })
  $urlRouterProvider.otherwise('/kflStart');
});
app.controller("parentCtrl",['$scope','$state',
  function($scope,$state){
    $scope.jump= function (stateName,arg) {
      $state.go(stateName,arg)
    }
  }]);
app.controller('mainCtrl',['$scope','$http',
  function($scope,$http){
    $scope.inputData={kw:''};
    //定义一个变量has 结果为boolean
    $scope.hasMore=true;
    //获取
    $http
      .get('data/dish_getbypage.php')
      .success(function (data) {
        $scope.dishList = data;
        console.log($scope.dishList);
      })
    //每次获取5个值
    $scope.loadMore=function(){
      $http
        .get('data/dish_getbypage.php?start=' + $scope.dishList.length)
        .success(function(data){
          //如果剩余数据量小于5，将has改为false
          if(data.length<5){
            $scope.hasMore=false;
          }
          //将获取到数据拼接到内容中
          $scope.dishList = $scope.dishList.concat(data);
          $scope.$broadcast("scroll.infiniteScrollComplete");
        })
    }

    $scope.$watch('inputData.kw',function(){
      //必须要在一个对象中才能显示
      console.log($scope.inputData.kw);
      //如果有值的话，就将这个数值传给后台，将返回的内容赋值给dishList，显示出来
      if($scope.inputData.kw){
        $http.get('data/data_getbykw.php?kw='+$scope.inputData.kw)
          .success(function(data){
            $scope.dishList=data;
          })
      }
    })
  }]);
//需要传入参数给下一页$stateParams
app.controller('detailCtrl',['$scope','$http','$stateParams',
  function($scope,$http,$stateParams){
    console.log($stateParams.id);
    $http.get('data/dish_getbyid.php?id='+$stateParams.id)
      .success(function(data){
        console.log(data);
        $scope.dish=data[0];
      })
  }]);
app.controller('orderCtrl',
  ['$scope', '$http', '$stateParams', '$httpParamSerializerJQLike',
    function ($scope, $http, $stateParams, $httpParamSerializerJQLike) {
      $scope.order = {did: $stateParams.id};
      console.log($stateParams.id);
      //定义一个提交的方法
      $scope.submitOrder = function () {
        var result = $httpParamSerializerJQLike($scope.order);
        console.log(result);
        $http
          .get('data/order_add.php?' + result)
          .success(function (data) {
            console.log(data);
            if(data[0].msg =='succ'){
              sessionStorage.setItem('phone',$scope.order.phone);
              $scope.succMsg = "下单成功，订单编号为:"+data[0].oid;
            } else {
              $scope.errMsg = "下单失败";
            }
          })
      }
    }]);
app.controller('myOrderCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('data/myOrder.php?phone='
    + sessionStorage.getItem('phone'))
      .success(function (data) {
        console.log(data);
        $scope.orderList = data;
      })

  }])


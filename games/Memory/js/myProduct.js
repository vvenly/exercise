/**
 * Created by Administrator on 2017/4/25.
 */
var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
        .when('/start',{
          //  controller:"startCtrl",
            templateUrl:'fragment/start.html'
        })
        .when('/wordAdd',{
            controller:"wordAddCtrl",
            templateUrl:'fragment/wordAdd.html'
        })
        .when('/wordEx',{
            // controller:"product",
            templateUrl:'fragment/wordExercise.html'
        })
        .when('/responsive',{
            // controller:"product",
            templateUrl:'fragment/responsive.html'
        })
        .when('/map',{
            // controller:"product",
            templateUrl:'fragment/map.html'
        })
        .when('/game',{
            // controller:"product",
            templateUrl:'fragment/game.html'
        })
        .when('/mGame',{
            controller:"mGameCtrl",
            templateUrl:'fragment/mouseGame.html'
        })
        .when('/phoneImg',{
            // controller:"product",
            templateUrl:'fragment/phoneImg.html'
        })
        .when('/sel',{
            title:'零件',
            controller:"componentCtrl",
            templateUrl:'fragment/select.html'
        })
        .otherwise({redirectTo:'/start'})
});

app.controller('parentCtrl', ['$scope','$location',
    function ($scope,$location) {
        $scope.jump=function(rurl){
            $location.path(rurl)
        }

    }]);

//游戏页面
app.controller('mGameCtrl',['$scope','$interval','$rootScope',function($scope,$interval,$rootScope){
    $rootScope.title='打地鼠';
    //页面加载完成执行
    //$scope.$on('$viewContentLoaded', function() {
    //    $scope.init();
    //});

    var ck1,ck2,ck3;
    var sum=0;
    var button1,button2;
    var time=0;

    //$scope.init=function(){
    //    var strl="<li><img src='img/game/m1.jpg' name='image' onclick='clickMouse(this)'></li>";
    //    for(var i=0;i<25;i++){
    //        $('#ul')[0].innerHTML+=strl;
    //    }
    //};


    $scope.showImage=function(){
       // console.log($("[name='image']"));
        //console.log(document.getElementsByName('image'));

        var index=Math.floor(Math.random()*25);

        $("[name='image']")[index].src="img/game/m2.jpg";


        setTimeout(function(){
            $("[name='image']")[index].src="img/game/m1.jpg";
        },1000);
        sum+=1;
    };

    $scope.startGame=function(){
      //  time=10;
       // ck3=$interval($scope.showScore(),1000);
        ck2=$interval($scope.showImage,1000);
    };



    $scope.showScore=function(){
        $('#times').html("剩余时间："+ time +" s");
        time = time -1;
        if(time<0){
            timeout();
            alert('游戏结束');
        }
        var html3="打中："+mouse + "只 漏掉："+(sum - mouse) +"只 <br/>"+"总分："+ sum*100 +"得分："
            +(mouse*100-(sum-mouse)*100);
        $('#score').html(html3);
    }
}]);


//网页零件select
app.controller('componentCtrl',['$scope','$rootScope',function($scope,$rootScope){
    $rootScope.title='零件';

    $scope.data=[
        {name:'西安',value:'1'},
        {name:'临潼',value:'2'},
        {name:'汉中',value:'3'}
    ];

    $scope.status=1;
}]);




app.controller('wordAddCtrl',['$scope','$http', function($scope,$http){
    var en=$("#english").value;
    var cn=$("#chinese").value;
    $http.post('data/englishShow.php?ename='+en)
        .success(function(data){
            console.log(data);
            // $scope.dish=data[0];
        });
    en='';
    cn='';

}]);


// app.controller('product', ['$scope','$location',
//    function ($scope,$location) {
//        $scope.jump=function(rurl){
//            $location.path(rurl)
//        }
//
//    }]);
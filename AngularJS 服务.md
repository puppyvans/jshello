## AngularJS 服务
AngularJS 中你可以创建自己的服务，或使用内建服务。
在 AngularJS 中，服务是一个函数或对象，可在你的 AngularJS 应用中使用。AngularJS 内建了30 多个服务。

###为什么使用服务
在很多服务中，比如 $location 服务，它可以使用 DOM 中存在的对象，类似 window.location 对象，但 window.location 对象在 AngularJS 应用中有一定的局限性。
AngularJS 会一直监控应用，处理事件变化， AngularJS 使用 $location 服务比使用 window.location 对象更好。
#### $location 和 window.location 的区别

|      | $location.service| window.location|
|:--------|:---------|:-------|
| 目的| 允许对当前浏览器位置进行读写操作| 允许对当前浏览器位置进行读写操作 |
| API| 暴露jquery风格的读写器| 暴露一个能被读写的对象 |
| 是否在AngularJS应用生命周期中和应用整合| 可获取到应用声明周期内的每一个阶段，并且和$watch整合| 否 |
| 是否和HTML5 API的无缝整合| 是（对低级浏览器优雅降级）| 否 |
| 和应用的上下文是否相关| 是，$location.path()返回"/actual/path"| 否，window.location.path返回"/docroot/actual/path" |

### $timeout 服务
AngularJS $timeout 服务对应了 JS window.setTimeout 函数。$timeout 访问在规定的毫秒数后执行指定函数。
>例子
```
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <script src="./angular.js"></script>
</head>

<body>

    <div ng-app="myApp" ng-controller="myCtrl">
        <p>3秒后显示信息:</p>
        <h1>{{myHeader}}</h1>
    </div>

    <script>
        var app = angular.module('myApp', []);
        app.controller('myCtrl', function ($scope, $timeout) {
            $scope.myHeader = "Hello World!";
            $timeout(function () {
                $scope.myHeader = "Thank you!";
            }, 3000);
        });
    </script>

</body>

</html>
```
### $interval 服务
AngularJS $interval 服务对应了 JS window.setInterval 函数。$interval 访问在指定的周期(以毫秒计)来调用函数或计算表达式。
>例子
```
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <script src="./angular.js"></script>
</head>

<body>

    <div ng-app="myApp" ng-controller="myCtrl">

        <p>现在时间是:</p>
        <h1>{{theTime}}</h1>

    </div>

    <script>
        var app = angular.module('myApp', []);
        app.controller('myCtrl', function ($scope, $interval) {
            $scope.theTime = new Date().toLocaleTimeString();
            $interval(function () {
                $scope.theTime = new Date().toLocaleTimeString();
            }, 1000);
        });
    </script>

</body>

</html>
```
### 创建自定义服务
自定义服务，用于转换16进制数
>例子
```
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <script src="./angular.js"></script>
</head>

<body>
    <div ng-app="myApp" ng-controller="myCtrl">

        <p>137 的16进制是:</p>
        <h1>{{hex}}</h1>

    </div>



    <script>
        var app = angular.module('myApp', []);

        app.service('hexafy', function () {
            this.myFunc = function (x) {
                return x.toString(16);
            }
        });
        app.controller('myCtrl', function ($scope, hexafy) {
            $scope.hex = hexafy.myFunc(137);
        });
    </script>

</body>

</html>
```


## AngularJS 事件
AngularJS 有自己的 HTML 事件指令。

### ng-click 指令
ng-click 指令定义了 AngularJS 点击事件。
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

        <button ng-click="count = count + 1">点 击</button>

        <p>{{ count }}</p>

    </div>
    <script>
        var app = angular.module('myApp', []);
        app.controller('myCtrl', function ($scope) {
            $scope.count = 0;
        });

    </script>

</body>

</html>
```

### 隐藏 HTML 元素
ng-hide 指令用于设置应用部分是否可见。

ng-hide="true" 设置 HTML 元素不可见。

ng-hide="false" 设置 HTML 元素可见。
>例子
```
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <script src="./angular.js"></script>
</head>

<body>

    <div ng-app="myApp" ng-controller="personCtrl">

        <button ng-click="toggle()">隐藏 / 显示</button>

        <p ng-hide="myVar">
            姓: <input type=text ng-model="lastName"><br> 名: <input type=text ng-model="firstName"><br>
            <br> 姓名: {{lastName + firstName }}
        </p>

    </div>

    <script>
        var app = angular.module('myApp', []);
        app.controller('personCtrl', function ($scope) {
            $scope.lastName = "郭";
            $scope.firstName = "啸峰";
            $scope.myVar = false;
            $scope.toggle = function () {
                $scope.myVar = !$scope.myVar;
            }
        });
    </script>

</body>

</html>
```
应用有一个默认属性: $scope.myVar = false;

ng-hide 指令设置 p 元素及两个输入域是否可见， 根据 myVar 的值 (true 或 false) 来设置是否可见。ng-hide="true" 让元素不可见。

toggle() 函数用于切换 myVar 变量的值（true 和 false）。

### 显示 HTML 元素
ng-show 指令可用于设置应用中的一部分是否可见 。

ng-show="false" 可以设置 HTML 元素 不可见。

ng-show="true" 可以以设置 HTML 元素可见。

>例子
```
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <script src="./angular.js"></script>
</head>

<body>

    <div ng-app="myApp" ng-controller="personCtrl">

        <button ng-click="toggle()">隐藏 / 显示</button>

        <p ng-show="myVar">
            姓: <input type=text ng-model="lastName"><br> 名: <input type=text ng-model="firstName"><br>
            <br> 姓名: {{lastName + firstName }}
        </p>

    </div>

    <script>
        var app = angular.module('myApp', []);
        app.controller('personCtrl', function ($scope) {
            $scope.lastName = "郭";
            $scope.firstName = "啸峰";
            $scope.myVar = true;
            $scope.toggle = function () {
                $scope.myVar = !$scope.myVar;
            }
        });
    </script>

</body>

</html>
```


## AngularJS 控制器
AngularJS 控制器 控制 AngularJS 应用程序的数据。
 AngularJS 控制器是常规的 JavaScript 对象。

### AngularJS 控制器
AngularJS 应用程序被控制器控制。
ng-controller 指令定义了应用程序控制器。
控制器是 JavaScript 对象，由标准的 JavaScript 对象的构造函数创建。
>例子
```
<!DOCTYPE html>
<html>
<meta charset="utf-8">
<script src="./angular.js"></script>

<body>

    <div ng-app="myApp" ng-controller="myCtrl">
        姓: <input type="text" ng-model="lastName"><br> 名: <input type="text" ng-model="firstName"><br>
        <br> 姓名: {{lastName + firstName}}

    </div>

    <script>
        var app = angular.module('myApp', []);
        app.controller('myCtrl', function ($scope) {
            $scope.lastName = "郭";
            $scope.firstName = "啸峰";

        });
    </script>

</body>

</html>
```
* AngularJS 应用程序由 ng-app 定义。应用程序在 <div> 内运行。
* ng-controller="myCtrl" 属性是一个 AngularJS 指令。用于定义一个控制器。
* myCtrl 函数是一个 JavaScript 函数。
* AngularJS 使用$scope 对象来调用控制器。
* 在 AngularJS 中， $scope 是一个应用对象(属于应用变量和函数)。
* 控制器的 $scope （相当于作用域、控制范围）用来保存AngularJS Model(模型)的对象。
* 控制器在作用域中创建了两个属性 (firstName 和 lastName)。
* ng-model 指令绑定输入域到控制器的属性（firstName 和 lastName）。

### 控制器方法
控制器也可以有方法（变量和函数）
>例子
```
<!DOCTYPE html>
<html>
<meta charset="utf-8">
<script src="./angular.js"></script>

<body>

    <div ng-app="myApp" ng-controller="myCtrl">
        姓: <input type="text" ng-model="lastName"><br> 名: <input type="text" ng-model="firstName"><br>
        <br> 姓名: {{fullname()}}

    </div>

    <script>
        var app = angular.module('myApp', []);
        app.controller('myCtrl', function ($scope) {
            $scope.lastName = "郭";
            $scope.firstName = "啸峰";
            $scope.fullname = function () {
                return $scope.lastName + $scope.firstName;
            }

        });
    </script>

</body>

</html>
```

### 外部文件中的控制器
在大型的应用程序中，通常是把控制器存储在外部文件中。只需要把 script 标签中的代码复制相应的外部文件中即可。
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
        姓: <input type="text" ng-model="lastName"><br> 名: <input type="text" ng-model="firstName"><br>

        <br> 姓名: {{lastName + firstName }}

    </div>

    <script src="personController.js"></script>

</body>

</html>
```
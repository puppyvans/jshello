## AngularJS 指令
* AngularJS 通过被称为指令的新属性来扩展HTML。
* AngularJS 通过内置的指令来为应用添加功能。
* AngularJS 允许自定义指令。

### AngularJS 指令
AngularJS 指令是扩展的HTML属性，带有前缀ng-。
* ng-app 指令初始化一个AngularJS 应用程序。
* ng-init 指令初始化应用程序数据。
* ng-model 指令把元素值（比如输入域的值）绑定到应用程序。
* ng-repeat 指令对于集合中（数组中）的每个项会 克隆一次 HTML 元素。

完整指令内容可以参考该网址：http://www.runoob.com/angularjs/angularjs-reference.html

### 数据绑定
AngularJS 中的数据绑定，同步了 AngularJS 表达式与 AngularJS 数据。
表达式是通过指令 ng-model="" 进行同步。
>例子
```
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <script src="./angular.js"></script>
</head>

<body>

    <div ng-app="" ng-init="Name='郭啸峰'">

        <p>在输入框中输入:</p>
        <p>姓名: <input type="text" ng-model="Name"></p>
        <p>你输入的内容是: {{ Name }}</p>

    </div>

</body>

</html>
```

### 重复HTML元素
ng-repeat 指令会重复一个 HTML 元素，也可以用在一个对象数组上
>例子
```
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <script src="./angular.js"></script>
</head>

<body>

    <div data-ng-app="" data-ng-init="names=['Tom','John','Alice']">
        <p>使用 ng-repeat 来循环数组</p>
        <ul>
            <li data-ng-repeat="x in names">
                {{ x }}
            </li>
        </ul>
    </div>

</body>

</html>
```
>例子
```
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <script src="./angular.js"></script>
</head>

<body>

    <div ng-app="" ng-init="names=[
{name:'Tom',country:'USA'},
{name:'John',country:'England'},
{name:'Alice',country:'Canada'}]">

        <p>重复对象数组:</p>
        <ul>
            <li ng-repeat="x in names">
                {{ x.name + ' from ' + x.country }}</li>
        </ul>

    </div>

</body>

</html>
```

### 创建自定义的指令
除了 AngularJS 内置的指令外，我们还可以创建自定义指令。
可以使用 .directive 函数来添加自定义的指令。
要调用自定义指令，HTML 元素上需要添加自定义指令名。
通过以下方式来调用指令：
* 元素名
* 属性
* 类名
* 注释


#### 元素名
```
<puppy-directive></puppy-directive>
```
>例子
```
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <script src="./angular.js"></script>
</head>

<body ng-app="myApp">
    <puppy-directive></puppy-directive>
    <script>
        var app = angular.module("myApp", []);
        app.directive("puppyDirective", function () {
            return {
                template: "<h1>通过元素名自定义指令</h1>"
            };
        });
    </script>

</body>

</html>
```

#### 属性
```
<div puppy-directive></div>
```
>例子
```
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <script src="./angular.js"></script>
</head>

<body ng-app="myApp">
    <div puppy-directive></div>
    <script>
        var app = angular.module("myApp", []);
        app.directive("puppyDirective", function () {
            return {
                template: "<h1>通过属性自定义指令</h1>"
            };
        });
    </script>

</body>

</html>
```

#### 类名
```
<div class="puppy-directive"></div>
```
>例子
```
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <script src="./angular.js"></script>
</head>

<body ng-app="myApp">
    <div class="puppy-directive"></div>
    <script>
        var app = angular.module("myApp", []);
        app.directive("puppyDirective", function () {
            return {
                restrict: "C",
                template: "<h1>通过类名自定义指令</h1>"
            };
        });
    </script>
    <p>必须设置 <b>restrict</b> 的值为 "C" 才能通过类名来调用指令。</p>
</body>

</html>
```

#### 注释
```
<!-- directive:puppy-directive -->
```

>例子
```
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <script src="./angular.js"></script>
</head>

<body ng-app="myApp">
    <!-- directive: puppy-directive -->
    <script>
        var app = angular.module("myApp", []);
        app.directive("puppyDirective", function () {
            return {
                restrict: "M",
                replace: true,
                template: "<h1>通过注释自定义指令</h1>"
            };
        });
    </script>
    <p>必须设置 <b>restrict</b> 的值为 "M" 才能通过类名来调用指令。</p>
    <p>需要在该实例添加 <b>replace</b> 属性, 否则评论是不可见的。</p>
</body>

</html>
```

### 限制使用
可以限制你的指令只能通过特定的方式来调用。

restrict 值可以是以下几种:
* E 作为元素名使用
* A 作为属性使用
* C 作为类名使用
* M 作为注释使用

restrict 默认值为 EA, 即可以通过元素名和属性名来调用指令。

### AngularJS 模型
ng-model 指令用于绑定应用程序数据到 HTML 控制器(input, select, textarea)的值。

#### 双向绑定
双向绑定，在修改输入域的值时， AngularJS 属性的值也将修改
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
        名字: <input ng-model="name">
        <h1>输入的内容: {{name}}</h1>
    </div>

    <script>
        var app = angular.module('myApp', []);
        app.controller('myCtrl', function ($scope) {
            $scope.name = "郭啸峰";
        });

    </script>

    <p>修改输入内容，也会相应修改。</p>

</body>

</html>
```

#### 验证用户输入
>例子
```
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <script src="./angular.js"></script>
</head>

<body>

    <form ng-app="" name="myForm">
        Email:
        <input type="email" name="myAddress" ng-model="text">
        <span ng-show="myForm.myAddress.$error.email">不是一个有效的邮箱地址</span>
    </form>

    <p>在输入框中输入邮箱地址，如果不是一个合法的邮箱地址，会弹出提示信息。</p>

</body>

</html>
```

ng-model 指令根据表单域的状态添加/移除以下类：
* ng-empty
* ng-not-empty
* ng-touched
* ng-untouched
* ng-valid
* ng-invalid
* ng-dirty
* ng-pending
* ng-pristine

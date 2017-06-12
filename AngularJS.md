# Angular
## AngularJS的介绍
AngularJS是一个JavaScript框架。它可通过script标签添加到HTML页面。
AngularJS通过指令扩展了HTML，且通过表达式绑定数据到HTML。

### AngularJS 是一个 JavaScript 框架
AngularJS 是一个 JavaScript 框架。它是一个以 JavaScript 编写的库。
AngularJS 是以一个 JavaScript 文件形式发布的，可通过 script 标签添加到网页中:

`<  script src="./js-bighomework.js"></script>`
### AngularJS 扩展了 HTML
* AngularJS 通过 ng-directives 扩展了 HTML。
* ng-app 指令定义一个 AngularJS 应用程序。
* ng-model 指令把元素值（比如输入域的值）绑定到应用程序。
* ng-bind 指令把应用程序数据绑定到 HTML 视图。

>例子
```
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<script src="./js-bighomework.js"></script>
</head>
<body>

<div ng-app=""> //ng-app 指令告诉 AngularJS，<div> 元素是 AngularJS 应用程序 的"所有者"。
  <p>名字 : <input type="text" ng-model="name"></p>   //ng-model 指令把输入域的值绑定到应用程序变量 name。
  <h1>Hello {{name}}</h1>   //ng-bind 指令把应用程序数据绑定到HTML视图。
</div>

</body>
</html>
```
## AngularJS 表达式
* AngularJS 表达式写在双大括号内：{{ expression }}。
* AngularJS 表达式把数据绑定到 HTML，这与 ng-bind 指令有异曲同工之妙。
* AngularJS 将在表达式书写的位置"输出"数据。
* AngularJS 表达式 很像 JavaScript 表达式：它们可以包含文字、运算符和变量。

### AngularJS 数字
>例子
```
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <script src="./angular.js"></script>
</head>

<body>

    <div ng-app>
        <p>第一个表达式: {{ 2 + 2 }}</p>
    </div>

</body>

</html>
```

### AngularJS 字符串
>例子
```
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <script src="angular.js"></script>
</head>

<body>

    <div ng-app="" ng-init="lastname='郭';firstname='啸峰'">

        <p>姓名: {{ lastname + firstname }}</p>

    </div>

</body>

</html>
```

### AngularJS 对象
>例子
```
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <script src="./angular.js"></script>
</head>

<body>

    <div ng-app="" ng-init="person={lastname:'郭',firstname:'啸峰'}">

        <p>姓为 {{ person.lastname }}</p>

    </div>

</body>

</html>
```
### AngularJS 数组
>例子
```
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <script src="./angular.js"></script>
</head>

<body>

    <div ng-app="" ng-init="points=[1,3,5,7,9]">

        <p>第三个值为 {{ points[2] }}</p>

    </div>

</body>

</html>
```
### AngularJS 表达式 与 JavaScript 表达式
* 类似于JavaScript表达式，AngularJS表达式可以包含字母，操作符，变量。
* 与JavaScript表达式不同，AngularJS表达式可以写在 HTML 中。
* 与JavaScript表达式不同，AngularJS表达式不支持条件判断，循环及异常。
* 与JavaScript表达式不同，AngularJS表达式支持过滤器。


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


元素名
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
                template: "<h1>自定义指令</h1>"
            };
        });
    </script>

</body>

</html>
```

属性
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

类名
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

注释
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


## AngularJS 作用域
Scope(作用域) 是应用在 HTML (视图) 和 JavaScript (控制器)之间的纽带。
Scope 是一个对象，有可用的方法和属性。
Scope 可应用在视图和控制器上

### 如何使用Scope
当你在 AngularJS 创建控制器时，你可以将 $scope 对象当作一个参数传递:当在控制器中添加 $scope 对象时，视图 (HTML) 可以获取了这些属性。
视图中，你不需要添加 $scope 前缀, 只需要添加属性名即可。
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

        <h1>{{name}}</h1>

    </div>

    <script>
        var app = angular.module('myApp', []);
        app.controller('myCtrl', function ($scope) {
            $scope.name = "郭啸峰";
        });
    </script>

    <p>控制器中创建一个属性名 "name"，对应了视图中使用 {{ }} 中的名称。</p>

</body>

</html>
```

### Scope 概述
AngularJS 应用组成如下：
* View(视图), 即 HTML。
* Model(模型), 当前视图中可用的数据。
* Controller(控制器), 即 JavaScript 函数，可以添加或修改属性。

scope 是模型。scope 是一个 JavaScript 对象，带有属性和方法，这些属性和方法可以在视图和控制器中使用。
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
        <input ng-model="name">
        <h1>{{greeting}}</h1>
        <button ng-click='sayHello()'>点击</button>
    </div>

    <script>
        var app = angular.module('myApp', []);
        app.controller('myCtrl', function ($scope) {
            $scope.name = "郭啸峰";
            $scope.sayHello = function () {
                $scope.greeting = 'Hello ' + $scope.name + '!';
            };
        });

    </script>

    <p>当你修改输入框中的值时，会影响到模型(model),当然也会影响到控制器对应的属性值。</p>

</body>

</html>
```

### Scope 作用范围
#### 根作用域
所有的应用都有一个 $rootScope，它可以作用在 ng-app 指令包含的所有 HTML 元素中。
$rootScope 可作用于整个应用中。是各个 controller 中 scope 的桥梁。用 rootscope 定义的值，可以在各个 controller 中使用。
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

        <h1>姓氏为 {{lastname}} 家族成员:</h1>

        <ul>
            <li ng-repeat="x in names">{{x}} {{lastname}}</li>
        </ul>

    </div>

    <script>
        var app = angular.module('myApp', []);

        app.controller('myCtrl', function ($scope, $rootScope) {
            $scope.names = ["Tom", "John", "Alice"];
            $rootScope.lastname = "Lewis";
        });

    </script>



</body>

</html>
```

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

## AngularJS 选择框
AngularJS 可以使用数组或对象创建一个下拉列表选项。

### 使用 ng-options 创建选择框
在 AngularJS 中我们可以使用 ng-option 指令来创建一个下拉列表，列表项通过对象和数组循环输出。
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

<p>选择网站:</p>

<select ng-model="selectedSite" ng-options="x.site for x in sites">
</select>

<h1>你选择的是: {{selectedSite.site}}</h1>
<p>网址为: {{selectedSite.url}}</p>

</div>

<script>
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
   $scope.sites = [
	    {site : "Google", url : "http://www.google.com"},
	    {site : "Baidu", url : "http://www.baidu.com"},
	    {site : "Taobao", url : "http://www.taobao.com"}
	];
});
</script>


</body>
</html>

```

### ng-options 与 ng-repeat 区别
ng-repeat 指令是通过数组来循环 HTML 代码来创建下拉列表，但 ng-options 指令更适合创建下拉列表，它有以下优势：

使用 ng-options 的选项的一个对象， ng-repeat 是一个字符串。

当选择值是一个对象时，我们就可以获取更多信息，应用也更灵活。


### 数据源为对象
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

        <p>选择一辆车的品牌:</p>

        <select ng-model="selectedCar" ng-options="y.brand for (x, y) in cars"></select>
        <p>你选择的是: {{selectedCar.brand}}</p>
        <p>型号为: {{selectedCar.model}}</p>
        <p>颜色为: {{selectedCar.color}}</p>

    </div>

    <script>
        var app = angular.module('myApp', []);
        app.controller('myCtrl', function ($scope) {
            $scope.cars = {
                car01: { brand: "Audi", model: "R8", color: "Black" },
                car02: { brand: "Mercedes Benz", model: "AMG", color: "Green" },
                car03: { brand: "BMW", model: "i8", color: "white" }
            }
        });

    </script>

</body>

</html>
```

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

# Angular
## AngularJS的介绍
AngularJS是一个JavaScript框架。它可通过script标签添加到HTML页面。
AngularJS通过指令扩展了HTML，且通过表达式绑定数据到HTML。

### AngularJS 是一个 JavaScript 框架
AngularJS 是一个 JavaScript 框架。它是一个以 JavaScript 编写的库。
AngularJS 是以一个 JavaScript 文件形式发布的，可通过 script 标签添加到网页中:

`<  script src="./js-bighomework.js"></script>`
### AngularJS 扩展了 HTML
* AngularJS 通过 ng-directives 扩展了 HTML。
* ng-app 指令定义一个 AngularJS 应用程序。
* ng-model 指令把元素值（比如输入域的值）绑定到应用程序。
* ng-bind 指令把应用程序数据绑定到 HTML 视图。

>例子
```
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<script src="./js-bighomework.js"></script>
</head>
<body>

<div ng-app=""> //ng-app 指令告诉 AngularJS，<div> 元素是 AngularJS 应用程序 的"所有者"。
  <p>名字 : <input type="text" ng-model="name"></p>   //ng-model 指令把输入域的值绑定到应用程序变量 name。
  <h1>Hello {{name}}</h1>   //ng-bind 指令把应用程序数据绑定到HTML视图。
</div>

</body>
</html>
```
## AngularJS 表达式
* AngularJS 表达式写在双大括号内：{{ expression }}。
* AngularJS 表达式把数据绑定到 HTML，这与 ng-bind 指令有异曲同工之妙。
* AngularJS 将在表达式书写的位置"输出"数据。
* AngularJS 表达式 很像 JavaScript 表达式：它们可以包含文字、运算符和变量。

### AngularJS 数字
>例子
```
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <script src="./angular.js"></script>
</head>

<body>

    <div ng-app>
        <p>第一个表达式: {{ 2 + 2 }}</p>
    </div>

</body>

</html>
```

### AngularJS 字符串
>例子
```
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <script src="angular.js"></script>
</head>

<body>

    <div ng-app="" ng-init="lastname='郭';firstname='啸峰'">

        <p>姓名: {{ lastname + firstname }}</p>

    </div>

</body>

</html>
```

### AngularJS 对象
>例子
```
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <script src="./angular.js"></script>
</head>

<body>

    <div ng-app="" ng-init="person={lastname:'郭',firstname:'啸峰'}">

        <p>姓为 {{ person.lastname }}</p>

    </div>

</body>

</html>
```
### AngularJS 数组
>例子
```
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <script src="./angular.js"></script>
</head>

<body>

    <div ng-app="" ng-init="points=[1,3,5,7,9]">

        <p>第三个值为 {{ points[2] }}</p>

    </div>

</body>

</html>
```
### AngularJS 表达式 与 JavaScript 表达式
* 类似于JavaScript表达式，AngularJS表达式可以包含字母，操作符，变量。
* 与JavaScript表达式不同，AngularJS表达式可以写在 HTML 中。
* 与JavaScript表达式不同，AngularJS表达式不支持条件判断，循环及异常。
* 与JavaScript表达式不同，AngularJS表达式支持过滤器。


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


元素名
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
                template: "<h1>自定义指令</h1>"
            };
        });
    </script>

</body>

</html>
```

属性
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

类名
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

注释
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


## AngularJS 作用域
Scope(作用域) 是应用在 HTML (视图) 和 JavaScript (控制器)之间的纽带。
Scope 是一个对象，有可用的方法和属性。
Scope 可应用在视图和控制器上

### 如何使用Scope
当你在 AngularJS 创建控制器时，你可以将 $scope 对象当作一个参数传递:当在控制器中添加 $scope 对象时，视图 (HTML) 可以获取了这些属性。
视图中，你不需要添加 $scope 前缀, 只需要添加属性名即可。
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

        <h1>{{name}}</h1>

    </div>

    <script>
        var app = angular.module('myApp', []);
        app.controller('myCtrl', function ($scope) {
            $scope.name = "郭啸峰";
        });
    </script>

    <p>控制器中创建一个属性名 "name"，对应了视图中使用 {{ }} 中的名称。</p>

</body>

</html>
```

### Scope 概述
AngularJS 应用组成如下：
* View(视图), 即 HTML。
* Model(模型), 当前视图中可用的数据。
* Controller(控制器), 即 JavaScript 函数，可以添加或修改属性。

scope 是模型。scope 是一个 JavaScript 对象，带有属性和方法，这些属性和方法可以在视图和控制器中使用。
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
        <input ng-model="name">
        <h1>{{greeting}}</h1>
        <button ng-click='sayHello()'>点击</button>
    </div>

    <script>
        var app = angular.module('myApp', []);
        app.controller('myCtrl', function ($scope) {
            $scope.name = "郭啸峰";
            $scope.sayHello = function () {
                $scope.greeting = 'Hello ' + $scope.name + '!';
            };
        });

    </script>

    <p>当你修改输入框中的值时，会影响到模型(model),当然也会影响到控制器对应的属性值。</p>

</body>

</html>
```

### Scope 作用范围
#### 根作用域
所有的应用都有一个 $rootScope，它可以作用在 ng-app 指令包含的所有 HTML 元素中。
$rootScope 可作用于整个应用中。是各个 controller 中 scope 的桥梁。用 rootscope 定义的值，可以在各个 controller 中使用。
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

        <h1>姓氏为 {{lastname}} 家族成员:</h1>

        <ul>
            <li ng-repeat="x in names">{{x}} {{lastname}}</li>
        </ul>

    </div>

    <script>
        var app = angular.module('myApp', []);

        app.controller('myCtrl', function ($scope, $rootScope) {
            $scope.names = ["Tom", "John", "Alice"];
            $rootScope.lastname = "Lewis";
        });

    </script>



</body>

</html>
```

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

## AngularJS 选择框
AngularJS 可以使用数组或对象创建一个下拉列表选项。

### 使用 ng-options 创建选择框
在 AngularJS 中我们可以使用 ng-option 指令来创建一个下拉列表，列表项通过对象和数组循环输出。
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

<p>选择网站:</p>

<select ng-model="selectedSite" ng-options="x.site for x in sites">
</select>

<h1>你选择的是: {{selectedSite.site}}</h1>
<p>网址为: {{selectedSite.url}}</p>

</div>

<script>
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
   $scope.sites = [
	    {site : "Google", url : "http://www.google.com"},
	    {site : "Baidu", url : "http://www.baidu.com"},
	    {site : "Taobao", url : "http://www.taobao.com"}
	];
});
</script>


</body>
</html>

```

### ng-options 与 ng-repeat 区别
ng-repeat 指令是通过数组来循环 HTML 代码来创建下拉列表，但 ng-options 指令更适合创建下拉列表，它有以下优势：

使用 ng-options 的选项的一个对象， ng-repeat 是一个字符串。

当选择值是一个对象时，我们就可以获取更多信息，应用也更灵活。


### 数据源为对象
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

        <p>选择一辆车的品牌:</p>

        <select ng-model="selectedCar" ng-options="y.brand for (x, y) in cars"></select>
        <p>你选择的是: {{selectedCar.brand}}</p>
        <p>型号为: {{selectedCar.model}}</p>
        <p>颜色为: {{selectedCar.color}}</p>

    </div>

    <script>
        var app = angular.module('myApp', []);
        app.controller('myCtrl', function ($scope) {
            $scope.cars = {
                car01: { brand: "Audi", model: "R8", color: "Black" },
                car02: { brand: "Mercedes Benz", model: "AMG", color: "Green" },
                car03: { brand: "BMW", model: "i8", color: "white" }
            }
        });

    </script>

</body>

</html>
```

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


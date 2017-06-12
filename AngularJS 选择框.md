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
		<select ng-model="selectedSite" ng-options="x.site for x in sites"></select>
		<h1>你选择的是: {{selectedSite.site}}</h1>
		<p>网址为: {{selectedSite.url}}</p>

	</div>

	<script>
		var app = angular.module('myApp', []);
		app.controller('myCtrl', function ($scope) {
			$scope.sites = [
				{ site: "Google", url: "http://www.google.com" },
				{ site: "Baidu", url: "http://www.baidu.com" },
				{ site: "Taobao", url: "http://www.taobao.com" }
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

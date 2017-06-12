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
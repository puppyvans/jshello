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


### AngularJS 表达式 与 JavaScript 表达式
* 类似于JavaScript表达式，AngularJS表达式可以包含字母，操作符，变量。
* 与JavaScript表达式不同，AngularJS表达式可以写在 HTML 中。
* 与JavaScript表达式不同，AngularJS表达式不支持条件判断，循环及异常。
* 与JavaScript表达式不同，AngularJS表达式支持过滤器。

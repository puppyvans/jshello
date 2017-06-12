## AngularJS 表单
AngularJS 表单是输入控件的集合。

### HTML 控件
以下 HTML input 元素被称为 HTML 控件:
* input 元素
* select 元素
* button 元素
* textarea 元素

### 数据绑定
Input 控件使用 ng-model 指令来实现数据绑定。

### 复选框
checkbox 的值为 true 或 false，可以使用 ng-model 指令绑定，它的值可以用于应用中。
>例子
```
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <script src="./angular.js"></script>
</head>

<body>

    <div ng-app="">
        <form>
            选中复选框，显示标题:
            <input type="checkbox" ng-model="myVar"><br> 选中复选框，显示内容:
            <input type="checkbox" ng-model="myVar2">
        </form>
        <h1 ng-show="myVar">Hello</h1>
        <h1 ng-show="myVar2">World</h1>
    </div>

</body>

</html>
```

### 单选框
单选框使用同一个 ng-model ，可以有不同的值，但只有被选中的单选按钮的值会被使用。
>例子
```
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <script src="./angular.js"></script>
</head>

<body ng-app="">

  <form>
    选择一个选项:
    <input type="radio" ng-model="myVar" value="dogs">Dogs
    <input type="radio" ng-model="myVar" value="cats">Cats
    <input type="radio" ng-model="myVar" value="pigs">Pigs
  </form>

  <div ng-switch="myVar">
    <div ng-switch-when="dogs">
      <h1>Dogs</h1>
      <p>Welcome to a world of dogs.</p>
    </div>
    <div ng-switch-when="cats">
      <h1>Cats</h1>
      <p>Welcome to a world of cats.</p>
    </div>
    <div ng-switch-when="pigs">
      <h1>Pigs</h1>
      <p>Welcome to a world of pigs.</p>
    </div>
  </div>

</body>

</html>
```

### 下拉菜单
使用 ng-model 指令可以将下拉菜单绑定到你的应用中
>例子
```
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <script src="./angular.js"></script>
</head>

<body ng-app="">

    <form>
        选择一个选项:
        <select ng-model="myVar">
    <option value="">
    <option value="dogs">Dogs
    <option value="cats">Cats
    <option value="pigs">Pigs
  </select>
    </form>

    <div ng-switch="myVar">
        <div ng-switch-when="dogs">
            <h1>Dogs</h1>
            <p>Welcome to a world of dogs.</p>
        </div>
        <div ng-switch-when="cats">
            <h1>Cats</h1>
            <p>Welcome to a world of cats.</p>
        </div>
        <div ng-switch-when="pigs">
            <h1>Pigs</h1>
            <p>Welcome to a world of pigs.</p>
        </div>
    </div>


</body>

</html>
```

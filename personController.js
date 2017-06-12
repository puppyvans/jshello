angular.module('myApp', []).controller('personCtrl', function ($scope) {
    $scope.firstName = "啸峰",
        $scope.lastName = "郭",
        $scope.fullName = function () {
            return $scope.lastName + $scope.firstName;
        }
});
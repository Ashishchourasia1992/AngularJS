var app = angular.module("directives", []);

app.controller("AppCtrl", ['$scope', function ($scope) {
    var _SELECT = 'Select';

    $scope.selectedValue = _SELECT;
    $scope.searchTerm = '';

    var employeeList = [
        { id: 101, Name: "Rahul", isSelected: false },
        { id: 102, Name: "Sudan", isSelected: false },
        { id: 103, Name: "Mayank", isSelected: false },
        { id: 104, Name: "Anuraj", isSelected: false }
    ];

    $scope.filteredEmployeeList = employeeList;

    $scope.selectedEmployee = function (employee) {
        $scope.filteredEmployeeList.forEach(function(emp) { emp.isSelected = false });
        $scope.selectedValue = employee.Name;
        employee.isSelected = true;
    }
}]);

app.directive("customSelect", function () {
    return {
        restrict: 'A',
        template: '<div class="dropdown dropdown-custom">'+
        '<button class="btn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +
        '{{selectedValue}}'+
        '</button>' +
        '<div class="dropdown-menu dropdown-menu-custom" aria-labelledby="dropdownMenuButton">' +
        '<input type="text" class="form-control" name="searchedEmp" placeholder="Search" aria-label="name" aria-describedby="basic-addon1" ng-model="searchTerm" />' +
        '<a class="dropdown-item" ng-repeat="employee in filteredEmployeeList | startsWithSearchedTerm: searchTerm" ng-click="selectedEmployee(employee);$event.stopPropagation();"' +
        '<span ng-class="{\'dropdown-item-tick-span\': employee.isSelected}">{{ employee.Name }}</span>'+
        '</a>' +
        '</div>' +
        '</div>'
    }
});

app.filter('startsWithSearchedTerm', function(){
    return function(items, words){
        var filtered = [];
        var wordsMatched = new RegExp(words, 'i');
        items.forEach(function(item){
            if (wordsMatched.test(item.Name.substring(0, words.length))) { filtered.push(item); }
        });

        return filtered;
    };
});
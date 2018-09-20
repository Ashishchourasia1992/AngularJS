// base object
var emp = function Employee(name, age, city) {
    debugger;
    this.employeeName = name;
    this.employeeAge = age;
    this.employeeCity = city;
}

emp.prototype.getEmployeeDetails = function() {
    debugger;
    return this.employeeName + " " + this.employeeAge + " " + this.employeeCity;
}

//derived object
function PermanentEmployee(annualSalary) {
    debugger;
    this.employeeName = "Ashish";
    this.annualSalary = annualSalary;
}

debugger;
// inheritence established
PermanentEmployee.prototype = new emp("ashish", 26, "blore");
PermanentEmployee.prototype = new emp("pooja", 25, "abu");

//var employee = new emp("ashish", 26, "blore");

var pe = new PermanentEmployee(1000);

console.dir(pe.getEmployeeDetails());
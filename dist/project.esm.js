function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      return function () {
        if (i >= o.length) return {
          done: true
        };
        return {
          done: false,
          value: o[i++]
        };
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  it = o[Symbol.iterator]();
  return it.next.bind(it);
}

var Entreprise = /*#__PURE__*/function () {
  function Entreprise(name, employees, earnings) {
    this.employees = [];
    this.name = name;
    this.employees = employees;
    this.notify();
    this.earnings = earnings;
  }

  var _proto = Entreprise.prototype;

  _proto.getName = function getName() {
    return this.name;
  };

  _proto.getEmployees = function getEmployees() {
    return this.employees;
  };

  _proto.getEarnings = function getEarnings() {
    return this.earnings;
  };

  _proto.setName = function setName(name) {
    this.name = name;
  };

  _proto.setEmployees = function setEmployees(employees) {
    this.employees = employees;
  };

  _proto.setEarnings = function setEarnings(earnings) {
    this.earnings = earnings;
  };

  _proto.greet = function greet() {
    console.log("The " + this.name + " has " + this.employees.length + " employees and earn " + this.earnings);
  };

  _proto.addEmployee = function addEmployee(employee) {
    this.employees.push(employee);
    this.notify();
  };

  _proto.removingEmployee = function removingEmployee(employee) {
    var index = this.employees.findIndex(function (employee_in) {
      return employee_in.getLastname() === employee.getLastname() && employee_in.getFirstname() === employee.getFirstname();
    });
    console.log("firing employee " + employee.getFirstname() + " " + employee.getLastname());
    this.employees.splice(index, 1);
    this.notify();
  };

  _proto.attach = function attach(employee) {
    this.employees.push(employee);
  };

  _proto.detach = function detach(employee) {
    var index = this.employees.findIndex(function (employee_in) {
      return employee_in.getLastname() === employee.getLastname() && employee_in.getFirstname() === employee.getFirstname();
    });
    this.employees.splice(index, 1);
  };

  _proto.notify = function notify() {
    for (var _iterator = _createForOfIteratorHelperLoose(this.employees), _step; !(_step = _iterator()).done;) {
      var employee = _step.value;
      console.log("Subject : Notifying observer " + employee.getFirstname() + " " + employee.getLastname() + " ...");
      employee.update();
    }
  };

  return Entreprise;
}();

var Person = /*#__PURE__*/function () {
  function Person(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  var _proto = Person.prototype;

  _proto.getFirstname = function getFirstname() {
    return this.firstname;
  };

  _proto.getLastname = function getLastname() {
    return this.lastname;
  };

  _proto.setFirstname = function setFirstname(firstname) {
    this.firstname = firstname;
  };

  _proto.setLastname = function setLastname(lastname) {
    this.lastname = lastname;
  };

  _proto.greet = function greet() {
    console.log("hello i am " + this.firstname + " " + this.lastname);
  };

  return Person;
}();
var Employee = /*#__PURE__*/function (_Person) {
  _inheritsLoose(Employee, _Person);

  function Employee(entreprise, firstname, lastname, job, wage) {
    var _this;

    _this = _Person.call(this, firstname, lastname) || this;
    _this.entreprise = entreprise;
    _this.job = job;
    _this.wage = wage;
    return _this;
  }

  var _proto2 = Employee.prototype;

  _proto2.getJob = function getJob() {
    return this.job;
  };

  _proto2.getWage = function getWage() {
    return this.wage;
  };

  _proto2.getEntreprise = function getEntreprise() {
    return this.entreprise;
  };

  _proto2.setFirstname = function setFirstname(firstname) {
    this.firstname = firstname;
  };

  _proto2.setLastname = function setLastname(lastname) {
    this.lastname = lastname;
  };

  _proto2.greet = function greet() {
    _Person.prototype.greet.call(this);

    console.log("i work as " + this.job + " with a wage of " + this.wage);
  };

  _proto2.update = function update() {
    console.log("company employees are growing ... " + this.entreprise.getEmployees().length);
  };

  return Employee;
}(Person);

// import {Worker} from './models/Person';
//   if ('development' === process.env.NODE_ENV) {
//     console.log('boop');
//   }
//   return a + b;
// };
//Observer Pattern implementation using Entreprise (observable) and employees as observers :

var colaCompany = /*#__PURE__*/new Entreprise("coca cola company", [], 248900); // const employees: Employee[] = [];

var trump = /*#__PURE__*/new Employee(colaCompany, "Donald", "Trump", "CEO", 25000);
trump.greet();
colaCompany.addEmployee(trump);
var hillary = /*#__PURE__*/new Employee(colaCompany, "hillary", "Clinton", "vice-presidente", 21000);
hillary.greet();
colaCompany.addEmployee(hillary);
var fabieng = /*#__PURE__*/new Employee(colaCompany, "fabieng", "shit", "trainee", 500);
fabieng.greet();
colaCompany.addEmployee(fabieng);
colaCompany.removingEmployee(hillary); // Pattern to set attribute using a single method taking a unique object parameter 
// let louis = new Worker('Since', 'louis', 18, 'General Electric','Advanced Visualization', 'engineer', 2765);
// let payload = {salary: 3485, firstname: 'Manuel'};
// louis.updateFields(payload)
// console.log(louis.describe());
//# sourceMappingURL=project.esm.js.map

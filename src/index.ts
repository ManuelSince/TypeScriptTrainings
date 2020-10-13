// import {Worker} from './models/Person';
import { Entreprise } from './models/Entreprise';
import { Employee } from './models/Employee'

// export const sum = (a: number, b: number) => {
//   if ('development' === process.env.NODE_ENV) {
//     console.log('boop');
//   }
//   return a + b;
// };

//Observer Pattern implementation using Entreprise (observable) and employees as observers :

const colaCompany: Entreprise = new Entreprise("coca cola company", [], 248900);
// const employees: Employee[] = [];
const trump = new Employee(colaCompany, "Donald", "Trump", "CEO", 25000);
trump.greet();
colaCompany.addEmployee(trump);
const hillary = new Employee(colaCompany, "hillary", "Clinton", "vice-presidente", 21000);
hillary.greet();
colaCompany.addEmployee(hillary);
const fabieng = new Employee(colaCompany, "fabieng", "shit", "trainee", 500);
fabieng.greet();
colaCompany.addEmployee(fabieng);
colaCompany.removingEmployee(hillary)

// Pattern to set attribute using a single method taking a unique object parameter :

// let louis = new Worker('Since', 'louis', 18, 'General Electric','Advanced Visualization', 'engineer', 2765);
// let payload = {salary: 3485, firstname: 'Manuel'};
// louis.updateFields(payload)
// console.log(louis.describe());


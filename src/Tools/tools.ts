import { MinimumSalary } from '../models/MinimumSalary';
const MinimumeSalary = new MinimumSalary();
MinimumeSalary
class Validator{

    constructor(){

    }
    checkName(word: string): boolean  {
        const reg = new RegExp("^[a-zéèçà]{2,50}(-| )?([a-zéèçà]{2,50})?$", "gmi");
        return reg.test(word);
    };
    checkAge(age: number): boolean {
        if(age >= 18){ return true;}
        else{ return false }
    };
    checkSalary(salary: number) : boolean {
        return salary < 1200
    };
    errorHandling(message: string): Error {
        return new Error(message);
    };
}
export { Validator }

declare class Validator {
    constructor();
    checkName(word: string): boolean;
    checkAge(age: number): boolean;
    checkSalary(salary: number): boolean;
    errorHandling(message: string): Error;
}
export { Validator };

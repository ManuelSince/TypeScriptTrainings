import { IObservable } from '../interfaces/IObserverPattern';
import { Employee } from './Employee'

export class Entreprise implements IObservable{
    private name: string;
    private employees: Employee[] = [];
    private earnings: number;
    constructor (name: string, employees: Employee[], earnings: number) {
        this.name = name;
        this.employees = employees;
        this.notify();
        this.earnings = earnings;
    }
    public getName (): string { return this.name}
    public getEmployees (): Employee[] { return this.employees }
    public getEarnings (): number { return this.earnings }
    public setName (name: string): void { this.name = name }
    public setEmployees (employees: Employee[]): void { this.employees = employees}
    public setEarnings (earnings: number): void { this.earnings = earnings }
    public greet () { console.log(`The ${this.name} has ${this.employees.length} employees and earn ${this.earnings}`)};
    public addEmployee (employee: Employee) {
        this.employees.push(employee);
        this.notify();
    }
    public removingEmployee (employee: Employee) {
        const index = this.employees.findIndex(employee_in => employee_in.getLastname() === employee.getLastname() && employee_in.getFirstname() === employee.getFirstname());
        console.log(`firing employee ${employee.getFirstname()} ${employee.getLastname()}`);
        this.employees.splice(index, 1);
        this.notify();
    }
    public attach (employee: Employee) { this.employees.push(employee)}
    public detach (employee: Employee) {
        const index = this.employees.findIndex(employee_in => employee_in.getLastname() === employee.getLastname() && employee_in.getFirstname() === employee.getFirstname());
        this.employees.splice(index, 1);
    }
    public notify (): void {   
        for (const employee of this.employees) {
            console.log(`Subject : Notifying observer ${employee.getFirstname()} ${employee.getLastname()} ...`);
            employee.update();
        }
    }

}
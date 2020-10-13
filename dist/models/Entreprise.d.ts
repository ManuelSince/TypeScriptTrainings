import { IObservable } from '../interfaces/IObserverPattern';
import { Employee } from './Employee';
export declare class Entreprise implements IObservable {
    private name;
    private employees;
    private earnings;
    constructor(name: string, employees: Employee[], earnings: number);
    getName(): string;
    getEmployees(): Employee[];
    getEarnings(): number;
    setName(name: string): void;
    setEmployees(employees: Employee[]): void;
    setEarnings(earnings: number): void;
    greet(): void;
    addEmployee(employee: Employee): void;
    removingEmployee(employee: Employee): void;
    attach(employee: Employee): void;
    detach(employee: Employee): void;
    notify(): void;
}

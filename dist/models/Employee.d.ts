import { IObserver } from '../interfaces/IObserverPattern';
import { Entreprise } from './Entreprise';
export declare class Person {
    protected firstname: string;
    protected lastname: string;
    constructor(firstname: string, lastname: string);
    getFirstname(): string;
    getLastname(): string;
    setFirstname(firstname: string): void;
    setLastname(lastname: string): void;
    greet(): void;
}
export declare class Employee extends Person implements IObserver {
    private entreprise;
    private job;
    private wage;
    constructor(entreprise: Entreprise, firstname: string, lastname: string, job: string, wage: number);
    getJob(): string;
    getWage(): number;
    getEntreprise(): Entreprise;
    setFirstname(firstname: string): void;
    setLastname(lastname: string): void;
    greet(): void;
    update(): void;
}

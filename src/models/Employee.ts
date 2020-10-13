import { IObserver } from '../interfaces/IObserverPattern'
import { Entreprise } from './Entreprise'
export class Person {
    protected firstname: string;
    protected lastname: string;
    constructor(firstname: string, lastname: string ) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    getFirstname (): string { return this.firstname };
    getLastname (): string { return this.lastname};
    setFirstname (firstname: string): void { this.firstname = firstname };
    setLastname (lastname: string): void { this.lastname = lastname};
    greet () { console.log(`hello i am ${this.firstname} ${this.lastname}`)}
}
export class Employee extends Person implements IObserver{
    private entreprise: Entreprise
    private job: string;
    private wage: number;
    constructor(entreprise: Entreprise, firstname: string, lastname: string, job: string, wage: number ) {
        super(firstname, lastname);
        this.entreprise = entreprise;
        this.job = job;
        this.wage = wage;
    }
    getJob (): string { return this.job };
    getWage (): number { return this.wage };
    getEntreprise (): Entreprise { return this.entreprise };
    setFirstname (firstname: string): void { this.firstname = firstname };
    setLastname (lastname: string): void { this.lastname = lastname};
    greet () { super.greet(); console.log(`i work as ${this.job} with a wage of ${this.wage}`)}
    update () { console.log(`company employees are growing ... ${this.entreprise.getEmployees().length}`) }
}
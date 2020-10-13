import { Validator } from '../Tools/tools'
const validator = new Validator();

interface Repr{
    describe(): string;
}
export class Person {
    protected surname: string;
    protected firstname: string;
    protected age: number | null;

    constructor(surname: string, firstname: string, age: number){
        this.surname = surname;
        this.firstname = firstname;
        this.age = this.setAge(age)
    };
    setFirstname = (firstname: string) => {
        if(validator.checkName(firstname))
            this.firstname = firstname;
        else
            throw validator.errorHandling("incorrect firstname characters");
    }
    setLastname = (lastname: string) => {
        if(validator.checkName(lastname))
            this.surname = lastname;
        else
            throw validator.errorHandling("incorrect lastname characters");
    }
    setAge = (age: number) => {
        if(validator.checkAge(age))
            return age;
        else
            throw validator.errorHandling("the age must be over 18 motherfucker")
    }
    
    // repr(): String {
    //     return `hi i am ${this.firstname} ${this.surname} and my age is ${this.age}`
    // };
};
export class Worker extends Person implements Repr{
    protected company : string
    protected department: string;
    protected jobname: string;
    protected salary: number;
    constructor(surname: string, firstname: string, age: number, company: string, department: string, jobname: string, salary: number){
        super(surname, firstname, age)
        this.company = company;
        this.department = department;
        this.jobname = jobname;
        this.salary = salary;
    };
    describe(): string {
        return `        firstname : ${this.firstname} \n 
        lastname : ${this.surname} \n 
        age: ${this.age} \n
        company: ${this.company} \n
        department: ${this.department} \n
        jobname: ${this.jobname} \n
        salary : ${this.salary}`;
    };


    setCompany = (company: string) => this.company = company;
    setDepartment = (department: string) => this.department = department;
    setJobname = (jobname: string) => this.jobname = jobname;
    setSalary = (salary: number) => this.salary = salary;

    setField: any = {
        firstname: this.setFirstname,
        lastname: this.setLastname,
        age: this.setAge,
        company: this.setCompany,
        department: this.setDepartment,
        jobname: this.setJobname,
        salary: this.setSalary
    };
    
    updateFields(payload:object): void {
    // method to update any fields by passing an payload object
    // it uses an object containing setters methods names as value, and field name as key
        Object.entries(payload).forEach(
            ([key, value]) => { 
                this.setField[key](value);
            }
        )
    }
        
    
};
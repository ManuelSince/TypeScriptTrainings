interface Repr {
    describe(): string;
}
export declare class Person {
    protected surname: string;
    protected firstname: string;
    protected age: number | null;
    constructor(surname: string, firstname: string, age: number);
    setFirstname: (firstname: string) => void;
    setLastname: (lastname: string) => void;
    setAge: (age: number) => number;
}
export declare class Worker extends Person implements Repr {
    protected company: string;
    protected department: string;
    protected jobname: string;
    protected salary: number;
    constructor(surname: string, firstname: string, age: number, company: string, department: string, jobname: string, salary: number);
    describe(): string;
    setCompany: (company: string) => string;
    setDepartment: (department: string) => string;
    setJobname: (jobname: string) => string;
    setSalary: (salary: number) => number;
    setField: any;
    updateFields(payload: object): void;
}
export {};

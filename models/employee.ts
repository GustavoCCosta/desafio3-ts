import IUser from "./iuser";
import { JobTitle } from "./jobtitle";
import { Person } from "./person";

export class Employee extends Person implements IUser {
    private _salary: number;
    private _jobs: JobTitle[];

    constructor(name: String, cpf: String, phone: String, salary: number, jobs: JobTitle[]) {
        super(name, cpf, phone);
        this._salary = salary;
        this._jobs = jobs;
    }

    /**
     * Implements IUser auth
     * 
     * @returns True
     */
    public authenticate(): Boolean {
        return new Boolean(true);
    }

    // Getters
    public get salary(): number{
        return this._salary;
    }
    public get jobs(): JobTitle[]{
        return this._jobs;
    }

    // Setters
    public set salary(s:number){
        this._salary = s;
    }

    public addJob(job: JobTitle){
        this._jobs.push(job);
    }
}
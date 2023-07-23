import { Employee } from "./employee";

export class JobTitle{
    private _name: String;
    private _employees: Employee[];

    constructor(name: String){
        this._name = name;
        this._employees = [];
    }

    // Getters
    public get name(): String{
        return this._name;
    }
    public get employees(): Employee[]{
        return this._employees;
    }

    //Setters
    public set name(name: String){
        this._name = name;
    }

    public addEmployee(employee: Employee){
        this._employees.push(employee);
    }
}
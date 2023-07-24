import IUser from "./iuser";
import { JobTitle } from "./jobtitle";
import { Person } from "./person";

export class Employee extends Person implements IUser {
    private _salary: number;
    private _jobtitles: JobTitle[];

    constructor(name: String, cpf: String, phone: String, salary: number, _jobtitles: JobTitle[]) {
        super(name, cpf, phone);
        this._salary = salary;
        this._jobtitles = _jobtitles;
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
    public get jobtitles(): String{
        return this._jobtitles.toString();
    }

    // Setters
    public set salary(s:number){
        this._salary = s;
    }

    public addJob(job: JobTitle){
        this._jobtitles.push(job);
    }

    public toString(): String{
        var complete:String="Funcionário: \n"+
                            "Nome: "+this.name+"\n"+
                            "CPF: "+this.cpf+"\n"+
                            "Telefone: "+this.phone+"\n"+
                            "Salario: "+this._salary+"\n"+
                            "Cargos: "+this._jobtitles.toString()+"\n";
        return complete;
    }
}